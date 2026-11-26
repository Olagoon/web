// Pass 3 (final): author remaining 14 pool EN values across all locales + validate + dangling check
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CONFIG = 'src/data/site/i18n-config.json';
const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/i;

const POOL_VALUES = {
  'ai.answerSubtitle': 'Ask anything about OLagoon pools, materials, safety, and more.',
  'compare.desc': 'Compare all OLagoon products side by side. Find the right pool or accessory for your needs.',
  'compare.findBoard': 'Find Your Pool',
  'compare.inflatableVsHard.hardPerfDesc':
    'Fixed shape and height year-round. No inflation needed — but no seasonal storage either.',
  'compare.notSureDesc':
    'Use our size guide to find the right pool in under a minute — or ask our team, we are happy to help.',
  'compare.notSureTitle': 'Not sure which pool is right for you?',
  'compare.olagoonVsTraditional.bestForDesc':
    'OEM/ODM partnerships, custom co-branded pool lines, and brands seeking factory-direct pricing.',
  'compare.olagoonVsTraditional.r11a': 'Specialist in drop-stitch inflatable pools',
  'compare.olagoonVsTraditional.recDesc':
    'OLagoon offers stronger value for OEM/ODM partnerships, deeper customization, and factory-direct pricing.',
  'compare.singleVsMulti.r11b':
    'Resort pools, community programs, safety-conscious families, and commercial operators.',
  'compare.singleVsMulti.r1a': 'A single puncture can deflate the entire pool. No backup buoyancy.',
  'compare.singleVsMulti.r3b': 'Full. 2+ remaining chambers keep the pool operational.',
  'knowledge.metaDesc':
    'Structured knowledge base on drop-stitch pool technology, water safety, materials engineering, and pool care.',
  'warranty.metaDesc':
    'OLagoon 2-year limited warranty for drop-stitch inflatable pools and accessories. Coverage terms, claims process, and exclusions.',
};

const cfg = JSON.parse(readFileSync(CONFIG, 'utf8'));
for (const map of Object.values(cfg)) {
  for (const [k, v] of Object.entries(POOL_VALUES)) map[k] = v;
}
writeFileSync(CONFIG, JSON.stringify(cfg, null, 2) + '\n', 'utf8');
console.log(`set ${Object.keys(POOL_VALUES).length} pool values in ${Object.keys(cfg).length} locales`);

// validate
const remaining = [];
for (const [lc, map] of Object.entries(cfg)) {
  for (const [k, v] of Object.entries(map)) {
    if (BANNED.test(String(v)) || BANNED.test(k)) remaining.push(`${lc}:${k} = ${String(v).slice(0, 70)}`);
  }
}
if (remaining.length) {
  console.log(`REMAINING OFFENDERS (${remaining.length}):`);
  for (const r of remaining) console.log('  ' + r);
  process.exitCode = 1;
} else {
  console.log('VALIDATION OK: i18n-config.json clean in all locales');
}

// dangling check for all keys deleted by passes 1-2
const DELETED = [
  'nav.supBoards',
  'nav.supKnowledge',
  'nav.supBasics',
  'nav.supSizeGuide',
  'nav.inflatableSup',
  'nav.solutionsPaddleClubs',
  'nav.allAroundSup',
  'nav.touringSup',
  'nav.yogaSup',
  'nav.kidsSup',
  'nav.fishingSup',
  'nav.whitewaterSup',
  'nav.ultraStableSup',
  'nav.supManufacturer',
  'nav.oemPaddle',
  'nav.supFishing',
  'nav.inflatableVsHardboard',
  'buyerCenter.sups',
  'ai.comparison',
  'ai.process',
  'ai.definition',
  'ai.entity',
  'custom.subtitle',
  'guides.surfingDesc',
  'home.ai.desc2',
  'home.boards.allAround',
  'home.boards.kidsSups.desc',
  'home.boards.sports',
  'home.boards.touringSup.desc',
  'home.boards.ultraCompact',
  'home.boards.ultraCompact.desc',
  'home.boards.ultraStable',
  'home.boards.ultraStable.desc',
  'home.boards.whitewater',
  'home.boards.whitewater.desc',
  'home.boards.yoga',
  'home.boards.yoga.desc',
  'home.brand.desc',
  'home.brand.workers.label',
  'home.community.subtitle',
  'home.factory.subtitle',
  'home.learn.guide3',
  'home.lifestyle.desc',
  'home.lifestyle.title',
  'home.philosophy.env.desc',
  'home.philosophy.safety.desc',
  'home.philosophy.skill.desc',
  'home.problem.wrongGear.desc',
  'home.products.subtitle',
  'home.products.tagline',
  'home.socialProof.partners',
  'home.socialProof.subtitle',
  'home.tech.subtitle',
  'home.useCases.outdoor.scenario',
  'home.why.olagoon.point2',
  'home.why.olagoon.warranty.point1',
  'home.why.warranty.point1',
  'learn.inflatable-boat.description',
  'solutionsByIndustry.commercial.craft2',
  'solutionsByIndustry.commercial.craft3',
  'solutionsByIndustry.commercial.craft4',
  'solutionsByIndustry.defense.craft3',
  'solutionsByIndustry.disaster.craft1',
  'solutionsByIndustry.hospitality.craft3',
  'solutionsByIndustry.sar.craft2',
  'solutionsByIndustry.story2.narrative',
  'solutionsByUseCase.aiBlock',
];
const exts = new Set(['.astro', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.yaml', '.yml', '.json']);
const skipDirs = new Set(['node_modules', 'dist', '.astro', 'generated']);
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      if (skipDirs.has(name)) continue;
      walk(p);
    } else if (exts.has(name.slice(name.lastIndexOf('.')))) {
      files.push(p);
    }
  }
}
for (const r of ['src', 'workers', 'functions']) {
  try {
    walk(r);
  } catch {
    /* optional dir */
  }
}
const dangling = [];
for (const k of DELETED) {
  for (const f of files) {
    const rel = f.replace(/\\/g, '/');
    if (rel.includes('i18n-config')) continue;
    if (readFileSync(f, 'utf8').includes(`'${k}'`)) {
      dangling.push(`${k} -> ${rel}`);
      break;
    }
  }
}
if (dangling.length) {
  console.log(`DANGLING (${dangling.length}):`);
  for (const d of dangling) console.log('  ' + d);
  process.exitCode = 1;
} else {
  console.log('NO DANGLING REFERENCES');
}
