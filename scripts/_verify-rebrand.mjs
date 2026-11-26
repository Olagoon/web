import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const BANNED = [
  /\bsup\b/i,
  /\bpaddles?\b/i,
  /\bpaddle\s?board/i,
  /\bsurf(?:ing|er|s)?\b/i,
  /\bkayaks?\b/i,
  /\bwetsuits?\b/i,
  /life\s?vest/i,
];
const FILES = [
  'src/data/faq.ts',
  'src/data/guides.ts',
  'src/data/reviews-part1.ts',
  'src/data/reviews-part2.ts',
  'src/data/standalone-pages.ts',
  'src/data/site/content-v2.yaml',
  'src/data/site/evidence.yaml',
  'src/data/site/faqs.yaml',
  'src/data/site/hero-images.yaml',
  'src/data/site/proof-points.yaml',
  'src/data/site/tech-cards.yaml',
  'src/data/site/testimonials.yaml',
  'src/data/site/use-cases.yaml',
  'src/data/site/learning-center.yaml',
  'src/data/site/top-guides.yaml',
  'src/data/site/research.yaml',
];

let failed = false;
for (const rel of FILES) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) {
    console.log(`MISSING: ${rel}`);
    failed = true;
    continue;
  }
  const text = fs.readFileSync(full, 'utf8');
  const lines = text.split('\n');
  const hits = [];
  lines.forEach((line, i) => {
    for (const re of BANNED) {
      if (re.test(line)) {
        hits.push(`  L${i + 1}: ${line.trim().slice(0, 120)}`);
        break;
      }
    }
  });
  if (hits.length) {
    failed = true;
    console.log(`BANNED in ${rel} (${hits.length}):`);
    for (const h of hits.slice(0, 10)) console.log(h);
  } else {
    console.log(`OK: ${rel}`);
  }
}

// slug cross-check: top-guides guides must exist in guides.ts
const guidesTs = fs.readFileSync(path.join(ROOT, 'src/data/guides.ts'), 'utf8');
const guideSlugs = [...guidesTs.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const topGuidesText = fs.readFileSync(path.join(ROOT, 'src/data/site/top-guides.yaml'), 'utf8');
const topSlugs = [...topGuidesText.matchAll(/-\s'(pool-[a-z-]+|choosing-[a-z-]+|inflatable-[a-z-]+)'/g)].map((m) => m[1]);
for (const s of topSlugs) {
  if (!guideSlugs.includes(s)) {
    console.log(`SLUG MISMATCH: top-guides references '${s}' not in guides.ts`);
    failed = true;
  }
}
console.log(`guideSlugs (${guideSlugs.length}): ${guideSlugs.join(', ')}`);
console.log(`top-guides refs: ${topSlugs.join(', ')}`);

// YAML parse
async function parseYaml(file) {
  const mod = await import('js-yaml');
  const y = mod.default || mod;
  const doc = y.load(fs.readFileSync(path.join(ROOT, file), 'utf8'));
  return doc;
}
for (const f of ['src/data/site/content-v2.yaml', 'src/data/site/evidence.yaml']) {
  try {
    const doc = await parseYaml(f);
    const n = Array.isArray(doc) ? doc.length : Object.keys(doc).length;
    console.log(`YAML OK: ${f} (${n} entries)`);
  } catch (e) {
    console.log(`YAML FAIL: ${f}: ${e.message}`);
    failed = true;
  }
}

console.log(failed ? 'VERIFY FAILED' : 'VERIFY PASSED');
process.exit(failed ? 1 : 0);
