#!/usr/bin/env python3.13
"""
Diagnose grid-line paths in the PDF and check whether any of them
could be contaminating the stitch-color extraction.

Reports:
  1. All non-stitch fill paths (red, black, white) — their colors, sizes,
     and what grid positions they correspond to.
  2. Whether any cell CENTRE falls inside a gridline rectangle (contamination
     check).  If yes, those cells are mis-transcribed; if no, we're clean.
  3. A visual overlay saved to gridline_overlay.png showing gridlines in
     colour and cell centres as dots.
"""

import fitz
import json
from collections import defaultdict
from PIL import Image, ImageDraw

PDF_PATH  = "/Users/mehamehta/code/secret knitting project/Secret knitting project.pdf"
JSON_PATH = "/Users/mehamehta/code/secret knitting project/pattern.json"
OUT_PNG   = "/Users/mehamehta/code/secret knitting project/gridline_overlay.png"

RENDER_DPI = 150


def color_label(r, g, b):
    brightness = (r + g + b) / 3.0
    if brightness > 0.85:              return "white"
    if r < 0.15 and g < 0.15 and b < 0.15: return "black"
    if r > 0.85 and g < 0.15 and b < 0.15: return "red"
    if brightness > 0.4:               return "lt-gray (stitch)"
    return "dk-gray (stitch)"


def is_stitch_color(label):
    return "stitch" in label


def main():
    with open(JSON_PATH) as f:
        data = json.load(f)

    gp      = data["grid_params"]
    grid_x0 = gp["grid_x0"]
    grid_y0 = gp["grid_y0"]
    cell_w  = gp["cell_w"]
    cell_h  = gp["cell_h"]
    n_rows  = data["rows"]
    n_cols  = data["cols"]

    doc      = fitz.open(PDF_PATH)
    page     = doc[data["source_page"]]
    drawings = page.get_drawings()

    # ── 1. Catalogue every fill path ─────────────────────────────────────────
    gridline_fills = []   # non-stitch fills
    stitch_fills   = []

    for d in drawings:
        fill = d.get("fill")
        if fill is None:
            continue
        label = color_label(fill[0], fill[1], fill[2])
        entry = {
            "label": label,
            "fill":  tuple(round(x, 3) for x in fill[:3]),
            "rect":  d["rect"],
            "w_pt":  round(d["rect"].width,  3),
            "h_pt":  round(d["rect"].height, 3),
        }
        if is_stitch_color(label):
            stitch_fills.append(entry)
        else:
            gridline_fills.append(entry)

    print(f"Total fill paths:  {len(stitch_fills) + len(gridline_fills)}")
    print(f"  Stitch fills:    {len(stitch_fills)}")
    print(f"  Gridline fills:  {len(gridline_fills)}\n")

    # Summarise gridline fills by color and typical dimensions
    by_color = defaultdict(list)
    for e in gridline_fills:
        by_color[e["label"]].append(e)

    for label, entries in sorted(by_color.items()):
        widths  = sorted(set(e["w_pt"] for e in entries))
        heights = sorted(set(e["h_pt"] for e in entries))
        # Show bounding box range
        x0s = [e["rect"].x0 for e in entries]
        y0s = [e["rect"].y0 for e in entries]
        x1s = [e["rect"].x1 for e in entries]
        y1s = [e["rect"].y1 for e in entries]
        print(f"  {label.upper()}  ({len(entries)} paths)")
        print(f"    width  range: {min(widths):.3f} – {max(widths):.3f} pt")
        print(f"    height range: {min(heights):.3f} – {max(heights):.3f} pt")
        print(f"    x range: {min(x0s):.2f} – {max(x1s):.2f} pt")
        print(f"    y range: {min(y0s):.2f} – {max(y1s):.2f} pt")

        # Show a few examples
        print(f"    First 5 examples:")
        for e in entries[:5]:
            r = e["rect"]
            print(f"      x=[{r.x0:.2f},{r.x1:.2f}]  y=[{r.y0:.2f},{r.y1:.2f}]  "
                  f"w={e['w_pt']:.3f}  h={e['h_pt']:.3f}")
        print()

    # ── 2. Contamination check ────────────────────────────────────────────────
    # Compute the grid bounding box so we can ignore page-background fills.
    grid_x1 = grid_x0 + n_cols * cell_w
    grid_y1 = grid_y0 + n_rows * cell_h
    grid_area = fitz.Rect(grid_x0, grid_y0, grid_x1, grid_y1)

    # Only consider fills that actually intersect the grid (skip full-page bg)
    gl_rects = [
        e["rect"] for e in gridline_fills
        if e["label"] != "white" and e["rect"].intersects(grid_area)
    ]
    print(f"Non-white gridline fills overlapping the grid area: {len(gl_rects)}")
    for e in gridline_fills:
        if e["label"] != "white" and e["rect"].intersects(grid_area):
            r = e["rect"]
            # Which grid rows/cols does this rect span?
            col0 = (r.x0 - grid_x0) / cell_w
            col1 = (r.x1 - grid_x0) / cell_w
            row0 = (r.y0 - grid_y0) / cell_h
            row1 = (r.y1 - grid_y0) / cell_h
            print(f"  {e['label']:6s}  x=[{r.x0:.2f},{r.x1:.2f}]  "
                  f"y=[{r.y0:.2f},{r.y1:.2f}]  "
                  f"→ cols {col0:.2f}–{col1:.2f}  rows {row0:.2f}–{row1:.2f}")
    print()

    contaminated = []
    for row in range(n_rows):
        for col in range(n_cols):
            cx = grid_x0 + (col + 0.5) * cell_w
            cy = grid_y0 + (row + 0.5) * cell_h
            pt = fitz.Point(cx, cy)
            for rect in gl_rects:
                if rect.contains(pt):
                    contaminated.append((row + 1, col + 1, rect))
                    break   # only need first hit per cell

    print(f"{'='*55}")
    if contaminated:
        print(f"⚠  {len(contaminated)} cell centres fall inside a gridline path!")
        for row, col, rect in contaminated[:20]:
            print(f"   row {row:3d}  col {col:3d}  inside rect "
                  f"x=[{rect.x0:.2f},{rect.x1:.2f}] y=[{rect.y0:.2f},{rect.y1:.2f}]")
    else:
        print("✓  No cell centres are inside any gridline fill path.")
        print("   Gridlines do NOT affect the stitch-colour transcription.")
    print(f"{'='*55}\n")

    # ── 3. Visual overlay ─────────────────────────────────────────────────────
    scale = RENDER_DPI / 72.0
    mat   = fitz.Matrix(scale, scale)
    pix   = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
    img   = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    draw  = ImageDraw.Draw(img, "RGBA")

    # Tint every gridline fill rect
    color_tint = {
        "red":   (255,  60,  60, 160),
        "black": ( 60,  60, 255, 160),   # blue tint so it's visible
        "white": (200, 200,   0, 100),
    }
    for e in gridline_fills:
        r    = e["rect"]
        tint = color_tint.get(e["label"], (200, 0, 200, 120))
        draw.rectangle(
            [r.x0 * scale, r.y0 * scale, r.x1 * scale, r.y1 * scale],
            fill=tint
        )

    # Draw a tiny dot at every cell centre
    dot_r = max(1, cell_w * scale * 0.15)
    for row in range(0, n_rows, 5):   # every 5th row to keep it readable
        for col in range(0, n_cols, 5):
            cx = (grid_x0 + (col + 0.5) * cell_w) * scale
            cy = (grid_y0 + (row + 0.5) * cell_h) * scale
            draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r],
                         fill=(0, 220, 0, 200))

    # Mark contaminated centres in hot pink
    for row, col, _ in contaminated:
        cx = (grid_x0 + (col - 0.5 + 0.5) * cell_w) * scale
        cy = (grid_y0 + (row - 0.5 + 0.5) * cell_h) * scale
        draw.ellipse([cx - dot_r*2, cy - dot_r*2, cx + dot_r*2, cy + dot_r*2],
                     fill=(255, 0, 200, 255))

    img.save(OUT_PNG)
    print(f"Visual overlay saved → {OUT_PNG}")
    print("  Red/blue tinted rects = gridline fill paths")
    print("  Green dots = sampled cell centres (every 5th cell)")
    if contaminated:
        print("  Pink dots = contaminated cell centres")


if __name__ == "__main__":
    main()
