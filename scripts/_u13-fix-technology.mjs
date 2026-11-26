// Unit 13: poolize technology.metaDesc UI key across all locales
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const doc = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const EN =
  'OLagoon technology: drop-stitch core construction, marine-grade PVC lamination, fusion welding, and rigid 20 cm wall systems for inflatable pools.';

let updated = 0;
for (const loc of Object.keys(doc)) {
  const cur = doc[loc]['technology.metaDesc'];
  if (typeof cur === 'string' && cur !== EN) {
    doc[loc]['technology.metaDesc'] = EN;
    updated++;
  } else if (typeof cur !== 'string') {
    doc[loc]['technology.metaDesc'] = EN;
    updated++;
  }
}

fs.writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
console.log(`technology.metaDesc updated in ${updated} locales`);
