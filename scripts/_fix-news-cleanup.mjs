// News cleanup: delete 11 SUP posts (EN + 17 locale dirs), overwrite 7 keepers' locale copies with EN
import { readFileSync, writeFileSync, unlinkSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const NEWS = 'src/content/news';
const DELETE = [
  'commercial-sup-fleet-roi-resorts',
  'great-lake-sup-challenge',
  'lake-tahoe-paddle-club',
  'life-vest-pro-solas',
  'preparing-sup-summer',
  'private-label-sup-oem-guide',
  'private-label-vs-oem-sup',
  'spring-2026-gear-guide',
  'sup-manufacturing-process',
  'sup-rental-business-guide',
  'sup-tour-12-launch',
];
const KEEP = [
  'drop-stitch-2-0',
  'iso-14001-certification',
  'miami-boat-show-2026',
  'olagoon-rd-center-innovation',
  'olagoon-supply-chain-2025',
  'recycled-pvc-initiative',
  'seeking-dealers-for-olagoon',
];

const localeDirs = readdirSync(NEWS, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let deleted = 0;
for (const slug of DELETE) {
  for (const dir of ['', ...localeDirs]) {
    const p = join(NEWS, dir, `${slug}.mdx`);
    if (existsSync(p)) {
      unlinkSync(p);
      deleted++;
    }
  }
}
console.log(`deleted ${deleted} files (${DELETE.length} slugs x ${localeDirs.length + 1} dirs)`);

let copied = 0;
for (const slug of KEEP) {
  const en = readFileSync(join(NEWS, `${slug}.mdx`), 'utf8');
  for (const dir of localeDirs) {
    writeFileSync(join(NEWS, dir, `${slug}.mdx`), en, 'utf8');
    copied++;
  }
}
console.log(`overwrote ${copied} locale copies (${KEEP.length} keepers x ${localeDirs.length} locales)`);

// sanity: remaining files
const remaining = readdirSync(NEWS).filter((f) => f.endsWith('.mdx')).length;
const localeCount = localeDirs.reduce(
  (n, d) => n + readdirSync(join(NEWS, d)).filter((f) => f.endsWith('.mdx')).length,
  0
);
console.log(`EN mdx: ${remaining}, locale mdx: ${localeCount}`);
