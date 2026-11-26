// One-off: purge stale/orphan marine solutionsBy* UI keys from i18n-config.json
// (all locales). Stale keys (title/desc/aiBlock/expSub/ctaDesc/recommendedCraft/
// rel2desc/cta4/cta5) are replaced by hardcoded pool fallbacks in the rewritten
// [lang] pages; commercial/defense/disaster/fishing/hospitality/sar/story* keys
// are orphans with no code consumers.
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
let raw = readFileSync(FILE, 'utf8');

const exact = [
  'solutionsByIndustry.title',
  'solutionsByIndustry.desc',
  'solutionsByIndustry.aiBlock',
  'solutionsByIndustry.expSub',
  'solutionsByIndustry.ctaDesc',
  'solutionsByIndustry.recommendedCraft',
  'solutionsByIndustry.rel2desc',
  'solutionsByUseCase.cta4',
  'solutionsByUseCase.cta5',
  'solutionsByUseCase.rel2desc',
];
const prefixes = [
  'solutionsByIndustry.commercial.',
  'solutionsByIndustry.defense.',
  'solutionsByIndustry.disaster.',
  'solutionsByIndustry.fishing.',
  'solutionsByIndustry.hospitality.',
  'solutionsByIndustry.sar.',
  'solutionsByIndustry.story1.',
  'solutionsByIndustry.story2.',
  'solutionsByUseCase.story1.',
  'solutionsByUseCase.story2.',
];

const lines = raw.split('\n');
let removed = 0;
const kept = lines.filter((l) => {
  const hit = exact.some((k) => l.includes(`"${k}":`)) || prefixes.some((p) => l.includes(`"${p}`));
  if (hit) removed++;
  return !hit;
});
raw = kept.join('\n').replace(/,(\s*[}\]])/g, '$1');

writeFileSync(FILE, raw, 'utf8');
console.log('lines removed:', removed);

// Validate.
const cfg = JSON.parse(readFileSync(FILE, 'utf8'));
let residual = 0;
for (const loc of Object.keys(cfg)) {
  const obj = cfg[loc];
  if (!obj || typeof obj !== 'object') continue;
  for (const k of Object.keys(obj)) {
    if (exact.includes(k) || prefixes.some((p) => k.startsWith(p))) {
      console.log('RESIDUAL:', loc, k);
      residual++;
    }
  }
}
if (residual > 0) throw new Error('residual keys remain');
const en = cfg['en'];
const keptKeys = Object.keys(en).filter(
  (k) => k.startsWith('solutionsByIndustry.') || k.startsWith('solutionsByUseCase.')
);
console.log('JSON valid; residual keys: 0; EN kept keys:', keptKeys.length);
console.log(keptKeys.join('\n'));
