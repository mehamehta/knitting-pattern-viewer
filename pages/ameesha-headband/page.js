// ─── Ameesha's Headband — Frida (Atelier Emilie), fingering + lace mohair ─────

(function () {

// ── Pattern constants ─────────────────────────────────────────────────────────
const CAST_ON     = 36;      // Frida, as written
const WIDTH_CM    = 9.5;
const SHORT_BY_CM = 10;      // band is knit this much shorter than the head

const BAND_STEP   = 1;       // the open-ended "knit until length" step
const TOTAL_STEPS = 8;       // indices 0–7

// ── Length tracker ────────────────────────────────────────────────────────────
// Head circumference sets the target; an optional check-in (band measured X cm
// at row Y) lets the band step estimate rows remaining.
const CALC_KEY = 'ameesha-headband-calc';
let calc = { head: '', checkLen: '', checkRow: '' };

function num(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function targetLen() {
  const h = num(calc.head);
  return h ? h - SHORT_BY_CM : null;
}

function cmPerRow() {
  const r = num(calc.checkRow), l = num(calc.checkLen);
  return r && l ? l / r : null;
}

function cmToIn(cm) { return (cm / 2.54).toFixed(1); }

function loadCalc() {
  try { calc = { ...calc, ...(JSON.parse(localStorage.getItem(CALC_KEY)) || {}) }; } catch (_) {}
}
function saveCalc() { localStorage.setItem(CALC_KEY, JSON.stringify(calc)); }

// ── Content HTML ──────────────────────────────────────────────────────────────
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="ah-pattern-doc">

    <h2>Materials</h2>
    <p class="ah-note">Frida by Atelier Emilie: a twisted headband in double stockinette, knit with a fingering and a lace yarn held together.</p>
    <div class="row-table ah-info">
      <span class="row-label">Yarn A:</span><span>Savannah Sock, The Copper Corgi Fiber Studio. Fingering, 421&nbsp;m / 113&nbsp;g.</span>
      <span class="row-label">Yarn B:</span><span>Knitting for Olive silk mohair, lace weight.</span>
      <span class="row-label">Held:</span><span>One strand of each together throughout. About 70&nbsp;m of each.</span>
      <span class="row-label">Needles:</span><span>4&nbsp;mm / US&nbsp;6 circular, worked flat.</span>
      <span class="row-label">Also:</span><span>Tapestry needle.</span>
      <span class="row-label">Size:</span><span>Width ${WIDTH_CM}&nbsp;cm / 3¾"; length fitted to your head.</span>
    </div>

    <div class="ah-calc">
      <label class="ah-field"><span>Head circumference</span><span><input type="number" step="0.5" min="0" id="ah-in-head"> cm</span></label>
      <label class="ah-field"><span>Check-in: band measured <em>(optional)</em></span><span><input type="number" step="0.1" min="0" id="ah-in-len"> cm</span></label>
      <label class="ah-field"><span>…at row <em>(optional)</em></span><span><input type="number" step="1" min="0" id="ah-in-row"></span></label>
      <div class="ah-calc-out" id="ah-calc-out"></div>
    </div>

    <h2>Band</h2>
    <p data-step="0">With 4&nbsp;mm needles and both yarns held together, cast on <strong>${CAST_ON} sts</strong> using your preferred method. Do not join; work back and forth.</p>
    <p data-step="1"><strong>Every row:</strong> *k1, sl1 wyif; rep from * to end. Repeat until the band measures <strong><span class="ah-target">10&nbsp;cm less than your head</span></strong>, measured while pulling well. <em class="ah-progress"></em></p>
    <p data-step="2">Fit check: wrap the band around your head. The ends should sit about 10&nbsp;cm apart and the band should feel snug when stretched. Check before binding off, because mohair is hard to rip back.</p>
    <p data-step="3">Bind off all sts with your preferred method. Cut the yarn leaving a <strong>30–40&nbsp;cm tail</strong> for the seam.</p>

    <h2>Finishing: the twist</h2>
    <p class="ah-note">These steps follow the photo tutorial on page 3 of the original pattern.</p>
    <p data-step="4">Lay the band flat in front of you. Double stockinette is fully reversible, so either side can face up.</p>
    <p data-step="5">Fold each end in half lengthwise and insert them one into the other so they interlock.</p>
    <p data-step="6">Sew along the join through all layers using the tail. Tie a knot and weave in all ends.</p>
    <p data-step="7">Turn the headband so the seam sits on the inside. Block if needed, without pulling too much.</p>

    <h2 class="bb-glossary-hdr">Glossary</h2>
    <div class="bb-glossary">
      <div class="bb-gloss-entry"><span class="bb-gloss-term">Double stockinette</span><span class="bb-gloss-def">A two-layer fabric that looks like stockinette on both sides, made by knitting every other stitch and slipping the ones in between. <a href="https://www.youtube.com/watch?v=iAtTtF3qTqA" target="_blank" rel="noopener">Video tutorial</a>.</span></div>
      <div class="bb-gloss-entry"><span class="bb-gloss-term">k1</span><span class="bb-gloss-def">Knit 1. Bring the yarn to the back first.</span></div>
      <div class="bb-gloss-entry"><span class="bb-gloss-term">sl1 wyif</span><span class="bb-gloss-def">Slip 1 with yarn in front. Bring the yarn to the front, then move one stitch purlwise to the right needle without working it.</span></div>
      <div class="bb-gloss-entry"><span class="bb-gloss-term">rep</span><span class="bb-gloss-def">Repeat the instructions after the asterisk (*).</span></div>
      <div class="bb-gloss-entry"><span class="bb-gloss-term">Held together</span><span class="bb-gloss-def">Work with one strand of each yarn at once as if they were a single yarn.</span></div>
      <div class="bb-gloss-entry"><span class="bb-gloss-term">sts</span><span class="bb-gloss-def">Stitches.</span></div>
    </div>

  </div>
</div>`;

// ── Toolbar HTML ──────────────────────────────────────────────────────────────
const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Ameesha's Headband</h1>
  <div class="divider"></div>
  <button class="btn" id="aht-step-toggle">Step Mode</button>
  <button class="btn small" id="aht-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="aht-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="aht-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="aht-row-divider" style="display:none"></div>
  <span id="aht-row-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#d7a13f;white-space:nowrap;"></span>
  <button class="btn" id="aht-band-done" style="display:none" title="Band has reached length">Band done &#8594;</button>
</div>`;

// ── Storage keys ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'ameesha-headband-step';
const HIST_KEY    = 'ameesha-headband-history';

// ── State ─────────────────────────────────────────────────────────────────────
let stepMode    = false;
let currentStep = 0;
let bandRows    = 0;
let doc         = null;
let _shellAPI   = null;
let ahPipEl     = null;
let ahPipWindow = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    stepMode    = saved?.stepMode ?? false;
    currentStep = saved?.step     ?? 0;
    bandRows    = saved?.rows     ?? 0;
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ stepMode, step: currentStep, rows: bandRows }));
}

// ── History ───────────────────────────────────────────────────────────────────
const MAX_HIST  = 500;
let histTimer   = null;
let lastHistKey = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(HIST_KEY, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimer);
  histTimer = setTimeout(() => {
    const key = `${currentStep}:${currentStep === BAND_STEP ? bandRows : ''}`;
    if (key === lastHistKey) return;
    lastHistKey = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, rows: bandRows, ts: Date.now() });
    if (hist.length > MAX_HIST) hist.length = MAX_HIST;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
}

// ── Derived text ──────────────────────────────────────────────────────────────
function progressText() {
  const cpr = cmPerRow(), tl = targetLen();
  if (!cpr) return `${bandRows} rows knit.`;
  const sofar = bandRows * cpr;
  if (!tl) return `${bandRows} rows ≈ ${sofar.toFixed(1)} cm.`;
  const total = Math.round(tl / cpr);
  return `${bandRows} of ~${total} rows ≈ ${sofar.toFixed(1)} of ${tl.toFixed(1)} cm.`;
}

function renderCalc() {
  if (!doc) return;
  const tl = targetLen(), cpr = cmPerRow();

  doc.querySelectorAll('.ah-target').forEach(el => {
    el.innerHTML = tl ? `${tl.toFixed(1)}&nbsp;cm / ${cmToIn(tl)}"` : '10&nbsp;cm less than your head';
  });
  doc.querySelectorAll('.ah-progress').forEach(el => {
    el.textContent = stepMode || bandRows ? progressText() : '';
  });

  const out = document.getElementById('ah-calc-out');
  if (out) {
    const lines = [];
    lines.push(tl
      ? `Knit the band to <strong>${tl.toFixed(1)} cm / ${cmToIn(tl)}"</strong>.`
      : `Enter your head circumference to get the band length.`);
    if (tl && cpr) lines.push(`That's about <strong>${Math.round(tl / cpr)} rows</strong> at your gauge.`);
    else lines.push(`After a few cm, measure the band and enter the length and row count to estimate total rows.`);
    out.innerHTML = lines.map(l => `<div>${l}</div>`).join('');
  }
}

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  doc.classList.toggle('step-mode', stepMode);
  const toggleBtn = document.getElementById('aht-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));
  renderCalc();

  if (stepMode) {
    const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
    if (stepEl) {
      stepEl.classList.add('step-active');
      stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    saveState();
  }

  updateToolbarBadges();
  updatePip();
}

function updateToolbarBadges() {
  const badge = document.getElementById('aht-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }
  const onBand = stepMode && currentStep === BAND_STEP;
  const rowBadge = document.getElementById('aht-row-badge');
  const rowDiv   = document.getElementById('aht-row-divider');
  const doneBtn  = document.getElementById('aht-band-done');
  if (rowBadge) { rowBadge.style.display = onBand ? '' : 'none'; rowBadge.textContent = `Row ${bandRows}`; }
  if (rowDiv)   rowDiv.style.display  = onBand ? '' : 'none';
  if (doneBtn)  doneBtn.style.display = onBand ? '' : 'none';
}

// ── Navigation ────────────────────────────────────────────────────────────────
// On the band step, next/prev count rows; "Band done" moves on.
function advance() {
  if (currentStep === BAND_STEP) bandRows++;
  else if (currentStep < TOTAL_STEPS - 1) currentStep++;
  updateDisplay();
  scheduleHistEntry();
}

function retreat() {
  if (currentStep === BAND_STEP && bandRows > 0) bandRows--;
  else if (currentStep > 0) currentStep--;
  updateDisplay();
  scheduleHistEntry();
}

function bandDone() {
  if (currentStep !== BAND_STEP) return;
  currentStep++;
  updateDisplay();
  scheduleHistEntry();
}

function toggleStepMode() {
  stepMode = !stepMode;
  saveState();
  updateDisplay();
  if (stepMode) scheduleHistEntry();
}

// ── PiP ───────────────────────────────────────────────────────────────────────
function pipStepHTML() {
  if (!doc || !stepMode) return '—';
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  return stepEl ? stepEl.innerHTML : '—';
}

function updatePip() {
  const fbVis = ahPipEl && ahPipEl.classList.contains('visible');
  const winOk = ahPipWindow && !ahPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const onBand = stepMode && currentStep === BAND_STEP;
    const contentEl = d.getElementById('ah-pip-content');
    const repEl     = d.getElementById('ah-pip-rep');
    const badgeEl   = d.getElementById('ah-pip-badge');
    const doneEl    = d.getElementById('ah-pip-done');
    if (contentEl) contentEl.innerHTML = pipStepHTML();
    if (repEl)   { repEl.textContent = onBand ? `Row ${bandRows}` : ''; repEl.style.display = onBand ? '' : 'none'; }
    if (doneEl)    doneEl.style.display = onBand ? '' : 'none';
    if (badgeEl)   badgeEl.textContent = stepMode ? `Step ${currentStep + 1} / ${TOTAL_STEPS}` : '—';
  }

  if (fbVis) apply(document);
  if (winOk) apply(ahPipWindow.document);
}

function closePip() {
  if (ahPipEl) ahPipEl.classList.remove('visible');
  if (ahPipWindow && !ahPipWindow.closed) ahPipWindow.close();
  ahPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13 url("/background/background.jpg") 22% 32% / cover no-repeat; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #ah-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #ah-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #ah-pip-close:hover { color: #f2e7d5; }
  #ah-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; background: rgba(29, 9, 14, 0.72); }
  #ah-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.85rem; font-weight: 700; color: #d7a13f; flex-shrink: 0; background: rgba(29, 9, 14, 0.72); }
  #ah-pip-ftr { display: flex; justify-content: space-between; align-items: center; gap: 6px;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .ah-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; }
  .ah-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #ah-pip-badge { font-size: 0.72rem; color: #b0897a; flex: 1; text-align: center; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
`;

const PIP_BODY_HTML = `
  <div id="ah-pip-hdr">
    <span>Ameesha's Headband — Mini View</span>
    <span id="ah-pip-close">✕</span>
  </div>
  <div id="ah-pip-content"></div>
  <div id="ah-pip-rep"></div>
  <div id="ah-pip-ftr">
    <span class="ah-pip-nav" id="ah-pip-prev">&#x25C4;</span>
    <span id="ah-pip-badge"></span>
    <span class="ah-pip-nav" id="ah-pip-done" style="display:none">Band done</span>
    <span class="ah-pip-nav" id="ah-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('ah-pip-close').addEventListener('click', closePip);
  d.getElementById('ah-pip-prev').addEventListener('click',  retreat);
  d.getElementById('ah-pip-next').addEventListener('click',  advance);
  d.getElementById('ah-pip-done').addEventListener('click',  bandDone);
  d.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') { closePip(); }
  });
}

async function togglePip() {
  const fbVis = ahPipEl && ahPipEl.classList.contains('visible');
  const winOk = ahPipWindow && !ahPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      ahPipWindow = await documentPictureInPicture.requestWindow({ width: 480, height: 170 });
      const d = ahPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      ahPipWindow.addEventListener('pagehide', () => {
        ahPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  // Fallback draggable overlay
  if (!ahPipEl) {
    ahPipEl = document.createElement('div');
    ahPipEl.id = 'ah-pip-overlay';
    ahPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(ahPipEl);

    document.getElementById('ah-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'ah-pip-close') return;
      const rect = ahPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        ahPipEl.style.right = 'auto'; ahPipEl.style.bottom = 'auto';
        ahPipEl.style.left = (ev.clientX - dx) + 'px';
        ahPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  ahPipEl.classList.add('visible');
  if (_shellAPI) _shellAPI.setPipActive(true);
  updatePip();
}

// ── Key handler ───────────────────────────────────────────────────────────────
function handleKey(e) {
  if (!stepMode) {
    if (e.key === ' ') { e.preventDefault(); toggleStepMode(); }
    return;
  }
  if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
  else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
  else if (e.key === 'Enter' && currentStep === BAND_STEP) { e.preventDefault(); bandDone(); }
  else if (e.key === 'Escape') { toggleStepMode(); }
}

// ── Page registration ─────────────────────────────────────────────────────────
PageRegistry.register("ameesha-headband", {
  id:     "ameesha-headband",
  title:  "Ameesha's Headband",
  status: "Frida · fingering + mohair",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;

    loadState();
    loadCalc();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('ah-pattern-doc');

    document.getElementById('aht-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('aht-step-next').addEventListener('click',   advance);
    document.getElementById('aht-step-prev').addEventListener('click',   retreat);
    document.getElementById('aht-band-done').addEventListener('click',   bandDone);

    const fields = { head: 'ah-in-head', checkLen: 'ah-in-len', checkRow: 'ah-in-row' };
    for (const [key, id] of Object.entries(fields)) {
      const input = document.getElementById(id);
      input.value = calc[key];
      input.addEventListener('input', () => {
        calc[key] = input.value;
        saveCalc();
        renderCalc();
        updatePip();
      });
    }

    shellAPI.setStatus("Ameesha's Headband");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();
  },

  unmount() {
    clearTimeout(histTimer);
    lastHistKey = null;
    closePip();
    if (ahPipEl) { ahPipEl.remove(); ahPipEl = null; }
    _shellAPI = null;
    doc       = null;
  },

  handleKey(e) { handleKey(e); },
  togglePip()  { togglePip(); },

  getHistEntries() { return loadHistory(); },
  deleteHistEntry(idx) {
    const h = loadHistory(); h.splice(idx, 1); saveHistory(h);
    lastHistKey = null;
  },
  clearHistory() { saveHistory([]); lastHistKey = null; },
  navigateToHistEntry(entry) {
    currentStep = entry.step;
    if (entry.step === BAND_STEP && entry.rows !== undefined) bandRows = entry.rows;
    stepMode = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    const onBand = entry.step === BAND_STEP;
    return {
      label:      onBand ? `Band · Row ${entry.rows}` : `Step ${entry.step + 1}`,
      labelClass: '',
      isCurrent:  stepMode && entry.step === currentStep && (!onBand || entry.rows === bandRows),
    };
  },
  getCurrentPos() {
    return {
      label: !stepMode ? 'No active step'
           : currentStep === BAND_STEP ? `Band · Row ${bandRows}`
           : `Step ${currentStep + 1}`,
      sub:   "Ameesha's Headband",
    };
  },
});

})();
