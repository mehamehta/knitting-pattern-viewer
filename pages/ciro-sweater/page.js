// ─── Ciro Sweater pattern document page (Size XS only) ──────────────────────
// Moreca Knit · Ciro Sweater · worked top-down.

(function () {

// ── Repeat groups ────────────────────────────────────────────────────────────
// firstStep/lastStep: step indices of the repeating rows
// endStep: the "Work rows X–Y a total of N times" paragraph that follows
const REPEAT_GROUPS = {
  rgBackArm:    { label: 'Back armhole rows 1–4',    totalCount: 3,  firstStep: 2,   lastStep: 5,   endStep: 6   },
  rgBackStr:    { label: 'Back straight rows 1–2',   totalCount: 14, firstStep: 9,   lastStep: 10,  endStep: 11  },
  rgBackSlope:  { label: 'Back shoulder slope 1–2',  totalCount: 11, firstStep: 15,  lastStep: 16,  endStep: 17  },
  rgLfArm:      { label: 'Left front armhole 1–2',   totalCount: 7,  firstStep: 39,  lastStep: 40,  endStep: 41  },
  rgLfStr:      { label: 'Left front straight 1–2',  totalCount: 4,  firstStep: 44,  lastStep: 45,  endStep: 46  },
  rgLfNeck:     { label: 'Left front neck inc 1–2',  totalCount: 7,  firstStep: 49,  lastStep: 50,  endStep: 51  },
  rgRfArm:      { label: 'Right front armhole 1–2',  totalCount: 7,  firstStep: 58,  lastStep: 59,  endStep: 60  },
  rgRfStr:      { label: 'Right front straight 1–2', totalCount: 4,  firstStep: 63,  lastStep: 64,  endStep: 65  },
  rgRfNeck:     { label: 'Right front neck inc 1–2', totalCount: 7,  firstStep: 68,  lastStep: 69,  endStep: 70  },
  rgFrontStr:   { label: 'Front straight 1–2',       totalCount: 9,  firstStep: 77,  lastStep: 78,  endStep: 79  },
  rgFrontArm:   { label: 'Front armhole inc 1–4',    totalCount: 3,  firstStep: 82,  lastStep: 85,  endStep: 86  },
  rgSleeveSR:   { label: 'Sleeve short rows 3–4',    totalCount: 10, firstStep: 126, lastStep: 127, endStep: 128 },
};

// Which repeat group each step belongs to
const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 149; // indices 0–148

// ── Glossary ──────────────────────────────────────────────────────────────────
const GLOSSARY = [
  { id: 'sts',              term: 'st(s)',     def: 'Stitch(es) — the loops currently on your needle.' },
  { id: 'k',                term: 'K',         def: 'Knit.' },
  { id: 'p',                term: 'P',         def: 'Purl.' },
  { id: 'rsws',             term: 'RS / WS',   def: 'Right Side / Wrong Side. RS is the public-facing side of the fabric; WS is the inside-facing side.' },
  { id: 'bor',              term: 'BOR',       def: 'Beginning Of Row/Round — the point where your stitch count resets; marked with a stitch marker when working in the round.' },
  { id: 'sl1pw',            term: 'SL1PW',     def: 'Slip one purlwise. Move one stitch from the left needle to the right needle without working it, inserting the right needle as if to purl.' },
  { id: 'wyif',             term: 'wyif',      def: 'With yarn in front — the working yarn is held on the side of the fabric facing you.' },
  { id: 'm1l',              term: 'M1L',       def: 'Make 1 Left (left-leaning increase): insert the left needle from front to back under the bar between stitches, then knit that strand through the back loop.' },
  { id: 'm1r',              term: 'M1R',       def: 'Make 1 Right (right-leaning increase): insert the left needle from back to front under the bar between stitches, then knit that strand through the front loop.' },
  { id: 'm1bl',             term: 'M1BL',      def: 'Make 1 Backward Loop (unbiased increase): wrap the working yarn over the right needle to make a backward loop (right leg in front); keep it snug on the needle.' },
  { id: 'm1fl',             term: 'M1FL',      def: 'Make 1 Forward Loop (unbiased increase): wrap the working yarn over the right needle to make a forward loop (left leg in front); keep it snug on the needle.' },
  { id: 'k2tog',            term: 'K2TOG',     def: 'Knit Two Together (right-leaning decrease): knit the next two stitches together as one stitch.' },
  { id: 'ssk',              term: 'SSK',       def: 'Slip, Slip, Knit (left-leaning decrease): slip 2 stitches knitwise one at a time, then insert the left needle into the fronts of both and knit them together through the back loops.' },
  { id: 'skp',              term: 'SKP',       def: 'Slip, Knit, Pass (left-leaning decrease): slip 1 stitch knitwise, knit the next stitch, then pass the slipped stitch over the knit stitch and off the needle.' },
  { id: 'fddr',             term: 'FDDR',      def: 'Fully-Fashioned Double Decrease Right (right-leaning): slip 3 stitches purlwise with yarn in back, cross the 2nd and 3rd slipped stitches to the right (3rd in front of 2nd), return all 3 to the left needle in the new order, then work K2TOG twice.' },
  { id: 'fddl',             term: 'FDDL',      def: 'Fully-Fashioned Double Decrease Left (left-leaning): slip 3 stitches purlwise with yarn in back, cross the 2nd and 3rd slipped stitches to the left (2nd in front of 3rd), return all 3 to the left needle in the new order, then work SKP twice.' },
  { id: 'gsr',              term: 'German Short Rows', def: 'Shaping worked by turning mid-row. At the “turn”: stop, turn the work, slip the first stitch purlwise to the right needle wyif, then pull the yarn firmly over the needle to the back — this makes a “double stitch” at the turning point. “Work to the last turn” means work up to the double stitch and work it as one stitch. “Work X sts after the last turn” means work across the double stitch from the previous short row, then work X more stitches (double stitch not counted).' },
  { id: 'backward-loop',    term: 'Backward loop method', def: 'A simple cast-on / increase made by looping the working yarn around the right needle to add a stitch; used here to add stitches at the underarms and at the front join.' },
  { id: 'italian-bindoff',  term: 'Italian bind-off', def: 'A stretchy, sewn bind-off worked with a tapestry needle after two double-knitting set-up rows/rounds; it mimics a cast-on edge and suits 1×1 ribbing especially well. Do not work it too tightly.' },
  { id: 'pick-up',          term: 'Pick up and knit', def: 'With the right side facing, insert the needle under an edge stitch or row, wrap the working yarn and pull a loop through — creating a new stitch on the needle along the edge.' },
  { id: 'double-knitting',  term: 'Double knitting', def: 'Working *K1, slip 1 wyif* across so the fabric separates into two layers. Used here for the folded neckline edge and as the set-up for the Italian bind-off.' },
  { id: 'provisional-co',   term: 'Provisional cast-on', def: 'A temporary cast-on worked in waste yarn whose live stitches are later unravelled and returned to the needle. Here it starts the back yoke so the body can be worked downward from the same edge.' },
];

function gl(id, label) {
  return `<span class="gloss-link" data-gloss="${id}">${label}</span>`;
}

// ── HTML template ─────────────────────────────────────────────────────────────
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="cs-pattern-doc">

    <p class="cs-note">Size XS. The Ciro Sweater is worked top-down: the upper back yoke is worked flat from a provisional cast-on, the shoulder slopes are shaped, the shoulders and front yoke are joined and worked down, then the body is worked in the round to a split hem. Sleeves are picked up and worked in the round with a slit cuff, and the neckline is a folded 1×1 rib band.</p>
    <p class="cs-note">Gauge: 21 sts × 28 rows = 10 × 10 cm in stockinette on 4 mm [US 6]. 31 sts × 30 rows = 10 × 10 cm in 1×1 rib on 3 mm [US 2½].</p>

    <h2>Back</h2>
    <p class="cs-note">Worked back and forth in stockinette stitch using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="0">Using a contrast-colour waste yarn, cast on <strong>106 sts</strong> on 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles with your preferred ${gl('provisional-co', 'provisional cast-on')} method. Break the contrast-colour yarn.</p>
    <p data-step="1">Join a working yarn and work straight in stockinette stitch with decreases in every 4th row to shape the armholes:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="2">Row 1 (RS):</span><span data-step="2">Knit all sts.</span>
      <span class="row-label" data-step-label="3">Row 2 (WS):</span><span data-step="3">Purl all sts.</span>
      <span class="row-label" data-step-label="4">Row 3 (RS):</span><span data-step="4">K3, ${gl('fddr', 'FDDR')}, knit until the last 7 sts, ${gl('fddl', 'FDDL')}, K3. (4 sts decreased).</span>
      <span class="row-label" data-step-label="5">Row 4 (WS):</span><span data-step="5">Purl all sts.</span>
    </div>
    <p data-step="6">Work Rows 1–4 a total of <strong>3</strong> times. Finish with the WS row.</p>
    <p data-step="7">Now you have <strong>94 sts</strong> on the needles and worked <strong>12 rows</strong>.</p>
    <p data-step="8">Now work straight in stockinette stitch:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="9">Row 1 (RS):</span><span data-step="9">Knit all sts.</span>
      <span class="row-label" data-step-label="10">Row 2 (WS):</span><span data-step="10">Purl all sts.</span>
    </div>
    <p data-step="11">Work Rows 1–2 a total of <strong>14</strong> times. Finish with the WS row.</p>
    <p data-step="12">Now you have <strong>94 sts</strong> on the needles and worked <strong>40 rows</strong>.</p>
    <p data-step="13">Now, mark the first and last st on the needles by placing a stitch marker onto each st.</p>
    <p class="cs-note">Note: As you begin shaping the slopes, take care to keep the edge sts slightly relaxed. This keeps the sloped edges elastic and flat, preserving a clean, even trapezoid shape without distortion.</p>
    <p data-step="14">Work in stockinette stitch with decreases in every other row to shape the shoulder slopes:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="15">Row 1 (RS):</span><span data-step="15">K3, ${gl('fddr', 'FDDR')}, knit until the last 7 sts, ${gl('fddl', 'FDDL')}, K3. (4 sts decreased).</span>
      <span class="row-label" data-step-label="16">Row 2 (WS):</span><span data-step="16">Purl all sts.</span>
    </div>
    <p data-step="17">Work Rows 1–2 a total of <strong>11</strong> times. Finish with the WS row.</p>
    <p data-step="18">Now you have <strong>50 sts</strong> on the needles and worked <strong>62 rows</strong>.</p>
    <p data-step="19">Now, continue working decreases in every other row while at the same time using the ${gl('gsr', 'German short rows technique')} to shape the neck:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="20">Row 1 (RS):</span><span data-step="20">K3, ${gl('fddr', 'FDDR')}, K13. Turn. (2 sts decreased).</span>
      <span class="row-label" data-step-label="21">Row 2 (WS):</span><span data-step="21">Purl all sts.</span>
      <span class="row-label" data-step-label="22">Row 3 (RS):</span><span data-step="22">K3, ${gl('fddr', 'FDDR')}, K7. Turn. (2 sts decreased).</span>
      <span class="row-label" data-step-label="23">Row 4 (WS):</span><span data-step="23">Purl all sts.</span>
      <span class="row-label" data-step-label="24">Row 5 (RS):</span><span data-step="24">K3, ${gl('fddr', 'FDDR')}, K1. Turn. (2 sts decreased).</span>
      <span class="row-label" data-step-label="25">Row 6 (WS):</span><span data-step="25">Purl all sts.</span>
      <span class="row-label" data-step-label="26">Row 7 (RS):</span><span data-step="26">Knit until the last 7 sts, ${gl('fddl', 'FDDL')}, K3. (2 sts decreased).</span>
      <span class="row-label" data-step-label="27">Row 8 (WS):</span><span data-step="27">P18. Turn.</span>
      <span class="row-label" data-step-label="28">Row 9 (RS):</span><span data-step="28">Knit until the last 7 sts, ${gl('fddl', 'FDDL')}, K3. (2 sts decreased).</span>
      <span class="row-label" data-step-label="29">Row 10 (WS):</span><span data-step="29">P12. Turn.</span>
      <span class="row-label" data-step-label="30">Row 11 (RS):</span><span data-step="30">Knit until the last 7 sts, ${gl('fddl', 'FDDL')}, K3. (2 sts decreased).</span>
      <span class="row-label" data-step-label="31">Row 12 (WS):</span><span data-step="31">P6. Turn.</span>
      <span class="row-label" data-step-label="32">Row 13 (RS):</span><span data-step="32">Knit until the end of the row.</span>
    </div>
    <p data-step="33">Now you have <strong>38 sts</strong> on the needles.</p>
    <p data-step="34">Now, with the WS facing, bind off the sts and break the yarn.</p>

    <h2>Left Front</h2>
    <p class="cs-note">Positioning as worn. Worked back and forth in stockinette stitch using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="35">With the RS facing, join the yarn and ${gl('pick-up', 'pick up and knit')} a total of <strong>35 sts</strong> along the left shoulder slope using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="36">Work as follows: starting at the corner and moving toward the marker, *pick up 4 sts as usual, then pick up 1 st in the bar between sts*, repeat from *–* a total of <strong>6</strong> times. End by picking up <strong>5 sts</strong>, stopping just before the marker.</p>
    <p class="cs-note">This corresponds to picking up 1 st for each st along the shoulder slope, plus 1 additional st for every 4 sts picked up.</p>
    <p data-step="37">Purl 1 row.</p>
    <p data-step="38">Now work with decreases in every other row to shape the armhole:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="39">Row 1 (RS):</span><span data-step="39">Knit until the last 4 sts, ${gl('k2tog', 'K2TOG')}, K2. (1 st decreased).</span>
      <span class="row-label" data-step-label="40">Row 2 (WS):</span><span data-step="40">Purl all sts.</span>
    </div>
    <p data-step="41">Work Rows 1–2 a total of <strong>7</strong> times. Finish with the WS row.</p>
    <p data-step="42">Now you have <strong>28 sts</strong> on the needles and worked <strong>15 rows</strong>.</p>
    <p data-step="43">Now work straight:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="44">Row 1 (RS):</span><span data-step="44">Knit all sts.</span>
      <span class="row-label" data-step-label="45">Row 2 (WS):</span><span data-step="45">Purl all sts.</span>
    </div>
    <p data-step="46">Work Rows 1–2 a total of <strong>4</strong> times. Finish with the WS row.</p>
    <p data-step="47">Now you have <strong>28 sts</strong> on the needles and worked <strong>23 rows</strong>.</p>
    <p data-step="48">Now work with increases in every other row to shape the neck:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="49">Row 1 (RS):</span><span data-step="49">K3, ${gl('m1l', 'M1L')}, knit until the end of the row. (1 st increased).</span>
      <span class="row-label" data-step-label="50">Row 2 (WS):</span><span data-step="50">Purl all sts.</span>
    </div>
    <p data-step="51">Work Rows 1–2 a total of <strong>7</strong> times. Finish with the WS row.</p>
    <p data-step="52">Now you have <strong>35 sts</strong> on the needles and worked <strong>37 rows</strong>.</p>
    <p data-step="53">Break the yarn and place the sts on hold to work with them later.</p>

    <h2>Right Front</h2>
    <p class="cs-note">Positioning as worn. Worked back and forth in stockinette stitch using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="54">With the RS facing, join the yarn and ${gl('pick-up', 'pick up and knit')} a total of <strong>35 sts</strong> along the right shoulder slope using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="55">Work as follows: starting at the marker and moving toward the corner, *pick up 4 sts as usual, then pick up 1 st in the bar between sts*, repeat from *–* a total of <strong>6</strong> times. End by picking up <strong>5 sts</strong>.</p>
    <p class="cs-note">This corresponds to picking up 1 st for each st along the shoulder slope, plus 1 additional st for every 4 sts picked up.</p>
    <p data-step="56">Purl 1 row.</p>
    <p data-step="57">Now work with decreases in every other row to shape the armhole:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="58">Row 1 (RS):</span><span data-step="58">K2, ${gl('ssk', 'SSK')}, knit until the end of the row. (1 st decreased).</span>
      <span class="row-label" data-step-label="59">Row 2 (WS):</span><span data-step="59">Purl all sts.</span>
    </div>
    <p data-step="60">Work Rows 1–2 a total of <strong>7</strong> times. Finish with the WS row.</p>
    <p data-step="61">Now you have <strong>28 sts</strong> on the needles and worked <strong>15 rows</strong>.</p>
    <p data-step="62">Now work straight:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="63">Row 1 (RS):</span><span data-step="63">Knit all sts.</span>
      <span class="row-label" data-step-label="64">Row 2 (WS):</span><span data-step="64">Purl all sts.</span>
    </div>
    <p data-step="65">Work Rows 1–2 a total of <strong>4</strong> times. Finish with the WS row.</p>
    <p data-step="66">Now you have <strong>28 sts</strong> on the needles and worked <strong>23 rows</strong>.</p>
    <p data-step="67">Now work with increases in every other row to shape the neck:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="68">Row 1 (RS):</span><span data-step="68">Knit until the last 3 sts, ${gl('m1r', 'M1R')}, K3. (1 st increased).</span>
      <span class="row-label" data-step-label="69">Row 2 (WS):</span><span data-step="69">Purl all sts.</span>
    </div>
    <p data-step="70">Work Rows 1–2 a total of <strong>7</strong> times. Finish with the WS row.</p>
    <p data-step="71">Now you have <strong>35 sts</strong> on the needles and worked <strong>37 rows</strong>.</p>
    <p data-step="72">Do not break the yarn — you will join the front from here.</p>

    <h2>Front</h2>
    <p class="cs-note">Worked back and forth in stockinette stitch using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="73">Join the front: with the RS facing, knit <strong>35 sts</strong> of the right front. Next, cast on <strong>24 sts</strong> in extension of the right front sts using the ${gl('backward-loop', 'backward loop method')}. Finally, knit <strong>35 sts</strong> of the left front.</p>
    <p data-step="74">Purl 1 row.</p>
    <p data-step="75">Now you have <strong>94 sts</strong> on the needles and worked <strong>39 rows</strong> (counting along the armhole sides).</p>
    <p data-step="76">Now work straight:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="77">Row 1 (RS):</span><span data-step="77">Knit all sts.</span>
      <span class="row-label" data-step-label="78">Row 2 (WS):</span><span data-step="78">Purl all sts.</span>
    </div>
    <p data-step="79">Work Rows 1–2 a total of <strong>9</strong> times. Finish with the WS row.</p>
    <p data-step="80">Now you have <strong>94 sts</strong> on the needles and worked <strong>57 rows</strong> (counting along the armhole sides).</p>
    <p data-step="81">Now work with increases in every 4th row to shape the armholes:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="82">Row 1 (RS):</span><span data-step="82">K3, ${gl('m1r', 'M1R')}, ${gl('m1fl', 'M1FL')}, knit until the last 3 sts of the row, ${gl('m1bl', 'M1BL')}, ${gl('m1l', 'M1L')}, K3. (4 sts increased).</span>
      <span class="row-label" data-step-label="83">Row 2 (WS):</span><span data-step="83">Purl all sts.</span>
      <span class="row-label" data-step-label="84">Row 3 (RS):</span><span data-step="84">Knit all sts.</span>
      <span class="row-label" data-step-label="85">Row 4 (WS):</span><span data-step="85">Purl all sts.</span>
    </div>
    <p data-step="86">Work Rows 1–4 a total of <strong>3</strong> times. Finish with the WS row.</p>
    <p data-step="87">Now you have <strong>106 sts</strong> on the needles and worked <strong>69 rows</strong> (counting along the armhole sides).</p>
    <p data-step="88">Do not break the yarn — you will start the body from here.</p>

    <h2>Body</h2>
    <p class="cs-note">Worked in the round in stockinette stitch using 4 mm [US 6] 80 or 100 cm [32 or 40 in] circular needles.</p>
    <p data-step="89">With the RS facing, join the body: unravel the ${gl('provisional-co', 'provisional cast-on')} and transfer the back sts to the needles.</p>
    <p data-step="90">Knit <strong>106 sts</strong> of the front, cast on <strong>6 sts</strong> in extension of the front sts using the ${gl('backward-loop', 'backward loop method')}, knit <strong>106 sts</strong> of the back, then cast on <strong>6 sts</strong> in extension of the back sts the same way.</p>
    <p data-step="91">Place a stitch marker to indicate the ${gl('bor', 'BOR')}.</p>
    <p data-step="92">Now you have <strong>224 sts</strong> on the needles.</p>
    <p data-step="93">Work straight in the round until the sweater measures approx. <strong>41 cm [16 in]</strong> from the centre of the back neck.</p>
    <p data-step="94">Try on and check the length before starting the ribbing, which adds an additional 15 cm [6 in]. <em>Note: extending the length may require additional yarn.</em></p>
    <p data-step="95">Switch to <strong>3 mm [US 2½] 80 or 100 cm [32 or 40 in]</strong> circular needles and work 1 round as follows: knit until the last <strong>3 sts</strong> of the round. This is your new BOR — transfer the BOR marker to this new position.</p>
    <p data-step="96">Work 1 round with increases: *K5, ${gl('m1l', 'M1L')}*, repeat from *–* a total of <strong>44</strong> times, end with <strong>K4</strong>.</p>
    <p data-step="97">Now you have <strong>268 sts</strong> on the needles.</p>
    <p data-step="98">Work 3 cm [1¼ in] in 1×1 rib (K1, P1).</p>
    <p data-step="99">Divide the sts for the front and back hem: place the first <strong>134 sts</strong> after the BOR on hold. The remaining <strong>134 sts</strong> are for the back hem.</p>

    <h2>Hem</h2>
    <p data-step="100">Work the back hem first, back and forth in 1×1 rib as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="101">Row 1 (WS):</span><span data-step="101">*K1, P1*, repeat from *–* until the end of the row, ${gl('m1l', 'M1L')}.</span>
      <span class="row-label" data-step-label="102">Row 2 (RS):</span><span data-step="102">*P1, K1*, repeat from *–* until the last st, P1.</span>
      <span class="row-label" data-step-label="103">Row 3 (WS):</span><span data-step="103">*K1, P1*, repeat from *–* until the last st, K1.</span>
    </div>
    <p data-step="104">Work Rows 2–3 until the ribbing measures 15 cm [6 in] in total.</p>
    <p data-step="105">Work ${gl('double-knitting', 'double knitting')} before binding off using the ${gl('italian-bindoff', 'Italian bind-off technique')} as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="106">Row 1 (RS):</span><span data-step="106">*${gl('sl1pw', 'SL1PW')} ${gl('wyif', 'wyif')}, K1*, repeat from *–* until the last st, SL1PW wyif.</span>
      <span class="row-label" data-step-label="107">Row 2 (WS):</span><span data-step="107">*K1, SL1PW wyif*, repeat from *–* until the last st, K1.</span>
    </div>
    <p data-step="108">Bind off using the ${gl('italian-bindoff', 'Italian bind-off technique')}, taking care not to bind off too tightly.</p>
    <p data-step="109">Front hem: transfer the front hem sts to the needles. With the WS facing, join the yarn and work as for the back hem.</p>

    <h2>Neckline</h2>
    <p class="cs-note">Worked in the round in 1×1 rib using 3 mm [US 2½] 40 cm [16 in] circular needles, then folded inward and attached. Ensure your 1×1 rib gauge matches the given gauge for 3 mm [US 2½] needles; if not, adjust the needle size.</p>
    <p data-step="110">With the RS facing, start at the back neck, join the yarn and ${gl('pick-up', 'pick up and knit')} <strong>138 sts</strong> using 3 mm [US 2½] 40 cm [16 in] circular needles (1 st for each st or row along the neck edge). Place a stitch marker to indicate the BOR.</p>
    <p data-step="111">Stitch distribution: back neck – <strong>36 sts</strong>; left front neck – <strong>38 sts</strong>; front neck – <strong>25 sts</strong>; right front neck – <strong>39 sts</strong>.</p>
    <p data-step="112">Work 16 rounds of 1×1 rib (K1, P1).</p>
    <p data-step="113">Next, tightly work 3 rounds of ${gl('double-knitting', 'double knitting')} for a neatly folded edge as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="114">Rounds 1–3:</span><span data-step="114">*K1, ${gl('sl1pw', 'SL1PW')} ${gl('wyif', 'wyif')}*, repeat from *–* to the end of the round.</span>
    </div>
    <p data-step="115">Then work 14 rounds of 1×1 rib (K1, P1).</p>
    <p data-step="116">Now fold the neckline in half towards the WS and join the live sts to the purl bumps.</p>
    <p data-step="117">Work as follows: insert the right needle into the purl bump opposite the first live st, place it on the left needle, then ${gl('k2tog', 'K2TOG')} with the first st.</p>
    <p data-step="118">*Pick up the next purl bump, place it on the left needle, K2TOG with the next live st, and pass over the previous st.*</p>
    <p data-step="119">Repeat from *–* until all live sts have been joined.</p>

    <h2>Sleeves</h2>
    <p class="cs-note">Worked in the round in stockinette stitch with decreases towards the cuff, using 4 mm [US 6] 40 cm [16 in] circular needles. The second sleeve is worked the same way.</p>
    <p data-step="120">Starting at the centre of the underarm, join the yarn and ${gl('pick-up', 'pick up and knit')} <strong>3 sts</strong> along the left side of the underarm, then <strong>76 sts</strong> along the armhole edge (2 sts for every 3 rows), and finally <strong>3 sts</strong> along the right side of the underarm. Place a stitch marker to indicate the centre (central marker). Break the yarn to re-join it later in another place.</p>
    <p data-step="121">Now you have <strong>82 sts</strong> on the needles.</p>
    <p data-step="122">Now slip the first <strong>41 sts</strong> following the central marker to the right needle purlwise, without working them. Place a stitch marker to indicate the BOR (there are <strong>41 sts</strong> between the markers).</p>
    <p data-step="123">Starting at the BOR, join the yarn and work in the ${gl('gsr', 'German short rows technique')} to shape the sleeve cap:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="124">Row 1 (RS):</span><span data-step="124">K8. Turn.</span>
      <span class="row-label" data-step-label="125">Row 2 (WS):</span><span data-step="125">Purl to the BOR marker, slip it, P8 after it. Turn.</span>
      <span class="row-label" data-step-label="126">Row 3 (RS):</span><span data-step="126">Knit to the BOR marker, slip it, K3 after the last turn. Turn.</span>
      <span class="row-label" data-step-label="127">Row 4 (WS):</span><span data-step="127">Purl to the BOR marker, slip it, P3 after the last turn. Turn.</span>
    </div>
    <p data-step="128">Work Rows 3–4 a total of <strong>10</strong> times. Finish with the WS row (your last turns are 3 sts before the central marker). The short rows are now complete.</p>
    <p data-step="129">Now knit to the BOR marker.</p>
    <p data-step="130">Work in the round in stockinette stitch until the sleeve measures approx. <strong>30 cm [11¾ in]</strong> from the underarm, while at the same time working a decrease round every <strong>13th round</strong> a total of <strong>6 times</strong>.</p>
    <p data-step="131">Decrease round: knit until 3 sts before the central marker, ${gl('ssk', 'SSK')}, K1, slip the central marker, K1, ${gl('k2tog', 'K2TOG')}, knit until the BOR. (2 sts decreased).</p>
    <p data-step="132">You have <strong>70 sts</strong> on the needles after all decrease rounds have been worked.</p>

    <div id="cs-sleeve-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Sleeve Decrease Tracker</span>
        <button class="btn small" id="cs-slt-reset">Reset all</button>
      </div>
      <div class="slt-target">Target: a decrease round every 13 rounds · 6 decrease rounds · 70 sts remaining</div>
      <div class="slt-two-col">
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 1</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="cs-slt-r0-minus">&#x2212;</button>
              <span class="slt-num" id="cs-slt-r0">0</span>
              <button class="btn small" id="cs-slt-r0-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="cs-slt-d0-log">Log decrease at round <span id="cs-slt-d0-row">0</span></button>
          <div class="slt-log" id="cs-slt-d0-log-list"></div>
        </div>
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 2</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="cs-slt-r1-minus">&#x2212;</button>
              <span class="slt-num" id="cs-slt-r1">0</span>
              <button class="btn small" id="cs-slt-r1-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="cs-slt-d1-log">Log decrease at round <span id="cs-slt-d1-row">0</span></button>
          <div class="slt-log" id="cs-slt-d1-log-list"></div>
        </div>
      </div>
    </div>

    <p data-step="133">Try on the garment and check the sleeve length before working the cuff. Knit a few more rounds if needed (the cuff adds approximately 13 cm [5 in]).</p>
    <p data-step="134">Remove the central marker.</p>
    <p data-step="135">Switch to <strong>3 mm [US 2½] 80 or 100 cm [32 or 40 in]</strong> circular needles (Magic Loop) or double-pointed needles and work 1 round with increases: *K5, ${gl('m1l', 'M1L')}*, repeat from *–* a total of <strong>14</strong> times.</p>
    <p data-step="136">Now you have <strong>84 sts</strong> on the needles.</p>
    <p data-step="137">Work 3 cm [1¼ in] of 1×1 rib (K1, P1).</p>
    <p data-step="138">Now work back and forth in 1×1 rib to shape the slit:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="139">Row 1 (WS):</span><span data-step="139">*K1, P1*, repeat from *–* until the BOR, remove the BOR marker, ${gl('m1l', 'M1L')}.</span>
      <span class="row-label" data-step-label="140">Row 2 (RS):</span><span data-step="140">*P1, K1*, repeat from *–* until the last st, P1.</span>
      <span class="row-label" data-step-label="141">Row 3 (WS):</span><span data-step="141">*K1, P1*, repeat from *–* until the last st, K1.</span>
    </div>
    <p data-step="142">Work Rows 2–3 until the ribbing measures 13 cm [5 in] in total.</p>
    <p data-step="143">Work ${gl('double-knitting', 'double knitting')} before binding off using the ${gl('italian-bindoff', 'Italian bind-off technique')} as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="144">Row 1 (RS):</span><span data-step="144">*${gl('sl1pw', 'SL1PW')} ${gl('wyif', 'wyif')}, K1*, repeat from *–* until the last st, SL1PW wyif.</span>
      <span class="row-label" data-step-label="145">Row 2 (WS):</span><span data-step="145">*K1, SL1PW wyif*, repeat from *–* until the last st, K1.</span>
    </div>
    <p data-step="146">Bind off using the ${gl('italian-bindoff', 'Italian bind-off technique')}, taking care not to bind off too tightly.</p>
    <p data-step="147">The second sleeve is worked the same way.</p>

    <h2>Finishing</h2>
    <p data-step="148">Weave in all ends. Wash and block your sweater, paying special attention to the slit area — shape the slit during blocking so the edges lie flat. Block the cuffs and hem to approximately the same width as the sleeves and body.</p>

    <h2 class="cs-glossary-hdr">Glossary</h2>
    <div class="bb-glossary">
      ${GLOSSARY.map(g => `<div class="bb-gloss-entry" id="cs-gloss-${g.id}"><span class="bb-gloss-term">${g.term}</span><span class="bb-gloss-def">${g.def}</span></div>`).join('\n      ')}
    </div>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Ciro Sweater</h1>
  <div class="divider"></div>
  <button class="btn" id="cs-step-toggle">Step Mode</button>
  <button class="btn small" id="cs-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="cs-step-badge" style="font-size:0.82rem;color:#888;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="cs-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="cs-rep-divider" style="display:none"></div>
  <span id="cs-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#f5c842;white-space:nowrap;"></span>
  <span id="cs-rep-label" style="display:none;font-size:0.75rem;color:#888;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'ciro-sweater-step';
const SLT_KEY     = 'ciro-sweater-sleeves';

let stepMode    = false;
let currentStep = 0;
let repCounters = {};
for (const gid of Object.keys(REPEAT_GROUPS)) repCounters[gid] = 1;

let doc         = null;  // #cs-pattern-doc element
let _shellAPI   = null;
let csPipEl     = null;  // fallback overlay element
let csPipWindow = null;  // documentPictureInPicture window
let pipSleeveMode = false;

let slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      stepMode    = saved.stepMode ?? false;
      currentStep = saved.step     ?? 0;
      repCounters = { ...repCounters, ...(saved.reps || {}) };
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
const LS_HISTORY_CS = 'ciro-sweater-history';
const MAX_HIST_CS   = 500;

let histTimerCS   = null;
let lastHistKeyCS = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY_CS)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY_CS, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimerCS);
  histTimerCS = setTimeout(() => {
    const key = String(currentStep);
    if (key === lastHistKeyCS) return;
    lastHistKeyCS = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, ts: Date.now() });
    if (hist.length > MAX_HIST_CS) hist.length = MAX_HIST_CS;
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
  const rowsEl = document.getElementById(`cs-slt-r${i}`);
  const rowLbl = document.getElementById(`cs-slt-d${i}-row`);
  const logEl  = document.getElementById(`cs-slt-d${i}-log-list`);

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

// ── Glossary linking ──────────────────────────────────────────────────────────
let glossReturnEl = null;

function flashEl(el) {
  el.classList.remove('gloss-flash');
  // eslint-disable-next-line no-unused-expressions
  el.offsetWidth; // force reflow so the animation restarts
  el.classList.add('gloss-flash');
}

function showGlossBackBtn() {
  const btn = document.getElementById('cs-gloss-back');
  if (btn) btn.classList.add('visible');
}

function hideGlossBackBtn() {
  const btn = document.getElementById('cs-gloss-back');
  if (btn) btn.classList.remove('visible');
}

function jumpToGloss(sourceEl) {
  glossReturnEl = sourceEl;
  const id = sourceEl.dataset.gloss;
  const target = doc.querySelector(`#cs-gloss-${id}`);
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

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  doc.classList.toggle('step-mode', stepMode);

  const toggleBtn = document.getElementById('cs-step-toggle');
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
  const badge = document.getElementById('cs-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const repBadge   = document.getElementById('cs-rep-badge');
  const repLabel   = document.getElementById('cs-rep-label');
  const repDivider = document.getElementById('cs-rep-divider');

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
        repCounters[gid] = 1;
        currentStep = g.endStep;
      }
    } else {
      currentStep++;
    }
  } else if (currentStep < TOTAL_STEPS - 1) {
    currentStep++;
  }

  hideGlossBackBtn();
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

  hideGlossBackBtn();
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

  const labelEl = doc.querySelector(`[data-step-label="${currentStep}"]`);
  const label   = labelEl ? labelEl.textContent.trim() : '';
  const content = stepEl.innerHTML;
  return label ? `<span class="pip-lbl">${label}</span> ${content}` : content;
}

function pipSltHTML() {
  return slt.map((s, i) => {
    let cadence = 'No decreases yet';
    if (s.decs.length === 1) {
      cadence = `1 dec · at round ${s.decs[0]}`;
    } else if (s.decs.length >= 2) {
      const ivs = [];
      for (let j = 1; j < s.decs.length; j++) ivs.push(s.decs[j] - s.decs[j - 1]);
      const uniform = ivs.every(v => v === ivs[0]);
      cadence = `${s.decs.length} dec · ${uniform ? `every ${ivs[0]} rounds` : 'intervals: ' + ivs.join(', ') + 'r'}`;
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
    </div>`;
  }).join('');
}

function updatePip() {
  const fbVis = csPipEl  && csPipEl.classList.contains('visible');
  const winOk = csPipWindow && !csPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const contentEl = d.getElementById('cs-pip-content');
    const repEl     = d.getElementById('cs-pip-rep');
    const badgeEl   = d.getElementById('cs-pip-badge');
    const sltEl     = d.getElementById('cs-pip-slt');
    const titleEl   = d.getElementById('cs-pip-title');
    const sltBtnEl  = d.getElementById('cs-pip-slt-btn');
    const prevEl    = d.getElementById('cs-pip-prev');
    const nextEl    = d.getElementById('cs-pip-next');

    if (pipSleeveMode) {
      if (contentEl) contentEl.style.display = 'none';
      if (repEl)     repEl.style.display     = 'none';
      if (sltEl)   { sltEl.style.display = 'block'; sltEl.innerHTML = pipSltHTML(); }
      if (titleEl)   titleEl.textContent     = 'Ciro Sweater — Sleeves';
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
      if (titleEl)   titleEl.textContent     = 'Ciro Sweater — Mini View';
      if (sltBtnEl)  sltBtnEl.textContent    = 'Sleeves';
      if (prevEl)    prevEl.style.visibility = '';
      if (nextEl)    nextEl.style.visibility = '';
      if (badgeEl)   badgeEl.textContent     = badge;
    }
  }

  if (fbVis) apply(document);
  if (winOk) apply(csPipWindow.document);
}

function closePip() {
  if (csPipEl) csPipEl.classList.remove('visible');
  if (csPipWindow && !csPipWindow.closed) csPipWindow.close();
  csPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1b2a; color: #ccc; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #cs-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #1a2332; border-bottom: 1px solid #2a3444;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #aaa; }
  #cs-pip-close { cursor: pointer; padding: 0 4px; color: #667; }
  #cs-pip-close:hover { color: #eee; }
  #cs-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; }
  #cs-pip-rep { display: none; padding: 0 12px 6px; font-size: 0.75rem; color: #f5c842; flex-shrink: 0; }
  #cs-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #1a2332; border-top: 1px solid #2a3444; flex-shrink: 0; }
  .cs-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #2a3444; color: #aaa; font-size: 0.9rem; }
  .cs-pip-nav:hover { background: #3a4a5a; color: #eee; }
  #cs-pip-badge { font-size: 0.72rem; color: #888; }
  strong { color: #e8d8b0; }
  em { color: #a0c0d8; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8d8b0; }
  .gloss-link { border-bottom: 1px dotted currentColor; }
  #cs-pip-slt-btn { cursor: pointer; padding: 0 5px; color: #556; font-size: 0.7rem; border-radius: 3px; }
  #cs-pip-slt-btn:hover { color: #aaa; background: #2a3444; }
  #cs-pip-slt { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
  .pip-slt-s2 { border-top: 1px solid #2a3a4a; margin-top: 5px; padding-top: 5px; }
  .pip-slt-main { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
  .pip-slt-label { font-size: 0.72rem; font-weight: 700; color: #e8d8b0; min-width: 1.6em; }
  .pip-slt-rows { font-size: 0.88rem; font-weight: 700; color: #f5c842; min-width: 4.5em; }
  .pip-slt-ctrl { cursor: pointer; padding: 1px 8px; background: #2a3444; border-radius: 3px; color: #aaa; font-weight: 700; user-select: none; }
  .pip-slt-ctrl:hover { background: #3a4a5a; color: #eee; }
  .pip-slt-log { cursor: pointer; padding: 1px 8px; background: #2a3444; border-radius: 3px; color: #8ab0c8; font-size: 0.7rem; flex: 1; text-align: center; user-select: none; }
  .pip-slt-log:hover { background: #3a4a5a; color: #aad0e8; }
  .pip-slt-cadence { font-size: 0.68rem; color: #667; padding-left: 1.6em; }
`;

const PIP_BODY_HTML = `
  <div id="cs-pip-hdr">
    <span id="cs-pip-title">Ciro Sweater — Mini View</span>
    <div style="display:flex;align-items:center;gap:8px">
      <span id="cs-pip-slt-btn">Sleeves</span>
      <span id="cs-pip-close">✕</span>
    </div>
  </div>
  <div id="cs-pip-content"></div>
  <div id="cs-pip-rep"></div>
  <div id="cs-pip-slt"></div>
  <div id="cs-pip-ftr">
    <span class="cs-pip-nav" id="cs-pip-prev">&#x25C4;</span>
    <span id="cs-pip-badge"></span>
    <span class="cs-pip-nav" id="cs-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('cs-pip-close').addEventListener('click', closePip);
  d.getElementById('cs-pip-prev').addEventListener('click',  retreat);
  d.getElementById('cs-pip-next').addEventListener('click',  advance);
  d.getElementById('cs-pip-slt-btn').addEventListener('click', () => {
    pipSleeveMode = !pipSleeveMode;
    updatePip();
  });
  d.getElementById('cs-pip-slt').addEventListener('click', e => {
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
  const fbVis = csPipEl  && csPipEl.classList.contains('visible');
  const winOk = csPipWindow && !csPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      csPipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 170 });
      const d = csPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      csPipWindow.addEventListener('pagehide', () => {
        csPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  if (!csPipEl) {
    csPipEl = document.createElement('div');
    csPipEl.id = 'cs-pip-overlay';
    csPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(csPipEl);

    document.getElementById('cs-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'cs-pip-close') return;
      const rect = csPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        csPipEl.style.right = 'auto'; csPipEl.style.bottom = 'auto';
        csPipEl.style.left = (ev.clientX - dx) + 'px';
        csPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  csPipEl.classList.add('visible');
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
PageRegistry.register("ciro-sweater", {
  id:     "ciro-sweater",
  title:  "Ciro Sweater",
  status: "Pattern reference · Size XS",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('cs-pattern-doc');

    document.getElementById('cs-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('cs-step-next').addEventListener('click',   advance);
    document.getElementById('cs-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus("Ciro Sweater — pattern reference · Size XS");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();

    loadSltState();
    updateSleeveTracker();
    [0, 1].forEach(i => {
      document.getElementById(`cs-slt-r${i}-plus`).addEventListener('click', () => {
        slt[i].rows++; saveSltState(); renderSlt(i);
      });
      document.getElementById(`cs-slt-r${i}-minus`).addEventListener('click', () => {
        if (slt[i].rows > 0) { slt[i].rows--; saveSltState(); renderSlt(i); }
      });
      document.getElementById(`cs-slt-d${i}-log`).addEventListener('click', () => {
        slt[i].decs.push(slt[i].rows); saveSltState(); renderSlt(i);
      });
    });
    document.getElementById('cs-slt-reset').addEventListener('click', () => {
      if (confirm('Reset sleeve tracker for both sleeves?')) {
        slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];
        saveSltState(); updateSleeveTracker();
      }
    });

    wireGlossaryLinks();
    if (!document.getElementById('cs-gloss-back')) {
      const btn = document.createElement('button');
      btn.id = 'cs-gloss-back';
      btn.className = 'cs-gloss-back-btn';
      btn.innerHTML = '&#8592; Back to pattern';
      btn.addEventListener('click', backToPattern);
      document.body.appendChild(btn);
    }
  },

  unmount() {
    clearTimeout(histTimerCS);
    lastHistKeyCS = null;
    closePip();
    if (csPipEl) { csPipEl.remove(); csPipEl = null; }
    const backBtn = document.getElementById('cs-gloss-back');
    if (backBtn) backBtn.remove();
    glossReturnEl = null;
    _shellAPI = null;
    doc = null;
  },

  handleKey(e) { handleKey(e); },
  togglePip() { togglePip(); },

  getHistEntries() { return loadHistory(); },
  deleteHistEntry(idx) {
    const h = loadHistory(); h.splice(idx, 1); saveHistory(h);
    lastHistKeyCS = null;
  },
  clearHistory()   { saveHistory([]); lastHistKeyCS = null; },
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
      sub:   "Ciro Sweater",
    };
  },
});

})();
