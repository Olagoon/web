import fs from 'node:fs';

const BANNED = /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/i;

const files = [
  'src/data/biz-solutions/index.ts',
  'src/data/biz-solutions/translations/fr.ts',
  'src/data/biz-solutions/translations/tl.ts',
  'src/data/biz-solutions/translations/ar.ts',
  'src/pages/[lang]/b2b-solutions-matrix.astro',
];

let bad = 0;
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const lines = t.split('\n');
  lines.forEach((line, i) => {
    const m = line.match(BANNED);
    if (m) {
      bad++;
      console.log(`${f}:${i + 1}: [${m[0]}] ${line.trim().slice(0, 140)}`);
    }
  });
}

// Sanity: count entries and slugs in the new index.ts
const idx = fs.readFileSync('src/data/biz-solutions/index.ts', 'utf8');
const slugs = [...idx.matchAll(/^\s{4}slug: '([a-z0-9-]+)',$/gm)].map((m) => m[1]);
console.log('\nslugs (' + slugs.length + '):', slugs.join(', '));
console.log('unique:', new Set(slugs).size);
console.log(bad === 0 ? '\nBANNED-CHECK PASSED' : `\nBANNED-CHECK FAILED (${bad} hits)`);
