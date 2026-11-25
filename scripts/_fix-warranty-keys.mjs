// One-off: replace SUP warranty i18n strings with pool wording in ALL locales (Step 7).
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const updates = {
  'warranty.strip.title': 'Every Pool Backed by a 2-Year Warranty',
  'warranty.strip.desc':
    'Comprehensive manufacturer warranty on all OLagoon pools, with fast claims and responsive support.',
};

let locales = 0;
let keys = 0;
for (const locale of Object.keys(j)) {
  if (typeof j[locale] !== 'object' || j[locale] === null) continue;
  locales++;
  for (const [k, v] of Object.entries(updates)) {
    if (k in j[locale]) {
      j[locale][k] = v;
      keys++;
    }
  }
}

fs.writeFileSync(FILE, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log(`updated ${keys} warranty keys across ${locales} locales`);
