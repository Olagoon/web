import { readFileSync } from 'node:fs';

const DIR = 'src/data/pages';
const RE =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/i;
const files = [
  'solutions.yaml',
  'b2b-solutions-matrix.yaml',
  'co-brand.yaml',
  'distributor-program.yaml',
  'solutions-build-your-own-brand.yaml',
  'solutions-rental-operators.yaml',
  'solutions-resorts-hotels.yaml',
  'solutions-retail-partners.yaml',
  'solutions-distributors.yaml',
  'oem-odm-manufacturer.yaml',
];

for (const f of files) {
  const raw = readFileSync(`${DIR}/${f}`, 'utf8');
  const lines = raw.split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    if (RE.test(line)) hits.push(`  L${i + 1}: ${line}`);
  });
  console.log(`== ${f} (${hits.length} hits, ${lines.length} lines)`);
  for (const h of hits) console.log(h);
  console.log('');
}
