// Scan files for banned SUP terms (word-boundary safe).
// Usage: node scripts/_scan-sup.mjs <file-or-dir> [more paths...]
import fs from 'node:fs';
import path from 'node:path';

const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/gi;

const files = [];
function walk(p) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const e of fs.readdirSync(p)) walk(path.join(p, e));
  } else if (/\.(astro|ts|mjs|cjs|js|json|yaml|yml|md|mdx|txt|html|xml)$/.test(p)) {
    files.push(p);
  }
}
for (const arg of process.argv.slice(2)) walk(path.resolve(arg));

let total = 0;
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const lines = src.split('\n');
  let fileHits = 0;
  const out = [];
  lines.forEach((l, i) => {
    BANNED.lastIndex = 0;
    const m = l.match(BANNED);
    if (m) {
      fileHits += m.length;
      out.push(`  ${i + 1}: ${l.trim().slice(0, 200)}`);
    }
  });
  if (fileHits) {
    console.log(`${path.relative(process.cwd(), f)} (${fileHits})`);
    console.log(out.join('\n'));
    total += fileHits;
  }
}
console.log(`TOTAL: ${total} hits in ${files.length} files scanned`);
