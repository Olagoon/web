// Survey banned-term contexts in root page YAMLs to build the glossary
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';

const counts = new Map();
const samples = new Map();
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.yaml'))) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  for (const m of raw.matchAll(
    /.{0,35}(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surf|kayak|isup|boards?|life ?vests?|wetsuit|hard ?boards?)(?![a-zA-Z]).{0,25}/gi
  )) {
    const ctx = m[0].replace(/\s+/g, ' ').trim();
    const key = ctx.toLowerCase();
    counts.set(key, (counts.get(key) || 0) + 1);
    if (!samples.has(key)) samples.set(key, `${f}: ${ctx}`);
  }
}
const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
console.log(`unique contexts: ${sorted.length}`);
for (const [k, n] of sorted.slice(0, 120)) console.log(String(n).padStart(3), samples.get(k));
