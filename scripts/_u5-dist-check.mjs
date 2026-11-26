import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|isups|boards?)(?![a-zA-Z])/gi;

const family = [
  'dist/llms.txt',
  'dist/llms-full.txt',
  'dist/ai/knowledge.json',
  'dist/ai/entity-graph.json',
  'dist/ai-sitemap.xml',
  'dist/knowledge-sitemap.xml',
  'dist/.well-known/entity.json',
];

// all locale dirs in dist
for (const entry of readdirSync(join(ROOT, 'dist'))) {
  const p = join(ROOT, 'dist', entry);
  if (statSync(p).isDirectory() && entry.length === 2) {
    family.push(`dist/${entry}/llms.txt`);
  }
}

let total = 0;
for (const rel of family) {
  const p = join(ROOT, rel);
  if (!existsSync(p)) {
    console.log(`MISSING  ${rel}`);
    continue;
  }
  const hits = (readFileSync(p, 'utf8').match(BANNED) || []).length;
  if (hits > 0) console.log(String(hits).padStart(5), rel);
  total += hits;
}
console.log(`\nUNIT-5 DIST FAMILY TOTAL: ${total}`);

// check the two flagged items
for (const rel of ['dist/research/oem-buyer-guide/index.html', 'dist/ai-context/index.html']) {
  const p = join(ROOT, rel);
  if (!existsSync(p)) continue;
  const text = readFileSync(p, 'utf8');
  const hits = text.match(BANNED) || [];
  const uniq = [...new Set(hits.map((h) => h.toLowerCase()))];
  console.log(`\n${rel}: ${hits.length} hits, unique: ${uniq.join(', ')}`);
  // show contexts of first few
  let count = 0;
  for (const m of text.matchAll(BANNED)) {
    if (count++ >= 8) break;
    const s = Math.max(0, m.index - 60);
    console.log('  ...' + text.slice(s, m.index + m[0].length + 60).replace(/\s+/g, ' ') + '...');
  }
}
