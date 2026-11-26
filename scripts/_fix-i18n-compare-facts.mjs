// Fix compare.* fact leaks in src/data/site/i18n-config.json (all locales) — idempotent.
//  1. compare.inflatableVsHard.r5a/r6a: iSUP parentheticals → pool copy (identical EN string in every locale)
//  2. compare.olagoonVsTraditional: MOQ 1–50 → 100–500; traditional 100–500+ → 500–1,000+; 3-year → 2-year warranty
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const report = { fixed: 0, manual: [], skippedDone: 0 };

for (const [loc, m] of Object.entries(j)) {
  // 1. iSUP parentheticals
  for (const [k, test, pool] of [
    ['compare.inflatableVsHard.r5a', /modern iSUPs/i, 'Good (modern drop-stitch pools)'],
    ['compare.inflatableVsHard.r6a', /stiff iSUPs/i, 'Good (stiff drop-stitch pools)'],
  ]) {
    const v = m[k];
    if (v === undefined) continue;
    if (test.test(String(v))) {
      m[k] = pool;
      report.fixed++;
    } else if (v !== pool) {
      report.manual.push(`${loc}.${k} unexpected value: "${v}"`);
    } else {
      report.skippedDone++;
    }
  }

  // 2a. MOQ low range: 1–50 → 100–500
  for (const k of ['compare.olagoonVsTraditional.r2a', 'compare.olagoonVsTraditional.moqDesc']) {
    const v = m[k];
    if (v === undefined) continue;
    const s = String(v);
    if (/100\D{1,6}500/.test(s)) {
      report.skippedDone++;
      continue;
    }
    const next = s.replace(/1(\D{1,6})50/, (mm, g) => '100' + g + '500');
    if (next === s) report.manual.push(`${loc}.${k} no 1–50 range found: "${s}"`);
    else {
      m[k] = next;
      report.fixed++;
    }
  }

  // 2b. Traditional MOQ: 100–500+ → 500–1,000+ (with or without literal "+")
  for (const k of ['compare.olagoonVsTraditional.r2b', 'compare.olagoonVsTraditional.tradMoqDesc']) {
    const v = m[k];
    if (v === undefined) continue;
    const s = String(v);
    if (/500\D{1,6}1,000/.test(s)) {
      report.skippedDone++;
      continue;
    }
    let next = s.replace(/100(\D{1,6})500\+/, (mm, g) => '500' + g + '1,000+');
    if (next === s) next = s.replace(/100(\D{1,6})500/, (mm, g) => '500' + g + '1,000');
    if (next === s) report.manual.push(`${loc}.${k} no 100–500 range found: "${s}"`);
    else {
      m[k] = next;
      report.fixed++;
    }
  }

  // 2c. Warranty: 3-year → 2-year (r9a is the OLagoon column)
  {
    const k = 'compare.olagoonVsTraditional.r9a';
    const v = m[k];
    if (v !== undefined) {
      const s = String(v);
      if (/^\D*3\D*$/.test(s)) {
        m[k] = s.replace('3', '2');
        report.fixed++;
      } else if (!/^\D*2\D*$/.test(s)) {
        report.manual.push(`${loc}.${k} unexpected warranty value: "${s}"`);
      } else {
        report.skippedDone++;
      }
    }
  }
}

fs.writeFileSync(FILE, JSON.stringify(j, null, 2) + '\n');
console.log('fixed:', report.fixed, '| already done:', report.skippedDone);
if (report.manual.length) {
  console.log('MANUAL REVIEW NEEDED:');
  console.log([...new Set(report.manual)].join('\n'));
} else {
  console.log('No manual-review items.');
}
