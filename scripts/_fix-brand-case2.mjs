import { readFileSync, writeFileSync } from 'node:fs';

// Pass 2: hyphen-compound blind spots (Nordic/Germanic visible text), src/lib leftovers, generator fallbacks.
// Slugs / route identifiers / page keys / ids are deliberately NOT touched.
const FI = /(?<= )olagoon(?=-)/g; // space-preceded compounds: "viittaa olagoon-brändiin", "Alle olagoon-produkter"
const HE = /(?<=[\u0590-\u05FF]-)olagoon/g; // Hebrew maqaf: "מתייחס ל-olagoon"
const JSONVAL = /(?<=[ "])olagoon(?=-)/g; // JSON value compounds: "olagoon-Produkte" (incl. value-start)

const edits = [];
function fix(path, regex, replacement, expected) {
  const before = readFileSync(path, 'utf8');
  const count = [...before.matchAll(regex)].length;
  if (expected !== undefined && count !== expected) {
    console.log(`ABORT ${path}: expected ${expected}, found ${count}`);
    process.exit(1);
  }
  if (count > 0) {
    writeFileSync(path, before.replace(regex, replacement));
  }
  edits.push(`${count}\t${path}`);
}

// 1. i18n-config.json — de/nl/sv/nb/da/fi/et UI string compounds
fix('src/data/site/i18n-config.json', JSONVAL, 'OLagoon', 93);

// 2. Trust badges (da,de,fi,nl,no,sv visible badge descriptions)
for (const l of ['da', 'de', 'fi', 'nl', 'no', 'sv']) {
  fix(`src/data/site/trust-badges.${l}.yaml`, FI, 'OLagoon', 1);
}

// 3. Legal pages — Finnish compounds + Hebrew maqaf constructs
fix('src/data/landing-i18n/privacy.json', FI, 'OLagoon', 2);
fix('src/data/landing-i18n/terms.json', FI, 'OLagoon', 2);
fix('src/data/landing-i18n/privacy.json', HE, 'OLagoon', 2);
fix('src/data/landing-i18n/terms.json', HE, 'OLagoon', 2);

// 4. src/lib leftovers (pass 1 did not walk src/lib)
fix('src/lib/rag.ts', /(?<=for )olagoon(?=,)/g, 'OLagoon', 1);
fix('src/lib/geo-v7/entity-graph.ts', /(?<=name: )'olagoon'/g, "'OLagoon'", 1);
fix('src/lib/geo-v7/entity-graph.ts', /(?<=company of )olagoon(?=,)/g, 'OLagoon', 1);

// 5. Build-chain generator fallback + operational defaults
fix('scripts/build-geo-v4.ts', /\|\| 'olagoon'\}/g, "|| 'OLagoon'}", 1);
fix('scripts/resend-failed-inquiries.mjs', /(?<=\|\| )'olagoon Contact'/g, "'OLagoon Contact'", 1);
fix('scripts/new-page.mjs', /(?<=author: )olagoon(?= Team)/g, 'OLagoon', 1);

console.log('PASS 2 APPLIED:');
edits.forEach((e) => console.log('  ' + e));
