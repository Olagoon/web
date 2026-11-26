// Unit 11: poolize guides.pageDesc UI key across all locales
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const raw = fs.readFileSync(FILE, 'utf8');
const doc = JSON.parse(raw);

const EN = 'Practical guides to help you choose, set up, and enjoy your OLagoon inflatable pool.';
const FR = 'Guides pratiques pour vous aider à choisir, installer et profiter de votre piscine gonflable OLagoon.';
const TL =
  'Praktikal na gabay upang matulungan kang pumili, i-set up, at tamasahin ang iyong inflatable pool ng OLagoon.';

let updated = 0;
for (const loc of Object.keys(doc)) {
  const cur = doc[loc]['guides.pageDesc'];
  const next = loc === 'fr' ? FR : loc === 'tl' ? TL : EN;
  if (typeof cur === 'string' && cur !== next) {
    doc[loc]['guides.pageDesc'] = next;
    updated++;
  } else if (typeof cur !== 'string') {
    doc[loc]['guides.pageDesc'] = next;
    updated++;
  }
}

fs.writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
console.log(`guides.pageDesc updated in ${updated} locales`);
