// ─── Bea Blouse pattern document page ───────────────────────────────────────

(function () {

// ── Repeat groups ────────────────────────────────────────────────────────────
// firstStep/lastStep: step indices of the repeating rows
// endStep: the "Work Rounds X and Y a total of N times" paragraph that follows
const REPEAT_GROUPS = {
  rg1: { label: 'Sleeve increase rds', totalCount: 13, firstStep: 22, lastStep: 23, endStep: 24 },
  rg2: { label: 'Raglan increase rds',  totalCount: 10, firstStep: 27, lastStep: 28, endStep: 29 },
};

// Which repeat group each step belongs to (populated below)
const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 41; // indices 0–40

// ── HTML template ─────────────────────────────────────────────────────────────
// Each navigatable step carries data-step="N".
// Row-label siblings carry data-step-label="N" (highlighted together with step N).
// The markers paragraph uses .has-substeps with inline <span data-step> sub-steps.
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="bb-pattern-doc">

    <h2>Yoke</h2>
    <p data-step="0">Cast on 126 (126) 128 (132) 136 (140) 140 (144) 148 (152) sts <strong>tightly</strong> on a 4 mm [US6] / 40 cm [16 inches] circular needle.</p>
    <p data-step="1">Join in the round and place a marker for the beginning of the round (between the back and right sleeve).</p>

    <p class="has-substeps"><span class="substep-intro">Knit across 1 round while at the same time placing markers as follows:<br></span><span data-step="2">K4 (right sleeve)</span>, <span data-step="3">place marker</span>, <span data-step="4">knit 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (front)</span>, <span data-step="5">place marker</span>, <span data-step="6">k4 (left sleeve)</span>, <span data-step="7">place marker</span>, <span data-step="8">knit 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (back)</span>.</p>

    <p data-step="9">Now work increases for the sleeves while at the same time working short rows using the <em>German Short Row technique</em> as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="10">Row 1 (RS):</span><span data-step="10">Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, k4, turn. (2 sts have been increased)</span>
      <span class="row-label" data-step-label="11">Row 2 (WS):</span><span data-step="11">Purl to beginning of round. Slip marker, purl across back sts to marker, slip marker, <strong>M1R</strong>, purl across sleeve sts, <strong>M1L</strong>, slip marker, p4, turn. (2 sts have been increased)</span>
      <span class="row-label" data-step-label="12">Row 3 (RS):</span><span data-step="12">Knit to beginning of round. Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, knit to 4 sts after last RS turn, turn. (2 sts have been increased)</span>
      <span class="row-label" data-step-label="13">Row 4 (WS):</span><span data-step="13">Purl to beginning of round. Slip marker, purl across back sts to marker, slip marker, <strong>M1R</strong>, purl across sleeve sts, <strong>M1L</strong>, slip marker, purl to 4 sts after last WS turn, turn. (2 sts have been increased)</span>
      <span class="row-label" data-step-label="14">Row 5 (RS):</span><span data-step="14">Work as Row 3.</span>
      <span class="row-label" data-step-label="15">Row 6 (WS):</span><span data-step="15">Work as Row 4.</span>
      <span class="row-label" data-step-label="16">Row 7 (RS):</span><span data-step="16">Work as Row 3.</span>
      <span class="row-label" data-step-label="17">Row 8 (WS):</span><span data-step="17">Work as Row 4.</span>
      <span class="row-label" data-step-label="18">Row 9 (RS):</span><span data-step="18">Knit to beginning of round.</span>
    </div>
    <p data-step="19">There are now a total of 142 (142) 144 (148) 152 (156) 156 (160) 164 (168) sts on the needle and the neckline shaping has been completed.</p>
    <p data-step="20">Work the rest of the yoke in the round with increases. Change to a longer 4 mm [US6] / 60, 80 or 100 cm [24, 32 or 40 inches] circular needle when necessary to accommodate the increasing number of sts.</p>
    <p data-step="21">First work sleeve increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="22">Round 1:</span><span data-step="22">* Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, knit to marker *, work from * to * twice total. (4 sts have been increased)</span>
      <span class="row-label" data-step-label="23">Round 2:</span><span data-step="23">Knit to end of round.</span>
    </div>
    <p data-step="24">Work Rounds 1 and 2 a total of 13 (11) 10 (9) 9 (6) 3 (2) 1 (0) times. There are now a total of 194 (186) 184 (184) 188 (180) 168 (168) 168 (168) sts on the needle.</p>
    <p data-step="25" class="dist">Distribution of stitches:<br>
    38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (right sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (front), 38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (left sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (back).</p>
    <p data-step="26">Now work raglan increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="27">Round 1:</span><span data-step="27">* Slip marker, <strong>M1L</strong>, knit across sleeve sts, <strong>M1R</strong>, slip marker, k2, <strong>M1L</strong>, knit to 2 sts before marker, <strong>M1R</strong>, k2 *, work from * to * twice total. (8 sts have been increased)</span>
      <span class="row-label" data-step-label="28">Round 2:</span><span data-step="28">Knit to end of round.</span>
    </div>
    <p data-step="29">Work Rounds 1 and 2 a total of 10 (12) 14 (15) 16 (20) 24 (28) 32 (35) times. There are now a total of 274 (282) 296 (304) 316 (340) 360 (392) 424 (448) sts on the needle.</p>
    <p data-step="30" class="dist">Distribution of stitches:<br>
    58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (right sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (left sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>

    <h2>Body</h2>
    <p data-step="31">Starting at the beginning of the round, divide the sts for sleeves and body while at the same time casting on new sts at the underarms as follows:</p>
    <p data-step="32">Place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (right sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (left sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>
    <p data-step="33">There are now a total of 164 (174) 184 (196) 206 (226) 248 (268) 290 (310) sts on the needle for the body. Join in the round. The beginning of the round is now in the middle of the new sts cast on at the right underarm.</p>
    <p data-step="34">Work in the round in stockinette stitch until the tee measures 46 (49) 51 (53) 56 (57) 58 (59) 62 (63) cm [18 (19&frac14;) 20 (20&frac34;) 22 (22&frac12;) 22&frac34; (23&frac14;) 24&frac12; (24&frac34;) inches] mid back measured from the cast-on edge.</p>
    <p data-step="35">Bind off all sts knit-wise.</p>

    <h2>Sleeves</h2>
    <p data-step="36">The sleeves are worked in the round in stockinette stitch on 4 mm [US6] double-pointed needles or with the <em>Magic Loop</em> technique using a 4 mm [US6] / 80 cm [32 inches] circular needle.</p>
    <p data-step="37">Pick up and knit 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts along the 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) underarm sts that you cast on for the body. There are now a total of 61 (62) 64 (66) 69 (71) 76 (82) 89 (95) sts on the needle. Join in the round and place a marker for the beginning of the round in the middle of the underarm sts.</p>
    <p data-step="38">Work in the round in stockinette stitch until the sleeve measures 45 cm [17&frac34; inches], <strong>while at the same time</strong> working decreases approx. every 22 (22) 15 (22) 11 (9) 6 (5) 3 (3) cm a total of 1 (1) 2 (2) 3 (4) 6 (8) 12 (14) times by working a decrease round as follows: K1, k2tog, knit to the last 3 sts of the round, skp, k1. There are now a total of 59 (60) 60 (62) 63 (63) 64 (66) 65 (67) sts on the needle.</p>
    <p data-step="39">Bind off all sts knit-wise.</p>
    <p data-step="40">Weave in all ends.</p>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Bea Blouse</h1>
  <div class="divider"></div>
  <button class="btn" id="bb-step-toggle">Step Mode</button>
  <button class="btn small" id="bb-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="bb-step-badge" style="font-size:0.82rem;color:#888;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="bb-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="bb-rep-divider" style="display:none"></div>
  <span id="bb-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#f5c842;white-space:nowrap;"></span>
  <span id="bb-rep-label" style="display:none;font-size:0.75rem;color:#888;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'bea-blouse-step';

let stepMode    = false;
let currentStep = 0;
let repCounters = { rg1: 1, rg2: 1 };
let doc         = null;  // #bb-pattern-doc element
let _shellAPI   = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      stepMode    = saved.stepMode    ?? false;
      currentStep = saved.step        ?? 0;
      repCounters = saved.reps        ?? { rg1: 1, rg2: 1 };
    }
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    stepMode,
    step: currentStep,
    reps: repCounters,
  }));
}

// ── History ───────────────────────────────────────────────────────────────────
const LS_HISTORY_BB = 'bea-blouse-history';
const MAX_HIST_BB   = 500;

let histTimerBB   = null;
let lastHistKeyBB = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY_BB)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY_BB, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimerBB);
  histTimerBB = setTimeout(() => {
    const key = String(currentStep);
    if (key === lastHistKeyBB) return;
    lastHistKeyBB = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, ts: Date.now() });
    if (hist.length > MAX_HIST_BB) hist.length = MAX_HIST_BB;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
}

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  // Toggle step-mode class on the doc
  doc.classList.toggle('step-mode', stepMode);

  // Update toggle button appearance
  const toggleBtn = document.getElementById('bb-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  // Clear previous active markers
  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));
  doc.querySelectorAll('.substep-active').forEach(el => el.classList.remove('substep-active'));

  if (!stepMode) {
    updateToolbarBadges();
    return;
  }

  // Mark active step element(s)
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (stepEl) {
    stepEl.classList.add('step-active');
    // Also highlight the sibling row-label if present
    const label = doc.querySelector(`[data-step-label="${currentStep}"]`);
    if (label) label.classList.add('step-active');
    // Mark parent .has-substeps paragraph so siblings can be styled
    const parent = stepEl.closest('.has-substeps');
    if (parent) parent.classList.add('substep-active');
    // Scroll into view
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  updateToolbarBadges();
  saveState();
}

function updateToolbarBadges() {
  const badge = document.getElementById('bb-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const repBadge   = document.getElementById('bb-rep-badge');
  const repLabel   = document.getElementById('bb-rep-label');
  const repDivider = document.getElementById('bb-rep-divider');

  const gid = stepMode ? STEP_GROUP[currentStep] : null;
  const showRep = !!gid;

  if (repBadge)   repBadge.style.display   = showRep ? '' : 'none';
  if (repLabel)   repLabel.style.display   = showRep ? '' : 'none';
  if (repDivider) repDivider.style.display = showRep ? '' : 'none';

  if (showRep && gid) {
    const g = REPEAT_GROUPS[gid];
    if (repBadge) repBadge.textContent = `Rep ${repCounters[gid]} / ${g.totalCount}`;
    if (repLabel) repLabel.textContent = g.label;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function advance() {
  const gid = STEP_GROUP[currentStep];

  if (gid) {
    const g = REPEAT_GROUPS[gid];
    if (currentStep === g.lastStep) {
      if (repCounters[gid] < g.totalCount) {
        repCounters[gid]++;
        currentStep = g.firstStep;
      } else {
        // All reps done — move to end step and reset counter
        repCounters[gid] = 1;
        currentStep = g.endStep;
      }
    } else {
      currentStep++;
    }
  } else if (currentStep < TOTAL_STEPS - 1) {
    currentStep++;
  }

  updateDisplay();
  scheduleHistEntry();
}

function retreat() {
  const gid = STEP_GROUP[currentStep];

  if (gid) {
    const g = REPEAT_GROUPS[gid];
    if (currentStep === g.firstStep) {
      if (repCounters[gid] > 1) {
        repCounters[gid]--;
        currentStep = g.lastStep;
      } else {
        // First step of first rep — go before the group
        currentStep = g.firstStep - 1;
      }
    } else {
      currentStep--;
    }
  } else {
    // Check if we're stepping back into a repeat group's end step
    const prevGid = Object.keys(REPEAT_GROUPS).find(id => REPEAT_GROUPS[id].endStep === currentStep);
    if (prevGid) {
      const g = REPEAT_GROUPS[prevGid];
      repCounters[prevGid] = g.totalCount;
      currentStep = g.lastStep;
    } else if (currentStep > 0) {
      currentStep--;
    }
  }

  updateDisplay();
  scheduleHistEntry();
}

function toggleStepMode() {
  stepMode = !stepMode;
  updateDisplay();
  if (stepMode) scheduleHistEntry();
}

// ── Key handler ───────────────────────────────────────────────────────────────
function handleKey(e) {
  if (!stepMode) {
    if (e.key === ' ') { e.preventDefault(); stepMode = true; updateDisplay(); }
    return;
  }
  if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
  else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
  else if (e.key === 'Escape') { stepMode = false; updateDisplay(); }
}

// ── Page registration ─────────────────────────────────────────────────────────
PageRegistry.register("bea-blouse", {
  id:     "bea-blouse",
  title:  "Bea Blouse",
  status: "Pattern reference",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('bb-pattern-doc');

    document.getElementById('bb-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('bb-step-next').addEventListener('click',   advance);
    document.getElementById('bb-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus("Bea Blouse — pattern reference");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();
  },

  unmount() {
    clearTimeout(histTimerBB);
    lastHistKeyBB = null;
    _shellAPI = null;
    doc = null;
  },

  handleKey(e) { handleKey(e); },

  getHistEntries() { return loadHistory(); },
  deleteHistEntry(idx) {
    const h = loadHistory(); h.splice(idx, 1); saveHistory(h);
    lastHistKeyBB = null;
  },
  clearHistory()   { saveHistory([]); lastHistKeyBB = null; },
  navigateToHistEntry(entry) {
    currentStep = entry.step;
    stepMode    = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    return {
      label:      `Step ${entry.step + 1}`,
      labelClass: "",
      isCurrent:  stepMode && entry.step === currentStep,
    };
  },
  getCurrentPos() {
    return {
      label: stepMode ? `Step ${currentStep + 1}` : "No active step",
      sub:   "Bea Blouse",
    };
  },
});

})();
