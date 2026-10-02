// ─── Arachne Dress pattern document page (Size S only) ──────────────────────
// Bosong Knit · Arachne Dress · worked top-down.
// Every chart row is written out stitch by stitch (WS rows already reversed),
// generated from the PDF's charts and checked stitch-for-stitch against them.

(function () {

const TOTAL_STEPS = 280;

// ── Glossary ──────────────────────────────────────────────────────────────────
const GLOSSARY = [
  { id: 'sts',        term: 'st(s)',     def: 'Stitch(es) — the loops currently on your needle.' },
  { id: 'k',          term: 'K',         def: 'Knit. “K12” means knit 12 stitches.' },
  { id: 'p',          term: 'P',         def: 'Purl. “P12” means purl 12 stitches.' },
  { id: 'rsws',       term: 'RS / WS',   def: 'Right Side / Wrong Side. Odd-numbered rows are RS rows; even-numbered rows are WS rows.' },
  { id: 'sl-rs',      term: 'SL1 wyib',  def: 'RS rows: slip 1 stitch from the left needle to the right needle without working it, with the yarn held in the back.' },
  { id: 'sl-ws',      term: 'SL1 wyif',  def: 'WS rows: slip 1 stitch from the left needle to the right needle without working it, with the yarn held in the front.' },
  { id: 'm1l',        term: 'M1L',       def: 'Make 1 Left (RS rows): with the left needle, pick up the strand between the stitches from front to back, then knit it through the back loop.' },
  { id: 'm1lp',       term: 'M1LP',      def: 'Make 1 Left Purlwise (WS rows): with the left needle, pick up the strand between the stitches from front to back, then purl it through the back loop.' },
  { id: 'm1r',        term: 'M1R',       def: 'Make 1 Right (RS rows): with the left needle, pick up the strand between the stitches from back to front, then knit it through the front loop.' },
  { id: 'm1rp',       term: 'M1RP',      def: 'Make 1 Right Purlwise (WS rows): with the left needle, pick up the strand between the stitches from back to front, then purl it through the front loop.' },
  { id: 'k2tog',      term: 'K2TOG',     def: 'Knit Two Together (right-leaning decrease): knit the next two stitches together as one stitch.' },
  { id: 'ssk',        term: 'SSK',       def: 'Slip, Slip, Knit (left-leaning decrease): slip 2 stitches knitwise one at a time, then insert the left needle into the fronts of both and knit them together through the back loops.' },
  { id: 'yo',         term: 'YO',        def: 'Yarn over once: wrap the yarn over the right needle to make a new stitch (and a small eyelet hole).' },
  { id: 'pm',         term: 'PM',        def: 'Place Marker — put a stitch marker on the right needle.' },
  { id: 'sm',         term: 'SM',        def: 'Slip Marker — move the marker from the left needle to the right needle.' },
  { id: 'elastic-co', term: 'Elastic cast-on', def: 'The stretchy cast-on the pattern asks for — demonstrated in the designer\'s <a class="ad-video" href="https://youtu.be/V_d3ks1MrS8" target="_blank" rel="noopener">Tutorial 1 video</a>.' },
  { id: 'picot-bo',   term: 'Picot bind-off', def: 'A decorative bind-off with small picot points — demonstrated in the designer\'s <a class="ad-video" href="https://youtu.be/2-xkGnWz7vo" target="_blank" rel="noopener">Tutorial 2 video</a>.' },
];

function gl(id, label) {
  return `<span class="gloss-link" data-gloss="${id}">${label}</span>`;
}

// ── HTML template ─────────────────────────────────────────────────────────────
const CONTENT_HTML = `
<div class="page-doc-wrap">
  <div id="ad-pattern-doc">

    <p class="ad-note">Size S. The Arachne Dress is worked top-down. The back, right front and left front are each worked flat until the armhole increases are done, then joined and worked flat together for the body and skirt. The shoulder straps and button bands are finished with a crochet hook.</p>
    <p class="ad-note">Every chart has been written out row by row. Each row is given in the order you work it, already reversed for WS rows (knits and purls already swapped) — just read left to right and work each stitch as written.</p>
    <p class="ad-note">Gauge: 20 sts &times; 23 rows in stockinette stitch. Needles: 5 mm (main), 4.5 mm (ribbing). Crochet hook: 3.5 mm (US 6) — the pattern also calls it a size 6/0 hook.</p>
    <p class="ad-note">Finished size S (choose a size with 0–5 cm negative ease): A (top edge) 23 cm · B (bust) 75 cm · C (hem) 120 cm · D (length) Long 98 cm / Short 68 cm.</p>
    <p class="ad-note">Yarn, size S: Long 180 g / 800 m (sample: Sandnes Garn TynnLine, 1 strand, 4 balls); Short 70 g / 590 m (sample: De Rerum Natura Berenice, 1 strand, 3 balls). Buttons: 10–13 mm, 10 (Long) / 6 (Short).</p>
    <p class="ad-note">The side with buttons is the front; the side without buttons is the back.</p>
    <p class="ad-note">If you are using a non-elastic yarn, work the slipped edge stitches (SL1) loosely.</p>
    <p class="ad-note">Video tutorials from the designer (YouTube, Korean narration): <a class="ad-video" href="https://youtu.be/V_d3ks1MrS8" target="_blank" rel="noopener">&#9654; Tutorial 1 – Elastic Cast-on (video)</a> · <a class="ad-video" href="https://youtu.be/2-xkGnWz7vo" target="_blank" rel="noopener">&#9654; Tutorial 2 – Picot Bind-off (video)</a> · <a class="ad-video" href="https://youtu.be/T0azB-wEnU8" target="_blank" rel="noopener">&#9654; Tutorial 3 – Shoulder Straps (video)</a> · <a class="ad-video" href="https://youtu.be/VGhm-R4CNvA" target="_blank" rel="noopener">&#9654; Tutorial 4 – Button Hole (video)</a>.</p>

    <h2>1. Armhole Increase — Back</h2>
    <p data-step="0">With <strong>4.5 mm</strong> needles, cast on <strong>43 sts</strong> using the ${gl('elastic-co', 'elastic cast-on')} method — <a class="ad-video" href="https://youtu.be/V_d3ks1MrS8" target="_blank" rel="noopener">&#9654; Tutorial 1 – Elastic Cast-on (video)</a>.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="1">Row 1 (RS):</span><span data-step="1">K2, (P1, K1) &times;19, P1, K2 <strong>(43 sts)</strong></span>
      <span class="row-label" data-step-label="2">Row 2 (WS):</span><span data-step="2">P2, (K1, P1) &times;19, K1, ${gl('m1lp', 'M1LP')}, P2 <strong>(44 sts)</strong></span>
      <span class="row-label" data-step-label="3">Row 3 (RS):</span><span data-step="3">K2, ${gl('m1l', 'M1L')}, (K1, P1) &times;20, ${gl('m1r', 'M1R')}, K2 <strong>(46 sts)</strong></span>
      <span class="row-label" data-step-label="4">Row 4 (WS):</span><span data-step="4">P2, ${gl('m1rp', 'M1RP')}, (P1, K1) &times;20, P2, ${gl('m1lp', 'M1LP')}, P2 <strong>(48 sts)</strong></span>
    </div>
    <p class="ad-note">Change to <strong>5 mm</strong> needles now (after the 4 ribbing rows).</p>
    <div class="row-table">
      <span class="row-label" data-step-label="5">Row 5 (RS):</span><span data-step="5">K2, ${gl('m1l', 'M1L')}, K44, ${gl('m1r', 'M1R')}, K2 <strong>(50 sts)</strong></span>
      <span class="row-label" data-step-label="6">Row 6 (WS):</span><span data-step="6">P2, ${gl('m1rp', 'M1RP')}, P46, ${gl('m1lp', 'M1LP')}, P2 <strong>(52 sts)</strong></span>
    </div>
    <p class="ad-note">Markers: on Row 7 you place 3 markers (PM). Each marker sits where the chart's green lines are, and there are exactly 24 sts between neighbouring markers. The green lines on the chart start at Row 5, but there they run through the increase edge, so they are placed here on Row 7 — the first row where they line up with the stitches.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="7">Row 7 (RS):</span><span data-step="7">K2, ${gl('m1l', 'M1L')}, (${gl('pm', 'PM')}, K24) &times;2, ${gl('pm', 'PM')}, ${gl('m1r', 'M1R')}, K2 <strong>(54 sts)</strong></span>
      <span class="row-label" data-step-label="8">Row 8 (WS):</span><span data-step="8">P2, ${gl('m1rp', 'M1RP')}, P1, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P1, ${gl('m1lp', 'M1LP')}, P2 <strong>(56 sts)</strong></span>
      <span class="row-label" data-step-label="9">Row 9 (RS):</span><span data-step="9">K2, ${gl('m1l', 'M1L')}, K2, (${gl('sm', 'SM')}, K24) &times;2, ${gl('sm', 'SM')}, K2, ${gl('m1r', 'M1R')}, K2 <strong>(58 sts)</strong></span>
      <span class="row-label" data-step-label="10">Row 10 (WS):</span><span data-step="10">P2, ${gl('m1rp', 'M1RP')}, P3, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P3, ${gl('m1lp', 'M1LP')}, P2 <strong>(60 sts)</strong></span>
      <span class="row-label" data-step-label="11">Row 11 (RS):</span><span data-step="11">K2, ${gl('m1l', 'M1L')}, K4, (${gl('sm', 'SM')}, K24) &times;2, ${gl('sm', 'SM')}, K4, ${gl('m1r', 'M1R')}, K2 <strong>(62 sts)</strong></span>
      <span class="row-label" data-step-label="12">Row 12 (WS):</span><span data-step="12">P2, ${gl('m1rp', 'M1RP')}, P5, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P5, ${gl('m1lp', 'M1LP')}, P2 <strong>(64 sts)</strong></span>
      <span class="row-label" data-step-label="13">Row 13 (RS):</span><span data-step="13">K2, ${gl('m1l', 'M1L')}, K6, (${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18) &times;2, ${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, ${gl('m1r', 'M1R')}, K2 <strong>(66 sts)</strong></span>
      <span class="row-label" data-step-label="14">Row 14 (WS):</span><span data-step="14">P2, ${gl('m1rp', 'M1RP')}, P7, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P7, ${gl('m1lp', 'M1LP')}, P2 <strong>(68 sts)</strong></span>
      <span class="row-label" data-step-label="15">Row 15 (RS):</span><span data-step="15">K2, ${gl('m1l', 'M1L')}, K8, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;2, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K1, ${gl('m1r', 'M1R')}, K2 <strong>(70 sts)</strong></span>
      <span class="row-label" data-step-label="16">Row 16 (WS):</span><span data-step="16">P2, ${gl('m1rp', 'M1RP')}, P9, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P9, ${gl('m1lp', 'M1LP')}, P2 <strong>(72 sts)</strong></span>
      <span class="row-label" data-step-label="17">Row 17 (RS):</span><span data-step="17">K2, ${gl('m1l', 'M1L')}, K10, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;2, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3, ${gl('m1r', 'M1R')}, K2 <strong>(74 sts)</strong></span>
      <span class="row-label" data-step-label="18">Row 18 (WS):</span><span data-step="18">P2, ${gl('m1rp', 'M1RP')}, P11, (${gl('sm', 'SM')}, P24) &times;2, ${gl('sm', 'SM')}, P11, ${gl('m1lp', 'M1LP')}, P2 <strong>(76 sts)</strong></span>
    </div>
    <p data-step="19">Cut the yarn and place the <strong>76 sts</strong> on a spare cable or needle.</p>

    <h2>1. Armhole Increase — Right Front</h2>
    <p data-step="20">With <strong>4.5 mm</strong> needles, cast on <strong>21 sts</strong> using the ${gl('elastic-co', 'elastic cast-on')} method — <a class="ad-video" href="https://youtu.be/V_d3ks1MrS8" target="_blank" rel="noopener">&#9654; Tutorial 1 – Elastic Cast-on (video)</a>.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="21">Row 1 (RS):</span><span data-step="21">K2, (P1, K1) &times;8, P1, ${gl('pm', 'PM')}, K2 <strong>(21 sts)</strong></span>
      <span class="row-label" data-step-label="22">Row 2 (WS):</span><span data-step="22">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, (K1, P1) &times;8, K1, ${gl('m1lp', 'M1LP')}, P2 <strong>(22 sts)</strong></span>
      <span class="row-label" data-step-label="23">Row 3 (RS):</span><span data-step="23">K2, ${gl('m1l', 'M1L')}, (K1, P1) &times;9, ${gl('sm', 'SM')}, K2 <strong>(23 sts)</strong></span>
      <span class="row-label" data-step-label="24">Row 4 (WS):</span><span data-step="24">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, (K1, P1) &times;8, K1, P2, ${gl('m1lp', 'M1LP')}, P2 <strong>(24 sts)</strong></span>
    </div>
    <p class="ad-note">Change to <strong>5 mm</strong> needles now (after the 4 ribbing rows).</p>
    <div class="row-table">
      <span class="row-label" data-step-label="25">Row 5 (RS):</span><span data-step="25">K2, ${gl('m1l', 'M1L')}, K20, ${gl('sm', 'SM')}, K2 <strong>(25 sts)</strong></span>
      <span class="row-label" data-step-label="26">Row 6 (WS):</span><span data-step="26">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P21, ${gl('m1lp', 'M1LP')}, P2 <strong>(26 sts)</strong></span>
      <span class="row-label" data-step-label="27">Row 7 (RS):</span><span data-step="27">K2, ${gl('m1l', 'M1L')}, K22, ${gl('sm', 'SM')}, K2 <strong>(27 sts)</strong></span>
      <span class="row-label" data-step-label="28">Row 8 (WS):</span><span data-step="28">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P23, ${gl('m1lp', 'M1LP')}, P2 <strong>(28 sts)</strong></span>
    </div>
    <p class="ad-note">Second marker: placed on Row 9 (the chart's green line starts at Row 7, but there it runs through the increase edge; Row 9 is the first row where it lines up with the stitches). From here there are 24 sts between the two markers.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="29">Row 9 (RS):</span><span data-step="29">K2, ${gl('m1l', 'M1L')}, ${gl('pm', 'PM')}, K24, ${gl('sm', 'SM')}, K2 <strong>(29 sts)</strong></span>
      <span class="row-label" data-step-label="30">Row 10 (WS):</span><span data-step="30">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P1, ${gl('m1lp', 'M1LP')}, P2 <strong>(30 sts)</strong></span>
      <span class="row-label" data-step-label="31">Row 11 (RS):</span><span data-step="31">K2, ${gl('m1l', 'M1L')}, K2, ${gl('sm', 'SM')}, K24, ${gl('sm', 'SM')}, K2 <strong>(31 sts)</strong></span>
      <span class="row-label" data-step-label="32">Row 12 (WS):</span><span data-step="32">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P3, ${gl('m1lp', 'M1LP')}, P2 <strong>(32 sts)</strong></span>
      <span class="row-label" data-step-label="33">Row 13 (RS):</span><span data-step="33">K2, ${gl('m1l', 'M1L')}, K4, ${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18, ${gl('sm', 'SM')}, K2 <strong>(33 sts)</strong></span>
      <span class="row-label" data-step-label="34">Row 14 (WS):</span><span data-step="34">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P5, ${gl('m1lp', 'M1LP')}, P2 <strong>(34 sts)</strong></span>
      <span class="row-label" data-step-label="35">Row 15 (RS):</span><span data-step="35">K2, ${gl('m1l', 'M1L')}, K6, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17, ${gl('sm', 'SM')}, K2 <strong>(35 sts)</strong></span>
      <span class="row-label" data-step-label="36">Row 16 (WS):</span><span data-step="36">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P7, ${gl('m1lp', 'M1LP')}, P2 <strong>(36 sts)</strong></span>
      <span class="row-label" data-step-label="37">Row 17 (RS):</span><span data-step="37">K2, ${gl('m1l', 'M1L')}, K8, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17, ${gl('sm', 'SM')}, K2 <strong>(37 sts)</strong></span>
      <span class="row-label" data-step-label="38">Row 18 (WS):</span><span data-step="38">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P9, ${gl('m1lp', 'M1LP')}, P2 <strong>(38 sts)</strong></span>
    </div>
    <p data-step="39">Cut the yarn and place the <strong>38 sts</strong> on a spare cable or needle.</p>

    <h2>1. Armhole Increase — Left Front</h2>
    <p data-step="40">With <strong>4.5 mm</strong> needles, cast on <strong>21 sts</strong> using the ${gl('elastic-co', 'elastic cast-on')} method — <a class="ad-video" href="https://youtu.be/V_d3ks1MrS8" target="_blank" rel="noopener">&#9654; Tutorial 1 – Elastic Cast-on (video)</a>.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="41">Row 1 (RS):</span><span data-step="41">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('pm', 'PM')}, (P1, K1) &times;8, P1, K2 <strong>(21 sts)</strong></span>
      <span class="row-label" data-step-label="42">Row 2 (WS):</span><span data-step="42">P2, ${gl('m1rp', 'M1RP')}, (K1, P1) &times;8, K1, ${gl('sm', 'SM')}, P2 <strong>(22 sts)</strong></span>
      <span class="row-label" data-step-label="43">Row 3 (RS):</span><span data-step="43">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, (P1, K1) &times;9, ${gl('m1r', 'M1R')}, K2 <strong>(23 sts)</strong></span>
      <span class="row-label" data-step-label="44">Row 4 (WS):</span><span data-step="44">P2, ${gl('m1rp', 'M1RP')}, P2, (K1, P1) &times;8, K1, ${gl('sm', 'SM')}, P2 <strong>(24 sts)</strong></span>
    </div>
    <p class="ad-note">Change to <strong>5 mm</strong> needles now (after the 4 ribbing rows).</p>
    <div class="row-table">
      <span class="row-label" data-step-label="45">Row 5 (RS):</span><span data-step="45">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K20, ${gl('m1r', 'M1R')}, K2 <strong>(25 sts)</strong></span>
      <span class="row-label" data-step-label="46">Row 6 (WS):</span><span data-step="46">P2, ${gl('m1rp', 'M1RP')}, P21, ${gl('sm', 'SM')}, P2 <strong>(26 sts)</strong></span>
      <span class="row-label" data-step-label="47">Row 7 (RS):</span><span data-step="47">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K22, ${gl('m1r', 'M1R')}, K2 <strong>(27 sts)</strong></span>
      <span class="row-label" data-step-label="48">Row 8 (WS):</span><span data-step="48">P2, ${gl('m1rp', 'M1RP')}, P23, ${gl('sm', 'SM')}, P2 <strong>(28 sts)</strong></span>
    </div>
    <p class="ad-note">Second marker: placed on Row 9 (the chart's green line starts at Row 7, but there it runs through the increase edge; Row 9 is the first row where it lines up with the stitches). From here there are 24 sts between the two markers.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="49">Row 9 (RS):</span><span data-step="49">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K24, ${gl('pm', 'PM')}, ${gl('m1r', 'M1R')}, K2 <strong>(29 sts)</strong></span>
      <span class="row-label" data-step-label="50">Row 10 (WS):</span><span data-step="50">P2, ${gl('m1rp', 'M1RP')}, P1, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P2 <strong>(30 sts)</strong></span>
      <span class="row-label" data-step-label="51">Row 11 (RS):</span><span data-step="51">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K24, ${gl('sm', 'SM')}, K2, ${gl('m1r', 'M1R')}, K2 <strong>(31 sts)</strong></span>
      <span class="row-label" data-step-label="52">Row 12 (WS):</span><span data-step="52">P2, ${gl('m1rp', 'M1RP')}, P3, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P2 <strong>(32 sts)</strong></span>
      <span class="row-label" data-step-label="53">Row 13 (RS):</span><span data-step="53">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18, ${gl('sm', 'SM')}, K4, ${gl('m1r', 'M1R')}, K2 <strong>(33 sts)</strong></span>
      <span class="row-label" data-step-label="54">Row 14 (WS):</span><span data-step="54">P2, ${gl('m1rp', 'M1RP')}, P5, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P2 <strong>(34 sts)</strong></span>
      <span class="row-label" data-step-label="55">Row 15 (RS):</span><span data-step="55">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17, ${gl('sm', 'SM')}, K6, ${gl('m1r', 'M1R')}, K2 <strong>(35 sts)</strong></span>
      <span class="row-label" data-step-label="56">Row 16 (WS):</span><span data-step="56">P2, ${gl('m1rp', 'M1RP')}, P7, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P2 <strong>(36 sts)</strong></span>
      <span class="row-label" data-step-label="57">Row 17 (RS):</span><span data-step="57">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17, ${gl('sm', 'SM')}, K8, ${gl('m1r', 'M1R')}, K2 <strong>(37 sts)</strong></span>
      <span class="row-label" data-step-label="58">Row 18 (WS):</span><span data-step="58">P2, ${gl('m1rp', 'M1RP')}, P9, ${gl('sm', 'SM')}, P24, ${gl('sm', 'SM')}, P2 <strong>(38 sts)</strong></span>
    </div>
    <p data-step="59">Do not cut the yarn — you will start the body from here.</p>

    <h2>3. Body &amp; Skirt</h2>
    <p class="ad-note">(The PDF numbers this section 3 — there is no section 2.)</p>
    <p data-step="60">Place all the pieces on your working needle in order <strong>left front – back – right front</strong>, RS facing, so Row 19 starts at the left front's front edge (where your yarn is). Keep all markers.</p>
    <p class="ad-note">Row 19 joins the pieces: the K2TOG, SSK pairs at the two joins are where left front meets back and back meets right front.</p>
    <p class="ad-note">On every row: the first 2 sts and last 2 sts are the edge sts (SL1, K1 / K2 on RS; SL1, P1 / P2 on WS), separated from the rest by the 2 edge markers.</p>
    <p class="ad-note">Increase rows (49, 73, 97, 121, 145, 169, 193): remove the inner markers as you work the increase row, then place them back in their new positions on the following WS row (written out as PM).</p>
    <div class="row-table">
      <span class="row-label" data-step-label="61">Row 19 (RS):</span><span data-step="61">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('ssk', 'SSK')}, K12, (${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12) &times;2, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, ${gl('ssk', 'SSK')}, K10, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="62">Row 20 (WS):</span><span data-step="62">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="63">Row 21 (RS):</span><span data-step="63">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13, ${gl('sm', 'SM')}, K24, (${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13) &times;4, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="64">Row 22 (WS):</span><span data-step="64">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="65">Row 23 (RS):</span><span data-step="65">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14, ${gl('sm', 'SM')}, K24, (${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14) &times;4, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="66">Row 24 (WS):</span><span data-step="66">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="67">Row 25 (RS):</span><span data-step="67">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="68">Row 26 (WS):</span><span data-step="68">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="69">Row 27 (RS):</span><span data-step="69">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="70">Row 28 (WS):</span><span data-step="70">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="71">Row 29 (RS):</span><span data-step="71">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="72">Row 30 (WS):</span><span data-step="72">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="73">Row 31 (RS):</span><span data-step="73">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="74">Row 32 (WS):</span><span data-step="74">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="75">Row 33 (RS):</span><span data-step="75">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="76">Row 34 (WS):</span><span data-step="76">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="77">Row 35 (RS):</span><span data-step="77">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="78">Row 36 (WS):</span><span data-step="78">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="79">Row 37 (RS):</span><span data-step="79">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K19, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="80">Row 38 (WS):</span><span data-step="80">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="81">Row 39 (RS):</span><span data-step="81">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="82">Row 40 (WS):</span><span data-step="82">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="83">Row 41 (RS):</span><span data-step="83">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="84">Row 42 (WS):</span><span data-step="84">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="85">Row 43 (RS):</span><span data-step="85">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K12, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="86">Row 44 (WS):</span><span data-step="86">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="87">Row 45 (RS):</span><span data-step="87">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="88">Row 46 (WS):</span><span data-step="88">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="89">Row 47 (RS):</span><span data-step="89">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K14, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8) &times;6, ${gl('sm', 'SM')}, K2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="90">Row 48 (WS):</span><span data-step="90">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P2 <strong>(148 sts)</strong></span>
      <span class="row-label" data-step-label="91">Row 49 (RS):</span><span data-step="91"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K3, (${gl('m1l', 'M1L')}, K6) &times;23, ${gl('m1l', 'M1L')}, K3, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="92">Row 50 (WS):</span><span data-step="92">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('pm', 'PM')}, P24) &times;6, ${gl('pm', 'PM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="93">Row 51 (RS):</span><span data-step="93">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="94">Row 52 (WS):</span><span data-step="94">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="95">Row 53 (RS):</span><span data-step="95">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="96">Row 54 (WS):</span><span data-step="96">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="97">Row 55 (RS):</span><span data-step="97">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="98">Row 56 (WS):</span><span data-step="98">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="99">Row 57 (RS):</span><span data-step="99">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="100">Row 58 (WS):</span><span data-step="100">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="101">Row 59 (RS):</span><span data-step="101">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="102">Row 60 (WS):</span><span data-step="102">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="103">Row 61 (RS):</span><span data-step="103">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18) &times;6, ${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K6, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="104">Row 62 (WS):</span><span data-step="104">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="105">Row 63 (RS):</span><span data-step="105">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;6, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K5, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="106">Row 64 (WS):</span><span data-step="106">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="107">Row 65 (RS):</span><span data-step="107">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;6, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K5, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="108">Row 66 (WS):</span><span data-step="108">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="109">Row 67 (RS):</span><span data-step="109">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12) &times;6, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="110">Row 68 (WS):</span><span data-step="110">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="111">Row 69 (RS):</span><span data-step="111">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13) &times;6, ${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K1, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="112">Row 70 (WS):</span><span data-step="112">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="113">Row 71 (RS):</span><span data-step="113">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14) &times;6, ${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K2, ${gl('sm', 'SM')}, K2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="114">Row 72 (WS):</span><span data-step="114">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(172 sts)</strong></span>
      <span class="row-label" data-step-label="115">Row 73 (RS):</span><span data-step="115"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K7, (${gl('m1l', 'M1L')}, K14) &times;11, ${gl('m1l', 'M1L')}, K7, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="116">Row 74 (WS):</span><span data-step="116">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('pm', 'PM')}, P24) &times;6, ${gl('pm', 'PM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="117">Row 75 (RS):</span><span data-step="117">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="118">Row 76 (WS):</span><span data-step="118">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="119">Row 77 (RS):</span><span data-step="119">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="120">Row 78 (WS):</span><span data-step="120">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="121">Row 79 (RS):</span><span data-step="121">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="122">Row 80 (WS):</span><span data-step="122">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="123">Row 81 (RS):</span><span data-step="123">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="124">Row 82 (WS):</span><span data-step="124">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="125">Row 83 (RS):</span><span data-step="125">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="126">Row 84 (WS):</span><span data-step="126">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="127">Row 85 (RS):</span><span data-step="127">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3, (${gl('sm', 'SM')}, K19, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="128">Row 86 (WS):</span><span data-step="128">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="129">Row 87 (RS):</span><span data-step="129">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K11, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="130">Row 88 (WS):</span><span data-step="130">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="131">Row 89 (RS):</span><span data-step="131">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K11, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="132">Row 90 (WS):</span><span data-step="132">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="133">Row 91 (RS):</span><span data-step="133">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10, (${gl('sm', 'SM')}, K12, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="134">Row 92 (WS):</span><span data-step="134">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="135">Row 93 (RS):</span><span data-step="135">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K7, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9, (${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="136">Row 94 (WS):</span><span data-step="136">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="137">Row 95 (RS):</span><span data-step="137">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K8, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8, (${gl('sm', 'SM')}, K14, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8) &times;6, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="138">Row 96 (WS):</span><span data-step="138">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;6, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(184 sts)</strong></span>
      <span class="row-label" data-step-label="139">Row 97 (RS):</span><span data-step="139"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K7, (${gl('m1l', 'M1L')}, K15) &times;11, ${gl('m1l', 'M1L')}, K8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="140">Row 98 (WS):</span><span data-step="140">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, (${gl('pm', 'PM')}, P24) &times;7, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="141">Row 99 (RS):</span><span data-step="141">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="142">Row 100 (WS):</span><span data-step="142">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="143">Row 101 (RS):</span><span data-step="143">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="144">Row 102 (WS):</span><span data-step="144">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="145">Row 103 (RS):</span><span data-step="145">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="146">Row 104 (WS):</span><span data-step="146">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="147">Row 105 (RS):</span><span data-step="147">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="148">Row 106 (WS):</span><span data-step="148">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="149">Row 107 (RS):</span><span data-step="149">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="150">Row 108 (WS):</span><span data-step="150">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="151">Row 109 (RS):</span><span data-step="151">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="152">Row 110 (WS):</span><span data-step="152">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="153">Row 111 (RS):</span><span data-step="153">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="154">Row 112 (WS):</span><span data-step="154">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="155">Row 113 (RS):</span><span data-step="155">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="156">Row 114 (WS):</span><span data-step="156">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="157">Row 115 (RS):</span><span data-step="157">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="158">Row 116 (WS):</span><span data-step="158">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="159">Row 117 (RS):</span><span data-step="159">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="160">Row 118 (WS):</span><span data-step="160">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="161">Row 119 (RS):</span><span data-step="161">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14) &times;8, ${gl('sm', 'SM')}, K2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="162">Row 120 (WS):</span><span data-step="162">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P2 <strong>(196 sts)</strong></span>
      <span class="row-label" data-step-label="163">Row 121 (RS):</span><span data-step="163"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K8, (${gl('m1l', 'M1L')}, K16) &times;11, ${gl('m1l', 'M1L')}, K8, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="164">Row 122 (WS):</span><span data-step="164">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('pm', 'PM')}, P24) &times;8, ${gl('pm', 'PM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="165">Row 123 (RS):</span><span data-step="165">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="166">Row 124 (WS):</span><span data-step="166">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="167">Row 125 (RS):</span><span data-step="167">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="168">Row 126 (WS):</span><span data-step="168">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="169">Row 127 (RS):</span><span data-step="169">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="170">Row 128 (WS):</span><span data-step="170">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="171">Row 129 (RS):</span><span data-step="171">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="172">Row 130 (WS):</span><span data-step="172">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="173">Row 131 (RS):</span><span data-step="173">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="174">Row 132 (WS):</span><span data-step="174">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="175">Row 133 (RS):</span><span data-step="175">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K19, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="176">Row 134 (WS):</span><span data-step="176">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="177">Row 135 (RS):</span><span data-step="177">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="178">Row 136 (WS):</span><span data-step="178">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="179">Row 137 (RS):</span><span data-step="179">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="180">Row 138 (WS):</span><span data-step="180">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="181">Row 139 (RS):</span><span data-step="181">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K12, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="182">Row 140 (WS):</span><span data-step="182">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="183">Row 141 (RS):</span><span data-step="183">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="184">Row 142 (WS):</span><span data-step="184">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="185">Row 143 (RS):</span><span data-step="185">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, (${gl('sm', 'SM')}, K14, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8) &times;8, ${gl('sm', 'SM')}, K6, ${gl('sm', 'SM')}, K2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="186">Row 144 (WS):</span><span data-step="186">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P6, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P6, ${gl('sm', 'SM')}, P2 <strong>(208 sts)</strong></span>
      <span class="row-label" data-step-label="187">Row 145 (RS):</span><span data-step="187"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K8, (${gl('m1l', 'M1L')}, K17) &times;11, ${gl('m1l', 'M1L')}, K9, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="188">Row 146 (WS):</span><span data-step="188">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('pm', 'PM')}, P24) &times;8, ${gl('pm', 'PM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="189">Row 147 (RS):</span><span data-step="189">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="190">Row 148 (WS):</span><span data-step="190">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="191">Row 149 (RS):</span><span data-step="191">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="192">Row 150 (WS):</span><span data-step="192">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="193">Row 151 (RS):</span><span data-step="193">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="194">Row 152 (WS):</span><span data-step="194">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="195">Row 153 (RS):</span><span data-step="195">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="196">Row 154 (WS):</span><span data-step="196">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="197">Row 155 (RS):</span><span data-step="197">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K12, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="198">Row 156 (WS):</span><span data-step="198">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
    </div>
    <p class="ad-note"><strong>Short version:</strong> stop after Row 156 and go to Bind off. <strong>Long version:</strong> continue to Row 228.</p>
    <div class="row-table">
      <span class="row-label" data-step-label="199">Row 157 (RS):</span><span data-step="199">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18) &times;8, ${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K6, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="200">Row 158 (WS):</span><span data-step="200">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="201">Row 159 (RS):</span><span data-step="201">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;8, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K5, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="202">Row 160 (WS):</span><span data-step="202">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="203">Row 161 (RS):</span><span data-step="203">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;8, ${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K5, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="204">Row 162 (WS):</span><span data-step="204">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="205">Row 163 (RS):</span><span data-step="205">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12) &times;8, ${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="206">Row 164 (WS):</span><span data-step="206">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="207">Row 165 (RS):</span><span data-step="207">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13) &times;8, ${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K1, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="208">Row 166 (WS):</span><span data-step="208">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="209">Row 167 (RS):</span><span data-step="209">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K12, (${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14) &times;8, ${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K2, ${gl('sm', 'SM')}, K2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="210">Row 168 (WS):</span><span data-step="210">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P12, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P12, ${gl('sm', 'SM')}, P2 <strong>(220 sts)</strong></span>
      <span class="row-label" data-step-label="211">Row 169 (RS):</span><span data-step="211"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K9, (${gl('m1l', 'M1L')}, K18) &times;11, ${gl('m1l', 'M1L')}, K9, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="212">Row 170 (WS):</span><span data-step="212">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('pm', 'PM')}, P24) &times;8, ${gl('pm', 'PM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="213">Row 171 (RS):</span><span data-step="213">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="214">Row 172 (WS):</span><span data-step="214">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="215">Row 173 (RS):</span><span data-step="215">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="216">Row 174 (WS):</span><span data-step="216">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="217">Row 175 (RS):</span><span data-step="217">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="218">Row 176 (WS):</span><span data-step="218">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="219">Row 177 (RS):</span><span data-step="219">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="220">Row 178 (WS):</span><span data-step="220">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="221">Row 179 (RS):</span><span data-step="221">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K18, (${gl('sm', 'SM')}, K24) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="222">Row 180 (WS):</span><span data-step="222">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="223">Row 181 (RS):</span><span data-step="223">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3, (${gl('sm', 'SM')}, K19, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K3) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="224">Row 182 (WS):</span><span data-step="224">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="225">Row 183 (RS):</span><span data-step="225">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K11, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="226">Row 184 (WS):</span><span data-step="226">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="227">Row 185 (RS):</span><span data-step="227">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K11, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2, (${gl('sm', 'SM')}, K17, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K2) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="228">Row 186 (WS):</span><span data-step="228">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="229">Row 187 (RS):</span><span data-step="229">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K6, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10, (${gl('sm', 'SM')}, K12, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K10) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="230">Row 188 (WS):</span><span data-step="230">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="231">Row 189 (RS):</span><span data-step="231">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K7, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9, (${gl('sm', 'SM')}, K13, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K9) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="232">Row 190 (WS):</span><span data-step="232">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="233">Row 191 (RS):</span><span data-step="233">${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K8, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8, (${gl('sm', 'SM')}, K14, ${gl('yo', 'YO')}, ${gl('ssk', 'SSK')}, K8) &times;8, ${gl('sm', 'SM')}, K18, ${gl('sm', 'SM')}, K2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="234">Row 192 (WS):</span><span data-step="234">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P18, (${gl('sm', 'SM')}, P24) &times;8, ${gl('sm', 'SM')}, P18, ${gl('sm', 'SM')}, P2 <strong>(232 sts)</strong></span>
      <span class="row-label" data-step-label="235">Row 193 (RS):</span><span data-step="235"><em>Remove each inner marker as you reach it (keep the 2 edge markers).</em> ${gl('sl-rs', 'SL1 wyib')}, K1, ${gl('sm', 'SM')}, K9, (${gl('m1l', 'M1L')}, K19) &times;11, ${gl('m1l', 'M1L')}, K10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="236">Row 194 (WS):</span><span data-step="236">${gl('sl-ws', 'SL1 wyif')}, P1, ${gl('sm', 'SM')}, P24, (${gl('pm', 'PM')}, P24) &times;9, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="237">Row 195 (RS):</span><span data-step="237">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="238">Row 196 (WS):</span><span data-step="238">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="239">Row 197 (RS):</span><span data-step="239">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="240">Row 198 (WS):</span><span data-step="240">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="241">Row 199 (RS):</span><span data-step="241">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="242">Row 200 (WS):</span><span data-step="242">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="243">Row 201 (RS):</span><span data-step="243">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="244">Row 202 (WS):</span><span data-step="244">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="245">Row 203 (RS):</span><span data-step="245">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="246">Row 204 (WS):</span><span data-step="246">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="247">Row 205 (RS):</span><span data-step="247">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K4, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K18) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="248">Row 206 (WS):</span><span data-step="248">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="249">Row 207 (RS):</span><span data-step="249">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="250">Row 208 (WS):</span><span data-step="250">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="251">Row 209 (RS):</span><span data-step="251">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K2, ${gl('ssk', 'SSK')}, ${gl('yo', 'YO')}, K1, ${gl('yo', 'YO')}, ${gl('k2tog', 'K2TOG')}, K17) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="252">Row 210 (WS):</span><span data-step="252">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="253">Row 211 (RS):</span><span data-step="253">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K10, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K12) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="254">Row 212 (WS):</span><span data-step="254">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="255">Row 213 (RS):</span><span data-step="255">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K9, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K13) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="256">Row 214 (WS):</span><span data-step="256">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="257">Row 215 (RS):</span><span data-step="257">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K8, ${gl('k2tog', 'K2TOG')}, ${gl('yo', 'YO')}, K14) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="258">Row 216 (WS):</span><span data-step="258">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="259">Row 217 (RS):</span><span data-step="259">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="260">Row 218 (WS):</span><span data-step="260">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="261">Row 219 (RS):</span><span data-step="261">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="262">Row 220 (WS):</span><span data-step="262">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="263">Row 221 (RS):</span><span data-step="263">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="264">Row 222 (WS):</span><span data-step="264">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="265">Row 223 (RS):</span><span data-step="265">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="266">Row 224 (WS):</span><span data-step="266">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="267">Row 225 (RS):</span><span data-step="267">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="268">Row 226 (WS):</span><span data-step="268">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="269">Row 227 (RS):</span><span data-step="269">${gl('sl-rs', 'SL1 wyib')}, K1, (${gl('sm', 'SM')}, K24) &times;10, ${gl('sm', 'SM')}, K2 <strong>(244 sts)</strong></span>
      <span class="row-label" data-step-label="270">Row 228 (WS):</span><span data-step="270">${gl('sl-ws', 'SL1 wyif')}, P1, (${gl('sm', 'SM')}, P24) &times;10, ${gl('sm', 'SM')}, P2 <strong>(244 sts)</strong></span>
    </div>
    <p data-step="271">Bind off using the ${gl('picot-bo', 'picot bind-off')} — <a class="ad-video" href="https://youtu.be/2-xkGnWz7vo" target="_blank" rel="noopener">&#9654; Tutorial 2 – Picot Bind-off (video)</a>. You can also adjust the length to your liking before binding off.</p>

    <h2>4. Shoulder Straps</h2>
    <p data-step="272">First, mark the positions on the front and back panels where the shoulder straps will be attached using markers.</p>
    <p data-step="273">Using a size 6/0 crochet hook, work slip stitch cord starting from the marked positions to make both shoulder straps (<a class="ad-video" href="https://youtu.be/T0azB-wEnU8" target="_blank" rel="noopener">&#9654; Tutorial 3 – Shoulder Straps (video)</a>). Before you start, leave a yarn tail about 3 times the shoulder strap length.</p>
    <p data-step="274">Before you attach the straps, adjust the length so that it is 2–3 cm shorter than your preferred length. The sample is 30 cm when worn.</p>
    <p data-step="275">Attach the other end of the strap to the opposite marker using slip stitch. Then add one more row of slip stitches to prevent excessive stretching.</p>
    <p class="ad-note">If you prefer a wider shoulder strap, work using 2 strands.</p>

    <h2>5. Button Hole</h2>
    <p data-step="276">Before making the buttonholes, place markers at each spot where buttons will be attached. Adjust the number and spacing to suit your design (10 buttons for Long, 6 for Short).</p>
    <p data-step="277">Using a size 6/0 crochet hook, repeat (slip stitch, chain stitch) along the edges of both front panels (<a class="ad-video" href="https://youtu.be/VGhm-R4CNvA" target="_blank" rel="noopener">&#9654; Tutorial 4 – Button Hole (video)</a>). Work from the bottom upward on the right front, and from the top downward on the left front.</p>
    <p data-step="278">When you reach a marker, make 4 chain sts and slip st to create a buttonhole.</p>
    <p data-step="279">Weave in all ends and sew on the buttons to finish the Arachne Dress.</p>

    <h2 class="ad-glossary-hdr">Glossary</h2>
    <div class="bb-glossary">
      ${GLOSSARY.map(g => `<div class="bb-gloss-entry" id="ad-gloss-${g.id}"><span class="bb-gloss-term">${g.term}</span><span class="bb-gloss-def">${g.def}</span></div>`).join('\n      ')}
    </div>

  </div>
</div>`;

const TOOLBAR_HTML = `
<div id="page-toolbar">
  <h1>Arachne Dress</h1>
  <div class="divider"></div>
  <button class="btn" id="ad-step-toggle">Step Mode</button>
  <button class="btn small" id="ad-step-prev" title="Previous step (Left arrow)">&#8592;</button>
  <span id="ad-step-badge" style="font-size:0.82rem;color:#b0897a;white-space:nowrap;">Step — / ${TOTAL_STEPS}</span>
  <button class="btn small" id="ad-step-next" title="Next step (Space / Right arrow)">&#8594;</button>
</div>`;

// ── State ─────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'arachne-dress-step';

let stepMode    = false;
let currentStep = 0;

let doc         = null;  // #ad-pattern-doc element
let _shellAPI   = null;
let adPipEl     = null;  // fallback overlay element
let adPipWindow = null;  // documentPictureInPicture window

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      stepMode    = saved.stepMode ?? false;
      currentStep = saved.step     ?? 0;
    }
  } catch (_) {}
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ stepMode, step: currentStep }));
}

// ── History ───────────────────────────────────────────────────────────────────
const LS_HISTORY_AD = 'arachne-dress-history';
const MAX_HIST_AD   = 500;

let histTimerAD   = null;
let lastHistKeyAD = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_HISTORY_AD)) || []; } catch { return []; }
}
function saveHistory(hist) {
  localStorage.setItem(LS_HISTORY_AD, JSON.stringify(hist));
}
function scheduleHistEntry() {
  if (!stepMode) return;
  clearTimeout(histTimerAD);
  histTimerAD = setTimeout(() => {
    const key = String(currentStep);
    if (key === lastHistKeyAD) return;
    lastHistKeyAD = key;
    const hist = loadHistory();
    hist.unshift({ step: currentStep, ts: Date.now() });
    if (hist.length > MAX_HIST_AD) hist.length = MAX_HIST_AD;
    saveHistory(hist);
    if (_shellAPI) { _shellAPI.updateHistBadge(); _shellAPI.refreshHistory(); }
  }, 1500);
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
  const btn = document.getElementById('ad-gloss-back');
  if (btn) btn.classList.add('visible');
}

function hideGlossBackBtn() {
  const btn = document.getElementById('ad-gloss-back');
  if (btn) btn.classList.remove('visible');
}

function jumpToGloss(sourceEl) {
  glossReturnEl = sourceEl;
  const id = sourceEl.dataset.gloss;
  const target = doc.querySelector(`#ad-gloss-${id}`);
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

  const toggleBtn = document.getElementById('ad-step-toggle');
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
  const badge = document.getElementById('ad-step-badge');
  if (badge) {
    badge.textContent = stepMode
      ? `Step ${currentStep + 1} / ${TOTAL_STEPS}`
      : `Step — / ${TOTAL_STEPS}`;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function advance() {
  if (currentStep < TOTAL_STEPS - 1) currentStep++;
  hideGlossBackBtn();
  updateDisplay();
  scheduleHistEntry();
}

function retreat() {
  if (currentStep > 0) currentStep--;
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

function updatePip() {
  const fbVis = adPipEl  && adPipEl.classList.contains('visible');
  const winOk = adPipWindow && !adPipWindow.closed;
  if (!fbVis && !winOk) return;

  function apply(d) {
    const contentEl = d.getElementById('ad-pip-content');
    const badgeEl   = d.getElementById('ad-pip-badge');
    if (contentEl) contentEl.innerHTML = pipStepHTML();
    if (badgeEl)   badgeEl.textContent = stepMode ? `Step ${currentStep + 1} / ${TOTAL_STEPS}` : '—';
  }

  if (fbVis) apply(document);
  if (winOk) apply(adPipWindow.document);
}

function closePip() {
  if (adPipEl) adPipEl.classList.remove('visible');
  if (adPipWindow && !adPipWindow.closed) adPipWindow.close();
  adPipWindow = null;
  if (_shellAPI) _shellAPI.setPipActive(false);
}

const PIP_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #290d13 url("/background/background.jpg") 22% 32% / cover no-repeat; color: #d8c4a8; font-family: system-ui, sans-serif;
    font-size: 0.85rem; display: flex; flex-direction: column;
    height: 100dvh; overflow: hidden; user-select: none; }
  #ad-pip-hdr { display: flex; justify-content: space-between; align-items: center;
    padding: 6px 10px; background: #3b1720; border-bottom: 1px solid #562634;
    flex-shrink: 0; font-size: 0.75rem; font-weight: 700; color: #b98f7d; }
  #ad-pip-close { cursor: pointer; padding: 0 4px; color: #6d4a45; }
  #ad-pip-close:hover { color: #f2e7d5; }
  #ad-pip-content { flex: 1; padding: 10px 12px; overflow-y: auto; line-height: 1.6; background: rgba(29, 9, 14, 0.72); }
  #ad-pip-ftr { display: flex; justify-content: space-between; align-items: center;
    padding: 4px 8px; background: #3b1720; border-top: 1px solid #562634; flex-shrink: 0; }
  .ad-pip-nav { cursor: pointer; padding: 2px 10px; border-radius: 4px;
    background: #562634; color: #b98f7d; font-size: 0.9rem; }
  .ad-pip-nav:hover { background: #63303d; color: #f2e7d5; }
  #ad-pip-badge { font-size: 0.72rem; color: #b0897a; }
  strong { color: #e8dcc4; }
  em { color: #c9a08f; font-style: italic; }
  .pip-lbl { font-weight: 700; color: #e8dcc4; }
  .gloss-link { border-bottom: 1px dotted currentColor; }
`;

const PIP_BODY_HTML = `
  <div id="ad-pip-hdr">
    <span id="ad-pip-title">Arachne Dress — Mini View</span>
    <span id="ad-pip-close">✕</span>
  </div>
  <div id="ad-pip-content"></div>
  <div id="ad-pip-ftr">
    <span class="ad-pip-nav" id="ad-pip-prev">&#x25C4;</span>
    <span id="ad-pip-badge"></span>
    <span class="ad-pip-nav" id="ad-pip-next">&#x25BA;</span>
  </div>
`;

function wirePipDoc(d) {
  d.getElementById('ad-pip-close').addEventListener('click', closePip);
  d.getElementById('ad-pip-prev').addEventListener('click',  retreat);
  d.getElementById('ad-pip-next').addEventListener('click',  advance);
  d.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); advance(); }
    else if (e.key === 'ArrowLeft' || e.key === 'Backspace') { e.preventDefault(); retreat(); }
    else if (e.key === 'Escape') { closePip(); }
  });
}

async function togglePip() {
  const fbVis = adPipEl  && adPipEl.classList.contains('visible');
  const winOk = adPipWindow && !adPipWindow.closed;
  if (fbVis || winOk) { closePip(); return; }

  if (!stepMode) { stepMode = true; updateDisplay(); }

  if (window.documentPictureInPicture) {
    try {
      adPipWindow = await documentPictureInPicture.requestWindow({ width: 560, height: 200 });
      const d = adPipWindow.document;
      const style = d.createElement('style');
      style.textContent = PIP_CSS;
      d.head.appendChild(style);
      d.body.innerHTML = PIP_BODY_HTML;
      wirePipDoc(d);
      adPipWindow.addEventListener('pagehide', () => {
        adPipWindow = null;
        if (_shellAPI) _shellAPI.setPipActive(false);
      });
      if (_shellAPI) _shellAPI.setPipActive(true);
      updatePip();
      return;
    } catch { /* fall through to overlay */ }
  }

  if (!adPipEl) {
    adPipEl = document.createElement('div');
    adPipEl.id = 'ad-pip-overlay';
    adPipEl.innerHTML = PIP_BODY_HTML;
    document.body.appendChild(adPipEl);

    document.getElementById('ad-pip-hdr').addEventListener('mousedown', e => {
      if (e.target.id === 'ad-pip-close') return;
      const rect = adPipEl.getBoundingClientRect();
      const dx = e.clientX - rect.left, dy = e.clientY - rect.top;
      const onMove = ev => {
        adPipEl.style.right = 'auto'; adPipEl.style.bottom = 'auto';
        adPipEl.style.left = (ev.clientX - dx) + 'px';
        adPipEl.style.top  = (ev.clientY - dy) + 'px';
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

  adPipEl.classList.add('visible');
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
PageRegistry.register("arachne-dress", {
  id:     "arachne-dress",
  title:  "Arachne Dress",
  status: "Pattern reference · Size S",

  mount(toolbarMount, bodyMount, shellAPI) {
    _shellAPI = shellAPI;
    loadState();

    toolbarMount.innerHTML = TOOLBAR_HTML;
    bodyMount.innerHTML    = CONTENT_HTML;
    doc = document.getElementById('ad-pattern-doc');

    document.getElementById('ad-step-toggle').addEventListener('click', toggleStepMode);
    document.getElementById('ad-step-next').addEventListener('click',   advance);
    document.getElementById('ad-step-prev').addEventListener('click',   retreat);

    shellAPI.setStatus("Arachne Dress — pattern reference · Size S");
    shellAPI.updateHistBadge();
    updateDisplay();
    scheduleHistEntry();

    wireGlossaryLinks();
    if (!document.getElementById('ad-gloss-back')) {
      const btn = document.createElement('button');
      btn.id = 'ad-gloss-back';
      btn.className = 'ad-gloss-back-btn';
      btn.innerHTML = '&#8592; Back to pattern';
      btn.addEventListener('click', backToPattern);
      document.body.appendChild(btn);
    }
  },

  unmount() {
    clearTimeout(histTimerAD);
    lastHistKeyAD = null;
    closePip();
    if (adPipEl) { adPipEl.remove(); adPipEl = null; }
    const backBtn = document.getElementById('ad-gloss-back');
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
    lastHistKeyAD = null;
  },
  clearHistory()   { saveHistory([]); lastHistKeyAD = null; },
  navigateToHistEntry(entry) {
    currentStep = entry.step;
    stepMode    = true;
    updateDisplay();
  },
  formatHistEntry(entry) {
    const labelEl = doc && doc.querySelector(`[data-step-label="${entry.step}"]`);
    return {
      label:      labelEl ? `Step ${entry.step + 1} · ${labelEl.textContent.replace(/:$/, '')}` : `Step ${entry.step + 1}`,
      labelClass: "",
      isCurrent:  stepMode && entry.step === currentStep,
    };
  },
  getCurrentPos() {
    const labelEl = doc && doc.querySelector(`[data-step-label="${currentStep}"]`);
    return {
      label: stepMode ? (labelEl ? labelEl.textContent.replace(/:$/, '') : `Step ${currentStep + 1}`) : "No active step",
      sub:   "Arachne Dress",
    };
  },
});

})();
