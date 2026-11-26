// Fix glossary artifacts in root page YAMLs (doubles, 'pooling', 'every swimmers', plural misuse).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';

const R = {
  'brand-why-olagoon.yaml': [
    ["- 'inflatable inflatable pool supplier'", "- 'inflatable pool supplier'"],
  ],
  'certifications.yaml': [
    ['Compliance and safety for an inflatable pools manufacturer.',
     'Compliance and safety for an inflatable pool manufacturer.'],
  ],
  'custom.yaml': [
    ["title: 'Custom Lab — Custom Inflatable inflatable pool | {SITE}'",
     "title: 'Custom Lab — Custom Inflatable Pool | {SITE}'"],
    ['Custom inflatable inflatable pool: bespoke design, logo, custom mold, and production.',
     'Custom inflatable pool: bespoke design, logo, custom mold, and production.'],
  ],
  'factory.yaml': [
    ["- 'inflatable inflatable pool factory'", "- 'inflatable pool factory'"],
  ],
  'guides.yaml': [
    ['how to buy, choose, and practice inflatable pooling. Sizing, materials, and expert tips for inflatable pools beginners and pros.',
     'how to buy, choose, and set up inflatable pools. Sizing, materials, and expert tips for beginners and pros.'],
    ["- 'inflatable inflatable pool tips'", "- 'inflatable pool tips'"],
  ],
  'journal.yaml': [
    ['articles and guides about inflatable pools, inflatable pooling, and the nautical industry.',
     'articles and guides about inflatable pools, pool care, and the backyard pool industry.'],
  ],
  'learn.yaml': [
    ["taglineSection: 'Knowledge for every swimmers. From beginner to professional.'",
     "taglineSection: 'Knowledge for every pool owner. From first-time buyer to seasoned pro.'"],
    ['Essential safety knowledge every swimmers should have — weather, PFDs, self-rescue, and more.',
     'Essential safety knowledge every pool owner should have — supervision, filtration, maintenance, and more.'],
  ],
  'randdcenter.yaml': [
    ['olagoon strives to lead the inflatable pools industry through continuous innovation, unwavering quality, and a steadfast commitment to safety and sustainability — ultimately enriching the experiences of water sports enthusiasts worldwide.',
     'OLagoon strives to lead the inflatable pool industry through continuous innovation, unwavering quality, and a steadfast commitment to safety and sustainability — ultimately enriching backyard summers for families worldwide.'],
  ],
  'rf-welding.yaml': [
    ['An inflatable pools is only as reliable as its seams.',
     'An inflatable pool is only as reliable as its seams.'],
  ],
  'solutions.yaml': [
    ["- 'inflatable inflatable pool supplier'", "- 'inflatable pool supplier'"],
  ],
  'where-to-buy.yaml': [
    ['Where to Buy OLagoon Inflatable inflatable pool | OLagoon',
     'Where to Buy OLagoon Inflatable Pools | OLagoon'],
  ],
};

let total = 0;
let misses = 0;
for (const [file, pairs] of Object.entries(R)) {
  const p = join(DIR, file);
  let raw = readFileSync(p, 'utf8');
  for (const [from, to] of pairs) {
    const count = raw.split(from).length - 1;
    if (count === 0) {
      console.log(`MISS ${file}: ${from.slice(0, 70)}...`);
      misses++;
      continue;
    }
    raw = raw.split(from).join(to);
    total += count;
  }
  writeFileSync(p, raw, 'utf8');
}
console.log(`done: ${total} replacements, ${misses} misses`);
