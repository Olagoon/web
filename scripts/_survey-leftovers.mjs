// One-off survey: remaining banned-term hits across source trees.
// Walks src/, functions/, workers/, tests/ and reports per-file hit counts,
// excluding generated artifacts and known-clean data dirs.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const re =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/gi;
const roots = ['src', 'functions', 'workers', 'tests'];
const exclude = ['src/i18n/generated', 'src/i18n/ui', 'public', 'node_modules', 'dist'];
const includeExt = /\.(astro|ts|tsx|js|mjs|cjs|json|yaml|yml|md|mdx|xml|txt)$/i;

const results = [];
function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(dir, e.name).replace(/\\/g, '/');
    if (e.isDirectory()) {
      if (exclude.some((x) => p === x || p.startsWith(x + '/'))) continue;
      walk(p);
    } else if (includeExt.test(e.name)) {
      let s;
      try {
        s = readFileSync(p, 'utf8');
      } catch {
        continue;
      }
      let m;
      let n = 0;
      const samples = [];
      while ((m = re.exec(s)) !== null) {
        n++;
        re.lastIndex = m.index + m[0].length;
        if (samples.length < 3) {
          const ctx = s.slice(Math.max(0, m.index - 50), m.index + 60).replace(/\s+/g, ' ');
          samples.push(`[${m[1]}] ...${ctx}...`);
        }
      }
      if (n > 0) results.push({ file: p, n, samples });
    }
  }
}
for (const r of roots) walk(r);
results.sort((a, b) => b.n - a.n);
let total = 0;
for (const r of results) {
  total += r.n;
  console.log(`${String(r.n).padStart(5)}  ${r.file}`);
  for (const s of r.samples) console.log(`         ${s}`);
}
console.log(`\nFILES: ${results.length}  TOTAL HITS: ${total}`);
