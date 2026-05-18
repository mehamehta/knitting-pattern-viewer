// ─── Bea Blouse pattern document page ───────────────────────────────────────

(function () {

const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="pattern-doc">

    <h2>Yoke</h2>
    <p>Cast on 126 (126) 128 (132) 136 (140) 140 (144) 148 (152) sts <strong>tightly</strong> on a 4 mm [US6] / 40 cm [16 inches] circular needle.</p>
    <p>Join in the round and place a marker for the beginning of the round (between the back and right sleeve).</p>
    <p>Knit across 1 round while at the same time placing markers as follows:<br>
    K4 (right sleeve), place marker, knit 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (front), place marker, k4 (left sleeve), place marker, knit 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (back).</p>
    <p>Now work increases for the sleeves while at the same time working short rows using the <em>German Short Row technique</em> as follows:</p>
    <div class="row-table">
      <span class="row-label">Row 1 (RS):</span><span>Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, k4, turn. (2 sts have been increased)</span>
      <span class="row-label">Row 2 (WS):</span><span>Purl to beginning of round. Slip marker, purl across back sts to marker, slip marker, <strong>M1R</strong>, purl across sleeve sts, <strong>M1L</strong>, slip marker, p4, turn. (2 sts have been increased)</span>
      <span class="row-label">Row 3 (RS):</span><span>Knit to beginning of round. Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, knit to 4 sts after last RS turn, turn. (2 sts have been increased)</span>
      <span class="row-label">Row 4 (WS):</span><span>Purl to beginning of round. Slip marker, purl across back sts to marker, slip marker, <strong>M1R</strong>, purl across sleeve sts, <strong>M1L</strong>, slip marker, purl to 4 sts after last WS turn, turn. (2 sts have been increased)</span>
      <span class="row-label">Row 5 (RS):</span><span>Work as Row 3.</span>
      <span class="row-label">Row 6 (WS):</span><span>Work as Row 4.</span>
      <span class="row-label">Row 7 (RS):</span><span>Work as Row 3.</span>
      <span class="row-label">Row 8 (WS):</span><span>Work as Row 4.</span>
      <span class="row-label">Row 9 (RS):</span><span>Knit to beginning of round.</span>
    </div>
    <p>There are now a total of 142 (142) 144 (148) 152 (156) 156 (160) 164 (168) sts on the needle and the neckline shaping has been completed.</p>
    <p>Work the rest of the yoke in the round with increases. Change to a longer 4 mm [US6] / 60, 80 or 100 cm [24, 32 or 40 inches] circular needle when necessary to accommodate the increasing number of sts.</p>
    <p>First work sleeve increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label">Round 1:</span><span>* Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, knit to marker *, work from * to * twice total. (4 sts have been increased)</span>
      <span class="row-label">Round 2:</span><span>Knit to end of round.</span>
    </div>
    <p>Work Rounds 1 and 2 a total of 13 (11) 10 (9) 9 (6) 3 (2) 1 (0) times. There are now a total of 194 (186) 184 (184) 188 (180) 168 (168) 168 (168) sts on the needle.</p>
    <p class="dist">Distribution of stitches:<br>
    38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (right sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (front), 38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (left sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (back).</p>
    <p>Now work raglan increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label">Round 1:</span><span>* Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, k2, <strong>M1L</strong>, knit to 2 sts before marker, <strong>M1R</strong>, k2 *, work from * to * twice total. (8 sts have been increased)</span>
      <span class="row-label">Round 2:</span><span>Knit to end of round.</span>
    </div>
    <p>Work Rounds 1 and 2 a total of 10 (12) 14 (15) 16 (20) 24 (28) 32 (35) times. There are now a total of 274 (282) 296 (304) 316 (340) 360 (392) 424 (448) sts on the needle.</p>
    <p class="dist">Distribution of stitches:<br>
    58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (right sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (left sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>

    <h2>Body</h2>
    <p>Starting at the beginning of the round, divide the sts for sleeves and body while at the same time casting on new sts at the underarms as follows:</p>
    <p>Place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (right sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (left sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>
    <p>There are now a total of 164 (174) 184 (196) 206 (226) 248 (268) 290 (310) sts on the needle for the body. Join in the round. The beginning of the round is now in the middle of the new sts cast on at the right underarm.</p>
    <p>Work in the round in stockinette stitch until the tee measures 46 (49) 51 (53) 56 (57) 58 (59) 62 (63) cm [18 (19¼) 20 (20¾) 22 (22½) 22¾ (23¼) 24½ (24¾) inches] mid back measured from the cast-on edge.</p>
    <p>Bind off all sts knit-wise.</p>

    <h2>Sleeves</h2>
    <p>The sleeves are worked in the round in stockinette stitch on 4 mm [US6] double-pointed needles or with the <em>Magic Loop</em> technique using a 4 mm [US6] / 80 cm [32 inches] circular needle.</p>
    <p>Pick up and knit 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts along the 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) underarm sts that you cast on for the body. There are now a total of 61 (62) 64 (66) 69 (71) 76 (82) 89 (95) sts on the needle. Join in the round and place a marker for the beginning of the round in the middle of the underarm sts.</p>
    <p>Work in the round in stockinette stitch until the sleeve measures 45 cm [17¾ inches], <strong>while at the same time</strong> working decreases approx. every 22 (22) 15 (22) 11 (9) 6 (5) 3 (3) cm a total of 1 (1) 2 (2) 3 (4) 6 (8) 12 (14) times by working a decrease round as follows: K1, k2tog, knit to the last 3 sts of the round, skp, k1. There are now a total of 59 (60) 60 (62) 63 (63) 64 (66) 65 (67) sts on the needle.</p>
    <p>Bind off all sts knit-wise.</p>
    <p>Weave in all ends.</p>

  </div>
</div>`;

PageRegistry.register("bea-blouse", {
  id:     "bea-blouse",
  title:  "Bea Blouse",
  status: "Pattern reference",

  mount(toolbarMount, bodyMount, shellAPI) {
    toolbarMount.innerHTML = "";  // no secondary toolbar for this page
    bodyMount.innerHTML    = CONTENT_HTML;
    shellAPI.setStatus("Bea Blouse — pattern reference");
    shellAPI.updateHistBadge();
  },

  unmount() {},

  handleKey() {},

  // No history for this page
  getHistEntries()      { return []; },
  deleteHistEntry()     {},
  clearHistory()        {},
  navigateToHistEntry() {},
  formatHistEntry()     { return { label: "", labelClass: "", isCurrent: false }; },
  getCurrentPos()       { return { label: "—", sub: "Pattern reference" }; },
});

})();
