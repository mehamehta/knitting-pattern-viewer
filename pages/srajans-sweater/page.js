// ─── Srajan's Sweater pattern document page ───────────────────────────────────
// Size C: 110cm bust — all multi-size numbers already filtered to size C.

(function () {

// ── Repeat groups ─────────────────────────────────────────────────────────────
// Each group: firstStep/lastStep = the looping steps, endStep = "done" paragraph
const REPEAT_GROUPS = {
  rg1: { label: 'Yoke increases (no shaping)',    totalCount: 25, firstStep:  9, lastStep: 10, endStep: 11 },
  rg2: { label: 'German short rows 3 & 4',        totalCount:  2, firstStep: 15, lastStep: 16, endStep: 17 },
  rg3: { label: 'Yoke increases (with shaping)',  totalCount: 22, firstStep: 19, lastStep: 20, endStep: 21 },
  rg4: { label: 'Sleeve decrease rounds',         totalCount:  3, firstStep: 31, lastStep: 31, endStep: 32 },
};

const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 38; // indices 0–37

// ── HTML template ─────────────────────────────────────────────────────────────
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="ss-pattern-doc">

    <h2>Collar</h2>
    <p data-step="0">Cast on <strong>72</strong> stitches on 4.5mm 40cm circular needles using the longtail cast on. Cast on loosely enough to get the collar over your head — check once you have knitted a few centimetres.</p>
    <p data-step="1">Join in the round and place a BOR marker to indicate the beginning of the round.</p>

    <div class="option-section">
      <div class="option-hdr">Option 1 — Funnel Neck Collar</div>
      <div class="option-body">
        <p data-step="2">Work in rib (<em>*k1 p1*, repeat to end of round</em>) until the collar measures <strong>8cm</strong> from the cast on edge.</p>
      </div>
    </div>

    <div class="option-section">
      <div class="option-hdr">Option 2 — Folded Collar</div>
      <div class="option-body">
        <p data-step="3">Work in rib (<em>*k1 p1*, repeat to end of round</em>) until the collar measures <strong>4cm</strong> from the cast on edge.</p>
        <p data-step="4">Purl one round.</p>
        <p data-step="5">Continue in rib (<em>*k1 p1*, repeat to end of round</em>) until the collar measures <strong>8cm</strong> from the cast on edge.</p>
        <p data-step="6">Knit the live stitches together with the cast on edge to close the fold. See the video for help with this step.</p>
      </div>
    </div>

    <h2>Yoke</h2>
    <p data-step="7">Switch to 5.5mm 40cm needles. Knit one round while placing stitch markers as follows: k15, place marker, k2, place marker, k2, place marker, k2, place marker, k30, place marker, k2, place marker, k2, place marker, k2, place marker, k15 to end of round.</p>

    <p class="ss-note">Now choose whether to include German short row neck shaping. Without shaping is simpler; the short rows improve the fit at the front of the neck slightly. Switch to your 5.5mm 80 or 100cm needles when you have enough stitches.</p>

    <div class="option-section">
      <div class="option-hdr">Option 1 — Without neck shaping</div>
      <div class="option-body">
        <p data-step="8">Work the yoke increases as follows:</p>
        <div class="row-table">
          <span class="row-label" data-step-label="9">Round 1:</span><span data-step="9">*k to next marker, <strong>M1R</strong>, slip marker, k2, slip marker, <strong>M1L</strong>*, work *-* four times in total, k to BOR marker.</span>
          <span class="row-label" data-step-label="10">Round 2:</span><span data-step="10">k all stitches.</span>
        </div>
        <p data-step="11">Work Rounds 1 and 2 a total of <strong>25 times</strong>. You should now have <strong>272 stitches</strong> on your needles.</p>
      </div>
    </div>

    <div class="option-section">
      <div class="option-hdr">Option 2 — With German short row neck shaping</div>
      <div class="option-body">
        <p data-step="12">Begin by working the German short rows. When turning, use the German short row technique: slip one stitch purlwise, wrap the yarn over the needle tightly. Work any resulting double stitches as a single normal stitch.</p>
        <div class="row-table">
          <span class="row-label" data-step-label="13">Row 1:</span><span data-step="13">*k to next marker, <strong>M1R</strong>, slip marker, k2, slip marker, <strong>M1L</strong>*, work *-* two times in total, k3, turn.</span>
          <span class="row-label" data-step-label="14">Row 2:</span><span data-step="14">p to BOR marker, *p to next marker, <strong>M1Lp</strong>, slip marker, p2, slip marker, <strong>M1Rp</strong>*, work *-* two times in total, p3, turn.</span>
          <span class="row-label" data-step-label="15">Row 3:</span><span data-step="15">k to BOR marker, *k to next marker, <strong>M1R</strong>, slip marker, k2, slip marker, <strong>M1L</strong>*, work *-* two times in total, k to 3 sts past previous turn, turn.</span>
          <span class="row-label" data-step-label="16">Row 4:</span><span data-step="16">p to BOR marker, *p to next marker, <strong>M1Lp</strong>, slip marker, p2, slip marker, <strong>M1Rp</strong>*, work *-* two times in total, p to 3 sts past previous turn, turn.</span>
        </div>
        <p data-step="17">Work rows 3 and 4 a total of <strong>2 times</strong>.</p>
        <p data-step="18">Knit to the BOR and slip the BOR marker. Now continue to work the raglan increases.</p>
        <div class="row-table">
          <span class="row-label" data-step-label="19">Round 1:</span><span data-step="19">*k to next marker, <strong>M1R</strong>, slip marker, k2, slip marker, <strong>M1L</strong>*, work *-* four times in total, k to BOR marker.</span>
          <span class="row-label" data-step-label="20">Round 2:</span><span data-step="20">k all stitches.</span>
        </div>
        <p data-step="21">Work Rounds 1 and 2 a total of <strong>22 times</strong>. You should now have <strong>272 stitches</strong> on your needles.</p>
      </div>
    </div>

    <h2>Body</h2>
    <p data-step="22">Divide stitches for body and sleeves. K up to the first marker, remove marker, k2, remove marker, put the next <strong>52 stitches</strong> onto scrap yarn (right sleeve), cast on <strong>6</strong> underarm stitches, remove marker, k2, remove marker, k up to the next marker, remove marker, k2, remove marker, put the next <strong>52 stitches</strong> onto scrap yarn (left sleeve), cast on <strong>6</strong> underarm stitches, remove marker, k2, remove marker, k to BOR.</p>
    <p data-step="23">Remove the BOR marker and continue knitting until you are midway through the underarm stitches cast on under the left arm. Place the BOR marker here — this is the new BOR.</p>
    <p data-step="24" class="ss-dist">You should now have <strong>180 stitches</strong> on your needles.</p>
    <p data-step="25">Knit in stockinette (k all stitches) until the sweater measures <strong>24cm</strong> from the underarm, or <strong>7cm less than your desired length</strong>. The sweater may grow slightly in length while blocking.</p>
    <p data-step="26">Switch to 4.5mm 80cm needles and knit one round.</p>
    <p data-step="27">Work in rib (<em>*k1 p1*</em>) until the ribbing measures <strong>7cm</strong>. Bind off loosely.</p>

    <div id="ss-stripe-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Stripe Tracker</span>
        <div style="display:flex;gap:6px">
          <button class="btn small" id="ss-str-freeze">Freeze for sleeves</button>
          <button class="btn small" id="ss-str-reset">Reset</button>
        </div>
      </div>
      <div class="str-freeze-note" id="ss-str-freeze-note"></div>
      <div class="str-body">
        <div class="slt-ctrl-row">
          <span class="slt-lbl">Row</span>
          <div class="slt-ctrls">
            <button class="btn small" id="ss-str-minus">&#x2212;</button>
            <span class="slt-num" id="ss-str-rows">0</span>
            <button class="btn small" id="ss-str-plus">+</button>
          </div>
          <span class="str-cur-colour-wrap">Colour: <strong id="ss-str-colour" class="str-mc">multicolour</strong></span>
        </div>
        <button class="btn slt-dec-btn" id="ss-str-change-btn">Log colour change at row <span id="ss-str-change-row">0</span></button>
        <div class="slt-log" id="ss-str-log"><div class="slt-empty">No colour changes logged yet.</div></div>
      </div>
    </div>

    <h2>Arms</h2>
    <p class="ss-note">Repeat this section for each arm.</p>
    <p data-step="28">Transfer the <strong>52 sleeve stitches</strong> from scrap yarn onto your 5.5mm 40cm needle.</p>
    <p data-step="29">Pick up <strong>6 stitches</strong> from the underarm cast on. Place the BOR marker in the middle of the picked up stitches. You should now have <strong>58 stitches</strong>.</p>
    <p class="ss-note"><em>Note: Small holes may appear at the armpits — sew them up at the end, or pick up 4 extra stitches (2 before and 2 after the underarm stitches) and reduce them by knitting together with adjacent stitches on the first round.</em></p>
    <p data-step="30">Knit <strong>10cm</strong> in stockinette.</p>
    <p data-step="31">Decrease round: k1, <strong>k2tog</strong>, k until 3 sts before the BOR marker, <strong>ssk</strong>, k1. After working this decrease round, knit <strong>16 stockinette rounds</strong> before the next decrease. Work <strong>3 decrease rounds</strong> total.</p>
    <p data-step="32">You have now worked all <strong>3 decrease rounds</strong>.</p>
    <p data-step="33">Continue in stockinette until the sleeve measures <strong>34cm</strong> from the underarm cast on, or <strong>7cm less than your desired length</strong>. The sleeve may grow with blocking.</p>
    <p data-step="34">Switch to 4.5mm needles and knit one round.</p>
    <p data-step="35">Work in rib (<em>*k1 p1*</em>) for <strong>7cm</strong>. Bind off loosely.</p>

    <div id="ss-sleeve-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Sleeve Tracker</span>
        <button class="btn small" id="ss-slt-reset">Reset all</button>
      </div>
      <div class="slt-two-col">
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 1</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="ss-slt-r0-minus">&#x2212;</button>
              <span class="slt-num" id="ss-slt-r0">0</span>
              <button class="btn small" id="ss-slt-r0-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="ss-slt-d0-log">Log decrease at round <span id="ss-slt-d0-row">0</span></button>
          <div class="slt-log" id="ss-slt-d0-log-list"></div>
          <div class="slt-stripe-sec">
            <div class="slt-stripe-hdr"><span>Stripes</span><strong id="ss-slt-sc0">—</strong></div>
            <button class="btn slt-dec-btn" id="ss-slt-sch0-btn" disabled>Log colour change at round <span id="ss-slt-sch0-row">0</span></button>
            <div class="slt-log" id="ss-slt-sch0-log"><div class="slt-empty">Freeze the body stripe tracker first.</div></div>
          </div>
        </div>
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 2</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="ss-slt-r1-minus">&#x2212;</button>
              <span class="slt-num" id="ss-slt-r1">0</span>
              <button class="btn small" id="ss-slt-r1-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="ss-slt-d1-log">Log decrease at round <span id="ss-slt-d1-row">0</span></button>
          <div class="slt-log" id="ss-slt-d1-log-list"></div>
          <div class="slt-stripe-sec">
            <div class="slt-stripe-hdr"><span>Stripes</span><strong id="ss-slt-sc1">—</strong></div>
            <button class="btn slt-dec-btn" id="ss-slt-sch1-btn" disabled>Log colour change at round <span id="ss-slt-sch1-row">0</span></button>
            <div class="slt-log" id="ss-slt-sch1-log"><div class="slt-empty">Freeze the body stripe tracker first.</div></div>
          </div>
        </div>
      </div>
    </div>

    <p data-step="36">Repeat the Arms section for the second sleeve.</p>

    <h2>Finishing</h2>
    <p data-step="37">Weave in all ends. Wet block: soak the sweater in cool water for a few minutes, gently squeeze out excess water without twisting or stretching, then lay flat to dry. Shape to desired measurements while wet.</p>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Srajan's Sweater</h1>
  <div class="divider"></div>
  <button class="btn" id="ss-step-toggle">Step Mode</button>
  <button class="btn small" id="ss-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="ss-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="ss-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="ss-rep-divider" style="display:none"></div>
  <span id="ss-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#d7a13f;white-space:nowrap;"></span>
  <span id="ss-rep-label" style="display:none;font-size:0.75rem;color:#b0897a;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'srajans-sweater-step';
const SLT_KEY     = 'srajans-sweater-sleeves';
const STRIPE_KEY      = 'srajans-sweater-stripes';
const SLEEVE_SEED_KEY = 'srajans-sweater-sleeve-stripe-seed';
const LS_HISTORY  = 'srajans-sweater-history';
const MAX_HIST    = 500;

let stepMode    = false;
let currentStep = 0;
let repCounters = { rg1: 1, rg2: 1, rg3: 1, rg4: 1 };
let doc         = null;
let _shellAPI   = null;
let ssPipEl     = null;
let ssPipWindow = null;
let pipMode = 'steps'; // 'steps' | 'sleeves' | 'stripes'

let slt      = [{ rows: 0, decs: [], stripeChanges: [] }, { rows: 0, decs: [], stripeChanges: [] }];
let stripe   = { rows: 0, changes: [] }; // changes: row numbers where colour toggled
let sleeveSeed = null; // { startColourIdx, bodyRowsIntoStripe } — frozen from body tracker

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      stepMode    = saved.stepMode    ?? false;
      currentStep = saved.step        ?? 0;
      repCounters = saved.reps        ?? { rg1: 1, rg2: 1, rg3: 1, rg4: 1 };
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
let histTimer   = null;
let lastHistKey = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimer);
  histTimer = setTimeout(() => {
    const key = String(currentStep);
    if (key === lastHistKey) return;
    lastHistKey = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, ts: Date.now() });
    if (hist.length > MAX_HIST) hist.length = MAX_HIST;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
}

// ── Sleeve tracker ────────────────────────────────────────────────────────────
function loadSltState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SLT_KEY) || 'null');
    if (saved && Array.isArray(saved) && saved.length === 2) {
      slt = saved.map(s => ({
        rows: s.rows ?? 0,
        decs: s.decs ?? [],
        stripeChanges: s.stripeChanges ?? [],
      }));
    }
  } catch (_) {}
}

function saveSltState() {
  localStorage.setItem(SLT_KEY, JSON.stringify(slt));
}

function renderSlt(i) {
  const s      = slt[i];
  const rowsEl = document.getElementById(`ss-slt-r${i}`);
  const rowLbl = document.getElementById(`ss-slt-d${i}-row`);
  const logEl  = document.getElementById(`ss-slt-d${i}-log-list`);

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
        cadenceHtml = `<div class="slt-cadence">${uniform ? `Every ${ivs[0]} rounds` : 'Intervals: ' + ivs.join(', ') + ' rounds'}</div>`;
      }
      const entries = s.decs.map((row, j) => {
        const iv = j > 0 ? `<span class="slt-iv">+${row - s.decs[j - 1]}</span>` : '';
        return `<div class="slt-entry"><span class="slt-n">#${j + 1}</span><span class="slt-r">Rnd ${row}</span>${iv}<span class="slt-del" data-i="${i}" data-j="${j}">×</span></div>`;
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

  renderSleeveStripe(i);
  if (pipMode === 'sleeves') updatePip();
}

function updateSleeveTracker() { renderSlt(0); renderSlt(1); }

function renderSleeveStripe(i) {
  const s        = slt[i];
  const colourEl = document.getElementById(`ss-slt-sc${i}`);
  const rowLblEl = document.getElementById(`ss-slt-sch${i}-row`);
  const logEl    = document.getElementById(`ss-slt-sch${i}-log`);
  const btnEl    = document.getElementById(`ss-slt-sch${i}-btn`);

  if (!colourEl) return;

  if (!sleeveSeed) {
    colourEl.textContent    = '—';
    colourEl.className      = '';
    if (logEl)    logEl.innerHTML       = '<div class="slt-empty">Freeze the body stripe tracker first.</div>';
    if (btnEl)    btnEl.disabled        = true;
    if (rowLblEl) rowLblEl.textContent  = s.rows;
    return;
  }

  if (btnEl)    btnEl.disabled        = false;
  if (rowLblEl) rowLblEl.textContent  = s.rows;

  const colourIdx = (sleeveSeed.startColourIdx + s.stripeChanges.length) % 2;
  const curColour = STRIPE_COLOURS[colourIdx];

  colourEl.textContent = curColour;
  colourEl.className   = colourIdx === 0 ? 'str-mc' : 'str-bk';

  if (!logEl) return;

  const completedBlocks = s.stripeChanges.map((endRow, j) => {
    const startRow   = j === 0 ? 1 : s.stripeChanges[j - 1] + 1;
    const colour     = STRIPE_COLOURS[(sleeveSeed.startColourIdx + j) % 2];
    const sleeveRows = endRow - startRow + 1;
    const bodyOffset = j === 0 ? sleeveSeed.bodyRowsIntoStripe : 0;
    return { colour, startRow, endRow, sleeveRows, bodyOffset, idx: j };
  });

  const currentStart   = s.stripeChanges.length > 0 ? s.stripeChanges[s.stripeChanges.length - 1] + 1 : 1;
  const currentSlvRows = Math.max(0, s.rows - currentStart + 1);
  const currentBodyOff = s.stripeChanges.length === 0 ? sleeveSeed.bodyRowsIntoStripe : 0;
  const totalInBlock   = currentSlvRows + currentBodyOff;

  let html = completedBlocks.map(b => {
    const cls        = b.colour === 'multicolour' ? 'str-mc' : 'str-bk';
    const offsetNote = b.bodyOffset > 0
      ? ` <span class="slt-offset">(+${b.bodyOffset} from body)</span>`
      : '';
    return `<div class="slt-entry">
      <span class="slt-n ${cls}">${b.colour}</span>
      <span class="slt-r">Rnds ${b.startRow}–${b.endRow}</span>
      <span class="slt-iv">${b.sleeveRows} rnds${offsetNote}</span>
      <span class="slt-del" data-ssl-i="${i}" data-ssl-j="${b.idx}">×</span>
    </div>`;
  }).join('');

  const curCls    = curColour === 'multicolour' ? 'str-mc' : 'str-bk';
  const curOffset = currentBodyOff > 0
    ? ` <span class="slt-offset">(+${currentBodyOff} from body)</span>`
    : '';

  html += `<div class="slt-entry str-cur">
    <span class="slt-n ${curCls}">${curColour}</span>
    <span class="slt-r">Rnd ${currentStart}…</span>
    <span class="slt-iv">${totalInBlock} total${curOffset}</span>
  </div>`;

  logEl.innerHTML = html;
  logEl.querySelectorAll('[data-ssl-j]').forEach(btn => {
    btn.addEventListener('click', e => {
      const si = parseInt(e.target.dataset.sslI);
      const j  = parseInt(e.target.dataset.sslJ);
      slt[si].stripeChanges.splice(j, 1);
      saveSltState();
      renderSleeveStripe(si);
    });
  });
}

function renderSleeveSeedNote() {
  const noteEl   = document.getElementById('ss-str-freeze-note');
  const freezeEl = document.getElementById('ss-str-freeze');
  if (!noteEl) return;
  if (sleeveSeed) {
    const colour = STRIPE_COLOURS[sleeveSeed.startColourIdx];
    const cls    = sleeveSeed.startColourIdx === 0 ? 'str-mc' : 'str-bk';
    noteEl.innerHTML = `Sleeve baseline: <strong class="${cls}">${colour}</strong>, ${sleeveSeed.bodyRowsIntoStripe} rows already in stripe`;
    if (freezeEl) freezeEl.textContent = 'Re-freeze';
  } else {
    noteEl.textContent = '';
    if (freezeEl) freezeEl.textContent = 'Freeze for sleeves';
  }
}

// ── Stripe tracker ────────────────────────────────────────────────────────────
const STRIPE_COLOURS = ['multicolour', 'black'];

function loadStripeState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STRIPE_KEY) || 'null');
    if (saved && typeof saved === 'object') stripe = saved;
  } catch (_) {}
}

function saveStripeState() {
  localStorage.setItem(STRIPE_KEY, JSON.stringify(stripe));
}

function loadSleeveSeedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SLEEVE_SEED_KEY) || 'null');
    if (saved && typeof saved === 'object') sleeveSeed = saved;
  } catch (_) {}
}

function saveSleeveSeedState() {
  localStorage.setItem(SLEEVE_SEED_KEY, JSON.stringify(sleeveSeed));
}

function renderStripe() {
  const curIdx    = stripe.changes.length % 2;
  const curColour = STRIPE_COLOURS[curIdx];

  const rowsEl    = document.getElementById('ss-str-rows');
  const colourEl  = document.getElementById('ss-str-colour');
  const changeRow = document.getElementById('ss-str-change-row');
  const logEl     = document.getElementById('ss-str-log');

  if (rowsEl)    rowsEl.textContent    = stripe.rows;
  if (changeRow) changeRow.textContent = stripe.rows;
  if (colourEl) {
    colourEl.textContent = curColour;
    colourEl.className   = curIdx === 0 ? 'str-mc' : 'str-bk';
  }

  if (logEl) {
    const completedBlocks = stripe.changes.map((endRow, i) => {
      const startRow = i === 0 ? 1 : stripe.changes[i - 1] + 1;
      const colour   = STRIPE_COLOURS[i % 2];
      return { colour, startRow, endRow, count: endRow - startRow + 1, idx: i };
    });

    const currentStart = stripe.changes.length > 0
      ? stripe.changes[stripe.changes.length - 1] + 1
      : 1;
    const currentCount = Math.max(0, stripe.rows - currentStart + 1);

    if (completedBlocks.length === 0 && stripe.rows === 0) {
      logEl.innerHTML = '<div class="slt-empty">No colour changes logged yet.</div>';
    } else {
      let html = completedBlocks.map(b => {
        const cls = b.colour === 'multicolour' ? 'str-mc' : 'str-bk';
        return `<div class="slt-entry">
          <span class="slt-n ${cls}">${b.colour}</span>
          <span class="slt-r">Rows ${b.startRow}–${b.endRow}</span>
          <span class="slt-iv">${b.count} rows</span>
          <span class="slt-del" data-str-j="${b.idx}">×</span>
        </div>`;
      }).join('');

      if (stripe.rows > 0) {
        const cls = curColour === 'multicolour' ? 'str-mc' : 'str-bk';
        html += `<div class="slt-entry str-cur">
          <span class="slt-n ${cls}">${curColour}</span>
          <span class="slt-r">Row ${currentStart}…</span>
          <span class="slt-iv">${currentCount} rows</span>
        </div>`;
      }

      logEl.innerHTML = html;
      logEl.querySelectorAll('[data-str-j]').forEach(btn => {
        btn.addEventListener('click', e => {
          const j = parseInt(e.target.dataset.strJ);
          stripe.changes.splice(j, 1);
          saveStripeState();
          renderStripe();
        });
      });
    }
  }

  if (pipMode === 'stripes') updatePip();
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

// ── Display update ─────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  doc.classList.toggle('step-mode', stepMode);

  const toggleBtn = document.getElementById('ss-step-toggle');
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
  const badge = document.getElementById('ss-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const repBadge   = document.getElementById('ss-rep-badge');
  const repLabel   = document.getElementById('ss-rep-label');
  const repDivider = document.getElementById('ss-rep-divider');

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

// ── Navigation ─────────────────────────────────────────────────────────────────
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

// ── Mini View (PiP) ────────────────────────────────────────────────────────────
function pipStepHTML() {
  if (!doc) return '';
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (!stepEl) return '';

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

  const label   = labelEl ? labelEl.textContent.trim() : '';
  const content = stepEl.innerHTML;
  const hsParent = stepEl.closest('.has-substeps');
  let intro = '';
  if (hsParent && !label) {
    const introEl = hsParent.querySelector('.substep-intro');
    if (introEl) intro = `<div class="ss-pip-intro">${introEl.textContent.trim()}</div>`;
  }
  const main = label ? `<span class="pip-lbl">${label}</span> ${content}` : content;
  return intro + main;
}

function pipSltHTML() {
  return slt.map((s, i) => {
    let cadence = 'No decreases yet';
    if (s.decs.length === 1) {
      cadence = `1 dec · at rnd ${s.decs[0]}`;
    } else if (s.decs.length >= 2) {
      const ivs = [];
      for (let j = 1; j < s.decs.length; j++) ivs.push(s.decs[j] - s.decs[j - 1]);
      const uniform = ivs.every(v => v === ivs[0]);
      cadence = `${s.decs.length} dec · ${uniform ? `every ${ivs[0]} rnds` : 'intervals: ' + ivs.join(', ')}`;
    }

    let stripeHtml = '';
    if (sleeveSeed) {
      const colourIdx = (sleeveSeed.startColourIdx + s.stripeChanges.length) % 2;
      const curColour = STRIPE_COLOURS[colourIdx];
      const cls       = colourIdx === 0 ? 'str-mc' : 'str-bk';
      stripeHtml = `<div class="pip-slt-stripe">
        <span class="${cls}">${curColour}</span>
        <span class="pip-slt-log" data-pip-slt-action="str-change" data-pip-slt-sleeve="${i}">Change at ${s.rows}</span>
      </div>`;
    }

    return `<div class="${i === 1 ? 'pip-slt-s2' : ''}">
      <div class="pip-slt-main">
        <span class="pip-slt-label">S${i + 1}</span>
        <span class="pip-slt-rows">${s.rows} rnds</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="minus" data-pip-slt-sleeve="${i}">−</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="plus"  data-pip-slt-sleeve="${i}">+</span>
        <span class="pip-slt-log"  data-pip-slt-action="dec"   data-pip-slt-sleeve="${i}">Log dec at ${s.rows}</span>
      </div>
      <div class="pip-slt-cadence">${cadence}</div>
      ${stripeHtml}
    </div>`;
  }).join('');
}

function pipStripesHTML() {
  const curIdx    = stripe.changes.length % 2;
  const curColour = STRIPE_COLOURS[curIdx];
  const curCls    = curIdx === 0 ? 'str-mc' : 'str-bk';

  const completedBlocks = stripe.changes.map((endRow, i) => {
    const startRow = i === 0 ? 1 : stripe.changes[i - 1] + 1;
    const colour   = STRIPE_COLOURS[i % 2];
    const cls      = colour === 'multicolour' ? 'str-mc' : 'str-bk';
    return `<div style="display:flex;gap:6px;font-size:0.72rem;padding:1px 0;border-top:1px solid #4a1f2a;align-items:center">
      <span class="${cls}" style="font-weight:700;min-width:6em">${colour}</span>
      <span style="color:#b98f7d;flex:1">rows ${startRow}–${endRow} (${endRow - startRow + 1})</span>
      <span data-pip-str-action="del" data-pip-str-j="${i}" style="cursor:pointer;color:#6d4a45;padding:0 6px">×</span>
    </div>`;
  }).join('');

  const currentStart = stripe.changes.length > 0
    ? stripe.changes[stripe.changes.length - 1] + 1 : 1;
  const currentCount = Math.max(0, stripe.rows - currentStart + 1);
  const curBlockHtml = stripe.rows > 0
    ? `<div style="display:flex;gap:6px;font-size:0.72rem;padding:1px 0;border-top:1px solid #4a1f2a">
        <span class="${curCls}" style="font-weight:700;min-width:7em">${curColour}</span>
        <span style="color:#b98f7d">row ${currentStart}… (${currentCount})</span>
      </div>` : '';

  return `<div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <span class="pip-slt-label">Row</span>
      <span class="pip-slt-rows">${stripe.rows}</span>
      <span class="pip-slt-ctrl" data-pip-str-action="minus">−</span>
      <span class="pip-slt-ctrl" data-pip-str-action="plus">+</span>
      <span class="pip-slt-log" data-pip-str-action="change">Change at ${stripe.rows}</span>
    </div>
    <div style="font-size:0.72rem;color:#b0897a;margin-bottom:4px">Current: <strong class="${curCls}">${curColour}</strong></div>
    ${completedBlocks || ''}${curBlockHtml}
    ${!completedBlocks && stripe.rows === 0 ? '<div style="color:#5a2733;font-style:italic;font-size:0.72rem">No changes logged yet.</div>' : ''}
  </div>`;
}

function visiblePipModes() {
  if (stepMode && currentStep >= 28 && currentStep <= 36) return ['steps', 'sleeves', 'stripes'];
  return ['steps', 'stripes'];
}

function updatePip() {
  const fbVis = ssPipEl  && ssPipEl.classList.contains('visible');
  const winOk = ssPipWindow && !ssPipWindow.closed;
  if (!fbVis && !winOk) return;

  const available = visiblePipModes();
  if (!available.includes(pipMode)) pipMode = 'steps';

  function apply(d) {
    const contentEl  = d.getElementById('ss-pip-content');
    const repEl      = d.getElementById('ss-pip-rep');
    const badgeEl    = d.getElementById('ss-pip-badge');
    const sltEl      = d.getElementById('ss-pip-slt');
    const strEl      = d.getElementById('ss-pip-str');
    const titleEl    = d.getElementById('ss-pip-title');
    const prevEl     = d.getElementById('ss-pip-prev');
    const nextEl     = d.getElementById('ss-pip-next');
    const btnSteps   = d.getElementById('ss-pip-btn-steps');
    const btnStripes = d.getElementById('ss-pip-btn-stripes');
    const btnSleeves = d.getElementById('ss-pip-btn-sleeves');

    if (contentEl) contentEl.style.display = 'none';
    if (repEl)     repEl.style.display     = 'none';
    if (sltEl)     sltEl.style.display     = 'none';
    if (strEl)     strEl.style.display     = 'none';

    if (btnSteps)   { btnSteps.style.display   = available.includes('steps')   ? '' : 'none'; btnSteps.classList.toggle('active',   pipMode === 'steps');   }
    if (btnStripes) { btnStripes.style.display = available.includes('stripes') ? '' : 'none'; btnStripes.classList.toggle('active', pipMode === 'stripes'); }
    if (btnSleeves) { btnSleeves.style.display = available.includes('sleeves') ? '' : 'none'; btnSleeves.classList.toggle('active', pipMode === 'sleeves'); }

    if (pipMode === 'sleeves') {
      if (sltEl)   { sltEl.style.display = 'block'; sltEl.innerHTML = pipSltHTML(); }
      if (titleEl)   titleEl.textContent     = "Srajan's Sweater — Sleeves";
      if (prevEl)    prevEl.style.visibility = 'hidden';
      if (nextEl)    nextEl.style.visibility = 'hidden';
      if (badgeEl)   badgeEl.textContent     = '';
    } else if (pipMode === 'stripes') {
      if (strEl)   { strEl.style.display = 'block'; strEl.innerHTML = pipStripesHTML(); }
      if (titleEl)   titleEl.textContent     = "Srajan's Sweater — Stripes";
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
      if (titleEl)   titleEl.textContent     = "Srajan's Sweater — Mini View";
      if (prevEl)    prevEl.style.visibility = '';
      if (nextEl)    nextEl.style.visibility = '';
      if (badgeEl)   badgeEl.textContent     = badge;
    }
  }

  if (fbVis) apply(document);
  if (winOk) apply(ssPipWindow.document);
}

function closePip() {
  if (ssPipEl) ssPipEl.classList.remove('visible');
  if (ssPipWindow && !ssPipWindow.closed) ssPipWindow.close();
  ssPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #ss-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #ss-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #ss-pip-close:hover { color: #f2e7d5; }
  #ss-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; }
  .ss-pip-intro { font-size: 0.75rem; color: #6d4a45; margin-bottom: 6px; }
  #ss-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.75rem; color: #d7a13f; flex-shrink: 0; }
  #ss-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .ss-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; font-size: 0.9rem; }
  .ss-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #ss-pip-badge { font-size: 0.72rem; color: #b0897a; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8dcc4; }
  .pip-mode-btn { cursor: pointer; padding: 1px 7px; color: #6d4a45; font-size: 0.7rem; border-radius: 3px; user-select: none; }
  .pip-mode-btn:hover { color: #b98f7d; background: #562634; }
  .pip-mode-btn.active { color: #e8dcc4; background: #562634; }
  #ss-pip-slt { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
  #ss-pip-str { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
  .str-mc { color: #d7a13f; }
  .str-bk { color: #a9847a; }
  .pip-slt-s2 { border-top: 1px solid #562f3a; margin-top: 5px; padding-top: 5px; }
  .pip-slt-main { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
  .pip-slt-label { font-size: 0.72rem; font-weight: 700; color: #e8dcc4; min-width: 1.6em; }
  .pip-slt-rows { font-size: 0.88rem; font-weight: 700; color: #d7a13f; min-width: 4.5em; }
  .pip-slt-ctrl { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px;
    color: #b98f7d; font-weight: 700; user-select: none; }
  .pip-slt-ctrl:hover { background: #63303d; color: #f2e7d5; }
  .pip-slt-log { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px;
    color: #b98f7d; font-size: 0.7rem; flex: 1; text-align: center; user-select: none; }
  .pip-slt-log:hover { background: #63303d; color: #9ab8a0; }
  .pip-slt-cadence { font-size: 0.68rem; color: #6d4a45; padding-left: 1.6em; }
  .pip-slt-stripe { display: flex; align-items: center; gap: 6px; padding-top: 3px; border-top: 1px solid #4a1f2a; margin-top: 2px; }
`;

const PIP_BODY_HTML = `
  <div id="ss-pip-hdr">
    <span id="ss-pip-title">Srajan's Sweater — Mini View</span>
    <div style="display:flex;align-items:center;gap:2px">
      <span class="pip-mode-btn" id="ss-pip-btn-steps">Steps</span>
      <span class="pip-mode-btn" id="ss-pip-btn-stripes">Stripes</span>
      <span class="pip-mode-btn" id="ss-pip-btn-sleeves">Sleeves</span>
      <span id="ss-pip-close" style="margin-left:6px">✕</span>
    </div>
  </div>
  <div id="ss-pip-content"></div>
  <div id="ss-pip-rep"></div>
  <div id="ss-pip-slt"></div>
  <div id="ss-pip-str"></div>
  <div id="ss-pip-ftr">
    <span class="ss-pip-nav" id="ss-pip-prev">&#x25C4;</span>
    <span id="ss-pip-badge"></span>
    <span class="ss-pip-nav" id="ss-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('ss-pip-close').addEventListener('click', closePip);
  d.getElementById('ss-pip-prev').addEventListener('click',  retreat);
  d.getElementById('ss-pip-next').addEventListener('click',  advance);
  ['steps', 'stripes', 'sleeves'].forEach(mode => {
    const btn = d.getElementById(`ss-pip-btn-${mode}`);
    if (btn) btn.addEventListener('click', () => { pipMode = mode; updatePip(); });
  });
  d.getElementById('ss-pip-slt').addEventListener('click', e => {
    const btn = e.target.closest('[data-pip-slt-action]');
    if (!btn) return;
    const action = btn.dataset.pipSltAction;
    const si     = parseInt(btn.dataset.pipSltSleeve);
    if (action === 'minus') { if (slt[si].rows > 0) slt[si].rows--; }
    if (action === 'plus')  { slt[si].rows++; }
    if (action === 'dec')        { slt[si].decs.push(slt[si].rows); }
    if (action === 'str-change') { slt[si].stripeChanges.push(slt[si].rows); }
    saveSltState();
    renderSlt(si);
    updatePip();
  });
  d.getElementById('ss-pip-str').addEventListener('click', e => {
    const btn = e.target.closest('[data-pip-str-action]');
    if (!btn) return;
    const action = btn.dataset.pipStrAction;
    if (action === 'minus')  { if (stripe.rows > 0) stripe.rows--; }
    if (action === 'plus')   { stripe.rows++; }
    if (action === 'change') { stripe.changes.push(stripe.rows); }
    if (action === 'del')    { stripe.changes.splice(parseInt(btn.dataset.pipStrJ), 1); }
    saveStripeState();
    renderStripe();
    updatePip();
  });
  d.addEventListener('keydown', e => {
    if (pipMode !== 'steps') {
      if (e.key === 'Escape') closePip();
      return;
    }
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') closePip();
  });
}

async function togglePip() {
  const fbVis = ssPipEl  && ssPipEl.classList.contains('visible');
  const winOk = ssPipWindow && !ssPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      ssPipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 170 });
      const d = ssPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      ssPipWindow.addEventListener('pagehide', () => {
        ssPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  if (!ssPipEl) {
    ssPipEl = document.createElement('div');
    ssPipEl.id = 'ss-pip-overlay';
    ssPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(ssPipEl);

    document.getElementById('ss-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'ss-pip-close') return;
      const rect = ssPipEl.getBoundingClientRect();
      const dx   = e.clientX - rect.left;
      const dy   = e.clientY - rect.top;
      const onMove = ev => {
        ssPipEl.style.right  = 'auto';
        ssPipEl.style.bottom = 'auto';
        ssPipEl.style.left   = (ev.clientX - dx) + 'px';
        ssPipEl.style.top    = (ev.clientY - dy) + 'px';
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

  ssPipEl.classList.add('visible');
  if (_shellAPI) _shellAPI.setPipActive(true);
  updatePip();
}

// ── Key handler ────────────────────────────────────────────────────────────────
function handleKey(e) {
  if (!stepMode) {
    if (e.key === ' ') { e.preventDefault(); stepMode = true; updateDisplay(); }
    return;
  }
  if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
  else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
  else if (e.key === 'Escape') { stepMode = false; updateDisplay(); }
}

// ── Registration ───────────────────────────────────────────────────────────────
PageRegistry.register("srajans-sweater", {
  id:     "srajans-sweater",
  title:  "Srajan's Sweater",
  status: "Pattern reference",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('ss-pattern-doc');

    document.getElementById('ss-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('ss-step-next').addEventListener('click',   advance);
    document.getElementById('ss-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus("Srajan's Sweater — pattern reference");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();

    loadSleeveSeedState();
    loadStripeState();
    renderStripe();
    renderSleeveSeedNote();
    document.getElementById('ss-str-plus').addEventListener('click', () => {
      stripe.rows++; saveStripeState(); renderStripe();
    });
    document.getElementById('ss-str-minus').addEventListener('click', () => {
      if (stripe.rows > 0) { stripe.rows--; saveStripeState(); renderStripe(); }
    });
    document.getElementById('ss-str-change-btn').addEventListener('click', () => {
      stripe.changes.push(stripe.rows); saveStripeState(); renderStripe();
    });
    document.getElementById('ss-str-freeze').addEventListener('click', () => {
      const curStart = stripe.changes.length > 0 ? stripe.changes[stripe.changes.length - 1] + 1 : 1;
      const bodyRowsIntoStripe = Math.max(0, stripe.rows - curStart + 1);
      const colour = STRIPE_COLOURS[stripe.changes.length % 2];
      if (confirm(`Set sleeve stripe baseline to: ${colour}, ${bodyRowsIntoStripe} rows into current stripe?`)) {
        sleeveSeed = { startColourIdx: stripe.changes.length % 2, bodyRowsIntoStripe };
        saveSleeveSeedState();
        renderSleeveSeedNote();
        renderSleeveStripe(0);
        renderSleeveStripe(1);
      }
    });
    document.getElementById('ss-str-reset').addEventListener('click', () => {
      if (confirm('Reset stripe tracker?')) {
        stripe = { rows: 0, changes: [] };
        saveStripeState();
        renderStripe();
      }
    });

    loadSltState();
    updateSleeveTracker();
    [0, 1].forEach(i => {
      document.getElementById(`ss-slt-r${i}-plus`).addEventListener('click', () => {
        slt[i].rows++; saveSltState(); renderSlt(i);
      });
      document.getElementById(`ss-slt-r${i}-minus`).addEventListener('click', () => {
        if (slt[i].rows > 0) { slt[i].rows--; saveSltState(); renderSlt(i); }
      });
      document.getElementById(`ss-slt-d${i}-log`).addEventListener('click', () => {
        slt[i].decs.push(slt[i].rows); saveSltState(); renderSlt(i);
      });
      document.getElementById(`ss-slt-sch${i}-btn`).addEventListener('click', () => {
        slt[i].stripeChanges.push(slt[i].rows); saveSltState(); renderSleeveStripe(i);
      });
    });
    document.getElementById('ss-slt-reset').addEventListener('click', () => {
      if (confirm('Reset sleeve tracker for both sleeves?')) {
        slt = [{ rows: 0, decs: [], stripeChanges: [] }, { rows: 0, decs: [], stripeChanges: [] }];
        saveSltState();
        updateSleeveTracker();
      }
    });
  },

  unmount() {
    clearTimeout(histTimer);
    lastHistKey = null;
    closePip();
    if (ssPipEl) { ssPipEl.remove(); ssPipEl = null; }
    _shellAPI = null;
    doc = null;
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
    currentStep = entry.step;
    stepMode    = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    return {
      label:      `Step ${entry.step + 1}`,
      labelClass: '',
      isCurrent:  stepMode && entry.step === currentStep,
    };
  },
  getCurrentPos() {
    return {
      label: stepMode ? `Step ${currentStep + 1}` : 'No active step',
      sub:   "Srajan's Sweater",
    };
  },
});

})();
