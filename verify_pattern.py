#!/usr/bin/env python3.13
"""
Verify that pattern.json exactly matches the PDF vector data.

Method (vector-based, no rendering):
  For every cell (row, col) in the JSON grid, compute the cell's centre point
  in PDF coordinate space and check which colored fill path (if any) the PDF
  places there.  Compare that authoritative PDF color against the JSON value
  and report every mismatch.

This is more reliable than pixel-sampling because it operates on the same
vector data the extractor used, just with independent lookup logic.

Output:
  - Console report with mismatch count and first N details
  - verification_diff.png  — PDF page rendered at 150 DPI with mismatch
                             cells highlighted in red and correct cells in green
  - verification_report.json — full mismatch list
"""

import fitz
import json
from collections import defaultdict
from PIL import Image, ImageDraw
import os

PDF_PATH  = "/Users/mehamehta/code/secret knitting project/Secret knitting project.pdf"
JSON_PATH = "/Users/mehamehta/code/secret knitting project/pattern.json"
DIFF_PNG  = "/Users/mehamehta/code/secret knitting project/verification_diff.png"
REPORT_JSON = "/Users/mehamehta/code/secret knitting project/verification_report.json"

RENDER_DPI = 150   # DPI for the diff overlay image


# ── Color classification (must match extract_pattern.py) ────────────────────

def classify_fill(r, g, b):
    """Return 0 (skip), 1 (light gray), or 2 (dark gray)."""
    brightness = (r + g + b) / 3.0
    if brightness > 0.85:              return 0   # white background
    if r < 0.15 and g < 0.15 and b < 0.15: return 0   # black grid lines
    if r > 0.85 and g < 0.15 and b < 0.15: return 0   # red section markers
    return 1 if brightness > 0.4 else 2


# ── Build a spatial lookup: for each PDF y-row bucket, list its colored rects ─

def build_band_index(drawings, grid_y0, cell_h, n_rows):
    """
    Returns a list of length n_rows where each entry is a list of
    (x0, x1, color_val) tuples for bands that fall in that grid row.
    """
    index = [[] for _ in range(n_rows)]

    for d in drawings:
        fill = d.get("fill")
        if fill is None:
            continue
        val = classify_fill(fill[0], fill[1], fill[2])
        if val == 0:
            continue

        rect = d["rect"]
        # Which grid rows does this band cover?
        row0 = round((rect.y0 - grid_y0) / cell_h)
        row1 = round((rect.y1 - grid_y0) / cell_h)
        for r in range(max(0, row0), min(n_rows, row1)):
            index[r].append((rect.x0, rect.x1, val))

    return index


def pdf_color_at(col, row, band_index, grid_x0, cell_w):
    """Look up the PDF's color for cell (row, col) using pre-built index.

    Iterate in reverse so the last band in the PDF stream wins — this matches
    the painter's algorithm (later paths are drawn on top of earlier ones) and
    mirrors the extraction logic which uses last-write-wins.
    """
    cx = grid_x0 + (col + 0.5) * cell_w   # centre x of this cell in PDF pts
    for x0, x1, val in reversed(band_index[row]):
        if x0 <= cx <= x1:
            return val
    return 0   # no band covers this cell → white/background


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    # Load JSON
    with open(JSON_PATH) as f:
        data = json.load(f)

    grid_json = data["grid"]
    n_rows    = data["rows"]
    n_cols    = data["cols"]
    gp        = data["grid_params"]
    grid_x0   = gp["grid_x0"]
    grid_y0   = gp["grid_y0"]
    cell_w    = gp["cell_w"]
    cell_h    = gp["cell_h"]

    print(f"JSON grid:   {n_cols} cols × {n_rows} rows")
    print(f"Cell size:   {cell_w:.4f} × {cell_h:.4f} pt")
    print(f"Grid origin: ({grid_x0:.3f}, {grid_y0:.3f}) pt")

    # Load PDF page
    doc      = fitz.open(PDF_PATH)
    page     = doc[data["source_page"]]
    drawings = page.get_drawings()
    print(f"PDF page {data['source_page']}: {len(drawings)} total paths\n")

    # Build spatial index
    band_index = build_band_index(drawings, grid_y0, cell_h, n_rows)

    # --- Verify every cell -------------------------------------------------
    mismatches = []
    color_confusion = defaultdict(int)   # (json_val, pdf_val) → count

    for row in range(n_rows):
        for col in range(n_cols):
            json_val = grid_json[row][col]
            pdf_val  = pdf_color_at(col, row, band_index, grid_x0, cell_w)

            if json_val != pdf_val:
                mismatches.append({
                    "row": row + 1,   # 1-indexed for human readability
                    "col": col + 1,
                    "json": json_val,
                    "pdf":  pdf_val,
                })
                color_confusion[(json_val, pdf_val)] += 1

    total   = n_rows * n_cols
    n_wrong = len(mismatches)
    pct     = 100 * n_wrong / total

    print(f"{'='*50}")
    print(f"Total cells:  {total:,}")
    print(f"Correct:      {total - n_wrong:,}  ({100 - pct:.2f}%)")
    print(f"Mismatches:   {n_wrong:,}  ({pct:.2f}%)")

    if color_confusion:
        print("\nMismatch breakdown (JSON→PDF):")
        color_names = {0: "white", 1: "lt-gray", 2: "dk-gray"}
        for (j, p), cnt in sorted(color_confusion.items(), key=lambda x: -x[1]):
            print(f"  JSON={color_names[j]} → PDF={color_names[p]}: {cnt} cells")

    if mismatches:
        print(f"\nFirst 30 mismatches:")
        for m in mismatches[:30]:
            print(f"  row {m['row']:3d}  col {m['col']:3d}  "
                  f"JSON={m['json']}  PDF={m['pdf']}")

    # --- Save full mismatch report -----------------------------------------
    report = {
        "total_cells":   total,
        "correct_cells": total - n_wrong,
        "mismatch_count": n_wrong,
        "accuracy_pct":  round(100 - pct, 4),
        "mismatches":    mismatches,
    }
    with open(REPORT_JSON, "w") as f:
        json.dump(report, f, indent=2)
    print(f"\nFull report saved → {REPORT_JSON}")

    # --- Render diff image -------------------------------------------------
    print(f"Rendering diff image at {RENDER_DPI} DPI …")
    scale = RENDER_DPI / 72.0
    mat   = fitz.Matrix(scale, scale)
    pix   = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
    img   = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    draw  = ImageDraw.Draw(img, "RGBA")

    # Draw a semi-transparent green tint over ALL cells first (correct = green)
    # Then overwrite mismatched cells with red.
    cell_w_px = cell_w * scale
    cell_h_px = cell_h * scale

    mismatch_set = {(m["row"] - 1, m["col"] - 1) for m in mismatches}

    for row in range(n_rows):
        for col in range(n_cols):
            x0 = (grid_x0 + col * cell_w) * scale
            y0 = (grid_y0 + row * cell_h) * scale
            x1 = x0 + cell_w_px
            y1 = y0 + cell_h_px
            if (row, col) in mismatch_set:
                draw.rectangle([x0, y0, x1, y1], fill=(255, 0, 0, 120))
            # (no green overlay for correct cells — keeps the image readable)

    # Draw red border around mismatch cells
    for m in mismatches:
        row, col = m["row"] - 1, m["col"] - 1
        x0 = (grid_x0 + col * cell_w) * scale
        y0 = (grid_y0 + row * cell_h) * scale
        x1 = x0 + cell_w_px
        y1 = y0 + cell_h_px
        draw.rectangle([x0, y0, x1, y1], outline=(255, 0, 0, 255), width=2)

    img.save(DIFF_PNG)
    sz = os.path.getsize(DIFF_PNG) / 1024
    print(f"Diff image saved → {DIFF_PNG}  ({sz:.0f} KB)")

    if n_wrong == 0:
        print("\n✓ Perfect match — JSON is a pixel-accurate transcription of the PDF.")
    else:
        print(f"\n⚠  {n_wrong} cells differ — see diff image and report for details.")


if __name__ == "__main__":
    main()
