// Verify candidate stale i18n keys are unreferenced in source (pages/components/layouts/lib/scripts/workers/functions).
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CANDIDATE_PREFIXES = [
  'useCase.touring',
  'useCase.rescue',
  'useCase.fishing',
  'useCase.tourismRecreation',
  'useCase.searchAndRescue',
  'useCase.maritimeSafety',
  'useCase.disasterRelief',
  'home.useCases.beginner',
  'home.useCases.outdoor',
  'home.useCases.family',
  'buyerCenter.supBoards',
  'commercialWorkboats',
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
  'compare.pvcVsHypalon',
  'pvcVsHypalon',
  'solutions.rescue.metaDesc',
];
// dynamic-prefix risk patterns
const DYNAMIC_PATTERNS = [
  "useCase.' +",
  'useCase." +',
  'useCase.${',
  "'useCase.' +",
  '"useCase." +',
  'useCase`.${',
  '`useCase.',
];
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'public', '.wrangler', 'generated', 'ui']);
// one-off historical fix scripts + this checker are not runtime references
const IGNORE_FILES = new Set([
  '_check-stale-key-refs.mjs',
  '_fix-i18n-pool-keys.mjs',
  '_fix-i18n-pool-keys2.mjs',
  '_fix-i18n-pool-keys3.mjs',
  '_fix-i18n-pool-keys4.mjs',
  '_purge-i18n-marine.mjs',
  '_fix-warranty-keys.mjs',
  '_rename-i18n-keys.mjs',
  '_purge-i18n-stale-keys.mjs',
]);

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), out);
    } else if (/\.(astro|ts|mjs|cjs|js|tsx|json5|json|mdx?|yaml|yml)$/.test(e.name)) {
      out.push(path.join(dir, e.name));
    }
  }
}

const files = [];
for (const d of ['src', 'scripts', 'workers', 'functions', 'tests']) {
  const abs = path.join(ROOT, d);
  if (fs.existsSync(abs)) walk(abs, files);
}
const filtered = files.filter(
  (f) =>
    !IGNORE_FILES.has(path.basename(f)) &&
    !f.endsWith(path.join('src', 'data', 'site', 'i18n-config.json')) &&
    !f.endsWith(path.join('src', 'data', 'site', 'pages.yaml'))
);
files.length = 0;
files.push(...filtered, path.join(ROOT, 'astro.config.mjs'), path.join(ROOT, 'keystatic.config.ts'));

const hits = [];
for (const f of files) {
  let s;
  try {
    s = fs.readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  for (const p of CANDIDATE_PREFIXES) {
    let i = s.indexOf(p);
    while (i !== -1) {
      hits.push(`${path.relative(ROOT, f)}: "${s.slice(i, i + 60).replace(/\n/g, ' ')}"`);
      i = s.indexOf(p, i + 1);
    }
  }
  for (const p of DYNAMIC_PATTERNS) {
    let i = s.indexOf(p);
    while (i !== -1) {
      hits.push(`DYNAMIC ${path.relative(ROOT, f)}: "${s.slice(Math.max(0, i - 40), i + 40).replace(/\n/g, ' ')}"`);
      i = s.indexOf(p, i + 1);
    }
  }
}
if (hits.length === 0) {
  console.log('ALL CANDIDATE KEYS UNREFERENCED — safe to purge');
} else {
  console.log(hits.join('\n'));
  console.log(`\nTOTAL: ${hits.length} references`);
}
