// Purge verified-stale UI keys from src/data/site/i18n-config.json (all locale maps).
// Every key family below was verified unreferenced by pages/components/layouts/scripts
// (scripts/_check-stale-key-refs.mjs) and its labels absent from navigation*.yaml.
import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const EXACT = new Set([
  'useCase.touring',
  'useCase.touring.desc',
  'useCase.rescue.desc',
  'useCase.fishing',
  'useCase.fishing.desc',
  'useCase.tourismRecreation',
  'useCase.tourismRecreation.desc',
  'useCase.searchAndRescue',
  'useCase.searchAndRescue.desc',
  'useCase.maritimeSafety',
  'useCase.maritimeSafety.desc',
  'useCase.disasterRelief',
  'useCase.disasterRelief.desc',
  'home.useCases.beginner.title',
  'home.useCases.outdoor.title',
  'home.useCases.family.title',
  'nav.solutionsFishing',
  'nav.solutionsMarineTourism',
  'nav.solutionsRescue',
  'nav.solutionsDivingCenter',
  'nav.searchRescue',
  'nav.disasterRelief',
  'nav.tourismRecreation',
  'nav.touringDistance',
  'nav.riverTouring',
  'nav.familyRecreation',
  'nav.beginners',
  'nav.allUseCases',
  'buyerCenter.supBoards',
  'solutions.rescue.metaDesc',
]);
const PREFIXES = ['commercialWorkboats.', 'compare.pvcVsHypalon.', 'pvcVsHypalon.'];

let removed = 0;
const removedByPrefix = {};
for (const m of Object.values(j)) {
  for (const k of Object.keys(m)) {
    const dead = EXACT.has(k) || PREFIXES.some((p) => k.startsWith(p));
    if (dead) {
      delete m[k];
      removed++;
      const p = k.split('.').slice(0, 2).join('.');
      removedByPrefix[p] = (removedByPrefix[p] || 0) + 1;
    }
  }
}

fs.writeFileSync(FILE, JSON.stringify(j, null, 2) + '\n');
console.log('removed keys:', removed);
for (const [p, c] of Object.entries(removedByPrefix).sort((a, b) => b[1] - a[1])) console.log(' ', p, c);
