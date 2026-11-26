// Dump leftover Tier-B contexts with file names — FULL lines
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';
const RE =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surf|surfing|kayak|kayaks?|isup|boards?|life ?vests?|wetsuit)(?![a-zA-Z])/i;
const SKIP = new Set([
  'b2b-solutions-matrix.yaml',
  'co-brand.yaml',
  'distributor-program.yaml',
  'solutions-build-your-own-brand.yaml',
  'solutions-rental-operators.yaml',
  'solutions-resorts-hotels.yaml',
  'solutions-retail-partners.yaml',
  'solutions.yaml',
]);

let out = '';
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.yaml') && !SKIP.has(x))) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  const lines = raw.split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    if (RE.test(line)) hits.push(`  L${i + 1}: ${line}`);
  });
  if (hits.length) {
    out += `== ${f} (${hits.length})\n`;
    for (const h of hits) out += h + '\n';
  }
}
console.log(out);
