// ─── Bea Blouse pattern document page ───────────────────────────────────────

(function () {

// ── Repeat groups ────────────────────────────────────────────────────────────
// firstStep/lastStep: step indices of the repeating rows
// endStep: the "Work Rounds X and Y a total of N times" paragraph that follows
const REPEAT_GROUPS = {
  rg1: { label: 'Sleeve increase rds', totalCount: 13, firstStep: 85, lastStep: 92, endStep: 93 },
  rg2: { label: 'Raglan increase rds',  totalCount: 10, firstStep: 96, lastStep: 107, endStep: 108 },
};

// Which repeat group each step belongs to (populated below)
const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 120; // indices 0–119

// ── HTML template ─────────────────────────────────────────────────────────────
// Each navigatable step carries data-step="N".
// Row-label siblings carry data-step-label="N" pointing to the first substep of that row.
// Row-table rows with multiple actions use <span class="has-substeps"> wrapping substep spans.
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
      <span class="row-label" data-step-label="10">Row 1 (RS):</span><span class="has-substeps"><span data-step="10">Slip marker</span>, <span data-step="11"><strong>M1L</strong></span>, <span data-step="12">knit across sleeve sts</span>, <span data-step="13"><strong>M1R</strong></span>, <span data-step="14">slip marker</span>, <span data-step="15">k4</span>, <span data-step="16">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="17">Row 2 (WS):</span><span class="has-substeps"><span data-step="17">Purl to beginning of round.</span> <span data-step="18">Slip marker</span>, <span data-step="19">purl across back sts to marker</span>, <span data-step="20">slip marker</span>, <span data-step="21"><strong>M1R</strong></span>, <span data-step="22">purl across sleeve sts</span>, <span data-step="23"><strong>M1L</strong></span>, <span data-step="24">slip marker</span>, <span data-step="25">p4</span>, <span data-step="26">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="27">Row 3 (RS):</span><span class="has-substeps"><span data-step="27">Knit to beginning of round.</span> <span data-step="28">Slip marker</span>, <span data-step="29"><strong>M1L</strong></span>, <span data-step="30">knit across sleeve sts</span>, <span data-step="31"><strong>M1R</strong></span>, <span data-step="32">slip marker</span>, <span data-step="33">knit to 4 sts after last RS turn</span>, <span data-step="34">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="35">Row 4 (WS):</span><span class="has-substeps"><span data-step="35">Purl to beginning of round.</span> <span data-step="36">Slip marker</span>, <span data-step="37">purl across back sts to marker</span>, <span data-step="38">slip marker</span>, <span data-step="39"><strong>M1R</strong></span>, <span data-step="40">purl across sleeve sts</span>, <span data-step="41"><strong>M1L</strong></span>, <span data-step="42">slip marker</span>, <span data-step="43">purl to 4 sts after last WS turn</span>, <span data-step="44">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="45">Row 5 (RS):</span><span class="has-substeps"><span data-step="45">Knit to beginning of round.</span> <span data-step="46">Slip marker</span>, <span data-step="47"><strong>M1L</strong></span>, <span data-step="48">knit across sleeve sts</span>, <span data-step="49"><strong>M1R</strong></span>, <span data-step="50">slip marker</span>, <span data-step="51">knit to 4 sts after last RS turn</span>, <span data-step="52">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="53">Row 6 (WS):</span><span class="has-substeps"><span data-step="53">Purl to beginning of round.</span> <span data-step="54">Slip marker</span>, <span data-step="55">purl across back sts to marker</span>, <span data-step="56">slip marker</span>, <span data-step="57"><strong>M1R</strong></span>, <span data-step="58">purl across sleeve sts</span>, <span data-step="59"><strong>M1L</strong></span>, <span data-step="60">slip marker</span>, <span data-step="61">purl to 4 sts after last WS turn</span>, <span data-step="62">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="63">Row 7 (RS):</span><span class="has-substeps"><span data-step="63">Knit to beginning of round.</span> <span data-step="64">Slip marker</span>, <span data-step="65"><strong>M1L</strong></span>, <span data-step="66">knit across sleeve sts</span>, <span data-step="67"><strong>M1R</strong></span>, <span data-step="68">slip marker</span>, <span data-step="69">knit to 4 sts after last RS turn</span>, <span data-step="70">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="71">Row 8 (WS):</span><span class="has-substeps"><span data-step="71">Purl to beginning of round.</span> <span data-step="72">Slip marker</span>, <span data-step="73">purl across back sts to marker</span>, <span data-step="74">slip marker</span>, <span data-step="75"><strong>M1R</strong></span>, <span data-step="76">purl across sleeve sts</span>, <span data-step="77"><strong>M1L</strong></span>, <span data-step="78">slip marker</span>, <span data-step="79">purl to 4 sts after last WS turn</span>, <span data-step="80">turn. (2 sts have been increased)</span></span>
      <span class="row-label" data-step-label="81">Row 9 (RS):</span><span data-step="81">Knit to beginning of round.</span>
    </div>
    <p data-step="82">There are now a total of 142 (142) 144 (148) 152 (156) 156 (160) 164 (168) sts on the needle and the neckline shaping has been completed.</p>
    <p data-step="83">Work the rest of the yoke in the round with increases. Change to a longer 4 mm [US6] / 60, 80 or 100 cm [24, 32 or 40 inches] circular needle when necessary to accommodate the increasing number of sts.</p>
    <p data-step="84">First work sleeve increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="85">Round 1:</span><span class="has-substeps"><span data-step="85">* Slip marker</span>, <span data-step="86"><strong>M1L</strong></span>, <span data-step="87">knit across sleeve sts</span>, <span data-step="88"><strong>M1R</strong></span>, <span data-step="89">slip marker</span>, <span data-step="90">knit to marker *</span>, <span data-step="91">work from * to * twice total. (4 sts have been increased)</span></span>
      <span class="row-label" data-step-label="92">Round 2:</span><span data-step="92">Knit to end of round.</span>
    </div>
    <p data-step="93">Work Rounds 1 and 2 a total of 13 (11) 10 (9) 9 (6) 3 (2) 1 (0) times. There are now a total of 194 (186) 184 (184) 188 (180) 168 (168) 168 (168) sts on the needle.</p>
    <p data-step="94" class="dist">Distribution of stitches:<br>
    38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (right sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (front), 38 (34) 32 (30) 30 (24) 18 (16) 14 (12) sts (left sleeve), 59 (59) 60 (62) 64 (66) 66 (68) 70 (72) sts (back).</p>
    <p data-step="95">Now work raglan increases on every other round as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="96">Round 1:</span><span class="has-substeps"><span data-step="96">* Slip marker</span>, <span data-step="97"><strong>M1L</strong></span>, <span data-step="98">knit across sleeve sts</span>, <span data-step="99"><strong>M1R</strong></span>, <span data-step="100">slip marker</span>, <span data-step="101">k2</span>, <span data-step="102"><strong>M1L</strong></span>, <span data-step="103">knit to 2 sts before marker</span>, <span data-step="104"><strong>M1R</strong></span>, <span data-step="105">k2 *</span>, <span data-step="106">work from * to * twice total. (8 sts have been increased)</span></span>
      <span class="row-label" data-step-label="107">Round 2:</span><span data-step="107">Knit to end of round.</span>
    </div>
    <p data-step="108">Work Rounds 1 and 2 a total of 10 (12) 14 (15) 16 (20) 24 (28) 32 (35) times. There are now a total of 274 (282) 296 (304) 316 (340) 360 (392) 424 (448) sts on the needle.</p>
    <p data-step="109" class="dist">Distribution of stitches:<br>
    58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (right sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts (left sleeve), 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>

    <h2>Body</h2>
    <p data-step="110">Starting at the beginning of the round, divide the sts for sleeves and body while at the same time casting on new sts at the underarms as follows:</p>
    <p data-step="111">Place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (right sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (front), place the next 58 (58) 60 (60) 62 (64) 66 (72) 78 (82) sts on a stitch holder (left sleeve), cast on 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts in extension of the sts on the needle using the backward loop method, knit 79 (83) 88 (92) 96 (106) 114 (124) 134 (142) sts (back).</p>
    <p data-step="112">There are now a total of 164 (174) 184 (196) 206 (226) 248 (268) 290 (310) sts on the needle for the body. Join in the round. The beginning of the round is now in the middle of the new sts cast on at the right underarm.</p>
    <p data-step="113">Work in the round in stockinette stitch until the tee measures 46 (49) 51 (53) 56 (57) 58 (59) 62 (63) cm [18 (19&frac14;) 20 (20&frac34;) 22 (22&frac12;) 22&frac34; (23&frac14;) 24&frac12; (24&frac34;) inches] mid back measured from the cast-on edge.</p>
    <p data-step="114">Bind off all sts knit-wise.</p>

    <h2>Sleeves</h2>
    <p data-step="115">The sleeves are worked in the round in stockinette stitch on 4 mm [US6] double-pointed needles or with the <em>Magic Loop</em> technique using a 4 mm [US6] / 80 cm [32 inches] circular needle.</p>
    <p data-step="116">Pick up and knit 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) sts along the 3 (4) 4 (6) 7 (7) 10 (10) 11 (13) underarm sts that you cast on for the body. There are now a total of 61 (62) 64 (66) 69 (71) 76 (82) 89 (95) sts on the needle. Join in the round and place a marker for the beginning of the round in the middle of the underarm sts.</p>
    <p data-step="117">Work in the round in stockinette stitch until the sleeve measures 45 cm [17&frac34; inches], <strong>while at the same time</strong> working decreases approx. every 22 (22) 15 (22) 11 (9) 6 (5) 3 (3) cm a total of 1 (1) 2 (2) 3 (4) 6 (8) 12 (14) times by working a decrease round as follows: K1, k2tog, knit to the last 3 sts of the round, skp, k1. There are now a total of 59 (60) 60 (62) 63 (63) 64 (66) 65 (67) sts on the needle.</p>

    <div id="bb-sleeve-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Sleeve Tracker</span>
        <button class="btn small" id="bb-slt-reset">Reset all</button>
      </div>
      <div class="slt-two-col">
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 1</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rows</span>
            <div class="slt-ctrls">
              <button class="btn small" id="bb-slt-r0-minus">&#x2212;</button>
              <span class="slt-num" id="bb-slt-r0">0</span>
              <button class="btn small" id="bb-slt-r0-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="bb-slt-d0-log">Log decrease at row <span id="bb-slt-d0-row">0</span></button>
          <div class="slt-log" id="bb-slt-d0-log-list"></div>
        </div>
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 2</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rows</span>
            <div class="slt-ctrls">
              <button class="btn small" id="bb-slt-r1-minus">&#x2212;</button>
              <span class="slt-num" id="bb-slt-r1">0</span>
              <button class="btn small" id="bb-slt-r1-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="bb-slt-d1-log">Log decrease at row <span id="bb-slt-d1-row">0</span></button>
          <div class="slt-log" id="bb-slt-d1-log-list"></div>
        </div>
      </div>
    </div>

    <p data-step="118">Bind off all sts knit-wise.</p>
    <p data-step="119">Weave in all ends.</p>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Bea Blouse</h1>
  <div class="divider"></div>
  <button class="btn" id="bb-step-toggle">Step Mode</button>
  <button class="btn small" id="bb-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="bb-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="bb-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="bb-rep-divider" style="display:none"></div>
  <span id="bb-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#d7a13f;white-space:nowrap;"></span>
  <span id="bb-rep-label" style="display:none;font-size:0.75rem;color:#b0897a;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'bea-blouse-step';
const SLT_KEY     = 'bea-blouse-sleeves';

let stepMode    = false;
let currentStep = 0;
let repCounters = { rg1: 1, rg2: 1 };
let doc         = null;  // #bb-pattern-doc element
let _shellAPI   = null;
let bbPipEl     = null;  // fallback overlay element
let bbPipWindow = null;  // documentPictureInPicture window
let pipSleeveMode = false;

let slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];

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

// ── Sleeve tracker ───────────────────────────────────────────────────────────
function loadSltState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SLT_KEY) || 'null');
    if (saved && Array.isArray(saved) && saved.length === 2) slt = saved;
  } catch (_) {}
}

function saveSltState() {
  localStorage.setItem(SLT_KEY, JSON.stringify(slt));
}

function renderSlt(i) {
  const s      = slt[i];
  const rowsEl = document.getElementById(`bb-slt-r${i}`);
  const rowLbl = document.getElementById(`bb-slt-d${i}-row`);
  const logEl  = document.getElementById(`bb-slt-d${i}-log-list`);

  if (rowsEl) rowsEl.textContent = s.rows;
  if (rowLbl) rowLbl.textContent = s.rows;

  if (logEl) {
    if (s.decs.length === 0) {
      logEl.innerHTML = '<div class="slt-empty">No decreases logged.</div>';
    } else {
      let cadenceHtml = '';
      if (s.decs.length >= 2) {
        const ivs = [];
        for (let j = 1; j < s.decs.length; j++) ivs.push(s.decs[j] - s.decs[j - 1]);
        const uniform = ivs.every(v => v === ivs[0]);
        cadenceHtml = `<div class="slt-cadence">${uniform ? `Every ${ivs[0]} rows` : 'Intervals: ' + ivs.join(', ') + ' rows'}</div>`;
      }
      const entries = s.decs.map((row, j) => {
        const iv = j > 0 ? `<span class="slt-iv">+${row - s.decs[j - 1]}</span>` : '';
        return `<div class="slt-entry"><span class="slt-n">#${j + 1}</span><span class="slt-r">Row ${row}</span>${iv}<span class="slt-del" data-i="${i}" data-j="${j}">×</span></div>`;
      }).join('');
      logEl.innerHTML = cadenceHtml + entries;
      logEl.querySelectorAll('.slt-del').forEach(btn => {
        btn.addEventListener('click', e => {
          slt[parseInt(e.target.dataset.i)].decs.splice(parseInt(e.target.dataset.j), 1);
          saveSltState();
          renderSlt(i);
        });
      });
    }
  }

  if (pipSleeveMode) updatePip();
}

function updateSleeveTracker() { renderSlt(0); renderSlt(1); }

// ── Helpers ───────────────────────────────────────────────────────────────────
// For substeps inside a .has-substeps inside a .row-table, find the preceding .row-label sibling.
function findRowLabel(stepEl) {
  let label = doc.querySelector(`[data-step-label="${currentStep}"]`);
  if (!label) {
    const hsParent = stepEl.closest('.has-substeps');
    if (hsParent && hsParent.parentElement?.classList.contains('row-table')) {
      let prev = hsParent.previousElementSibling;
      while (prev) {
        if (prev.classList.contains('row-label')) { label = prev; break; }
        prev = prev.previousElementSibling;
      }
    }
  }
  return label;
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
    // Find associated row-label (direct match or sibling lookup for row-table substeps)
    const label = findRowLabel(stepEl);
    if (label) label.classList.add('step-active');
    // Mark parent .has-substeps so siblings can be styled
    const hsParent = stepEl.closest('.has-substeps');
    if (hsParent) hsParent.classList.add('substep-active');
    // Scroll into view
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  updateToolbarBadges();
  saveState();
  updatePip();
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

// ── Mini View (PiP) ───────────────────────────────────────────────────────────
function pipStepHTML() {
  if (!doc) return '';
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (!stepEl) return '';

  // Find label: direct data-step-label match, or sibling row-label for row-table substeps
  let labelEl = doc.querySelector(`[data-step-label="${currentStep}"]`);
  if (!labelEl) {
    const hsParent = stepEl.closest('.has-substeps');
    if (hsParent && hsParent.parentElement?.classList.contains('row-table')) {
      let prev = hsParent.previousElementSibling;
      while (prev) {
        if (prev.classList.contains('row-label')) { labelEl = prev; break; }
        prev = prev.previousElementSibling;
      }
    }
  }

  const label = labelEl ? labelEl.textContent.trim() : '';
  const content = stepEl.innerHTML;
  // For sub-steps without a row-label, prepend the intro line as small context
  const hsParent = stepEl.closest('.has-substeps');
  let intro = '';
  if (hsParent && !label) {
    const introEl = hsParent.querySelector('.substep-intro');
    if (introEl) intro = `<div class="bb-pip-intro">${introEl.textContent.trim()}</div>`;
  }
  const main = label ? `<span class="pip-lbl">${label}</span>\u00a0${content}` : content;
  return intro + main;
}

function pipSltHTML() {
  return slt.map((s, i) => {
    let cadence = 'No decreases yet';
    if (s.decs.length === 1) {
      cadence = `1 dec · at row ${s.decs[0]}`;
    } else if (s.decs.length >= 2) {
      const ivs = [];
      for (let j = 1; j < s.decs.length; j++) ivs.push(s.decs[j] - s.decs[j - 1]);
      const uniform = ivs.every(v => v === ivs[0]);
      cadence = `${s.decs.length} dec · ${uniform ? `every ${ivs[0]} rows` : 'intervals: ' + ivs.join(', ') + 'r'}`;
    }
    return `<div class="${i === 1 ? 'pip-slt-s2' : ''}">
      <div class="pip-slt-main">
        <span class="pip-slt-label">S${i + 1}</span>
        <span class="pip-slt-rows">${s.rows} rows</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="minus" data-pip-slt-sleeve="${i}">−</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="plus"  data-pip-slt-sleeve="${i}">+</span>
        <span class="pip-slt-log"  data-pip-slt-action="dec"   data-pip-slt-sleeve="${i}">Log dec at ${s.rows}</span>
      </div>
      <div class="pip-slt-cadence">${cadence}</div>
    </div>`;
  }).join('');
}

function updatePip() {
  const fbVis = bbPipEl  && bbPipEl.classList.contains('visible');
  const winOk = bbPipWindow && !bbPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const contentEl = d.getElementById('bb-pip-content');
    const repEl     = d.getElementById('bb-pip-rep');
    const badgeEl   = d.getElementById('bb-pip-badge');
    const sltEl     = d.getElementById('bb-pip-slt');
    const titleEl   = d.getElementById('bb-pip-title');
    const sltBtnEl  = d.getElementById('bb-pip-slt-btn');
    const prevEl    = d.getElementById('bb-pip-prev');
    const nextEl    = d.getElementById('bb-pip-next');

    if (pipSleeveMode) {
      if (contentEl) contentEl.style.display = 'none';
      if (repEl)     repEl.style.display     = 'none';
      if (sltEl)   { sltEl.style.display = 'block'; sltEl.innerHTML = pipSltHTML(); }
      if (titleEl)   titleEl.textContent     = 'Bea Blouse — Sleeves';
      if (sltBtnEl)  sltBtnEl.textContent    = 'Steps';
      if (prevEl)    prevEl.style.visibility = 'hidden';
      if (nextEl)    nextEl.style.visibility = 'hidden';
      if (badgeEl)   badgeEl.textContent     = '';
    } else {
      const html    = pipStepHTML();
      const gid     = stepMode ? STEP_GROUP[currentStep] : null;
      const repText = gid
        ? `Rep ${repCounters[gid]} / ${REPEAT_GROUPS[gid].totalCount} · ${REPEAT_GROUPS[gid].label}`
        : '';
      const badge   = stepMode ? `Step ${currentStep + 1} / ${TOTAL_STEPS}` : '—';

      if (contentEl) { contentEl.style.display = ''; contentEl.innerHTML = html; }
      if (repEl)   { repEl.textContent = repText; repEl.style.display = repText ? '' : 'none'; }
      if (sltEl)     sltEl.style.display     = 'none';
      if (titleEl)   titleEl.textContent     = 'Bea Blouse — Mini View';
      if (sltBtnEl)  sltBtnEl.textContent    = 'Sleeves';
      if (prevEl)    prevEl.style.visibility = '';
      if (nextEl)    nextEl.style.visibility = '';
      if (badgeEl)   badgeEl.textContent     = badge;
    }
  }

  if (fbVis) apply(document);
  if (winOk) apply(bbPipWindow.document);
}

function closePip() {
  if (bbPipEl) bbPipEl.classList.remove('visible');
  if (bbPipWindow && !bbPipWindow.closed) bbPipWindow.close();
  bbPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #bb-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #bb-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #bb-pip-close:hover { color: #f2e7d5; }
  #bb-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; }
  .bb-pip-intro { font-size: 0.75rem; color: #6d4a45; margin-bottom: 6px; }
  #bb-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.75rem; color: #d7a13f; flex-shrink: 0; }
  #bb-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .bb-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; font-size: 0.9rem; }
  .bb-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #bb-pip-badge { font-size: 0.72rem; color: #b0897a; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8dcc4; }
  #bb-pip-slt-btn { cursor: pointer; padding: 0 5px; color: #6d4a45; font-size: 0.7rem; border-radius: 3px; }
  #bb-pip-slt-btn:hover { color: #b98f7d; background: #562634; }
  #bb-pip-slt { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
  .pip-slt-s2 { border-top: 1px solid #562f3a; margin-top: 5px; padding-top: 5px; }
  .pip-slt-main { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
  .pip-slt-label { font-size: 0.72rem; font-weight: 700; color: #e8dcc4; min-width: 1.6em; }
  .pip-slt-rows { font-size: 0.88rem; font-weight: 700; color: #d7a13f; min-width: 4.5em; }
  .pip-slt-ctrl { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px; color: #b98f7d; font-weight: 700; user-select: none; }
  .pip-slt-ctrl:hover { background: #63303d; color: #f2e7d5; }
  .pip-slt-log { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px; color: #b98f7d; font-size: 0.7rem; flex: 1; text-align: center; user-select: none; }
  .pip-slt-log:hover { background: #63303d; color: #9ab8a0; }
  .pip-slt-cadence { font-size: 0.68rem; color: #6d4a45; padding-left: 1.6em; }
`;

const PIP_BODY_HTML = `
  <div id="bb-pip-hdr">
    <span id="bb-pip-title">Bea Blouse \u2014 Mini View</span>
    <div style="display:flex;align-items:center;gap:8px">
      <span id="bb-pip-slt-btn">Sleeves</span>
      <span id="bb-pip-close">\u2715</span>
    </div>
  </div>
  <div id="bb-pip-content"></div>
  <div id="bb-pip-rep"></div>
  <div id="bb-pip-slt"></div>
  <div id="bb-pip-ftr">
    <span class="bb-pip-nav" id="bb-pip-prev">&#x25C4;</span>
    <span id="bb-pip-badge"></span>
    <span class="bb-pip-nav" id="bb-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('bb-pip-close').addEventListener('click', closePip);
  d.getElementById('bb-pip-prev').addEventListener('click',  retreat);
  d.getElementById('bb-pip-next').addEventListener('click',  advance);
  d.getElementById('bb-pip-slt-btn').addEventListener('click', () => {
    pipSleeveMode = !pipSleeveMode;
    updatePip();
  });
  d.getElementById('bb-pip-slt').addEventListener('click', e => {
    const btn = e.target.closest('[data-pip-slt-action]');
    if (!btn) return;
    const action = btn.dataset.pipSltAction;
    const si = parseInt(btn.dataset.pipSltSleeve);
    if (action === 'minus') { if (slt[si].rows > 0) slt[si].rows--; }
    if (action === 'plus')  { slt[si].rows++; }
    if (action === 'dec')   { slt[si].decs.push(slt[si].rows); }
    saveSltState();
    renderSlt(si);
    updatePip();
  });
  d.addEventListener('keydown', e => {
    if (pipSleeveMode) {
      if (e.key === 'Escape') { closePip(); }
      return;
    }
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') { closePip(); }
  });
}

async function togglePip() {
  const fbVis = bbPipEl  && bbPipEl.classList.contains('visible');
  const winOk = bbPipWindow && !bbPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  // Auto-enter step mode
  if (!stepMode) { stepMode = true; updateDisplay(); }

  // Try native document PiP
  if (window.documentPictureInPicture) {
    try {
      bbPipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 170 });
      const d = bbPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      bbPipWindow.addEventListener('pagehide', () => {
        bbPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  // Fallback draggable overlay
  if (!bbPipEl) {
    bbPipEl = document.createElement('div');
    bbPipEl.id = 'bb-pip-overlay';
    bbPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(bbPipEl);

    // Dragging via header
    document.getElementById('bb-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'bb-pip-close') return;
      const rect = bbPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        bbPipEl.style.right = 'auto'; bbPipEl.style.bottom = 'auto';
        bbPipEl.style.left = (ev.clientX - dx) + 'px';
        bbPipEl.style.top  = (ev.clientY - dy) + 'px';
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
      e.preventDefault();
    });

    wirePipDoc(document);
  }

  bbPipEl.classList.add('visible');
  if (_shellAPI) _shellAPI.setPipActive(true);
  updatePip();
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

    loadSltState();
    updateSleeveTracker();
    [0, 1].forEach(i => {
      document.getElementById(`bb-slt-r${i}-plus`).addEventListener('click', () => {
        slt[i].rows++; saveSltState(); renderSlt(i);
      });
      document.getElementById(`bb-slt-r${i}-minus`).addEventListener('click', () => {
        if (slt[i].rows > 0) { slt[i].rows--; saveSltState(); renderSlt(i); }
      });
      document.getElementById(`bb-slt-d${i}-log`).addEventListener('click', () => {
        slt[i].decs.push(slt[i].rows); saveSltState(); renderSlt(i);
      });
    });
    document.getElementById('bb-slt-reset').addEventListener('click', () => {
      if (confirm('Reset sleeve tracker for both sleeves?')) {
        slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];
        saveSltState(); updateSleeveTracker();
      }
    });
  },

  unmount() {
    clearTimeout(histTimerBB);
    lastHistKeyBB = null;
    closePip();
    if (bbPipEl) { bbPipEl.remove(); bbPipEl = null; }
    _shellAPI = null;
    doc = null;
  },

  handleKey(e) { handleKey(e); },
  togglePip() { togglePip(); },

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
