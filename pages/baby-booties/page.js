// ─── Baby Booties pattern document page ──────────────────────────────────────

(function () {

// ── Size data ─────────────────────────────────────────────────────────────────
const SIZE_NAMES = ['3 mos', '6 mos', '12 mos'];
const SZ_DATA = [
  { castOn: 27, r2k: 12, r2sts: 31, r4k: 14, r4sts: 35, r6k: 16, r6sts: 39,
    toeR1k: 15, toeR9sts: 21, ankleIns: '2',     ankleCm: '5',  ankleRows: 12 },
  { castOn: 35, r2k: 16, r2sts: 39, r4k: 18, r4sts: 43, r6k: 20, r6sts: 47,
    toeR1k: 19, toeR9sts: 29, ankleIns: '2½', ankleCm: '6',  ankleRows: 16 },
  { castOn: 43, r2k: 20, r2sts: 47, r4k: 22, r4sts: 51, r6k: 24, r6sts: 55,
    toeR1k: 23, toeR9sts: 37, ankleIns: '2½', ankleCm: '6',  ankleRows: 16 },
];

// ── Repeat groups ─────────────────────────────────────────────────────────────
// rg2.totalCount is size-dependent and updated when size changes
const REPEAT_GROUPS = {
  rg1: { label: 'Sole garter rows',  totalCount: 11, firstStep:  7, lastStep:  7, endStep:  8 },
  rg2: { label: 'Ankle garter rows', totalCount: 12, firstStep: 19, lastStep: 19, endStep: 20 },
};

const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 23; // indices 0–22

// ── Content HTML (regenerated on size change) ─────────────────────────────────
function getContentHTML(sz) {
  const d = SZ_DATA[sz];
  return `
<div class="page-doc-wrap">
  <div id="bb-pattern-doc">

    <h2>Sole</h2>
    <p data-step="0">Cast on <strong>${d.castOn} sts</strong>.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="1">Row 1 (WS):</span><span data-step="1">Knit.</span>
      <span class="row-label" data-step-label="2">Row 2 (RS):</span><span data-step="2">K1. yfwd. K${d.r2k}. yfwd. K1. yfwd. K${d.r2k}. yfwd. K1. — <strong>${d.r2sts} sts</strong>.</span>
      <span class="row-label" data-step-label="3">Row 3 (WS):</span><span data-step="3">Knit.</span>
      <span class="row-label" data-step-label="4">Row 4 (RS):</span><span data-step="4">K1. yfwd. K${d.r4k}. yfwd. K1. yfwd. K${d.r4k}. yfwd. K1. — <strong>${d.r4sts} sts</strong>.</span>
      <span class="row-label" data-step-label="5">Row 5 (WS):</span><span data-step="5">Knit.</span>
      <span class="row-label" data-step-label="6">Row 6 (RS):</span><span data-step="6">K1. yfwd. K${d.r6k}. yfwd. K1. yfwd. K${d.r6k}. yfwd. K1. — <strong>${d.r6sts} sts</strong>.</span>
    </div>

    <h2>Garter Stitch (11 rows)</h2>
    <p data-step="7">Knit.</p>
    <p data-step="8">Sole garter complete — <strong>${d.r6sts} sts</strong> remain on needle.</p>

    <h2>Shape Toe</h2>
    <div class="row-table">
      <span class="row-label" data-step-label="9">Row 1 (RS):</span><span data-step="9">K${d.toeR1k}. K2tog. K5. Sl1. K1. psso. Sl1. yf. Turn.</span>
      <span class="row-label" data-step-label="10">Row 2 (WS):</span><span data-step="10">K2tog. K5. Sl1. K1. psso. yf. Sl1P. Turn.</span>
      <span class="row-label" data-step-label="11">Row 3 (RS):</span><span data-step="11">K2tog. K5. Sl1. K1. psso. Sl1. yf. Turn.</span>
      <span class="row-label" data-step-label="12">Row 4 (WS):</span><span data-step="12">K2tog. K5. Sl1. K1. psso. yf. Sl1P. Turn.</span>
      <span class="row-label" data-step-label="13">Row 5 (RS):</span><span data-step="13">K2tog. K5. Sl1. K1. psso. Sl1. Turn.</span>
      <span class="row-label" data-step-label="14">Row 6 (WS):</span><span data-step="14">P2togtbl. P5. P2tog. Sl1P. Turn.</span>
      <span class="row-label" data-step-label="15">Row 7 (RS):</span><span data-step="15">K2tog. K5. Sl1. K1. psso. Sl1. Turn.</span>
      <span class="row-label" data-step-label="16">Row 8 (WS):</span><span data-step="16">P2togtbl. P5. P2tog. Sl1P. Turn.</span>
      <span class="row-label" data-step-label="17">Row 9 (RS):</span><span data-step="17">K2tog. K5. Sl1. K1. psso. Knit to end of row. — <strong>${d.toeR9sts} sts</strong>.</span>
      <span class="row-label" data-step-label="18">Row 10 (WS):</span><span data-step="18">Purl.</span>
    </div>

    <h2>Ankle</h2>
    <p data-step="19">Knit. <em>(Continue in garter stitch until work measures ${d.ankleIns}&nbsp;ins [${d.ankleCm}&nbsp;cm] from toe shaping, ending with a WS row.)</em></p>
    <p data-step="20">Ankle garter complete — <strong>${d.ankleIns}&nbsp;ins / ${d.ankleCm}&nbsp;cm</strong>. Cast off all sts.</p>

    <h2>Finishing</h2>
    <p data-step="21">Sew sole seam.</p>
    <p data-step="22">Sew back seam, reversing seam 1½&nbsp;ins [4&nbsp;cm] from cast off edge for turn back.</p>

  </div>
</div>`;
}

// ── Toolbar HTML ──────────────────────────────────────────────────────────────
const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Baby Booties</h1>
  <div class="divider"></div>
  <select id="bbt-size-select" class="btn" style="cursor:pointer;">
    <option value="0">3 mos</option>
    <option value="1">6 mos</option>
    <option value="2">12 mos</option>
  </select>
  <div class="divider"></div>
  <button class="btn" id="bbt-bootie-toggle">Bootie 1</button>
  <div class="divider"></div>
  <button class="btn" id="bbt-step-toggle">Step Mode</button>
  <button class="btn small" id="bbt-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="bbt-step-badge" style="font-size:0.82rem;color:#888;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="bbt-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="bbt-rep-divider" style="display:none"></div>
  <span id="bbt-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#f5c842;white-space:nowrap;"></span>
  <span id="bbt-rep-label" style="display:none;font-size:0.75rem;color:#888;white-space:nowrap;"></span>
</div>`;

// ── Storage keys ──────────────────────────────────────────────────────────────
const STORAGE_KEY = b => `baby-booties-step-b${b + 1}`;
const HIST_KEY    = b => `baby-booties-hist-b${b + 1}`;
const SIZE_KEY    = 'baby-booties-size';
const BOOTIE_KEY  = 'baby-booties-current';

// ── State ─────────────────────────────────────────────────────────────────────
let selectedSize  = 0;
let currentBootie = 0;
let stepMode      = false;
let currentStep   = 0;
let repCounters   = { rg1: 1, rg2: 1 };
let doc           = null;
let _shellAPI     = null;
let _bodyMount    = null;
let bbtPipEl      = null;
let bbtPipWindow  = null;

function loadGlobalState() {
  try {
    const sz = parseInt(localStorage.getItem(SIZE_KEY)   || '0');
    selectedSize  = [0, 1, 2].includes(sz) ? sz : 0;
    const bt = parseInt(localStorage.getItem(BOOTIE_KEY) || '0');
    currentBootie = [0, 1].includes(bt) ? bt : 0;
  } catch (_) {}
}

function saveGlobalState() {
  localStorage.setItem(SIZE_KEY,   String(selectedSize));
  localStorage.setItem(BOOTIE_KEY, String(currentBootie));
}

function loadBootieState(b) {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY(b)) || 'null');
    if (saved) {
      stepMode    = saved.stepMode ?? false;
      currentStep = saved.step     ?? 0;
      repCounters = saved.reps     ?? { rg1: 1, rg2: 1 };
    } else {
      stepMode    = false;
      currentStep = 0;
      repCounters = { rg1: 1, rg2: 1 };
    }
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY(currentBootie), JSON.stringify({
    stepMode,
    step: currentStep,
    reps: repCounters,
  }));
}

// ── History ───────────────────────────────────────────────────────────────────
const MAX_HIST  = 500;
let histTimer   = null;
let lastHistKey = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HIST_KEY(currentBootie))) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(HIST_KEY(currentBootie), JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimer);
  histTimer = setTimeout(() => {
    const key = `${currentBootie}:${currentStep}`;
    if (key === lastHistKey) return;
    lastHistKey = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, bootie: currentBootie, ts: Date.now() });
    if (hist.length > MAX_HIST) hist.length = MAX_HIST;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
}

// ── Helpers ───────────────────────────────────────────────────────────────────
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

  doc.classList.toggle('step-mode', stepMode);

  const toggleBtn = document.getElementById('bbt-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));
  doc.querySelectorAll('.substep-active').forEach(el => el.classList.remove('substep-active'));

  if (!stepMode) { updateToolbarBadges(); return; }

  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (stepEl) {
    stepEl.classList.add('step-active');
    const label = findRowLabel(stepEl);
    if (label) label.classList.add('step-active');
    const hsParent = stepEl.closest('.has-substeps');
    if (hsParent) hsParent.classList.add('substep-active');
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  updateToolbarBadges();
  saveState();
  updatePip();
}

function updateToolbarBadges() {
  const badge = document.getElementById('bbt-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const repBadge   = document.getElementById('bbt-rep-badge');
  const repLabel   = document.getElementById('bbt-rep-label');
  const repDivider = document.getElementById('bbt-rep-divider');
  const gid        = stepMode ? STEP_GROUP[currentStep] : null;
  const showRep    = !!gid;

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
        currentStep = g.firstStep - 1;
      }
    } else {
      currentStep--;
    }
  } else {
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

// ── Bootie switch ─────────────────────────────────────────────────────────────
function switchBootie() {
  saveState();
  currentBootie = 1 - currentBootie;
  saveGlobalState();
  loadBootieState(currentBootie);
  REPEAT_GROUPS.rg2.totalCount = SZ_DATA[selectedSize].ankleRows;
  if (repCounters.rg2 > REPEAT_GROUPS.rg2.totalCount) repCounters.rg2 = REPEAT_GROUPS.rg2.totalCount;
  lastHistKey = null;
  const btn = document.getElementById('bbt-bootie-toggle');
  if (btn) btn.textContent = `Bootie ${currentBootie + 1}`;
  if (_shellAPI) {
    _shellAPI.updateHistBadge();
    _shellAPI.refreshHistory();
    _shellAPI.setStatus(`Baby Booties — Bootie ${currentBootie + 1} · ${SIZE_NAMES[selectedSize]}`);
  }
  updateDisplay();
  if (stepMode) scheduleHistEntry();
}

// ── Size change ───────────────────────────────────────────────────────────────
function changeSize(newSize) {
  selectedSize = newSize;
  REPEAT_GROUPS.rg2.totalCount = SZ_DATA[newSize].ankleRows;
  if (repCounters.rg2 > REPEAT_GROUPS.rg2.totalCount) repCounters.rg2 = REPEAT_GROUPS.rg2.totalCount;
  localStorage.setItem(SIZE_KEY, String(selectedSize));
  if (_bodyMount) {
    _bodyMount.innerHTML = getContentHTML(selectedSize);
    doc = document.getElementById('bb-pattern-doc');
  }
  updateDisplay();
  saveState();
  if (_shellAPI) _shellAPI.setStatus(`Baby Booties — Bootie ${currentBootie + 1} · ${SIZE_NAMES[selectedSize]}`);
}

// ── PiP ───────────────────────────────────────────────────────────────────────
function pipStepHTML() {
  if (!doc || !stepMode) return '—';
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (!stepEl) return '—';
  const labelEl = doc.querySelector(`[data-step-label="${currentStep}"]`);
  const label   = labelEl ? labelEl.textContent.trim() : '';
  const content = stepEl.innerHTML;
  return label ? `<span class="pip-lbl">${label}</span> ${content}` : content;
}

function updatePip() {
  const fbVis = bbtPipEl  && bbtPipEl.classList.contains('visible');
  const winOk = bbtPipWindow && !bbtPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const contentEl = d.getElementById('bb-pip-content');
    const repEl     = d.getElementById('bb-pip-rep');
    const badgeEl   = d.getElementById('bb-pip-badge');
    const gid       = stepMode ? STEP_GROUP[currentStep] : null;
    const repText   = gid
      ? `Rep ${repCounters[gid]} / ${REPEAT_GROUPS[gid].totalCount} · ${REPEAT_GROUPS[gid].label}`
      : '';
    const badge = stepMode ? `Step ${currentStep + 1} / ${TOTAL_STEPS}` : '—';

    if (contentEl) contentEl.innerHTML = pipStepHTML();
    if (repEl)   { repEl.textContent = repText; repEl.style.display = repText ? '' : 'none'; }
    if (badgeEl)   badgeEl.textContent = badge;
  }

  if (fbVis) apply(document);
  if (winOk) apply(bbtPipWindow.document);
}

function closePip() {
  if (bbtPipEl) bbtPipEl.classList.remove('visible');
  if (bbtPipWindow && !bbtPipWindow.closed) bbtPipWindow.close();
  bbtPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1b2a; color: #ccc; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #bb-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #1a2332; border-bottom: 1px solid #2a3444;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #aaa; }
  #bb-pip-close { cursor: pointer; padding: 0 4px; color: #667; }
  #bb-pip-close:hover { color: #eee; }
  #bb-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; }
  #bb-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.75rem; color: #f5c842; flex-shrink: 0; }
  #bb-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #1a2332; border-top: 1px solid #2a3444; flex-shrink: 0; }
  .bb-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #2a3444; color: #aaa; }
  .bb-pip-nav:hover { background: #3a4a5a; color: #eee; }
  #bb-pip-badge { font-size: 0.72rem; color: #888; }
  strong { color: #e8d8b0; }
  em { color: #a0c0d8; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8d8b0; }
`;

const PIP_BODY_HTML = `
  <div id="bb-pip-hdr">
    <span>Baby Booties — Mini View</span>
    <span id="bb-pip-close">✕</span>
  </div>
  <div id="bb-pip-content"></div>
  <div id="bb-pip-rep"></div>
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
  d.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') { closePip(); }
  });
}

async function togglePip() {
  const fbVis = bbtPipEl  && bbtPipEl.classList.contains('visible');
  const winOk = bbtPipWindow && !bbtPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      bbtPipWindow = await documentPictureInPicture.requestWindow({ width: 480, height: 160 });
      const d = bbtPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      bbtPipWindow.addEventListener('pagehide', () => {
        bbtPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  // Fallback draggable overlay
  if (!bbtPipEl) {
    bbtPipEl = document.createElement('div');
    bbtPipEl.id = 'bbt-pip-overlay';
    bbtPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(bbtPipEl);

    document.getElementById('bb-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'bb-pip-close') return;
      const rect = bbtPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        bbtPipEl.style.right = 'auto'; bbtPipEl.style.bottom = 'auto';
        bbtPipEl.style.left = (ev.clientX - dx) + 'px';
        bbtPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  bbtPipEl.classList.add('visible');
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
PageRegistry.register("baby-booties", {
  id:     "baby-booties",
  title:  "Baby Booties",
  status: "Pattern reference",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI  = shellAPI;
    _bodyMount = bodyMount;

    loadGlobalState();
    REPEAT_GROUPS.rg2.totalCount = SZ_DATA[selectedSize].ankleRows;
    loadBootieState(currentBootie);

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = getContentHTML(selectedSize);
    doc = document.getElementById('bb-pattern-doc');

    document.getElementById('bbt-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('bbt-step-next').addEventListener('click',   advance);
    document.getElementById('bbt-step-prev').addEventListener('click',   retreat);

    const sizeSelect = document.getElementById('bbt-size-select');
    sizeSelect.value = String(selectedSize);
    sizeSelect.addEventListener('change', e => changeSize(parseInt(e.target.value)));

    const bootieBtn = document.getElementById('bbt-bootie-toggle');
    bootieBtn.textContent = `Bootie ${currentBootie + 1}`;
    bootieBtn.addEventListener('click', switchBootie);

    shellAPI.setStatus(`Baby Booties — Bootie ${currentBootie + 1} · ${SIZE_NAMES[selectedSize]}`);
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();
  },

  unmount() {
    clearTimeout(histTimer);
    lastHistKey = null;
    closePip();
    if (bbtPipEl) { bbtPipEl.remove(); bbtPipEl = null; }
    _shellAPI  = null;
    _bodyMount = null;
    doc        = null;
  },

  handleKey(e) { handleKey(e); },
  togglePip()  { togglePip(); },

  getHistEntries() { return loadHistory(); },
  deleteHistEntry(idx) {
    const h = loadHistory(); h.splice(idx, 1); saveHistory(h);
    lastHistKey = null;
  },
  clearHistory()   { saveHistory([]); lastHistKey = null; },
  navigateToHistEntry(entry) {
    if (entry.bootie !== undefined && entry.bootie !== currentBootie) {
      saveState();
      currentBootie = entry.bootie;
      saveGlobalState();
      loadBootieState(currentBootie);
      const btn = document.getElementById('bbt-bootie-toggle');
      if (btn) btn.textContent = `Bootie ${currentBootie + 1}`;
    }
    currentStep = entry.step;
    stepMode    = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    const bootieLabel = entry.bootie !== undefined ? `B${entry.bootie + 1} · ` : '';
    return {
      label:      `${bootieLabel}Step ${entry.step + 1}`,
      labelClass: '',
      isCurrent:  stepMode && entry.step === currentStep && entry.bootie === currentBootie,
    };
  },
  getCurrentPos() {
    return {
      label: stepMode ? `Step ${currentStep + 1}` : 'No active step',
      sub:   `Baby Booties · Bootie ${currentBootie + 1}`,
    };
  },
});

})();
