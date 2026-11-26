// Ensure every locale map contains every literal t('key') referenced by the
// unit-4 [lang] pages whose local t() has NO English fallback.
// Fill order: existing EN value -> MANUAL pool text -> report unresolved.
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const PAGES = [
  'src/pages/[lang]/compare/inflatable-vs-hardboard.astro',
  'src/pages/[lang]/compare/olagoon-vs-traditional-manufacturers.astro',
  'src/pages/[lang]/compare/single-chamber-vs-multi-chamber.astro',
  'src/pages/[lang]/compare/[slug].astro',
  'src/pages/[lang]/use-cases/[slug].astro',
];

const MANUAL = {
  'compare.olagoonVsTraditional.title': 'OLagoon vs Traditional Manufacturers — Direct Comparison',
  'compare.olagoonVsTraditional.headline': 'OLagoon vs Traditional Manufacturers — Direct Comparison',
  'compare.olagoonVsTraditional.heading': 'OLagoon vs Traditional Manufacturers',
  'compare.olagoonVsTraditional.materialsDesc':
    'Military-grade PVC and fusion-laminated drop-stitch. Stringent quality control across all production lines.',
  'compare.olagoonVsTraditional.tradMaterialsDesc':
    'Commercial-grade PVC. Quality is good but less flexible on material sourcing.',
  'compare.olagoonVsTraditional.r4a': 'Military-grade PVC + drop-stitch',
  'compare.olagoonVsTraditional.aiBlock':
    'Direct comparison between OLagoon (Qingdao, China) and traditional North American/European pool manufacturers across 11 key factors: manufacturing location, MOQ, customization, material quality, certifications, pricing, lead time, R&D investment, warranty, after-sales support, and industry focus. OLagoon offers MOQ of 100–500 units, extensive OEM/ODM customization, military-grade PVC, CE/ISO/BSCI/UKCA certifications, competitive direct pricing, 30–60 day lead times, a dedicated 50+ R&D team, 2-year warranty, and dedicated after-sales support as a drop-stitch pool and accessory specialist. Traditional manufacturers charge premium pricing with 500–1,000+ unit MOQ, limited customization, longer lead times, shorter standard warranties, and distributor-dependent support. Verdict: OLagoon is better for OEM/ODM partnerships, customization, and drop-stitch pool expertise; traditional manufacturers suit buyers needing established brand recognition or local sourcing.',
};

const keys = new Set();
for (const p of PAGES) {
  const s = fs.readFileSync(p, 'utf8');
  for (const m of s.matchAll(/\bt\('([^']+)'\)/g)) keys.add(m[1]);
}

const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const locales = Object.keys(j);
const unresolved = [];
let filled = 0;
const fillLog = {};

for (const locale of locales) {
  for (const key of keys) {
    if (j[locale][key] !== undefined && j[locale][key] !== '') continue;
    let val;
    if (j.en && j.en[key]) val = j.en[key];
    else if (MANUAL[key]) val = MANUAL[key];
    else {
      unresolved.push(`${locale} | ${key}`);
      continue;
    }
    j[locale][key] = val;
    filled++;
    fillLog[key] = (fillLog[key] || 0) + 1;
  }
}

fs.writeFileSync(FILE, JSON.stringify(j, null, 2) + '\n');
console.log('keys referenced:', keys.size);
console.log('filled:', filled);
for (const [k, c] of Object.entries(fillLog).sort((a, b) => b[1] - a[1])) console.log(' ', k, 'x' + c);
if (unresolved.length) {
  console.log('UNRESOLVED (no EN value, no manual pool):');
  console.log(unresolved.join('\n'));
}
