#!/usr/bin/env python3.13
"""
Extract knitting grid from Girl with a Pearl Earring PDF.

The PDF uses vector band paths: horizontal runs of same-color cells are
merged into a single filled rectangle. We unpack those into a full 2D grid.

Color scheme:
  0 = white (page background / no fill)
  1 = light gray (RGB 0.6, 0.6, 0.6)
  2 = dark gray  (RGB 0.2, 0.2, 0.2)
"""

import fitz
import json
from collections import defaultdict

PDF_PATH = "/Users/mehamehta/code/secret knitting project/Secret knitting project.pdf"
OUTPUT_PATH = "/Users/mehamehta/code/secret knitting project/pattern.json"

# Page index in PyMuPDF (0-based). PDF viewer "page 5" = index 4.
CANDIDATE_PAGES = [4]


def classify_fill(r, g, b):
    """Return 0 (white/skip), 1 (light gray), or 2 (dark gray)."""
    brightness = (r + g + b) / 3.0
    if brightness > 0.85:
        return 0   # white — background, skip
    if r < 0.15 and g < 0.15 and b < 0.15:
        return 0   # black — grid lines / text, skip
    if r > 0.85 and g < 0.15 and b < 0.15:
        return 0   # red — section markers, skip
    if brightness > 0.4:
        return 1   # light gray yarn
    return 2       # dark gray yarn


def probe_page(page):
    """Collect colored band rects and infer grid parameters."""
    drawings = page.get_drawings()
    bands = []  # list of (x0, y0, x1, y1, color_value)

    for d in drawings:
        fill = d.get("fill")
        if fill is None:
            continue
        val = classify_fill(fill[0], fill[1], fill[2])
        if val == 0:
            continue
        r = d["rect"]
        bands.append((r.x0, r.y0, r.x1, r.y1, val))

    if not bands:
        return None, None, None

    # Collect all unique left-edges and top-edges of band rects.
    # The smallest gap between consecutive edges gives the cell size.
    x_edges = sorted(set(round(b[0], 3) for b in bands) |
                     set(round(b[2], 3) for b in bands))
    y_edges = sorted(set(round(b[1], 3) for b in bands) |
                     set(round(b[3], 3) for b in bands))

    def min_gap(edges):
        # Round to 1 decimal place to eliminate floating-point noise.
        # Use 2.5 pt threshold: the true cell size is ~2.625 pt and any
        # spurious sub-cell gaps (e.g. 2.3 pt from overlapping band edges)
        # are smaller than that, so raising the floor past them is safe.
        rounded = sorted(set(round(e, 1) for e in edges))
        gaps = [rounded[i+1] - rounded[i] for i in range(len(rounded)-1)
                if rounded[i+1] - rounded[i] > 2.5]
        return min(gaps) if gaps else None

    cell_w = min_gap(x_edges)
    cell_h = min_gap(y_edges)

    if cell_w is None or cell_h is None:
        return None, None, None

    # min_gap rounds edges to 1 decimal place, which causes the true cell size
    # (2.625 pt = 21/8 pt) to come out as 2.6 — an underestimate that makes
    # n_rows and n_cols 2 too large.  Snap to the nearest 1/8 pt to correct this.
    cell_w = round(cell_w * 8) / 8
    cell_h = round(cell_h * 8) / 8

    # Grid origin = minimum x/y of any band rect
    grid_x0 = min(b[0] for b in bands)
    grid_y0 = min(b[1] for b in bands)
    grid_x1 = max(b[2] for b in bands)
    grid_y1 = max(b[3] for b in bands)

    n_cols = round((grid_x1 - grid_x0) / cell_w)
    n_rows = round((grid_y1 - grid_y0) / cell_h)

    params = {
        "grid_x0": grid_x0, "grid_y0": grid_y0,
        "cell_w": cell_w, "cell_h": cell_h,
        "n_cols": n_cols, "n_rows": n_rows,
    }
    return bands, params, len(drawings)


def extract_grid(bands, params):
    """Unpack band rects into a full 2D grid."""
    n_rows = params["n_rows"]
    n_cols = params["n_cols"]
    grid_x0 = params["grid_x0"]
    grid_y0 = params["grid_y0"]
    cell_w = params["cell_w"]
    cell_h = params["cell_h"]

    # Default = 0 (white/background)
    grid = [[0] * n_cols for _ in range(n_rows)]

    for x0, y0, x1, y1, val in bands:
        col0 = round((x0 - grid_x0) / cell_w)
        col1 = round((x1 - grid_x0) / cell_w)
        row0 = round((y0 - grid_y0) / cell_h)
        row1 = round((y1 - grid_y0) / cell_h)

        for r in range(max(0, row0), min(n_rows, row1)):
            for c in range(max(0, col0), min(n_cols, col1)):
                grid[r][c] = val

    return grid


def main():
    doc = fitz.open(PDF_PATH)
    print(f"Opened: {PDF_PATH}")
    print(f"Pages: {len(doc)}\n")

    best_bands = None
    best_params = None

    for page_idx in CANDIDATE_PAGES:
        page = doc[page_idx]
        print(f"--- Page {page_idx} ({page.rect.width:.0f}x{page.rect.height:.0f} pt) ---")
        bands, params, total_paths = probe_page(page)

        if params is None:
            print("  No colored bands found, skipping.\n")
            continue

        print(f"  Total paths:  {total_paths}")
        print(f"  Colored bands: {len(bands)}")
        print(f"  Grid size:    {params['n_cols']} cols x {params['n_rows']} rows")
        print(f"  Cell size:    {params['cell_w']:.3f} x {params['cell_h']:.3f} pt")
        print(f"  Grid origin:  ({params['grid_x0']:.2f}, {params['grid_y0']:.2f})")

        # Prefer the page with more columns (more complete)
        if best_params is None or params["n_cols"] > best_params["n_cols"]:
            best_bands = bands
            best_params = params
            best_params["source_page"] = page_idx
        print()

    if best_params is None:
        print("ERROR: Could not find grid on any candidate page.")
        return

    print(f"Using page {best_params['source_page']} for extraction.")
    print(f"Extracting {best_params['n_cols']} x {best_params['n_rows']} grid...")

    grid = extract_grid(best_bands, best_params)

    # Count color usage
    counts = defaultdict(int)
    for row in grid:
        for val in row:
            counts[val] += 1
    total = best_params["n_cols"] * best_params["n_rows"]
    print(f"\nColor distribution (total {total} cells):")
    print(f"  0 (white/background): {counts[0]:>7}  ({100*counts[0]/total:.1f}%)")
    print(f"  1 (light gray):       {counts[1]:>7}  ({100*counts[1]/total:.1f}%)")
    print(f"  2 (dark gray):        {counts[2]:>7}  ({100*counts[2]/total:.1f}%)")

    output = {
        "title": "Girl with a Pearl Earring — Illusion Knitting",
        "source_page": best_params["source_page"],
        "rows": best_params["n_rows"],
        "cols": best_params["n_cols"],
        "colors": {
            "0": "white",
            "1": "light_gray",
            "2": "dark_gray"
        },
        # PDF label numbering:
        #   stitch numbers decrease left→right  (col 0 = stitch n_cols, col n_cols-1 = stitch 1)
        #   ridge  numbers decrease top→bottom  (row 0 = ridge n_rows, row n_rows-1 = ridge 1)
        "stitch_at_col0": best_params["n_cols"],   # highest stitch number (left edge)
        "ridge_at_row0":  best_params["n_rows"],   # highest ridge number  (top edge)
        # Grid coordinate metadata — used by verify_pattern.py
        "grid_params": {
            "grid_x0": best_params["grid_x0"],
            "grid_y0": best_params["grid_y0"],
            "cell_w":  best_params["cell_w"],
            "cell_h":  best_params["cell_h"],
        },
        "grid": grid,
    }

    with open(OUTPUT_PATH, "w") as f:
        json.dump(output, f, separators=(",", ":"))

    import os
    size_kb = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"\nSaved to {OUTPUT_PATH} ({size_kb:.1f} KB)")


if __name__ == "__main__":
    main()
