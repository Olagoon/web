// Scan built dist HTML for banned words with real global offsets + context.
import { readFileSync } from 'node:fs';

const re =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/gi;
const files = process.argv.slice(2);
let total = 0;
for (const f of files) {
  const s = readFileSync(f, 'utf8');
  let m;
  const hits = [];
  while ((m = re.exec(s)) !== null) {
    const ctx = s.slice(Math.max(0, m.index - 70), m.index + 90).replace(/\s+/g, ' ');
    hits.push(`  @${m.index} [${m[1]}] ...${ctx}...`);
    re.lastIndex = m.index + m[0].length;
  }
  if (hits.length) {
    console.log(`== ${f} (${hits.length})`);
    for (const h of hits.slice(0, 25)) console.log(h);
    if (hits.length > 25) console.log(`  ... ${hits.length - 25} more`);
  }
  total += hits.length;
}
console.log(`TOTAL: ${total}`);
