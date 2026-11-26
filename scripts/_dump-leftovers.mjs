// Dump leftover Tier-B contexts with file names
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';
const RE = /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surf|surfing|kayak|kayaks?|isup|boards?|life ?vests?|wetsuit)(?![a-zA-Z])/i;

for (const f of readdirSync(DIR).filter((x) => x.endsWith('.yaml'))) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  const lines = raw.split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    if (RE.test(line)) hits.push(`  L${i + 1}: ${line.trim().slice(0, 130)}`);
  });
  if (hits.length) {
    console.log(`== ${f} (${hits.length})`);
    for (const h of hits) console.log(h);
  }
}
