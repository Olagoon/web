// Scan only unit-4 page families in dist for banned SUP terms.
import fs from 'node:fs';
import path from 'node:path';

const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|isups|boards?)(?![a-zA-Z])/gi;
const UNIT4 =
  /(?:^|[\\/])(?:use-cases|compare|pools|accessory|knowledge|buyer-center|randdcenter|products)(?:[\\/]|$)/i;
// root+locale pages for these families live under dist/ or dist/<lang>/; exclude nothing else.
const ROOT = 'dist';

const hits = [];
let scanned = 0;
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html') && UNIT4.test(p)) {
      scanned++;
      const s = fs.readFileSync(p, 'utf8');
      const m = s.match(BANNED);
      if (m)
        hits.push(`${path.relative(ROOT, p)} (${m.length}): ${[...new Set(m.map((x) => x.toLowerCase()))].join(', ')}`);
    }
  }
}
walk(ROOT);
console.log(`scanned ${scanned} unit-4 dist files`);
console.log(hits.length ? hits.join('\n') : 'UNIT-4 FAMILIES CLEAN');
console.log(`TOTAL: ${hits.length} files with hits`);
