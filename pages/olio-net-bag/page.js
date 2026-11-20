// ─── Olio Mini Bongbong Net Bag — Jini Jini for Yarn-a (crochet) ──────────────

(function () {

// ── Video tutorials (QR codes on page 2 of the PDF) ───────────────────────────
// The videos are for the full-size Olio Bongbong Net Bag: the stitch and row
// counts differ from the mini, so they only show the general steps.
const VIDEOS = {
  body:    { url: 'http://m.site.naver.com/0BQbK', label: 'Part 1: Body / Sides' },
  handles: { url: 'http://m.site.naver.com/0BQc5', label: 'Part 2: Handles' },
};

function vid(key) {
  const v = VIDEOS[key];
  return `<a class="nb-video" href="${v.url}" target="_blank" rel="noopener">&#9654; ${v.label}</a>`;
}

// ── Pattern builder ───────────────────────────────────────────────────────────
// Steps are numbered in document order. A repeat group loops its rows
// `totalCount` times, then moves on to the paragraph right after it (endStep).
// Groups with `rowTotal` show the piece's running row number in the toolbar.
function buildPattern() {
  const b = s => `<strong>${s}</strong>`;

  const out    = [];
  const groups = {};
  const labels = {};   // step → row label (for history / mini view)
  const section = {};  // step → section heading
  let n = 0;
  let curSection = '';

  const h    = title => { curSection = title; out.push(`<h2>${title}</h2>`); };
  const note = html  => out.push(`<p class="nb-note">${html}</p>`);
  const p    = html  => { section[n] = curSection; out.push(`<p data-step="${n}">${html}</p>`); n++; };
  const rows = list  => {
    out.push('<div class="row-table">');
    for (const [label, html] of list) {
      section[n] = curSection;
      labels[n]  = label;
      out.push(`<span class="row-label" data-step-label="${n}">${label}:</span><span data-step="${n}">${html}</span>`);
      n++;
    }
    out.push('</div>');
  };
  const repeat = (gid, opts, list, endHtml) => {
    const firstStep = n;
    rows(list);
    groups[gid] = { repName: 'Rep', rowTotal: null, ...opts, firstStep, lastStep: n - 1, endStep: n };
    p(endHtml);
  };

  const netRow   = reps => `3 ch (counts as the first dc), 1 dc, ${b(`(2 ch, skip 2 sts, 2 dc) × ${reps}`)}.`;
  const scRow    = sts  => `1 ch, ${b(`${sts} sc`)}: 1 sc in each st and ch across.`;

  out.push('<div class="page-doc-wrap">', '<div id="nb-pattern-doc">');

  // ── Overview ──
  h('Materials');
  note('Olio Mini Bongbong Net Bag by Jini Jini for Yarn-a: a small crocheted net tote made from a front, a back and one long sides-and-bottom strip, joined with single crochet. The handles are worked around the top edge.');
  out.push('<div class="row-table nb-info">',
    '<span class="row-label">Yarn:</span><span>Yarn-a Olio, 3 balls of 70&nbsp;g.</span>',
    '<span class="row-label">Hook:</span><span>3.0&nbsp;mm crochet hook.</span>',
    '<span class="row-label">Also:</span><span>Tapestry needle, stitch markers.</span>',
    '<span class="row-label">Size:</span><span>Width 25.5&nbsp;cm (10.2"), height 21&nbsp;cm (8.4"), depth 10&nbsp;cm (4"). Your size and yarn use may vary with your tension.</span>',
    '<span class="row-label">Videos:</span><span>' + vid('body') + ' · ' + vid('handles') + '</span>',
    '</div>');
  note('The videos are for the full-size Olio Bongbong Net Bag. Its stitch and row counts differ from the mini, so use them only to see the general steps.');
  note('Order of work: ① front and back (2 pieces), ② sides/bottom (1 piece), ③ assemble the body, ④ handles.');

  // ── Front / Back ──
  for (const [gid, name] of [['front', 'Front'], ['back', 'Back']]) {
    h(`${name} (piece ${gid === 'front' ? 1 : 2} of 2)`);
    if (gid === 'front') note(`One net pattern = a dc row plus an sc row. The ${b('front and back are identical')}, 12 net patterns (24 rows) each.`);
    p(`${gid === 'back' ? 'Make the back the same way: ' : ''}Chain ${b('50')}.`);
    repeat(gid, { label: `${name} net pattern`, totalCount: 12, rowTotal: 24 }, [
      ['Odd rows', netRow(12)],
      ['Even rows', scRow(50)],
    ], `Rows 1–24 done (12 net patterns). ${b('Cut the yarn')} and weave in the tail.`);
  }

  // ── Sides / Bottom ──
  h('Sides and bottom (1 piece)');
  note('One long strip of 36 net patterns: 12 for one side, 12 for the bottom and 12 for the other side. You work 12 patterns up from the base chain, then turn to the other side of the base chain and work 24 patterns the other way. The base chain ends up at a bottom corner.');
  p(`Chain ${b('18')}. ${vid('body')}`);
  repeat('sideA', { label: 'First side, 12 net patterns', totalCount: 12, rowTotal: 24 }, [
    ['Odd rows', netRow(4)],
    ['Even rows', scRow(18)],
  ], `Rows 1–24 done (12 net patterns). ${b('Cut the yarn')} and hide the tail.`);
  p(`Turn the strip around and ${b('join the yarn on the other side of the base chain')}, at the corner marked “Connect yarn” in the chart.`);
  repeat('sideB', { label: 'Bottom + other side, 24 net patterns', totalCount: 24, rowTotal: 49 }, [
    ['Odd rows', `1 ch, ${b('18 sc')}. On Row 1 these go into the other side of the base chain; after that, 1 sc in each st and ch across.`],
    ['Even rows', netRow(4)],
  ], `${b('Row 49:')} ${scRow(18)}`);
  p(`${b('Cut the yarn')} and hide the tail. The strip is now 36 net patterns long.`);

  // ── Assembly ──
  h('Assembly');
  note('Join the edges of the front and back to the sides/bottom strip with one row of sc. Each net pattern along the edge has one sc-row edge and one dc-row edge.');
  p(`Hold the ${b('front')} and the sides/bottom strip together with their edges lined up, starting at the top corner. Make 1 ch through both layers.`);
  p(`${b('Row 1:')} ${b('{sc, 2 sc on the post of the dc} × 36')}, then 1 sc. That is 1 sc into each sc-row end and 2 sc around each dc-row post, all around the 3 edges. ${b('Cut the yarn')} and hide the tail.`);
  p(`Repeat on the ${b('back')} of the bag. ${b('Don’t cut the yarn')}: keep it to start the handles.`);

  // ── Handles ──
  h('Handles');
  note(`Worked around the top edge of the bag, starting with the yarn left from joining the back. The top edge has 136 sts: 50 front + 50 back + 18 on each side. ${vid('handles')}`);
  rows([
    ['Row 1', `1 ch, 10 sc, ${b('45 ch, skip 30')}, 38 sc, ${b('45 ch, skip 30')}, 28 sc, sl st to join. <em>The two chains become the handles.</em>`],
    ['Row 2', `1 ch, ${b('166 sc')} (1 in each sc and each ch), sl st to join.`],
    ['Row 3', `1 ch, 9 sc, ${b('sc3tog')}, 41 sc, ${b('sc3tog')}, 36 sc, ${b('sc3tog')}, 41 sc, ${b('sc3tog')}, 27 sc. <em>The sc3togs sit where the handles meet the bag.</em>`],
    ['Row 4', `${b('Sl st all around')} (the pattern says 162 sl st). Fasten off. <em>Row 3 leaves 158 sts by the printed counts, so just sl st into every st around.</em>`],
  ]);
  note('The chart page reminds you to sc3tog at the start of the row after Row 1. In the written instructions those decreases are in Row 3.');

  h('Inner edge of the handles');
  note('Finish the inside of each handle opening: along the skipped stitches and the underside of the 45 chains.');
  repeat('inner', { label: 'Inner edge of handle', totalCount: 2, repName: 'Handle' }, [
    ['Start', `Join the yarn at the ${b('11th stitch')}.`],
    ['Row 1', `30 sc, ${b('sc3tog')}, 41 sc, ${b('sc3tog')}.`],
    ['Row 2', `${b('73 sl st')}. Fasten off.`],
  ], 'Both handles done. Weave in all remaining ends.');

  // ── Glossary ──
  out.push('<h2 class="nb-glossary-hdr">Glossary</h2>', '<div class="bb-glossary">');
  for (const [term, def] of [
    ['ch',             'Chain.'],
    ['sl st',          'Slip stitch.'],
    ['sc',             'Single crochet.'],
    ['dc',             'Double crochet.'],
    ['sc3tog',         'Single crochet three together: a 2-stitch decrease worked over 3 sts.'],
    ['sk / skip',      'Skip the given number of stitches and don’t work into them.'],
    ['Net pattern',    'One dc row and one sc row: the square mesh unit of the bag. The front and back are 12 net patterns tall; the sides/bottom strip is 36 long.'],
    ['Post of the dc', 'The side of a dc at the edge of a row. When joining, work 2 sc around it.'],
    ['Other side of the base chain', 'The free loops on the underside of the starting chain, used to work the second half of the sides/bottom strip in the other direction.'],
    ['{ } or [ ]',     'Work the instructions in the brackets as many times as directed.'],
    ['*',              'Repeat the instructions after the asterisk as directed.'],
  ]) {
    out.push(`<div class="bb-gloss-entry"><span class="bb-gloss-term">${term}</span><span class="bb-gloss-def">${def}</span></div>`);
  }
  out.push('</div>', '</div>', '</div>');

  const stepGroup = {};
  for (const [gid, g] of Object.entries(groups)) {
    for (let s = g.firstStep; s <= g.lastStep; s++) stepGroup[s] = gid;
  }

  return { html: out.join('\n'), groups, stepGroup, labels, section, total: n };
}

const PATTERN = buildPattern();
const TOTAL_STEPS = PATTERN.total;

// ── Toolbar HTML ──────────────────────────────────────────────────────────────
const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Olio Net Bag</h1>
  <div class="divider"></div>
  <button class="btn" id="nb-step-toggle">Step Mode</button>
  <button class="btn small" id="nb-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="nb-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="nb-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="nb-rep-divider" style="display:none"></div>
  <span id="nb-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#d7a13f;white-space:nowrap;"></span>
  <span id="nb-rep-label" style="display:none;font-size:0.75rem;color:#b0897a;white-space:nowrap;"></span>
</div>`;

// ── Storage keys ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'olio-net-bag-step';
const HIST_KEY    = 'olio-net-bag-history';

// ── State ─────────────────────────────────────────────────────────────────────
let stepMode    = false;
let currentStep = 0;
let repCounters = {};
let doc         = null;
let _shellAPI   = null;
let nbPipEl     = null;
let nbPipWindow = null;

function resetReps() {
  repCounters = {};
  for (const gid of Object.keys(PATTERN.groups)) repCounters[gid] = 1;
}

function loadState() {
  resetReps();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    stepMode    = saved?.stepMode ?? false;
    currentStep = Math.min(saved?.step ?? 0, TOTAL_STEPS - 1);
    Object.assign(repCounters, saved?.reps || {});
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ stepMode, step: currentStep, reps: repCounters }));
}

// ── Position text ─────────────────────────────────────────────────────────────
// Row number within the piece, for steps inside a row-counted repeat group.
function rowNumber(step, rep) {
  const gid = PATTERN.stepGroup[step];
  const g   = gid && PATTERN.groups[gid];
  if (!g || !g.rowTotal) return null;
  const perRep = g.lastStep - g.firstStep + 1;
  return (rep - 1) * perRep + (step - g.firstStep) + 1;
}

function repText(gid, rep) {
  const g = PATTERN.groups[gid];
  const row = rowNumber(currentStep, rep);
  return row
    ? `Row ${row} / ${g.rowTotal} · ${g.repName} ${rep} / ${g.totalCount}`
    : `${g.repName} ${rep} / ${g.totalCount}`;
}

function stepName(step, rep) {
  const parts = [PATTERN.section[step] || `Step ${step + 1}`];
  const gid = PATTERN.stepGroup[step];
  if (gid && rep) {
    const row = rowNumber(step, rep);
    parts.push(row ? `Row ${row}` : `${PATTERN.groups[gid].repName} ${rep} · ${PATTERN.labels[step]}`);
  } else if (PATTERN.labels[step]) {
    parts.push(PATTERN.labels[step]);
  } else {
    parts.push(`Step ${step + 1}`);
  }
  return parts.join(' · ');
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
    const gid = PATTERN.stepGroup[currentStep];
    const rep = gid ? repCounters[gid] : undefined;
    const key = `${currentStep}:${rep ?? ''}`;
    if (key === lastHistKey) return;
    lastHistKey = key;
    const entry = { step: currentStep, ts: Date.now() };
    if (rep !== undefined) entry.rep = rep;
    const hist = loadHistory();
    hist.unshift(entry);
    if (hist.length > MAX_HIST) hist.length = MAX_HIST;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
}

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  doc.classList.toggle('step-mode', stepMode);
  const toggleBtn = document.getElementById('nb-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));

  if (stepMode) {
    const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
    if (stepEl) {
      stepEl.classList.add('step-active');
      const label = doc.querySelector(`[data-step-label="${currentStep}"]`);
      if (label) label.classList.add('step-active');
      stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    saveState();
  }

  updateToolbarBadges();
  updatePip();
}

function updateToolbarBadges() {
  const badge = document.getElementById('nb-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const gid = stepMode ? PATTERN.stepGroup[currentStep] : null;
  const repBadge   = document.getElementById('nb-rep-badge');
  const repLabel   = document.getElementById('nb-rep-label');
  const repDivider = document.getElementById('nb-rep-divider');
  if (repBadge)   repBadge.style.display   = gid ? '' : 'none';
  if (repLabel)   repLabel.style.display   = gid ? '' : 'none';
  if (repDivider) repDivider.style.display = gid ? '' : 'none';
  if (gid) {
    if (repBadge) repBadge.textContent = repText(gid, repCounters[gid]);
    if (repLabel) repLabel.textContent = PATTERN.groups[gid].label;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function advance() {
  const { groups, stepGroup } = PATTERN;
  const gid = stepGroup[currentStep];

  if (gid) {
    const g = groups[gid];
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
  const { groups, stepGroup } = PATTERN;
  const gid = stepGroup[currentStep];

  if (gid) {
    const g = groups[gid];
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
    const prevGid = Object.keys(groups).find(id => groups[id].endStep === currentStep);
    if (prevGid) {
      repCounters[prevGid] = groups[prevGid].totalCount;
      currentStep = groups[prevGid].lastStep;
    } else if (currentStep > 0) {
      currentStep--;
    }
  }

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
  if (!stepEl) return '—';
  const label = PATTERN.labels[currentStep];
  return label ? `<strong>${label}:</strong> ${stepEl.innerHTML}` : stepEl.innerHTML;
}

function updatePip() {
  const fbVis = nbPipEl && nbPipEl.classList.contains('visible');
  const winOk = nbPipWindow && !nbPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const gid = stepMode ? PATTERN.stepGroup[currentStep] : null;
    const contentEl = d.getElementById('nb-pip-content');
    const repEl     = d.getElementById('nb-pip-rep');
    const badgeEl   = d.getElementById('nb-pip-badge');
    if (contentEl) contentEl.innerHTML = pipStepHTML();
    if (repEl) {
      repEl.textContent   = gid ? `${repText(gid, repCounters[gid])} · ${PATTERN.groups[gid].label}` : '';
      repEl.style.display = gid ? '' : 'none';
    }
    if (badgeEl) badgeEl.textContent = stepMode ? `Step ${currentStep + 1} / ${TOTAL_STEPS}` : '—';
  }

  if (fbVis) apply(document);
  if (winOk) apply(nbPipWindow.document);
}

function closePip() {
  if (nbPipEl) nbPipEl.classList.remove('visible');
  if (nbPipWindow && !nbPipWindow.closed) nbPipWindow.close();
  nbPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13 url("/background/background.jpg") 22% 32% / cover no-repeat; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #nb-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #nb-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #nb-pip-close:hover { color: #f2e7d5; }
  #nb-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; background: rgba(29, 9, 14, 0.72); }
  #nb-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.85rem; font-weight: 700; color: #d7a13f; flex-shrink: 0; background: rgba(29, 9, 14, 0.72); }
  #nb-pip-ftr { display: flex; justify-content: space-between; align-items: center; gap: 6px;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .nb-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; }
  .nb-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #nb-pip-badge { font-size: 0.72rem; color: #b0897a; flex: 1; text-align: center; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
  a { color: inherit; }
`;

const PIP_BODY_HTML = `
  <div id="nb-pip-hdr">
    <span>Olio Net Bag — Mini View</span>
    <span id="nb-pip-close">✕</span>
  </div>
  <div id="nb-pip-content"></div>
  <div id="nb-pip-rep"></div>
  <div id="nb-pip-ftr">
    <span class="nb-pip-nav" id="nb-pip-prev">&#x25C4;</span>
    <span id="nb-pip-badge"></span>
    <span class="nb-pip-nav" id="nb-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('nb-pip-close').addEventListener('click', closePip);
  d.getElementById('nb-pip-prev').addEventListener('click',  retreat);
  d.getElementById('nb-pip-next').addEventListener('click',  advance);
  d.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') { closePip(); }
  });
}

async function togglePip() {
  const fbVis = nbPipEl && nbPipEl.classList.contains('visible');
  const winOk = nbPipWindow && !nbPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      nbPipWindow = await documentPictureInPicture.requestWindow({ width: 480, height: 170 });
      const d = nbPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      nbPipWindow.addEventListener('pagehide', () => {
        nbPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  // Fallback draggable overlay
  if (!nbPipEl) {
    nbPipEl = document.createElement('div');
    nbPipEl.id = 'nb-pip-overlay';
    nbPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(nbPipEl);

    document.getElementById('nb-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'nb-pip-close') return;
      const rect = nbPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        nbPipEl.style.right = 'auto'; nbPipEl.style.bottom = 'auto';
        nbPipEl.style.left = (ev.clientX - dx) + 'px';
        nbPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  nbPipEl.classList.add('visible');
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
  else if (e.key === 'Escape') { toggleStepMode(); }
}

// ── Page registration ─────────────────────────────────────────────────────────
PageRegistry.register("olio-net-bag", {
  id:     "olio-net-bag",
  title:  "Olio Net Bag",
  status: "Mini bongbong · crochet",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;

    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = PATTERN.html;
    doc = document.getElementById('nb-pattern-doc');

    document.getElementById('nb-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('nb-step-next').addEventListener('click',   advance);
    document.getElementById('nb-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus('Olio Mini Bongbong Net Bag');
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();
  },

  unmount() {
    clearTimeout(histTimer);
    lastHistKey = null;
    closePip();
    if (nbPipEl) { nbPipEl.remove(); nbPipEl = null; }
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
    const gid = PATTERN.stepGroup[entry.step];
    if (gid && entry.rep) repCounters[gid] = entry.rep;
    stepMode = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    const gid = PATTERN.stepGroup[entry.step];
    return {
      label:      stepName(entry.step, entry.rep),
      labelClass: '',
      isCurrent:  stepMode && entry.step === currentStep
                  && (!gid || entry.rep === repCounters[gid]),
    };
  },
  getCurrentPos() {
    const gid = PATTERN.stepGroup[currentStep];
    return {
      label: stepMode ? stepName(currentStep, gid ? repCounters[gid] : undefined) : 'No active step',
      sub:   'Olio Net Bag',
    };
  },
});

})();
