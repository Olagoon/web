import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const doc = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const VALUES = {
  'engineeringTeam.title': 'Engineering & R&D Team — Drop-Stitch Inflatable Pool Design & Manufacturing',
  'engineeringTeam.desc':
    "OLagoon's 25+ R&D engineers and production specialists. Expertise in drop-stitch core technology, PVC fabrication, pool wall engineering, and CE compliance engineering. Based in Qingdao, China.",
};

let updated = 0;
let added = 0;
for (const keys of Object.values(doc)) {
  for (const [k, v] of Object.entries(VALUES)) {
    if (typeof keys[k] === 'string') {
      if (keys[k] !== v) {
        keys[k] = v;
        updated += 1;
      }
    } else {
      keys[k] = v;
      added += 1;
    }
  }
}

fs.writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
console.log(`updated ${updated}, added ${added} engineeringTeam.* values`);
