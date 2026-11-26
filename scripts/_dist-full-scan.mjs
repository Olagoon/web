// One-off: full dist banned-term scan. Walks dist/ HTML+JSON+XML+TXT,
// counts banned hits per file, aggregates by top-level route family.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const re =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/gi;
const includeExt = /\.(html?|json|xml|txt)$/i;

const results = [];
function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (includeExt.test(e.name)) {
      let s;
      try {
        s = readFileSync(p, 'utf8');
      } catch {
        continue;
      }
      let m;
      let n = 0;
      while ((m = re.exec(s)) !== null) {
        n++;
        re.lastIndex = m.index + m[0].length;
      }
      if (n > 0) results.push({ file: p.replace(/\\/g, '/'), n });
    }
  }
}
walk('dist');
results.sort((a, b) => b.n - a.n);

// Aggregate by family: strip dist/, take first 3 path segments for [lang] pages.
const fam = new Map();
for (const r of results) {
  const rel = r.file.replace(/^dist\//, '');
  const segs = rel.split('/');
  let key;
  if (segs[0] === '_astro' || segs[0] === 'assets') key = segs[0];
  else if (segs.length === 1) key = '(root) ' + segs[0];
  else if (/^[a-z]{2}$/.test(segs[0]) && segs.length > 1) {
    // locale-prefixed: collapse locale but keep it visible in a second map
    key = '/' + segs.slice(1, 3).join('/');
  } else key = '/' + segs.slice(0, 2).join('/');
  fam.set(key, (fam.get(key) || 0) + r.n);
}
const famArr = [...fam.entries()].sort((a, b) => b[1] - a[1]);
let total = 0;
for (const r of results) total += r.n;

console.log('=== TOP FILES (60) ===');
for (const r of results.slice(0, 60)) console.log(`${String(r.n).padStart(5)}  ${r.file}`);
console.log('\n=== FAMILIES ===');
for (const [k, v] of famArr) console.log(`${String(v).padStart(6)}  ${k}`);
console.log(`\nFILES WITH HITS: ${results.length}  TOTAL: ${total}`);
