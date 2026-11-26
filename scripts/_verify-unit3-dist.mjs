// One-off: verify distinct titles after seo-meta remap + rescan banned terms.
import { readFileSync } from 'node:fs';

const re = /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/gi;
const files = [
  'dist/en/solutions/index.html',
  'dist/en/solutions/by-industry/index.html',
  'dist/en/solutions/by-use-case/index.html',
  'dist/fr/solutions/by-industry/index.html',
  'dist/de/solutions/by-use-case/index.html',
  'dist/ru/solutions/by-industry/index.html',
  'dist/ar/solutions/by-use-case/index.html',
  'dist/he/solutions/by-industry/index.html',
  'dist/th/solutions/by-use-case/index.html',
  'dist/tr/solutions/by-industry/index.html',
];
let total = 0;
for (const f of files) {
  const s = readFileSync(f, 'utf8');
  let m;
  let n = 0;
  while ((m = re.exec(s)) !== null) {
    n++;
    re.lastIndex = m.index + m[0].length;
    if (n <= 5) {
      const ctx = s.slice(Math.max(0, m.index - 60), m.index + 80).replace(/\s+/g, ' ');
      console.log(`  HIT ${f} [${m[1]}] ...${ctx}...`);
    }
  }
  total += n;
  const title = s.match(/<title>([^<]*)<\/title>/);
  const desc = s.match(/name="description" content="([^"]*)"/);
  console.log(`${f}`);
  console.log(`  title: ${title && title[1]}`);
  console.log(`  desc : ${desc && desc[1].slice(0, 150)}`);
  console.log(`  banned hits: ${n}`);
}
console.log('TOTAL banned:', total);
