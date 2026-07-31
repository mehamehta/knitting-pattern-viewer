// ─── Moon Set Polo pattern document page (Size XS only) ──────────────────────

(function () {

// ── Repeat groups ────────────────────────────────────────────────────────────
// firstStep/lastStep: step indices of the repeating rows
// endStep: the "Repeat Rows X and Y a total of N times" paragraph that follows
const REPEAT_GROUPS = {
  rg1:  { label: 'Back short rows',        totalCount: 13, firstStep:  7, lastStep:  8, endStep:  9 },
  rg1b: { label: 'Back stockinette rows',  totalCount: 16, firstStep: 11, lastStep: 12, endStep: 13 },
  rg2:  { label: 'Left front rows',        totalCount: 9,  firstStep: 16, lastStep: 17, endStep: 18 },
  rg3:  { label: 'Left front neck inc',    totalCount: 4,  firstStep: 20, lastStep: 21, endStep: 22 },
  rg4:  { label: 'Left front rib rows',    totalCount: 19, firstStep: 28, lastStep: 29, endStep: 30 },
  rg5:  { label: 'Right front rows',       totalCount: 9,  firstStep: 34, lastStep: 35, endStep: 36 },
  rg6:  { label: 'Right front neck inc',   totalCount: 4,  firstStep: 38, lastStep: 39, endStep: 40 },
  rg7:  { label: 'Right front rib rows',   totalCount: 19, firstStep: 45, lastStep: 46, endStep: 47 },
  rg8:  { label: 'Join collar sts',        totalCount: 7,  firstStep: 52, lastStep: 52, endStep: 53 },
  rg9:  { label: 'Sleeve short rows',      totalCount: 3,  firstStep: 72, lastStep: 73, endStep: 74 },
};

// Which repeat group each step belongs to (populated below)
const STEP_GROUP = {};
for (const [gid, g] of Object.entries(REPEAT_GROUPS)) {
  for (let s = g.firstStep; s <= g.lastStep; s++) STEP_GROUP[s] = gid;
}

const TOTAL_STEPS = 93; // indices 0–92

// ── Glossary ──────────────────────────────────────────────────────────────────
const GLOSSARY = [
  { id: 'approx',            term: 'approx.',                def: 'Approximately.' },
  { id: 'bor',                term: 'BOR',                    def: 'Beginning of Round — the point in a round where your stitch count resets; marked with a stitch marker when knitting in the round.' },
  { id: 'co',                 term: 'CO',                     def: 'Cast on. Place the starting stitches onto your needle to begin knitting.' },
  { id: 'ds',                 term: 'ds (make ds)',           def: 'Double stitch. With yarn in front, slip the first stitch, then pull the working yarn over the top of the right needle from front to back so the slipped stitch’s two legs straddle the needle and look like two stitches. Marks a German Short Row turn without leaving a hole; later “resolved” by working both legs together as one stitch.' },
  { id: 'gsr',                term: 'German Short Rows',      def: 'A short-row shaping technique that uses a “double stitch” (ds) at each turn instead of a wrap — the ds is later worked as a single stitch, closing the gap invisibly.' },
  { id: 'italian-bindoff',    term: 'Italian bind-off',       def: 'A stretchy, sewn bind-off worked with a tapestry needle after two set-up rows/rounds; mimics the look of a cast-on edge and suits ribbing especially well.' },
  { id: 'backwards-loop-co',  term: 'Backwards loop cast-on', def: 'A simple cast-on made by looping the working yarn backwards around the needle for each new stitch; used here to add stitches mid-row.' },
  { id: 'long-tail-co',       term: 'Long-tail cast-on',      def: 'A cast-on using a long tail of yarn to form the base chain and stitches in one motion; produces a neat, sturdy edge.' },
  { id: 'k',                  term: 'K',                      def: 'Knit.' },
  { id: 'k2tog',              term: 'K2tog',                  def: 'Knit 2 together — a right-leaning decrease.' },
  { id: 'k2togl',             term: 'K2tog-L',                def: 'Knit 2 together left. Slip 2 stitches individually knitwise, then knit them together through the back loop — a left-leaning decrease that mirrors K2tog.' },
  { id: 'm1l',                term: 'M1L',                    def: 'Make 1 Left. Insert the left needle under the bar between stitches from front to back and knit through the back loop; leans left.' },
  { id: 'm1r',                term: 'M1R',                    def: 'Make 1 Right. Insert the left needle under the bar between stitches from back to front and knit normally into the front; leans right.' },
  { id: 'p',                  term: 'P',                      def: 'Purl.' },
  { id: 'pm',                 term: 'PM',                     def: 'Place marker.' },
  { id: 'rs',                 term: 'RS',                     def: 'Right Side — the public-facing side of the fabric.' },
  { id: 'sl',                 term: 'Sl',                     def: 'Slip — move a stitch from the left needle to the right needle without working it.' },
  { id: 'sm',                 term: 'SM',                     def: 'Slip marker — move a stitch marker from the left needle to the right needle without removing it.' },
  { id: 'sts',                term: 'st(s)',                  def: 'Stitch(es) — the loops currently on your needle.' },
  { id: 'ws',                 term: 'WS',                     def: 'Wrong Side — the inside-facing side of the fabric.' },
  { id: 'wyib',               term: 'wyib',                   def: 'With yarn in back.' },
  { id: 'wyif',               term: 'wyif',                   def: 'With yarn in front.' },
];

function gl(id, label) {
  return `<span class="gloss-link" data-gloss="${id}">${label}</span>`;
}

// ── HTML template ─────────────────────────────────────────────────────────────
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="mp-pattern-doc">

    <h2>Back</h2>
    <p data-step="0">Loosely ${gl('co', 'CO')} <strong>85 sts</strong> on US 9 (5.5 mm)/32 or 40" [80 or 100 cm] circular needles using the ${gl('long-tail-co', 'long-tail cast-on')} method.</p>
    <p data-step="1">Break yarn.</p>
    <p data-step="2">Starting at the end from which you just broke the yarn, slip the first <strong>30 sts</strong> purlwise from the left needle to the right needle. You will not knit these sts for the first row, but you will instead knit them gradually in subsequent rows while utilizing ${gl('gsr', 'German Short Rows')} to create a curved back foundation for your polo.</p>
    <p data-step="3">Join with new yarn and P25 sts until <strong>30 sts</strong> remain, turn, make ${gl('ds', 'ds')}.</p>

    <div class="row-table">
      <span class="row-label" data-step-label="4">Short Row 1 (RS):</span><span data-step="4">K until <strong>28 sts</strong> remain. Turn. Make ds.</span>
      <span class="row-label" data-step-label="5">Short Row 2 (WS):</span><span data-step="5">P until <strong>28 sts</strong> remain, resolving ds from previous row when you come to it. Turn. Make ds.</span>
    </div>

    <p data-step="6">You will continue working German Short Rows, each time turning 2 sts after last turn. Meaning, work to your last ds, resolve the ds by knitting (RS) or purling (WS) the ds as one st, work another 2 sts, and turn as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="7">Short Row 3 (RS):</span><span data-step="7">K to the ${gl('ds', 'ds')}, resolve by knitting ds, K2 sts, turn, make ds.</span>
      <span class="row-label" data-step-label="8">Short Row 4 (WS):</span><span data-step="8">P to the ${gl('ds', 'ds')}, resolve by purling ds, P2 sts, turn, make ds.</span>
    </div>
    <p class="mp-note">Tip: If you're having trouble keeping track of your ds, mark its place with a removable stitch marker.</p>
    <p data-step="9">Repeat Short Rows 3 and 4, 12 more times. At the last turn there will be 2 unworked sts remaining after the ds on both the left and right side of your work. The next row will be a RS row. The back now measures approx. <strong>4&frac34;" [12 cm]</strong>, as measured from center back cast-on edge.</p>
    <p data-step="10">You will continue working back and forth in stockinette st across all back sts as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="11">Row 1 (RS):</span><span data-step="11">Knit across, resolving the final two ds as you work.</span>
      <span class="row-label" data-step-label="12">Row 2 (WS):</span><span data-step="12">Purl across.</span>
    </div>
    <p data-step="13">Repeat Rows 1 and 2, 15 more times, for a total of <strong>32 rows</strong>, until back measures approx. <strong>10" [25 cm]</strong>, as measured from center back cast-on edge. End by working a WS row. You are now at RS. Break yarn and let sts rest.</p>

    <h2>Left Front</h2>
    <p data-step="14">With RS of back piece facing and CO sts on top, pick up and knit <strong>30 sts</strong> along left slanted edge, beginning at center back.</p>
    <p data-step="15">Work back and forth as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="16">Row 1 (WS):</span><span data-step="16">P across.</span>
      <span class="row-label" data-step-label="17">Row 2 (RS):</span><span data-step="17">K across.</span>
    </div>
    <p data-step="18">Repeat Rows 1 and 2, 8 more times, for a total of 18 rows, then work one more repeat of Row 1 only. Left front measures approx. 3&frac12;" [8.5 cm] as measured from the picked-up sts. You are now at RS.</p>
    <p data-step="19">Next, work increases to shape the neck edge as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="20">Row 1 (RS):</span><span data-step="20">K4, ${gl('m1l', 'M1L')}, K across. (1 st increased).</span>
      <span class="row-label" data-step-label="21">Row 2 (WS):</span><span data-step="21">P across.</span>
    </div>
    <p data-step="22">Repeat Rows 1 and 2, 3 more times, for a total of 8 rows. <strong>34 sts</strong>.</p>
    <p data-step="23">Break yarn. You will break yarn to maintain the same amount of rows worked as the right front band.</p>
    <p data-step="24">Next, you will cast on sts to shape the neck edge as follows:</p>
    <p data-step="25">Next Row (RS): With new yarn, CO 11 sts using the ${gl('backwards-loop-co', 'backwards loop cast-on')} method on right hand needle, K4, M1L, K across. (12 sts increased). <strong>46 sts</strong>.</p>
    <p data-step="26">Following Row (WS): P across until 7 sts remain, ${gl('pm', 'PM')}, *K1, P1* repeat *-* until 3 sts remain, K1, Sl 2 ${gl('wyif', 'wyif')}.</p>
    <p data-step="27">You will now work as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="28">Row 1 (RS):</span><span data-step="28">K2, *P1, K1* repeat *-* until 1 st before marker, P1, ${gl('sm', 'SM')}, K across.</span>
      <span class="row-label" data-step-label="29">Row 2 (WS):</span><span data-step="29">P across until marker, SM, *K1, P1* repeat *-* until 3 sts remain, K1, Sl 2 wyif.</span>
    </div>
    <p data-step="30">Repeat Rows 1 and 2, 18 more times, for a total of 38 rows. Left front measures approx. 11&frac14;" [28.5 cm] as measured from the picked-up sts.</p>
    <p data-step="31">Break yarn and let sts rest while working right front.</p>

    <h2>Right Front</h2>
    <p data-step="32">With RS of back piece facing and CO sts on top, pick up and knit <strong>30 sts</strong>, beginning from right slanted edge.</p>
    <p data-step="33">Work back and forth as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="34">Row 1 (WS):</span><span data-step="34">P across.</span>
      <span class="row-label" data-step-label="35">Row 2 (RS):</span><span data-step="35">K across.</span>
    </div>
    <p data-step="36">Repeat Rows 1 and 2, 8 more times, for a total of 18 rows, then work one more repeat of Row 1 only. Right front measures approx. 3&frac12;" [8.5 cm] as measured from the picked-up sts. You are now at RS.</p>
    <p data-step="37">Next, work increases to shape the neck edge as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="38">Row 1 (RS):</span><span data-step="38">K across until 4 sts remain, ${gl('m1r', 'M1R')}, K4. (1 st increased).</span>
      <span class="row-label" data-step-label="39">Row 2 (WS):</span><span data-step="39">P across.</span>
    </div>
    <p data-step="40">Repeat Rows 1 and 2, 3 more times, for a total of 8 rows. <strong>34 sts</strong>.</p>
    <p data-step="41">Next, you will cast on sts in extension of right front to shape the neck edge as follows:</p>
    <p data-step="42">Next Row (RS): K across until 4 sts remain, M1R, K4, CO 11 sts in extension of right front using the backwards loop cast-on method. (12 sts increased). <strong>46 sts</strong>.</p>
    <p data-step="43">Following Row (WS): Sl 2 wyif, *K1, P1* over 4 sts, K1, PM, P across.</p>
    <p data-step="44">You will now work as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="45">Row 1 (RS):</span><span data-step="45">K across until marker, SM, *P1, K1* repeat *-* until 1 st remains, K1.</span>
      <span class="row-label" data-step-label="46">Row 2 (WS):</span><span data-step="46">Sl 2 wyif, *K1, P1* repeat *-* until 1 st before marker, K1, SM, P across.</span>
    </div>
    <p data-step="47">Repeat Rows 1 and 2, 18 more times, for a total of 38 rows. Right front measures approx. 11&frac14;" [28.5 cm] as measured from the picked-up sts.</p>
    <p data-step="48">Do not break yarn.</p>

    <h2>Join Right Front and Left Front</h2>
    <p data-step="49">To form the v-neck of your polo, your collar stitches will now be knitted together so that the right front 7 sts will lay on top of left front 7 sts. The neckline opening will therefore be closed here, and the 14 v-neck stitches will be reduced to 7. These 7 stitches will then become part of the stockinette body.</p>
    <p data-step="50">Using the working yarn currently attached to the right front and with RS of your work facing, K across right front sts to marker, remove marker.</p>
    <p data-step="51">Transfer held stitches of left front to a spare circular needle and hold the collar stitches of the left front directly behind the collar stitches of the right front.</p>
    <p data-step="52">*K the first stitch on the needle held in front together with the first stitch on the needle held in back.*</p>
    <p data-step="53">Repeat *-* 6 more times so that all collar stitches on both the front and the back needles have been worked.</p>
    <p data-step="54">At this point, there are no remaining stitches on the front needle and you are at the stitch marker on the back needle. Remove marker and K across the remaining sts for the left front. All front sts are on the same needle and the left front and the right front sections have been joined to form a single front piece. <strong>85 sts</strong>.</p>
    <p data-step="55">Following Row (WS): P across.</p>
    <p data-step="56"><strong>Size XS:</strong> Front measures approx. 11&frac34;" [29 cm], as measured from picked up sts at either shoulder. Proceed to Body instructions.</p>

    <h2>Body</h2>
    <p data-step="57">You will now join the front panel to the back panel and form the armholes as follows:</p>
    <p data-step="58">With RS facing, K across <strong>85 front sts</strong>, place back sts on needles and K across <strong>85 sts</strong>, PM, join to work in the round. The ${gl('bor', 'BOR')} is now at the right underarm. <strong>170 sts</strong>.</p>
    <p data-step="59">Work in the round in stockinette st (knit all sts) until the body measures approx. 8&frac34;" [21.5 cm] as measured from the underarm or until the body of your sweater measures 3" [7.5 cm] less than your desired final length. <em>Note: Adding additional length will require more yardage.</em></p>

    <h2>Hem</h2>
    <p data-step="60">With US 8 (5 mm)/32 or 40" [80 or 100 cm] circular needles, finish the body of your polo by working the hem as follows:</p>
    <p data-step="61">*K1, P1* repeat *-* until hem measures approx. 3" [7.5 cm].</p>
    <p data-step="62">Work two set-up rounds at the end of your ribbing using the Italian bind-off method as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="63">Round 1:</span><span data-step="63">*K1, Sl 1 wyif* repeat *-*.</span>
      <span class="row-label" data-step-label="64">Round 2:</span><span data-step="64">*Sl 1 wyib, P1* repeat *-*.</span>
    </div>
    <p data-step="65">Bind off all sts using the ${gl('italian-bindoff', 'Italian bind-off')} method.</p>

    <h2>Sleeves</h2>
    <p data-step="66">Beginning at the bottom of the armhole opening with US 9 (5.5 mm)/16" [40 cm] circular needles, pick up and knit <strong>68 sts</strong> divided into three sections as follows:</p>
    <p data-step="67">Pick up and knit <strong>23 sts</strong>, PM (referred to as the first marker), pick up and knit <strong>22 sts</strong>, PM (referred to as the second marker), pick up and knit <strong>23 sts</strong>, PM at underarm to mark BOR. <em>Note: All sts are picked up at a ratio of approx. 2 sts out of every 3 rows or until sts are spread evenly.</em></p>
    <p data-step="68">You will now shape the upper sleeve with German Short Rows as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="69">Short Row 1 (RS):</span><span data-step="69">K across until second marker, SM, K5 sts, turn, make ds.</span>
      <span class="row-label" data-step-label="70">Short Row 2 (WS):</span><span data-step="70">P across until first marker, SM, P5 sts, turn, make ds.</span>
    </div>
    <p data-step="71">You will continue working German Short Rows, each time turning 5 sts after last turn. Meaning, work to your last ds, resolve the ds by knitting (RS) or purling (WS) the ds as one st, work another 5 sts, and turn as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="72">Short Row 3 (RS):</span><span data-step="72">K across until second marker, SM, K to the ds, resolve by knitting ds, K5 sts, turn, make ds.</span>
      <span class="row-label" data-step-label="73">Short Row 4 (WS):</span><span data-step="73">P across until first marker, SM, P to the ds, resolve by purling ds, P5 sts, turn, make ds.</span>
    </div>
    <p data-step="74">Repeat Short Rows 3 and 4, 2 more times, for a total of 6 rows. You have now worked 8 short rows. At the last turn there will be <strong>3 unworked sts</strong> remaining after the ds on either side of the BOR marker. You are now at RS. From your last turn, K across to BOR resolving the ds and removing the first and second markers as you come to them.</p>
    <p data-step="75">Continue to work in the round in stockinette st until the sleeves measure approx. 13" [32.5 cm] as measured from underarm, while at the same time working a decrease round on every <strong>11 rounds</strong> for a total of <strong>7 decrease rounds</strong>. At the conclusion of your final decrease round, you should have <strong>54 sts</strong> remaining.</p>
    <p data-step="76">Decrease round: K1, ${gl('k2tog', 'K2tog')}, K in stockinette st until 3 sts remain before marker, ${gl('k2togl', 'K2tog-L')}, K1. (2 sts decreased).</p>

    <div id="mp-sleeve-tracker">
      <div class="slt-hdr">
        <span class="slt-hdr-title">Sleeve Decrease Tracker</span>
        <button class="btn small" id="mp-slt-reset">Reset all</button>
      </div>
      <div class="slt-two-col">
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 1</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="mp-slt-r0-minus">&#x2212;</button>
              <span class="slt-num" id="mp-slt-r0">0</span>
              <button class="btn small" id="mp-slt-r0-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="mp-slt-d0-log">Log decrease at round <span id="mp-slt-d0-row">0</span></button>
          <div class="slt-log" id="mp-slt-d0-log-list"></div>
        </div>
        <div class="slt-panel">
          <div class="slt-panel-hdr">Sleeve 2</div>
          <div class="slt-ctrl-row">
            <span class="slt-lbl">Rounds</span>
            <div class="slt-ctrls">
              <button class="btn small" id="mp-slt-r1-minus">&#x2212;</button>
              <span class="slt-num" id="mp-slt-r1">0</span>
              <button class="btn small" id="mp-slt-r1-plus">+</button>
            </div>
          </div>
          <button class="btn slt-dec-btn" id="mp-slt-d1-log">Log decrease at round <span id="mp-slt-d1-row">0</span></button>
          <div class="slt-log" id="mp-slt-d1-log-list"></div>
        </div>
      </div>
    </div>

    <p data-step="77">At this point, you may move on to knitting the sleeve cuff or continue working in stockinette until your sleeve measures 3" [7.5 cm] less than your desired final length.</p>

    <h2>Sleeve Cuffs</h2>
    <p data-step="78">With US 8 (5 mm)/16" [40 cm] circular needles or magic loop method, finish your sleeve by working the cuff as follows:</p>
    <p data-step="79">*K1, P1* repeat *-* until cuff measures approx. 3" [7.5 cm].</p>
    <p data-step="80">Work two set-up rounds at the end of your ribbing using the Italian bind-off method as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="81">Round 1:</span><span data-step="81">*K1, Sl 1 wyif* repeat *-*.</span>
      <span class="row-label" data-step-label="82">Round 2:</span><span data-step="82">*Sl 1 wyib, P1* repeat *-*.</span>
    </div>
    <p data-step="83">Bind off all sts using the Italian bind-off method.</p>

    <h2>Collar</h2>
    <p data-step="84">Beginning at right v-neck band, with US 8 (5 mm)/16" [40 cm] circular needles and with RS facing, pick up and knit 7 sts along top of band, 4 sts along straight edge, 22 sts up the right neckline (1 st every shaping row and 2 sts every 3 straight rows), 25 sts along the back (one in each initial cast-on stitch), 22 sts down the left neckline (1 st every shaping row and 2 sts every 3 straight rows), 4 sts along straight edge, and 7 sts along top of band. <strong>91 sts</strong>.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="85">Row 1 (WS):</span><span data-step="85">Sl 2 wyif, *K1, P1* repeat *-* until 3 sts remain, K1, Sl 2 wyif.</span>
      <span class="row-label" data-step-label="86">Row 2 (RS):</span><span data-step="86">K1, *K1, P1* repeat until 2 sts remain, K2.</span>
    </div>
    <p data-step="87">Repeat Rows 1 and 2 until collar measures approx. 5" [12.5 cm]. End by working a WS row.</p>
    <p data-step="88">Work two set-up rows at the end of your ribbing using the Italian bind-off method as follows:</p>
    <div class="row-table">
      <span class="row-label" data-step-label="89">Row 1 (RS):</span><span data-step="89">K1, *K1, Sl 1 wyif* repeat *-* until 2 sts remain, K2.</span>
      <span class="row-label" data-step-label="90">Row 2 (WS):</span><span data-step="90">Sl 1 wyif, *Sl 1 wyif, K1* repeat *-* until 2 sts remain, Sl 2 wyif.</span>
    </div>
    <p data-step="91">Bind off all sts using the Italian bind-off method. <em>Note: The first two sts and last two sts of the collar should be treated as one st to correctly maintain the ribbing pattern when binding off.</em></p>

    <h2>Finishing</h2>
    <p data-step="92">Weave in all loose ends. Block your sweater to measurements listed in the schematic. Wear forever.</p>

    <h2 class="mp-glossary-hdr">Glossary</h2>
    <div class="bb-glossary">
      ${GLOSSARY.map(g => `<div class="bb-gloss-entry" id="mp-gloss-${g.id}"><span class="bb-gloss-term">${g.term}</span><span class="bb-gloss-def">${g.def}</span></div>`).join('\n      ')}
    </div>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Moon Set Polo</h1>
  <div class="divider"></div>
  <button class="btn" id="mp-step-toggle">Step Mode</button>
  <button class="btn small" id="mp-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="mp-step-badge" style="font-size:0.82rem;color:#888;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="mp-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
  <div class="divider" id="mp-rep-divider" style="display:none"></div>
  <span id="mp-rep-badge" style="display:none;font-size:0.9rem;font-weight:700;color:#f5c842;white-space:nowrap;"></span>
  <span id="mp-rep-label" style="display:none;font-size:0.75rem;color:#888;white-space:nowrap;"></span>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'moon-set-polo-step';
const SLT_KEY     = 'moon-set-polo-sleeves';

let stepMode    = false;
let currentStep = 0;
let repCounters = { rg1: 1, rg1b: 1, rg2: 1, rg3: 1, rg4: 1, rg5: 1, rg6: 1, rg7: 1, rg8: 1, rg9: 1 };
let doc         = null;  // #mp-pattern-doc element
let _shellAPI   = null;
let mpPipEl     = null;  // fallback overlay element
let mpPipWindow = null;  // documentPictureInPicture window
let pipSleeveMode = false;

let slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      stepMode    = saved.stepMode ?? false;
      currentStep = saved.step     ?? 0;
      repCounters = saved.reps     ?? repCounters;
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
const LS_HISTORY_MP = 'moon-set-polo-history';
const MAX_HIST_MP   = 500;

let histTimerMP   = null;
let lastHistKeyMP = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY_MP)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY_MP, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimerMP);
  histTimerMP = setTimeout(() => {
    const key = String(currentStep);
    if (key === lastHistKeyMP) return;
    lastHistKeyMP = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, ts: Date.now() });
    if (hist.length > MAX_HIST_MP) hist.length = MAX_HIST_MP;
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
  const rowsEl = document.getElementById(`mp-slt-r${i}`);
  const rowLbl = document.getElementById(`mp-slt-d${i}-row`);
  const logEl  = document.getElementById(`mp-slt-d${i}-log-list`);

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
  const btn = document.getElementById('mp-gloss-back');
  if (btn) btn.classList.add('visible');
}

function hideGlossBackBtn() {
  const btn = document.getElementById('mp-gloss-back');
  if (btn) btn.classList.remove('visible');
}

function jumpToGloss(sourceEl) {
  glossReturnEl = sourceEl;
  const id = sourceEl.dataset.gloss;
  const target = doc.querySelector(`#mp-gloss-${id}`);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  flashEl(target);
  showGlossBackBtn();
}

function backToPattern() {
  // If step mode is active, the active step is the most reliable "place" —
  // it survives even if the source element scrolled out or changed.
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
function findRowLabel(stepEl) {
  return doc.querySelector(`[data-step-label="${currentStep}"]`);
}

// ── Display update ────────────────────────────────────────────────────────────
function updateDisplay() {
  if (!doc) return;

  // Toggle step-mode class on the doc
  doc.classList.toggle('step-mode', stepMode);

  // Update toggle button appearance
  const toggleBtn = document.getElementById('mp-step-toggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', stepMode);

  // Clear previous active markers
  doc.querySelectorAll('.step-active').forEach(el => el.classList.remove('step-active'));

  if (!stepMode) {
    updateToolbarBadges();
    return;
  }

  // Mark active step element(s)
  const stepEl = doc.querySelector(`[data-step="${currentStep}"]`);
  if (stepEl) {
    stepEl.classList.add('step-active');
    const label = findRowLabel(stepEl);
    if (label) label.classList.add('step-active');
    // Scroll into view
    stepEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  updateToolbarBadges();
  saveState();
  updatePip();
}

function updateToolbarBadges() {
  const badge = document.getElementById('mp-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }

  const repBadge   = document.getElementById('mp-rep-badge');
  const repLabel   = document.getElementById('mp-rep-label');
  const repDivider = document.getElementById('mp-rep-divider');

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
  return label ? `<span class="pip-lbl">${label}</span> ${content}` : content;
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
  const fbVis = mpPipEl  && mpPipEl.classList.contains('visible');
  const winOk = mpPipWindow && !mpPipWindow.closed;
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
      if (titleEl)   titleEl.textContent     = 'Moon Set Polo — Sleeves';
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
      if (titleEl)   titleEl.textContent     = 'Moon Set Polo — Mini View';
      if (sltBtnEl)  sltBtnEl.textContent    = 'Sleeves';
      if (prevEl)    prevEl.style.visibility = '';
      if (nextEl)    nextEl.style.visibility = '';
      if (badgeEl)   badgeEl.textContent     = badge;
    }
  }

  if (fbVis) apply(document);
  if (winOk) apply(mpPipWindow.document);
}

function closePip() {
  if (mpPipEl) mpPipEl.classList.remove('visible');
  if (mpPipWindow && !mpPipWindow.closed) mpPipWindow.close();
  mpPipWindow = null;
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
    background: #2a3444; color: #aaa; font-size: 0.9rem; }
  .bb-pip-nav:hover { background: #3a4a5a; color: #eee; }
  #bb-pip-badge { font-size: 0.72rem; color: #888; }
  strong { color: #e8d8b0; }
  em { color: #a0c0d8; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8d8b0; }
  #bb-pip-slt-btn { cursor: pointer; padding: 0 5px; color: #556; font-size: 0.7rem; border-radius: 3px; }
  #bb-pip-slt-btn:hover { color: #aaa; background: #2a3444; }
  #bb-pip-slt { flex: 1; overflow-y: auto; padding: 6px 12px; display: none; }
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
  <div id="bb-pip-hdr">
    <span id="bb-pip-title">Moon Set Polo — Mini View</span>
    <div style="display:flex;align-items:center;gap:8px">
      <span id="bb-pip-slt-btn">Sleeves</span>
      <span id="bb-pip-close">✕</span>
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
  const fbVis = mpPipEl  && mpPipEl.classList.contains('visible');
  const winOk = mpPipWindow && !mpPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  // Auto-enter step mode
  if (!stepMode) { stepMode = true; updateDisplay(); }

  // Try native document PiP
  if (window.documentPictureInPicture) {
    try {
      mpPipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 170 });
      const d = mpPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      mpPipWindow.addEventListener('pagehide', () => {
        mpPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  // Fallback draggable overlay
  if (!mpPipEl) {
    mpPipEl = document.createElement('div');
    mpPipEl.id = 'mp-pip-overlay';
    mpPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(mpPipEl);

    // Dragging via header
    document.getElementById('bb-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'bb-pip-close') return;
      const rect = mpPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        mpPipEl.style.right = 'auto'; mpPipEl.style.bottom = 'auto';
        mpPipEl.style.left = (ev.clientX - dx) + 'px';
        mpPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  mpPipEl.classList.add('visible');
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
PageRegistry.register("moon-set-polo", {
  id:     "moon-set-polo",
  title:  "Moon Set Polo",
  status: "Pattern reference · Size XS",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('mp-pattern-doc');

    document.getElementById('mp-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('mp-step-next').addEventListener('click',   advance);
    document.getElementById('mp-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus("Moon Set Polo — pattern reference · Size XS");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();

    loadSltState();
    updateSleeveTracker();
    [0, 1].forEach(i => {
      document.getElementById(`mp-slt-r${i}-plus`).addEventListener('click', () => {
        slt[i].rows++; saveSltState(); renderSlt(i);
      });
      document.getElementById(`mp-slt-r${i}-minus`).addEventListener('click', () => {
        if (slt[i].rows > 0) { slt[i].rows--; saveSltState(); renderSlt(i); }
      });
      document.getElementById(`mp-slt-d${i}-log`).addEventListener('click', () => {
        slt[i].decs.push(slt[i].rows); saveSltState(); renderSlt(i);
      });
    });
    document.getElementById('mp-slt-reset').addEventListener('click', () => {
      if (confirm('Reset sleeve tracker for both sleeves?')) {
        slt = [{ rows: 0, decs: [] }, { rows: 0, decs: [] }];
        saveSltState(); updateSleeveTracker();
      }
    });

    // Glossary: clickable term look-ups + a floating "back to pattern" button
    wireGlossaryLinks();
    if (!document.getElementById('mp-gloss-back')) {
      const btn = document.createElement('button');
      btn.id = 'mp-gloss-back';
      btn.className = 'mp-gloss-back-btn';
      btn.innerHTML = '&#8592; Back to pattern';
      btn.addEventListener('click', backToPattern);
      document.body.appendChild(btn);
    }
  },

  unmount() {
    clearTimeout(histTimerMP);
    lastHistKeyMP = null;
    closePip();
    if (mpPipEl) { mpPipEl.remove(); mpPipEl = null; }
    const backBtn = document.getElementById('mp-gloss-back');
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
    lastHistKeyMP = null;
  },
  clearHistory()   { saveHistory([]); lastHistKeyMP = null; },
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
      sub:   "Moon Set Polo",
    };
  },
});

})();
