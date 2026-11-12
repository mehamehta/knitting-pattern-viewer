// ─── Lakes Pullover pattern document page ───────────────────────────────────
// Ozetta · Lakes Pullover · worked top-down with saddle shoulders.
// All nine sizes, picked from the toolbar. Every count and measurement is
// pulled from the size table below (in the pattern's XS (S) M (L) … order).
// Each size keeps its own step, repeat counters and sleeve tracker; history is
// one list tagged by size, and the page opens on the most recent entry's size.

(function () {

// ── Sizes ─────────────────────────────────────────────────────────────────────
const SIZE_IDS    = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'];
const SIZE_LABELS = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

// One value per size, XS → 5XL, copied from the PDF.
const D = {
  // finished measurements (schematic, page 12) — inches / cm
  bustIn:     ['40', '44½', '46', '50½', '55', '58½', '62', '65¾', '67½'],
  bustCm:     ['100', '111', '115.5', '126.5', '137.5', '146.5', '155.5', '164', '169'],
  lengthIn:   ['20¼', '20¼', '20¾', '21', '21½', '23', '23¼', '24¼', '24¼'],
  lengthCm:   ['50.5', '50.5', '52', '52.5', '54', '57.5', '58.5', '60.5', '60.5'],
  upperArmIn: ['17¼', '17¼', '18', '19', '20¼', '22½', '24', '25¼', '25¼'],
  upperArmCm: ['43', '43', '45.5', '47.5', '51', '56.5', '60', '63', '63'],
  cuffIn:     ['12', '12', '12½', '13', '13', '13¼', '13¼', '13¾', '13¾'],
  cuffCm:     ['30', '30', '31', '32', '32', '33', '33', '34.5', '34.5'],
  // body bust this size is meant for (page 2)
  fitIn:      ['30', '34', '36', '40', '45', '48', '52', '56', '58'],
  fitCm:      ['76', '86', '91', '101.5', '113.5', '122', '131.5', '140', '145'],
  // yarn (page 1)
  yds:        ['1027', '1124', '1332', '1478', '1583', '1654', '1727', '1825', '1904'],
  meters:     ['939', '1028', '1218', '1351', '1447', '1512', '1579', '1669', '1741'],
  grams:      ['500', '500', '600', '600', '700', '700', '700', '800', '800'],
  skeins:     ['5', '5', '6', '6', '7', '7', '7', '8', '8'],

  // saddles
  saddleSts:     [24, 24, 24, 26, 26, 26, 28, 28, 28],
  saddleMore:    [23, 24, 27, 30, 34, 36, 39, 41, 41],
  saddleRows:    [48, 50, 56, 62, 70, 74, 80, 84, 84],
  saddleLenIn:   ['7', '7¼', '8', '9', '10', '10½', '11½', '12', '12'],
  saddleLenCm:   ['17.5', '18', '20', '22.5', '25', '26.5', '29', '30', '30'],

  // back
  pickUp:        [30, 32, 34, 38, 42, 46, 48, 52, 52],   // along each saddle
  backCo:        [22, 26, 26, 28, 28, 28, 30, 30, 32],   // back neck, also front neck pick-up on collar
  yokeSts:       [82, 90, 94, 104, 112, 120, 126, 134, 136],
  sr1Remain:     [26, 28, 30, 33, 37, 40, 42, 46, 46],
  turnSts:       [4, 4, 4, 5, 5, 6, 6, 6, 6],
  backSrMore:    [5, 5, 5, 5, 5, 5, 5, 6, 6],
  backSrRows:    [12, 12, 12, 12, 12, 12, 12, 14, 14],
  shortRows:     [14, 14, 14, 14, 14, 14, 14, 16, 16],
  unworked:      [2, 4, 6, 3, 7, 4, 6, 4, 4],
  backSrLenIn:   ['2¼', '2¼', '2¼', '2¼', '2¼', '2¼', '2¼', '2½', '2½'],
  backSrLenCm:   ['5.5', '5.5', '5.5', '5.5', '5.5', '5.5', '5.5', '6.5', '6.5'],
  backStRows:    [34, 32, 36, 38, 40, 50, 50, 54, 52],
  backStLenIn:   ['7', '6¾', '7¼', '7½', '8', '9¼', '9¼', '10¼', '10'],
  backStLenCm:   ['17.5', '17', '18.5', '19', '20', '23.5', '23.5', '25.5', '25'],
  armMore:       [3, 4, 4, 4, 5, 5, 6, 6, 7],
  armRows:       [8, 10, 10, 10, 12, 12, 14, 14, 16],
  panelSts:      [90, 100, 104, 114, 124, 132, 140, 148, 152],
  backArmLenIn:  ['8¼', '8¼', '8¾', '9', '9½', '11', '11¼', '12¼', '12¼'],
  backArmLenCm:  ['20.5', '20.5', '22', '22.5', '24', '27.5', '28.5', '30.5', '30.5'],

  // fronts
  frontSrMore:   [0, 0, 0, 0, 0, 0, 0, 1, 1],
  frontSts:      [35, 37, 39, 43, 47, 51, 53, 57, 57],
  frontNeckCo:   [12, 16, 16, 18, 18, 18, 20, 20, 22],
  frontMore:     [15, 14, 16, 17, 18, 23, 23, 25, 24],
  frontRows:     [32, 30, 34, 36, 38, 48, 48, 52, 50],

  // body
  bodySts:       [180, 200, 208, 228, 248, 264, 280, 296, 304],

  // sleeves
  slvPickUp:     [27, 27, 29, 30, 33, 38, 40, 43, 43],
  slvSts:        [78, 78, 82, 86, 92, 102, 108, 114, 114],
  slvSrMore:     [2, 2, 2, 2, 2, 3, 3, 4, 4],
  slvUnworked:   [3, 3, 5, 6, 9, 8, 10, 7, 7],
  slvRounds:     [5, 5, 4, 4, 3, 2, 1, 1, 1],
  decEvery:      [7, 7, 6, 6, 5, 4, 3, 3, 3],
  decTotal:      [12, 12, 13, 14, 17, 21, 24, 26, 26],
  slvEndSts:     [54, 54, 56, 58, 58, 60, 60, 62, 62],

  // folded collar
  colSaddle:     [22, 22, 22, 24, 24, 24, 26, 26, 26],
  colNeckline:   [10, 10, 10, 10, 10, 10, 10, 11, 11],
  colSts:        [98, 106, 106, 114, 114, 114, 122, 124, 128],
};

// ── Video support (page 11) ───────────────────────────────────────────────────
const VIDEOS = {
  pickupBack:  { url: 'https://bit.ly/3CiEC2z', label: 'Picking up along the saddles + CO in extension' },
  slip:        { url: 'https://bit.ly/3Snxp6G', label: 'Slipping sts to prep for German Short Rows' },
  gsr:         { url: 'https://bit.ly/3ShcrGC', label: 'German Short Rows + resolving the ds' },
  pickupLf:    { url: 'https://bit.ly/3BRGJZE', label: 'Picking up along the left front' },
  gsrLf:       { url: 'https://bit.ly/3dQxiS4', label: 'German Short Rows for the left front' },
  neckLf:      { url: 'https://bit.ly/3SjBYz9', label: 'Neck shaping + German Short Rows (left front)' },
  m1rp:        { url: 'https://bit.ly/3LBETR3', label: 'M1RP' },
  backLoop:    { url: 'https://bit.ly/3AdsCM3', label: 'Backwards loop cast-on' },
  k2togl:      { url: 'https://bit.ly/2S8uFAa', label: 'K2tog-L' },
  tubular:     { url: 'https://bit.ly/3rddY5E', label: 'Tubular cast-off' },
  collar:      { url: 'https://bit.ly/3JgWc8P', label: 'Stretchy fold-over collar cast-off' },
};

function vid(key) {
  const v = VIDEOS[key];
  return `<a class="lp-video" href="${v.url}" target="_blank" rel="noopener">&#9654; Video: ${v.label}</a>`;
}

// ── Glossary ──────────────────────────────────────────────────────────────────
const GLOSSARY = [
  { id: 'approx',       term: 'approx.',                def: 'Approximately.' },
  { id: 'bor',          term: 'BOR',                    def: 'Beginning of round — marked with a stitch marker when knitting in the round.' },
  { id: 'co',           term: 'CO',                     def: 'Cast on.' },
  { id: 'ds',           term: 'ds (make ds)',           def: 'Double stitch. With yarn in front, slip the first stitch, then pull the working yarn over the top of the right needle from front to back, rotating the stitch so its two legs stretch over the needle and look like two stitches. Later you “resolve” it by working both legs together as one stitch.' },
  { id: 'gsr',          term: 'German Short Rows',      def: `Short-row shaping that uses a double stitch (ds) at each turn; the ds is later worked as one stitch, closing the gap. ${vid('gsr')}` },
  { id: 'k',            term: 'K',                      def: 'Knit.' },
  { id: 'k2tog',        term: 'K2tog',                  def: 'Knit 2 together — a right-leaning decrease.' },
  { id: 'k2togl',       term: 'K2tog-L',                def: `Knit 2 together left. Sl 1 knitwise, Sl 1 purlwise, insert the left needle into the front of both sts, wrap the yarn and drop only the first st from the left needle, pull tightly on the second st to remove any excess yarn, then let the second st drop from the left needle. A tidier left-leaning decrease; you can use SSK instead. ${vid('k2togl')}` },
  { id: 'm1l',          term: 'M1L',                    def: 'Make 1 left (RS). Insert the left needle under the bar between the stitch you just knit and the one you’re about to knit, from front to back, and K through the back loop. Leans left.' },
  { id: 'm1r',          term: 'M1R',                    def: 'Make 1 right (RS). Insert the left needle under the bar between the stitch you just knit and the one you’re about to knit, from back to front, and K normally (into the front). Leans right.' },
  { id: 'm1rp',         term: 'M1RP',                   def: `Make 1 right purlwise (WS). Insert the left needle under the bar between the stitches from back to front and P normally (into the front of the stitch). ${vid('m1rp')}` },
  { id: 'p',            term: 'P',                      def: 'Purl.' },
  { id: 'pick-up',      term: 'Pick up and knit',       def: 'Insert the needle through the edge of the fabric, wrap the yarn and pull a loop through, creating a new live stitch.' },
  { id: 'pm',           term: 'PM',                     def: 'Place marker.' },
  { id: 'rs',           term: 'RS',                     def: 'Right side — the public-facing side of the fabric.' },
  { id: 'sl',           term: 'Sl',                     def: 'Slip — move a stitch from the left needle to the right needle without working it.' },
  { id: 'sm',           term: 'SM',                     def: 'Slip marker.' },
  { id: 'sts',          term: 'st(s)',                  def: 'Stitch(es).' },
  { id: 'ws',           term: 'WS',                     def: 'Wrong side — the inside-facing side of the fabric.' },
  { id: 'wyib',         term: 'wyib',                   def: 'With yarn in back.' },
  { id: 'wyif',         term: 'wyif',                   def: 'With yarn in front.' },
  { id: 'yo',           term: 'YO',                     def: 'Yarn over. In the collar cast-off it is worked backward: bring the yarn from back to front over the right needle.' },
  { id: 'long-tail-co', term: 'Long-tail cast-on',      def: 'A cast-on that uses a long tail of yarn to form the base and the stitches in one motion; gives a neat, sturdy edge.' },
  { id: 'backloop-co',  term: 'Backwards loop cast-on', def: `Loop the working yarn backwards around the needle for each new stitch; used here to cast on the front neck mid-row. ${vid('backLoop')}` },
  { id: 'tubular-bo',   term: 'Tubular cast-off',       def: `A sewn, stretchy bind-off for 1×1 ribbing, worked with a tapestry needle after two set-up rounds; it looks like the ribbing rolls around the edge. ${vid('tubular')}` },
];

function gl(id, label) {
  return `<span class="gloss-link" data-gloss="${id}">${label}</span>`;
}

// ── Pattern builder ───────────────────────────────────────────────────────────
// Builds one size's document. Steps are numbered in document order; each
// "Repeat Rows X and Y, N more times" with N > 0 becomes a repeat group whose
// endStep is the paragraph right after the repeating rows.
function buildSize(i) {
  const x  = key => D[key][i];
  const b  = s => `<strong>${s}</strong>`;
  const ms = (inKey, cmKey) => `${x(inKey)}" [${x(cmKey)} cm]`;
  const sz = SIZE_LABELS[i];

  const out    = [];
  const groups = {};
  const labels = {};   // step → row label (for history / mini view)
  const section = {};  // step → section heading
  let n = 0;
  let curSection = '';

  const h    = title => { curSection = title; out.push(`<h2>${title}</h2>`); };
  const note = html  => out.push(`<p class="lp-note">${html}</p>`);
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
  // Rows worked `total` times in all, then the end paragraph.
  const repeat = (gid, label, total, list, endHtml) => {
    const firstStep = n;
    rows(list);
    if (total > 1) groups[gid] = { label, totalCount: total, firstStep, lastStep: n - 1, endStep: n };
    p(endHtml);
  };

  out.push('<div class="page-doc-wrap">', '<div id="lp-pattern-doc">');

  // ── Overview ──
  h(`Size ${sz}`);
  note(`The Lakes Pullover is worked from the top down. The saddle shoulders are shaped for a comfortable oversized fit, and the neck has a double layer for warmth. Showing every count for <strong>Size ${sz}</strong> — switch sizes from the toolbar.`);
  note(`<strong>Fit:</strong> about 9½–10½" [24–27 cm] of positive ease. Size ${sz} is for a bust of ${ms('fitIn', 'fitCm')}. The sample is Size S, worn with approx. 10½" [26.5 cm] of ease.`);
  note(`<strong>Finished measurements:</strong> A · Bust ${ms('bustIn', 'bustCm')} · B · Length ${ms('lengthIn', 'lengthCm')} (from mid back) · C · Underarm to hem 12" [30 cm] · D · Upper sleeve ${ms('upperArmIn', 'upperArmCm')} · E · Cuff ${ms('cuffIn', 'cuffCm')} · F · Sleeve from underarm 16" [40.5 cm].`);
  note(`<strong>Gauge:</strong> 18 sts &times; 28 rows = 4" [10 cm] in stockinette st, worked flat on 5 mm (US 8) needles, blocked.`);
  note(`<strong>Needles:</strong> 5 mm (US 8) 16" [40 cm] and 32–40" [80–100 cm] circulars (body, hem, sleeves, cuffs); 3.75 mm (US 5) 16" [40 cm] circular (collar).`);
  note(`<strong>Yarn:</strong> worsted weight, ${b(`${x('yds')} yds [${x('meters')} m] · ${x('grams')} g`)}. Suggested: Wooldreamers La Rinconada (100% eco organic merino, 100 g = 252 yds), ${x('skeins')} skeins.`);
  note(`<strong>Notions:</strong> 3 stitch markers (one for the BOR), scrap yarn or extra cables, tapestry needle, row counter (optional). The right front is the right side of the chest; the left front is the left side.`);

  // ── Saddles ──
  for (const k of [1, 2]) {
    h(`Saddle ${k}`);
    if (k === 1) note('Make two saddles, one for each shoulder.');
    p(`${k === 2 ? 'Make the second saddle the same way: ' : ''}${gl('co', 'CO')} ${b(`${x('saddleSts')} sts`)} on US 8 (5 mm)/16" [40 cm] circular needles using the ${gl('long-tail-co', 'long-tail cast-on')} method.`);
    repeat(`saddle${k}`, `Saddle ${k} rows`, x('saddleMore') + 1, [
      [`Row 1 (${gl('ws', 'WS')})`, `${gl('p', 'P')} across.`],
      [`Row 2 (${gl('rs', 'RS')})`, `${gl('k', 'K')} across.`],
    ], `Repeat Rows 1 and 2, ${x('saddleMore')} more times, for a total of ${b(`${x('saddleRows')} rows`)}.`);
    p('Work one more repeat of Row 1 only (WS): P across.');
    p(`Saddle measures approx. ${b(ms('saddleLenIn', 'saddleLenCm'))}. You are now at RS. Break yarn and let sts rest on cable or scrap yarn.`);
  }

  // ── Back ──
  h('Back');
  note(`You will shape the back of the pullover using ${gl('gsr', 'German Short Rows')}, working flat in stockinette st.`);
  p(`With RS facing and sts on hold at outer edges, ${gl('pick-up', 'pick up and knit')} ${b(`${x('pickUp')} sts`)} along the left saddle (approx. 3 sts from every 5 saddle rows), CO ${b(`${x('backCo')} sts`)} in extension of the left saddle, then pick up and knit ${b(`${x('pickUp')} sts`)} along the right saddle (approx. 3 sts from every 5 saddle rows). ${vid('pickupBack')}`);
  p(`Break yarn. ${b(`${x('yokeSts')} sts`)}.`);
  p(`With WS facing, starting at the end from which you just broke the yarn, ${gl('sl', 'slip')} the first ${b(`${x('pickUp')} sts`)} from the left needle to the right needle. You won’t knit these sts on the first row; you’ll knit them gradually in the following rows while working German Short Rows to make a curved back. ${vid('slip')}`);
  p(`Join new yarn and P${x('backCo')} sts until ${b(`${x('pickUp')} sts`)} remain, turn, make ${gl('ds', 'ds')}. ${vid('gsr')}`);
  rows([
    ['Short Row 1 (RS)', `K until ${b(`${x('sr1Remain')} sts`)} remain. Turn. Make ds.`],
    ['Short Row 2 (WS)', `P until ${b(`${x('sr1Remain')} sts`)} remain, resolving the ds from the previous row when you come to it. Turn. Make ds.`],
  ]);
  note(`Continue working German Short Rows, each time turning ${x('turnSts')} sts after the last turn: work to your last ds, resolve it by knitting (RS) or purling (WS) the ds as one st, work another ${x('turnSts')} sts, and turn. Tip: mark each ds with a removable stitch marker if it’s hard to see.`);
  repeat('backSr', 'Back short rows 3–4', x('backSrMore') + 1, [
    ['Short Row 3 (RS)', `K to the ds, resolve by knitting the ds, K${b(x('turnSts'))}, turn, make ds.`],
    ['Short Row 4 (WS)', `P to the ds, resolve by purling the ds, P${b(x('turnSts'))}, turn, make ds.`],
  ], `Repeat Short Rows 3 and 4, ${x('backSrMore')} more times, for a total of ${x('backSrRows')} rows. You have now worked ${x('shortRows')} short rows. At the last turn there are ${b(`${x('unworked')} unworked sts`)} after the ds on both the left and right side of your work. The next row is a RS row. Back measures approx. ${ms('backSrLenIn', 'backSrLenCm')} from the center back cast-on edge.`);
  note(`Now work back and forth in stockinette st across all back sts, resolving the final two ds as you work, for ${x('backStRows')} more rows.`);
  repeat('backSt', 'Back stockinette rows', x('backStRows') / 2, [
    ['Row 1 (RS)', 'K across. <em>First time only: resolve the final two ds as you come to them.</em>'],
    ['Row 2 (WS)', 'P across.'],
  ], `You have worked ${b(`${x('backStRows')} rows`)}, ending with a WS row. Back measures approx. ${b(ms('backStLenIn', 'backStLenCm'))} from the center back cast-on edge.`);
  note('Next, work increases to shape the armholes:');
  repeat('backArm', 'Back armhole increases', x('armMore') + 1, [
    ['Row 1 (RS)', `K4, ${gl('m1l', 'M1L')}, K until 4 sts remain, ${gl('m1r', 'M1R')}, K4. (2 sts increased).`],
    ['Row 2 (WS)', 'P across.'],
  ], `Repeat Rows 1 and 2, ${x('armMore')} more times, for a total of ${x('armRows')} rows. ${b(`${x('panelSts')} sts`)}. Back measures approx. ${ms('backArmLenIn', 'backArmLenCm')} from the center back cast-on edge.`);
  p('You are now at RS. Break yarn and let sts rest on cable or scrap yarn.');

  // ── Left Front ──
  const frontSr = (side, ws) => {
    const [a, c] = ws ? ['WS', 'RS'] : ['RS', 'WS'];
    const [w, wAll] = ws ? ['P', 'K'] : ['K', 'P'];
    const verb = ws ? 'purling' : 'knitting';
    rows([
      [`Short Row 1 (${a})`, `${w}${b(x('turnSts'))} sts, turn, make ds.`],
      [`Short Row 2 (${c})`, `${wAll} across.`],
    ]);
    note(`Continue working German Short Rows, each time turning ${x('turnSts')} sts after the last turn: work to your last ds, resolve it by ${verb} (${a}) the ds as one st, work another ${x('turnSts')} sts, and turn.`);
    const more = x('frontSrMore');
    repeat(`${side}Sr`, `${side === 'lf' ? 'Left' : 'Right'} front short rows 3–4`, more + 1, [
      [`Short Row 3 (${a})`, `${w} to the ds, resolve by ${verb} the ds, ${w}${b(x('turnSts'))} sts, turn, make ds.`],
      [`Short Row 4 (${c})`, `${wAll} across.`],
    ], more > 0
      ? `Repeat Short Rows 3 and 4, ${more} more time. The next row is a ${a} row.`
      : `Short Rows 3 and 4 are worked once only for Size ${sz} (no repeats). The next row is a ${a} row.`);
  };

  h('Left Front');
  p(`With RS of the back piece facing and CO sts on top, attach yarn and use the short end of the tail to pick up and knit ${b(`${x('pickUp')} sts`)} along the left saddle, beginning at center back. Slide sts to the needle’s opposite end and begin work on the RS. ${vid('pickupLf')}`);
  note(`Work German Short Rows as follows: ${vid('gsrLf')}`);
  frontSr('lf', false);
  note(`Next, work German Short Rows and increases to shape the neck edge: ${vid('neckLf')}`);
  repeat('lfNeck', 'Left front neck shaping', 5, [
    ['Short Row 1 (RS)', `K1, M1L, K to the ds, resolve by knitting the ds, K${b(x('turnSts'))}, turn, make ds. (1 st increased).`],
    ['Short Row 2 (WS)', 'P across.'],
  ], `Repeat Short Rows 1 and 2, 4 more times, for a total of 10 rows. You have now worked ${x('shortRows')} short rows. At the last turn there are ${b(`${x('unworked')} unworked sts`)} after the ds on the left side of your work. ${b(`${x('frontSts')} sts`)}. You are now at RS.`);
  p('Break yarn and let sts rest on cable or scrap yarn while working the Right Front.');

  // ── Right Front ──
  h('Right Front');
  p(`With RS of the back piece facing and CO sts on top, attach yarn and pick up and knit ${b(`${x('pickUp')} sts`)}, beginning from the slanted edge of the right saddle.`);
  note('Work German Short Rows as follows:');
  frontSr('rf', true);
  note('Next, work German Short Rows and increases to shape the neck edge:');
  repeat('rfNeck', 'Right front neck shaping', 5, [
    ['Short Row 1 (WS)', `P1, ${gl('m1rp', 'M1RP')}, P to the ds, resolve by purling the ds, P${b(x('turnSts'))} sts, turn, make ds. (1 st increased).`],
    ['Short Row 2 (RS)', 'K across.'],
  ], `Repeat Short Rows 1 and 2, 4 more times, for a total of 10 rows. You have now worked ${x('shortRows')} short rows. At the last turn there are ${b(`${x('unworked')} unworked sts`)} after the ds on the right side of your work. After the final Short Row 2, <em>do not turn your work</em> — with the RS facing, sts will be cast on from this point to form the front neckline. ${b(`${x('frontSts')} sts`)}.`);
  p('Do not break yarn.');

  // ── Join ──
  h('Join Right Front and Left Front');
  p(`Next Row (RS): CO ${b(`${x('frontNeckCo')} sts`)} in extension of the right front using the ${gl('backloop-co', 'backwards loop cast-on')} method, place the left front sts on the needles and K across the ${b(`${x('frontSts')} sts`)}, resolving the ds as you work. ${vid('backLoop')}`);
  p(`Following Row (WS): P across all Front sts, resolving the final ds as you work. You have created the front neckline and formed the single front panel. ${b(`${x('yokeSts')} sts`)}.`);
  note('Next, work back and forth as follows:');
  repeat('front', 'Front stockinette rows', x('frontMore') + 1, [
    ['Row 1 (RS)', 'K across.'],
    ['Row 2 (WS)', 'P across.'],
  ], `Repeat Rows 1 and 2, ${x('frontMore')} more times, for a total of ${b(`${x('frontRows')} rows`)}.`);
  note('Next, work increases to shape the armholes:');
  repeat('frontArm', 'Front armhole increases', x('armMore') + 1, [
    ['Row 1 (RS)', 'K4, M1L, K until 4 sts remain, M1R, K4. (2 sts increased).'],
    ['Row 2 (WS)', 'P across.'],
  ], `Repeat Rows 1 and 2, ${x('armMore')} more times, for a total of ${x('armRows')} rows. ${b(`${x('panelSts')} sts`)}.`);

  // ── Body ──
  h('Body');
  p(`Join the front panel to the back panel and form the armholes: with RS facing, K across the ${b(`${x('panelSts')} Front sts`)}, place the Back sts on the needles and K across the ${b(`${x('panelSts')} Back sts`)}, ${gl('pm', 'PM')} and join to work in the round. The ${gl('bor', 'BOR')} is now at the right underarm. ${b(`${x('bodySts')} sts`)}.`);
  p('Work in the round in stockinette st (knit all sts) until the body measures approx. <strong>8" [20 cm]</strong> from the underarm, or until it is 4" [10 cm] less than your desired final length. <em>Adding length will need more yarn.</em>');

  // ── Hem ──
  h('Hem');
  p('With US 8 (5 mm)/32–40" [80–100 cm] circular needles, work *K1, P1* repeat *–* until the hem measures approx. <strong>4" [10 cm]</strong>.');
  note(`If using the ${gl('tubular-bo', 'tubular cast-off')}, work two set-up rounds at the end of your ribbing:`);
  rows([
    ['Set-up Round 1', `*K1, Sl 1 ${gl('wyif', 'wyif')}* repeat *–*.`],
    ['Set-up Round 2', `*Sl 1 ${gl('wyib', 'wyib')}, P1* repeat *–*.`],
  ]);
  p(`Cast off all sts using the tubular cast-off method or your favorite cast-off. ${vid('tubular')}`);

  // ── Sleeves ──
  h('Sleeves (same for both)');
  p(`Beginning at the bottom of the armhole opening with US 8 (5 mm)/16" [40 cm] circular needles, pick up and knit ${b(`${x('slvPickUp')} sts`)} from the area between the underarm and the saddle (approx. 2 sts from every 3 rows), PM (the <em>first marker</em>).`);
  p(`Break yarn, place the ${b(`${x('saddleSts')} saddle sts`)} on the needles, PM (the <em>second marker</em>).`);
  p(`Attach yarn and pick up and knit ${b(`${x('slvPickUp')} sts`)} from the area between the saddle and the underarm (approx. 2 sts from every 3 rows). PM at the underarm to mark the BOR. ${b(`${x('slvSts')} sts`)}.`);
  note('Shape the upper sleeve with German Short Rows:');
  rows([
    ['Short Row 1 (RS)', `K across until the second marker, ${gl('sm', 'SM')}, K6, turn, make ds.`],
    ['Short Row 2 (WS)', 'P across until the first marker, SM, P6, turn, make ds.'],
  ]);
  note('Continue working German Short Rows, each time turning 6 sts after the last turn: work to your last ds, resolve it by knitting (RS) or purling (WS) the ds as one st, work another 6 sts, and turn.');
  repeat('slvSr', 'Sleeve short rows 3–4', x('slvSrMore') + 1, [
    ['Short Row 3 (RS)', 'K across until the second marker, SM, K to the ds, resolve by knitting the ds, K6, turn, make ds.'],
    ['Short Row 4 (WS)', 'P across until the first marker, SM, P to the ds, resolve by purling the ds, P6, turn, make ds.'],
  ], `Repeat Short Rows 3 and 4, ${x('slvSrMore')} more times. At the last turn there are ${b(`${x('slvUnworked')} unworked sts`)} after the ds on either side of the BOR marker. You are now at RS.`);
  p('From your last turn, K across to the BOR, resolving the ds and removing the first and second markers as you come to them.');
  const rnds = x('slvRounds');
  note(`Work in the round in stockinette st for ${rnds} round${rnds > 1 ? 's' : ''}, resolving the final ds as you come to it:`);
  repeat('slvRnd', 'Sleeve stockinette rounds', rnds, [
    ['Stockinette round', 'K all sts. <em>First round only: resolve the final ds as you come to it.</em>'],
  ], `Decrease round: K1, ${gl('k2tog', 'K2tog')}, K until 3 sts remain before the marker, ${gl('k2togl', 'K2tog-L')}, K1. (2 sts decreased). ${b(`${x('slvSts') - 2} sts`)}. ${vid('k2togl')}`);
  p(`Continue in the round in stockinette st until the sleeve measures approx. <strong>12" [30.5 cm]</strong> from the underarm, while at the same time working a decrease round every ${b(`${x('decEvery')} rounds`)} for a total of ${b(`${x('decTotal')} decrease rounds`)} (including the first one). After the final decrease round you have ${b(`${x('slvEndSts')} sts`)}.`);

  out.push(`
    <div id="lp-sleeve-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Sleeve Decrease Tracker · Size ${sz}</span>
        <button class="btn small" id="lp-slt-reset">Reset all</button>
      </div>
      <div class="slt-target">Target: a decrease round every ${x('decEvery')} rounds · ${x('decTotal')} decrease rounds · ${x('slvEndSts')} sts remaining. Count the first decrease round as round 1 and log each decrease as you work it.</div>
      <div class="slt-two-col">
        ${[0, 1].map(s => `<div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve ${s + 1}</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="lp-slt-r${s}-minus">&#x2212;</button>
              <span class="slt-num" id="lp-slt-r${s}">0</span>
              <button class="btn small" id="lp-slt-r${s}-plus">+</button>
            </div>
          </div>
          <div class="slt-next" id="lp-slt-next${s}"></div>
          <button class="btn slt-dec-btn" id="lp-slt-d${s}-log">Log decrease at round <span id="lp-slt-d${s}-row">0</span></button>
          <div class="slt-log" id="lp-slt-d${s}-log-list"></div>
        </div>`).join('\n        ')}
      </div>
    </div>`);

  p('At this point, move on to the sleeve cuff, or continue in stockinette until the sleeve measures 4" [10 cm] less than your desired final length. <em>Adding length will need more yarn.</em>');

  // ── Sleeve Cuffs ──
  h('Sleeve Cuffs (same for both)');
  p('With US 8 (5 mm)/16" [40 cm] circular needles or the magic loop method, work *K1, P1* repeat *–* until the cuff measures approx. <strong>4" [10 cm]</strong>.');
  note('If using the tubular cast-off, work two set-up rounds at the end of your ribbing:');
  rows([
    ['Set-up Round 1', '*K1, Sl 1 wyif* repeat *–*.'],
    ['Set-up Round 2', '*Sl 1 wyib, P1* repeat *–*.'],
  ]);
  p(`Cast off all sts using the tubular cast-off method or your favorite cast-off. ${vid('tubular')}`);
  p('Work the second sleeve and cuff the same way.');

  // ── Folded Collar ──
  h('Folded Collar');
  p(`With US 5 (3.75 mm)/16" [40 cm] circular needles and RS facing, beginning at the right back, pick up ${b(`${x('backCo')} sts`)} along the back (one in each initial cast-on st), ${b(`${x('colSaddle')} sts`)} along the left saddle, ${b(`${x('colNeckline')} sts`)} down the left neckline (approx. 2 sts out of every 3 rows between the left saddle and the center front CO sts), ${b(`${x('frontNeckCo')} sts`)} along the center front (one in each st cast on when joining the fronts), ${b(`${x('colNeckline')} sts`)} up the right neckline (approx. 2 sts out of every 3 rows), and ${b(`${x('colSaddle')} sts`)} along the right saddle. PM to mark the BOR. ${b(`${x('colSts')} sts`)}.`);
  note('The collar counts are suggestions: pick up fewer for a closer fit or more for a looser one. Just make sure you have an even number of sts so the ribbing works out.');
  p('Work *K1, P1* repeat *–* until the collar measures approx. <strong>4½" [11.5 cm]</strong>.');
  note(`Now fold the collar: keeping the sts on the needles, fold it in half so the live sts are on the inside of the neckline. You’ll attach them to the inner base of the collar (where you picked up sts) by picking up and casting off to the inside with a stretchy bind-off, so the collar still fits over your head. Tip: it can be easier with the pullover turned inside out. ${vid('collar')}`);
  rows([
    ['Step 1', 'Pick up one st at the base of the neckline, directly below the first live st on your left needle. K2tog the picked-up st and the first live st (i.e. K2tog the first two sts now on your left needle).'],
    ['Step 2', `${gl('yo', 'YO')} backward (bring the yarn from back to front over the right needle).`],
    ['Step 3', 'As in Step 1, pick up the next st at the base of the neckline and K2tog that st and the next live st.'],
    ['Step 4', 'On your right needle, pull sts 2 and 3 over st 1. One st is cast off; one st remains on the right needle.'],
  ]);
  p('Repeat Steps 2–4 until all sts are cast off.');

  // ── Finishing ──
  h('Finishing');
  p('Weave in loose ends. Block your #LakesPullover to the finished measurements at the top of this page. Wear forever.');

  out.push(
    '<h2 class="lp-glossary-hdr">Glossary</h2>',
    '<div class="bb-glossary">',
    ...GLOSSARY.map(g => `<div class="bb-gloss-entry" id="lp-gloss-${g.id}"><span class="bb-gloss-term">${g.term}</span><span class="bb-gloss-def">${g.def}</span></div>`),
    '</div>',
    '</div>', '</div>',
  );

  const stepGroup = {};
  for (const [gid, g] of Object.entries(groups)) {
    for (let s = g.firstStep; s <= g.lastStep; s++) stepGroup[s] = gid;
  }

  return {
    label:  sz,
    html:   out.join('\n'),
    total:  n,
    groups,
    stepGroup,
    labels,
    section,
    decEvery:  x('decEvery'),
    decTotal:  x('decTotal'),
    slvStart:  x('slvSts'),
  };
}

const SIZES = {};
SIZE_IDS.forEach((id, i) => { SIZES[id] = buildSize(i); });

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Lakes Pullover</h1>
  <select id="lp-size-select" class="btn" style="cursor:pointer;">
    ${SIZE_IDS.map((id, i) => `<option value="${id}">Size ${SIZE_LABELS[i]} · ${D.bustIn[i]}" [${D.bustCm[i]} cm] bust</option>`).join('')}
  </select>
  <div class="divider"></div>
  <button class="btn" id="lp-step-toggle">Step Mode</button>
  <button class="btn small" id="lp-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="lp-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step —</span>
  <button class="btn small" id="lp-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="lp-rep-divider" style="display:none"></div>
  <span id="lp-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#d7a13f;white-space:nowrap;"></span>
  <span id="lp-rep-label" style="display:none;font-size:0.75rem;color:#b0897a;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
// STATE_KEY: { size, sizes: { [sizeId]: { stepMode, step, reps } } }
// SLT_KEY:   { [sizeId]: [{ rows, decs }, { rows, decs }] }
const STATE_KEY = 'lakes-pullover-state';
const SLT_KEY   = 'lakes-pullover-sleeves';

let size        = 's';
let stepMode    = false;
let currentStep = 0;
let repCounters = {};

let doc         = null;  // #lp-pattern-doc element
let _bodyMount  = null;
let _shellAPI   = null;
let lpPipEl     = null;  // fallback overlay element
let lpPipWindow = null;  // documentPictureInPicture window
let pipSleeveMode = false;

let slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];

function S() { return SIZES[size]; }

function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}

// The size of the most recent history entry, else the last size picked.
function pickStartSize() {
  const latest = loadHistory().reduce((best, e) => (!best || e.ts > best.ts ? e : best), null);
  if (latest && SIZES[latest.size]) return latest.size;
  const saved = readJSON(STATE_KEY, {}).size;
  return SIZES[saved] ? saved : 's';
}

function loadState() {
  const saved = (readJSON(STATE_KEY, {}).sizes || {})[size] || {};
  stepMode    = saved.stepMode ?? false;
  currentStep = Math.min(saved.step ?? 0, S().total - 1);
  repCounters = {};
  for (const gid of Object.keys(S().groups)) repCounters[gid] = 1;
  Object.assign(repCounters, saved.reps || {});
}

function saveState() {
  const all = readJSON(STATE_KEY, {});
  all.size  = size;
  all.sizes = all.sizes || {};
  all.sizes[size] = { stepMode, step: currentStep, reps: repCounters };
  localStorage.setItem(STATE_KEY, JSON.stringify(all));
}

// ── History ───────────────────────────────────────────────────────────────────
// One list for all sizes; each entry is { size, step, rep?, ts }.
const LS_HISTORY_LP = 'lakes-pullover-history';
const MAX_HIST_LP   = 500;

let histTimerLP   = null;
let lastHistKeyLP = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY_LP)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY_LP, JSON.stringify(hist));
}
function recordHistEntry() {
  histTimerLP = null;
  const gid = S().stepGroup[currentStep];
  const rep = gid ? repCounters[gid] : undefined;
  const key = `${size}:${currentStep}:${rep ?? ''}`;
  if (key === lastHistKeyLP) return;
  lastHistKeyLP = key;
  const hist = loadHistory();
  const entry = { size, step: currentStep, ts: Date.now() };
  if (rep !== undefined) entry.rep = rep;
  hist.unshift(entry);
  if (hist.length > MAX_HIST_LP) hist.length = MAX_HIST_LP;
  saveHistory(hist);
  if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimerLP);
  histTimerLP = setTimeout(recordHistEntry, 1500);
}
// Write a pending entry now (before the size changes under it).
function flushHistEntry() {
  if (!histTimerLP) return;
  clearTimeout(histTimerLP);
  recordHistEntry();
}

function stepName(sizeId, step, rep) {
  const sd    = SIZES[sizeId];
  const parts = [`Size ${sd.label}`, sd.section[step] || `Step ${step + 1}`];
  parts.push(sd.labels[step] ? sd.labels[step].replace(/<[^>]+>/g, '') : `Step ${step + 1}`);
  const gid = sd.stepGroup[step];
  if (gid && rep) parts.push(`Rep ${rep}/${sd.groups[gid].totalCount}`);
  return parts.join(' · ');
}

// ── Sleeve tracker ───────────────────────────────────────────────────────────
function loadSltState() {
  slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];
  const saved = readJSON(SLT_KEY, {})[size];
  if (saved && Array.isArray(saved) && saved.length === 2) slt = saved;
}

function saveSltState() {
  const all = readJSON(SLT_KEY, {});
  all[size] = slt;
  localStorage.setItem(SLT_KEY, JSON.stringify(all));
}

// Where this sleeve stands against the pattern's decrease schedule.
function sltProgress(s) {
  const { decEvery, decTotal, slvStart } = S();
  const done = s.decs.length;
  const sts  = slvStart - 2 * done;
  if (done >= decTotal) return { done: true, text: `All ${decTotal} decreases done · ${sts} sts` };
  if (done === 0) return { done: false, text: `Decrease 1 / ${decTotal} is the first decrease round (round 1) · ${sts} sts` };
  const next = s.decs[done - 1] + decEvery;
  const togo = next - s.rows;
  const when = togo <= 0 ? 'due now' : `in ${togo} round${togo > 1 ? 's' : ''}`;
  return { done: false, text: `Decrease ${done + 1} / ${decTotal} at round ${next} · ${when} · ${sts} sts` };
}

function renderSlt(i) {
  const s      = slt[i];
  const rowsEl = document.getElementById(`lp-slt-r${i}`);
  const rowLbl = document.getElementById(`lp-slt-d${i}-row`);
  const nextEl = document.getElementById(`lp-slt-next${i}`);
  const logEl  = document.getElementById(`lp-slt-d${i}-log-list`);

  if (rowsEl) rowsEl.textContent = s.rows;
  if (rowLbl) rowLbl.textContent = s.rows;
  if (nextEl) {
    const prog = sltProgress(s);
    nextEl.textContent = prog.text;
    nextEl.classList.toggle('slt-next-done', prog.done);
  }

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
        return `<div class="slt-entry"><span class="slt-n">#${j + 1}</span><span class="slt-r">Round ${row}</span>${iv}<span class="slt-del" data-i="${i}" data-j="${j}">×</span></div>`;
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

function wireSleeveTracker() {
  [0, 1].forEach(i => {
    document.getElementById(`lp-slt-r${i}-plus`).addEventListener('click', () => {
      slt[i].rows++; saveSltState(); renderSlt(i);
    });
    document.getElementById(`lp-slt-r${i}-minus`).addEventListener('click', () => {
      if (slt[i].rows > 0) { slt[i].rows--; saveSltState(); renderSlt(i); }
    });
    document.getElementById(`lp-slt-d${i}-log`).addEventListener('click', () => {
      slt[i].decs.push(slt[i].rows); saveSltState(); renderSlt(i);
    });
  });
  document.getElementById('lp-slt-reset').addEventListener('click', () => {
    if (confirm(`Reset the Size ${S().label} sleeve tracker for both sleeves?`)) {
      slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];
      saveSltState(); updateSleeveTracker();
    }
  });
}

// ── Glossary linking ──────────────────────────────────────────────────────────
let glossReturnEl = null;

function flashEl(el) {
  el.classList.remove('gloss-flash');
  // eslint-disable-next-line no-unused-expressions
  el.offsetWidth; // force reflow so the animation restarts
  el.classList.add('gloss-flash');
}

function showGlossBackBtn() {
  const btn = document.getElementById('lp-gloss-back');
  if (btn) btn.classList.add('visible');
}

function hideGlossBackBtn() {
  const btn = document.getElementById('lp-gloss-back');
  if (btn) btn.classList.remove('visible');
}

function jumpToGloss(sourceEl) {
  glossReturnEl = sourceEl;
  const id = sourceEl.dataset.gloss;
  const target = doc.querySelector(`#lp-gloss-${id}`);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  flashEl(target);
  showGlossBackBtn();
}

function backToPattern() {
  // If step mode is active, the active step is the most reliable "place".
  const target = stepMode
    ? doc.querySelector(`[data-step="${currentStep}"]`)
    : glossReturnEl;
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    flashEl(target);
  }
  hideGlossBackBtn();
}

function wireGlossaryLinks() {
  doc.querySelectorAll('.gloss-link').forEach(el => {
    el.addEventListener('click', () => jumpToGloss(el));
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function findRowLabel() {
  return doc.querySelector(`[data-step-label="${currentStep}"]`);
}

// Render the current size's document and wire everything inside it.
function renderBody() {
  _bodyMount.innerHTML = S().html;
  doc = document.getElementById('lp-pattern-doc');
  wireGlossaryLinks();
  wireSleeveTracker();
  loadSltState();
  updateSleeveTracker();
}

function setStatus() {
  if (_shellAPI) _shellAPI.setStatus(`Lakes Pullover — pattern reference · Size ${S().label}`);
}

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  doc.classList.toggle('step-mode', stepMode);

  const toggleBtn = document.getElementById('lp-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));

  if (!stepMode) {
    updateToolbarBadges();
    return;
  }

  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (stepEl) {
    stepEl.classList.add('step-active');
    const label = findRowLabel();
    if (label) label.classList.add('step-active');
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  updateToolbarBadges();
  saveState();
  updatePip();
}

function updateToolbarBadges() {
  const total = S().total;
  const badge = document.getElementById('lp-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${total}`
      : `Step — / ${total}`;
  }

  const repBadge   = document.getElementById('lp-rep-badge');
  const repLabel   = document.getElementById('lp-rep-label');
  const repDivider = document.getElementById('lp-rep-divider');

  const gid = stepMode ? S().stepGroup[currentStep] : null;
  const showRep = !!gid;

  if (repBadge)   repBadge.style.display   = showRep ? '' : 'none';
  if (repLabel)   repLabel.style.display   = showRep ? '' : 'none';
  if (repDivider) repDivider.style.display = showRep ? '' : 'none';

  if (showRep && gid) {
    const g = S().groups[gid];
    if (repBadge) repBadge.textContent = `Rep ${repCounters[gid]} / ${g.totalCount}`;
    if (repLabel) repLabel.textContent = g.label;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function advance() {
  const { groups, stepGroup, total } = S();
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
  } else if (currentStep < total - 1) {
    currentStep++;
  }

  hideGlossBackBtn();
  updateDisplay();
  scheduleHistEntry();
}

function retreat() {
  const { groups, stepGroup } = S();
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
      const g = groups[prevGid];
      repCounters[prevGid] = g.totalCount;
      currentStep = g.lastStep;
    } else if (currentStep > 0) {
      currentStep--;
    }
  }

  hideGlossBackBtn();
  updateDisplay();
  scheduleHistEntry();
}

function toggleStepMode() {
  stepMode = !stepMode;
  updateDisplay();
  if (stepMode) scheduleHistEntry();
}

// ── Size change ───────────────────────────────────────────────────────────────
function changeSize(id) {
  if (!SIZES[id] || id === size) return;
  flushHistEntry();
  lastHistKeyLP = null;
  size = id;
  loadState();
  saveState();
  const select = document.getElementById('lp-size-select');
  if (select) select.value = size;
  renderBody();
  hideGlossBackBtn();
  setStatus();
  if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  updateDisplay();
  updatePip();
}

// ── Mini View (PiP) ───────────────────────────────────────────────────────────
function pipStepHTML() {
  if (!doc) return '';
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (!stepEl) return '';

  const labelEl = doc.querySelector(`[data-step-label="${currentStep}"]`);
  const label   = labelEl ? labelEl.textContent.trim() : '';
  const content = stepEl.innerHTML;
  return label ? `<span class="pip-lbl">${label}</span> ${content}` : content;
}

function pipSltHTML() {
  return slt.map((s, i) => `<div class="${i === 1 ? 'pip-slt-s2' : ''}">
      <div class="pip-slt-main">
        <span class="pip-slt-label">S${i + 1}</span>
        <span class="pip-slt-rows">${s.rows} rnds</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="minus" data-pip-slt-sleeve="${i}">−</span>
        <span class="pip-slt-ctrl" data-pip-slt-action="plus"  data-pip-slt-sleeve="${i}">+</span>
        <span class="pip-slt-log"  data-pip-slt-action="dec"   data-pip-slt-sleeve="${i}">Log dec at ${s.rows}</span>
      </div>
      <div class="pip-slt-cadence">${sltProgress(s).text}</div>
    </div>`).join('');
}

function updatePip() {
  const fbVis = lpPipEl  && lpPipEl.classList.contains('visible');
  const winOk = lpPipWindow && !lpPipWindow.closed;
  if (!fbVis && !winOk) return;

  const { groups, stepGroup, total, label } = S();

  function apply(d) {
    const contentEl = d.getElementById('lp-pip-content');
    const repEl     = d.getElementById('lp-pip-rep');
    const badgeEl   = d.getElementById('lp-pip-badge');
    const sltEl     = d.getElementById('lp-pip-slt');
    const titleEl   = d.getElementById('lp-pip-title');
    const sltBtnEl  = d.getElementById('lp-pip-slt-btn');
    const prevEl    = d.getElementById('lp-pip-prev');
    const nextEl    = d.getElementById('lp-pip-next');

    if (pipSleeveMode) {
      if (contentEl) contentEl.style.display = 'none';
      if (repEl)     repEl.style.display     = 'none';
      if (sltEl)   { sltEl.style.display = 'block'; sltEl.innerHTML = pipSltHTML(); }
      if (titleEl)   titleEl.textContent     = `Lakes Pullover (${label}) — Sleeves`;
      if (sltBtnEl)  sltBtnEl.textContent    = 'Steps';
      if (prevEl)    prevEl.style.visibility = 'hidden';
      if (nextEl)    nextEl.style.visibility = 'hidden';
      if (badgeEl)   badgeEl.textContent     = '';
    } else {
      const html    = pipStepHTML();
      const gid     = stepMode ? stepGroup[currentStep] : null;
      const repText = gid
        ? `Rep ${repCounters[gid]} / ${groups[gid].totalCount} · ${groups[gid].label}`
        : '';
      const badge   = stepMode ? `Step ${currentStep + 1} / ${total}` : '—';

      if (contentEl) { contentEl.style.display = ''; contentEl.innerHTML = html; }
      if (repEl)   { repEl.textContent = repText; repEl.style.display = repText ? '' : 'none'; }
      if (sltEl)     sltEl.style.display     = 'none';
      if (titleEl)   titleEl.textContent     = `Lakes Pullover (${label}) — Mini View`;
      if (sltBtnEl)  sltBtnEl.textContent    = 'Sleeves';
      if (prevEl)    prevEl.style.visibility = '';
      if (nextEl)    nextEl.style.visibility = '';
      if (badgeEl)   badgeEl.textContent     = badge;
    }
  }

  if (fbVis) apply(document);
  if (winOk) apply(lpPipWindow.document);
}

function closePip() {
  if (lpPipEl) lpPipEl.classList.remove('visible');
  if (lpPipWindow && !lpPipWindow.closed) lpPipWindow.close();
  lpPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13 url("/background/background.jpg") 22% 32% / cover no-repeat; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #lp-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #lp-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #lp-pip-close:hover { color: #f2e7d5; }
  #lp-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; background: rgba(29, 9, 14, 0.72); }
  #lp-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.75rem; color: #d7a13f; flex-shrink: 0; }
  #lp-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .lp-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; font-size: 0.9rem; }
  .lp-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #lp-pip-badge { font-size: 0.72rem; color: #b0897a; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
  a { color: #d7a13f; }
  .pip-lbl { font-weight: 700; color: #e8dcc4; }
  .gloss-link { border-bottom: 1px dotted currentColor; }
  #lp-pip-slt-btn { cursor: pointer; padding: 0 5px; color: #6d4a45; font-size: 0.7rem; border-radius: 3px; }
  #lp-pip-slt-btn:hover { color: #b98f7d; background: #562634; }
  #lp-pip-slt { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
  .pip-slt-s2 { border-top: 1px solid #562f3a; margin-top: 5px; padding-top: 5px; }
  .pip-slt-main { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
  .pip-slt-label { font-size: 0.72rem; font-weight: 700; color: #e8dcc4; min-width: 1.6em; }
  .pip-slt-rows { font-size: 0.88rem; font-weight: 700; color: #d7a13f; min-width: 4.5em; }
  .pip-slt-ctrl { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px; color: #b98f7d; font-weight: 700; user-select: none; }
  .pip-slt-ctrl:hover { background: #63303d; color: #f2e7d5; }
  .pip-slt-log { cursor: pointer; padding: 1px 8px; background: #562634; border-radius: 3px; color: #b98f7d; font-size: 0.7rem; flex: 1; text-align: center; user-select: none; }
  .pip-slt-log:hover { background: #63303d; color: #9ab8a0; }
  .pip-slt-cadence { font-size: 0.68rem; color: #b0897a; padding-left: 1.6em; }
`;

const PIP_BODY_HTML = `
  <div id="lp-pip-hdr">
    <span id="lp-pip-title">Lakes Pullover — Mini View</span>
    <div style="display:flex;align-items:center;gap:8px">
      <span id="lp-pip-slt-btn">Sleeves</span>
      <span id="lp-pip-close">✕</span>
    </div>
  </div>
  <div id="lp-pip-content"></div>
  <div id="lp-pip-rep"></div>
  <div id="lp-pip-slt"></div>
  <div id="lp-pip-ftr">
    <span class="lp-pip-nav" id="lp-pip-prev">&#x25C4;</span>
    <span id="lp-pip-badge"></span>
    <span class="lp-pip-nav" id="lp-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('lp-pip-close').addEventListener('click', closePip);
  d.getElementById('lp-pip-prev').addEventListener('click',  retreat);
  d.getElementById('lp-pip-next').addEventListener('click',  advance);
  d.getElementById('lp-pip-slt-btn').addEventListener('click', () => {
    pipSleeveMode = !pipSleeveMode;
    updatePip();
  });
  d.getElementById('lp-pip-slt').addEventListener('click', e => {
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
  const fbVis = lpPipEl  && lpPipEl.classList.contains('visible');
  const winOk = lpPipWindow && !lpPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      lpPipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 170 });
      const d = lpPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      lpPipWindow.addEventListener('pagehide', () => {
        lpPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  if (!lpPipEl) {
    lpPipEl = document.createElement('div');
    lpPipEl.id = 'lp-pip-overlay';
    lpPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(lpPipEl);

    document.getElementById('lp-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'lp-pip-close') return;
      const rect = lpPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        lpPipEl.style.right = 'auto'; lpPipEl.style.bottom = 'auto';
        lpPipEl.style.left = (ev.clientX - dx) + 'px';
        lpPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  lpPipEl.classList.add('visible');
  if (_shellAPI) _shellAPI.setPipActive(true);
  updatePip();
}

// ── Key handler ───────────────────────────────────────────────────────────────
function handleKey(e) {
  if (e.target && e.target.id === 'lp-size-select') return;
  if (!stepMode) {
    if (e.key === ' ') { e.preventDefault(); stepMode = true; updateDisplay(); }
    return;
  }
  if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
  else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
  else if (e.key === 'Escape') { stepMode = false; updateDisplay(); }
}

// ── Page registration ─────────────────────────────────────────────────────────
PageRegistry.register("lakes-pullover", {
  id:     "lakes-pullover",
  title:  "Lakes Pullover",
  status: "Pattern reference · Sizes XS–5XL",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI  = shellAPI;
    _bodyMount = bodyMount;
    size = pickStartSize();
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    renderBody();

    const select = document.getElementById('lp-size-select');
    select.value = size;
    select.addEventListener('change', e => { changeSize(e.target.value); e.target.blur(); });

    document.getElementById('lp-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('lp-step-next').addEventListener('click',   advance);
    document.getElementById('lp-step-prev').addEventListener('click',   retreat);

    setStatus();
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();

    if (!document.getElementById('lp-gloss-back')) {
      const btn = document.createElement('button');
      btn.id = 'lp-gloss-back';
      btn.className = 'lp-gloss-back-btn';
      btn.innerHTML = '&#8592; Back to pattern';
      btn.addEventListener('click', backToPattern);
      document.body.appendChild(btn);
    }
  },

  unmount() {
    flushHistEntry();
    lastHistKeyLP = null;
    closePip();
    if (lpPipEl) { lpPipEl.remove(); lpPipEl = null; }
    const backBtn = document.getElementById('lp-gloss-back');
    if (backBtn) backBtn.remove();
    glossReturnEl = null;
    _shellAPI  = null;
    _bodyMount = null;
    doc = null;
  },

  handleKey(e) { handleKey(e); },
  togglePip() { togglePip(); },

  getHistEntries() { return loadHistory(); },
  deleteHistEntry(idx) {
    const h = loadHistory(); h.splice(idx, 1); saveHistory(h);
    lastHistKeyLP = null;
  },
  clearHistory()   { saveHistory([]); lastHistKeyLP = null; },
  navigateToHistEntry(entry) {
    const target = SIZES[entry.size] ? entry.size : size;
    if (target !== size) changeSize(target);
    currentStep = Math.min(entry.step, S().total - 1);
    const gid = S().stepGroup[currentStep];
    if (gid && entry.rep) repCounters[gid] = entry.rep;
    stepMode = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    const sizeId = SIZES[entry.size] ? entry.size : size;
    return {
      label:      stepName(sizeId, entry.step, entry.rep),
      labelClass: "",
      isCurrent:  stepMode && sizeId === size && entry.step === currentStep
                  && (!entry.rep || entry.rep === repCounters[S().stepGroup[currentStep]]),
    };
  },
  getCurrentPos() {
    const gid = S().stepGroup[currentStep];
    return {
      label: stepMode ? stepName(size, currentStep, gid ? repCounters[gid] : undefined) : "No active step",
      sub:   `Lakes Pullover · Size ${S().label}`,
    };
  },
});

})();
