// Unit 5: scan SUP terms in AI-artifact SOURCE family (public/ statics + geo data + generators)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|isups|boards?)(?![a-zA-Z])/gi;

const targets = [
  'public/llms.txt',
  'public/llms-full.txt',
  'public/ai/knowledge.json',
  'public/ai/entity-graph.json',
  'public/ai-sitemap.xml',
  'public/knowledge-sitemap.xml',
  'public/.well-known/entity.json',
  'src/data/geo/entity.json',
  'scripts/build-geo-v4.ts',
  'scripts/generate-geo-files.ts',
];

// per-locale llms.txt
for (const d of fs.readdirSync(path.join(ROOT, 'public'))) {
  const p = path.join(ROOT, 'public', d, 'llms.txt');
  try {
    if (fs.statSync(path.join(ROOT, 'public', d)).isDirectory() && fs.existsSync(p)) {
      targets.push(`public/${d}/llms.txt`);
    }
  } catch {
    /* skip */
  }
}

// other geo JSONs
for (const f of fs.readdirSync(path.join(ROOT, 'src', 'data', 'geo'))) {
  if (f.endsWith('.json') && f !== 'entity.json') targets.push(`src/data/geo/${f}`);
}

let grand = 0;
const report = [];
for (const rel of targets) {
  const abs = path.join(ROOT, rel);
  let raw;
  try {
    raw = fs.readFileSync(abs, 'utf8');
  } catch {
    report.push(`MISSING  ${rel}`);
    continue;
  }
  const lines = raw.split('\n');
  let count = 0;
  const samples = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(BANNED);
    if (m) {
      count += m.length;
      if (samples.length < 6) {
        samples.push(`  L${i + 1} [${m.slice(0, 4).join(',')}]: ${lines[i].trim().slice(0, 160)}`);
      }
    }
  }
  if (count > 0) {
    grand += count;
    report.push(`${String(count).padStart(4)}  ${rel}`);
    report.push(...samples);
  } else {
    report.push(`   0  ${rel}`);
  }
}
console.log(report.join('\n'));
console.log(`\nTOTAL SOURCE HITS: ${grand}`);
