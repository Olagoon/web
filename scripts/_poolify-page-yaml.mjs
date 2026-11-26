// Poolify page YAMLs: Tier-A glossary (unambiguous terms, images, URLs)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';

// Ordered: longest first. [pattern, replacement, flags]
const RULES = [
  // --- images (R2 + local): sup-series decorative shots -> pool products
  [
    /products\/sup-series\/sup-(?:ocean-voyager|ocean-pulse|touring|leviathan-wake|rheo|horizon-lines)[^'"\s]*/g,
    'products/grand-lagoon.webp',
  ],
  [
    /products\/sup-series\/sup-(?:yoga|flowing-lotus|medusa-glow|jungle-mandala|tropical-breeze|dolphin-wave|cheetah-surge)[^'"\s]*/g,
    'products/family-oasis.webp',
  ],
  [/products\/sup-series\/sup-(?:mini|giant|fishing|lure-skiff)[^'"\s]*/g, 'products/compact-plunge.webp'],
  [/factory\/olagoon-sup-manufacturing[^'"\s]*/g, 'factory/olagoon-production-department.webp'],
  [
    /scenarios\/(?:all-around|dock-platform|fishing|giant|surf|touring|whitewater|yoga)\/[^'"\s]*/g,
    'hero/kids-pool-fun.webp',
  ],
  [/products\/olagoon-life-vest[^'"\s]*/g, 'products/sand-filter-pump.webp'],
  [/team\/olagoon-paddle-girls-team\.webp/g, 'team/olagoon-helen-contact-sales.webp'],
  [/use-cases\/olagoon-beginner-use-case\.webp/g, 'use-cases/olagoon-family-use-case.webp'],
  [/use-cases\/olagoon-professional-use-case\.webp/g, 'use-cases/olagoon-family-use-case.webp'],

  // --- product names
  [/SUP Tour 12/g, 'Grand Lagoon'],
  [/SUP Explorer 11/g, 'Family Oasis'],
  [/SUP Pro 14/g, 'Grand Lagoon'],
  [/SUP Yoga 10/g, 'Family Oasis'],
  [/SUP Patrol/g, 'Family Oasis'],

  // --- phrases, longest first
  [/stand[- ]up paddle ?boards?/gi, 'drop-stitch pool'],
  [/stand[- ]up paddleboarding/gi, 'backyard pool swimming'],
  [/stand[- ]up paddling/gi, 'backyard pool swimming'],
  [/inflatable stand[- ]up paddle/gi, 'inflatable'],
  [/paddle ?board sport/gi, 'backyard pool lifestyle'],
  [/paddle ?boards?/gi, 'inflatable pool'],
  [/paddle ?boarding/gi, 'swimming'],
  [/paddleboarding/gi, 'swimming'],
  [/inflatable SUP boards?/gi, 'inflatable pools'],
  [/inflatable SUPs?/gi, 'inflatable pools'],
  [/SUP boards?/gi, 'pools'],
  [/iSUPs?/gi, 'inflatable pools'],
  [/inflatable sup/gi, 'inflatable pool'],
  [/SUPs/g, 'pools'],
  [/SUP/g, 'pool'],
  [/sup\b/g, 'pool'],
  [/hard epoxy boards?/gi, 'rigid pools'],
  [/hard ?boards?/gi, 'rigid pools'],
  [/paddling/gi, 'swimming'],
  [/paddlers?/gi, 'swimmers'],
];

const files = readdirSync(DIR).filter((f) => f.endsWith('.yaml'));
let totalChanged = 0;
for (const f of files) {
  const p = join(DIR, f);
  const before = readFileSync(p, 'utf8');
  let after = before;
  for (const [re, rep] of RULES) after = after.replace(re, rep);
  if (after !== before) {
    writeFileSync(p, after, 'utf8');
    totalChanged++;
  }
}
console.log(`poolified ${totalChanged}/${files.length} root page YAMLs`);

// remaining hits per file (Tier B leftovers for hand-fixing)
const left = [];
for (const f of files) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  const hits = [
    ...raw.matchAll(
      /.{0,30}(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surf|kayak|isup|boards?|life ?vests?|wetsuit)(?![a-zA-Z]).{0,20}/gi
    ),
  ].length;
  if (hits > 0) left.push([f, hits]);
}
left.sort((a, b) => b[1] - a[1]);
console.log(`files with leftovers: ${left.length}`);
for (const [f, n] of left) console.log(String(n).padStart(3), f);
