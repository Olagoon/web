// One-off (rerunnable): fix SUP i18n keys in src/data/site/i18n-config.json for the OLagoon pool brand.
// - DELETE_KEYS: removed from all 32 locales (unused or dead navTextMap entries; entries pruned from Header/Footer)
// - POOL_VALUES: new pool EN values, set identically in all 32 locales (mechanical brand swap)
// - Validates: no banned SUP words remain in ANY locale value; no dangling deleted-key references in src/workers/functions
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CONFIG = 'src/data/site/i18n-config.json';

// ---------------- delete list ----------------
const DELETE_KEYS = [
  // map-only nav keys (Header/Footer navTextMap dead entries, pruned below)
  'nav.supBoards', 'nav.supKnowledge', 'nav.supBasics', 'nav.supSizeGuide',
  'nav.inflatableSup', 'nav.solutionsPaddleClubs', 'nav.allAroundSup', 'nav.touringSup',
  'nav.yogaSup', 'nav.kidsSup', 'nav.fishingSup', 'nav.whitewaterSup', 'nav.ultraStableSup',
  'nav.supManufacturer', 'nav.oemPaddle', 'nav.supFishing',
  // unused (page deleted / replaced by data files)
  'faq.sup.learn', 'faq.sup.learn.a', 'faq.sup.weight', 'faq.sup.weight.a',
  'faq.sup.travel', 'faq.sup.travel.a', 'faq.sup.box', 'faq.sup.box.a',
  'learn.sup.title', 'learn.sup.description', 'learn.sup-basics.title', 'learn.sup-basics.description',
  'learn.intermediate-techniques.description', 'learn.sup-size-guide.title', 'learn.sup-size-guide.description',
  'home.problem.title', 'home.gallery.sup', 'home.gallery.sup.desc', 'home.guides.desc',
  'home.preview.beginner.desc', 'home.preview.beginner.product1', 'home.preview.beginner.product1.desc',
  'home.preview.beginner.product2', 'home.preview.pro.product2',
  'home.boards.allAround.desc', 'home.boards.touringSup', 'home.boards.sports.desc', 'home.boards.surf',
  'home.boards.surf.desc', 'home.boards.kidsSups',
  'home.useCases.subtitle', 'home.ask.placeholder',
  'home.useCases.beginner.scenario', 'home.useCases.beginner.solution',
  'home.useCases.pro.title', 'home.useCases.pro.scenario',
  'home.useCases.family.scenario', 'home.useCases.family.solution',
  'home.learn.title', 'home.learn.guide1', 'home.learn.guide2',
  'people.designDesc', 'home.catalog.sup', 'home.catalog.sup.desc', 'home.catalog.accessory.desc',
  'home.alt.community1', 'guides.pageTitle', 'guides.surfingCta', 'guides.browseSurfing',
  'solutions.divingCenter.metaDesc', 'solutions.fishing.metaDesc', 'solutions.marineTourism.metaDesc',
  'solutions.oem.metaDesc', 'solutions.paddleClubs.metaDesc', 'solutions.resorts.metaDesc',
  'home.lifestyle.altSup', 'home.community.altOceanVoyager', 'home.community.altCheetahSurge',
  'home.community.altTropicalBreeze', 'ai.definition', 'ai.entity',
  'home.community.gallery.sup', 'home.community.gallery.sup.desc', 'home.evidence.caseStudies.desc',
  'home.lifestyle.sup', 'home.products.accessories.desc', 'home.products.sup', 'home.products.sup.cta',
  'home.products.sup.desc', 'home.products.sup.title', 'home.resources.supComparison', 'home.resources.supComparisonDesc',
  'solutionsByIndustry.commercial.craft1', 'solutionsByIndustry.defense.craft1',
  'solutionsByIndustry.disaster.craft2', 'solutionsByIndustry.fishing.craft1',
  'solutionsByIndustry.fishing.craft2', 'solutionsByIndustry.fishing.craft3', 'solutionsByIndustry.fishing.desc',
  'solutionsByIndustry.hospitality.craft1', 'solutionsByIndustry.hospitality.craft2',
  'solutionsByIndustry.hospitality.craft4', 'solutionsByIndustry.hospitality.desc',
  'solutionsByIndustry.sar.craft1', 'solutionsByIndustry.story1.narrative', 'solutionsByIndustry.story1.quote',
  'solutionsByUseCase.story1.narrative', 'solutionsByUseCase.story1.quote',
];

// ---------------- pool EN values ----------------
const POOL_VALUES = {
  // use cases hub
  'useCase.hubDesc': 'From backyard family fun to resort pool programs — find the right OLagoon pool for how you play.',
  'useCase.touring': 'Resort & Vacation Rental Pools',
  'useCase.touring.desc': 'Commercial-grade drop-stitch pools for resorts, vacation rentals, and hospitality — engineered for 200+ rental days per season.',
  'useCase.tourismRecreation.desc': 'Stable, easy-to-set-up pools for holidays, backyard days, travel, and splashing with family and friends.',
  'useCase.fishing.desc': 'Durable shared pools for neighborhoods, camps, and community programs — with filtration, covers, and maintenance accessories.',
  // buyer center
  'buyerCenter.heroDesc': 'Whether you are a first-time buyer, a resort operator, or a B2B partner, find all the tools and information you need in one place.',
  'buyerCenter.inflatables': 'Inflatable Pools',
  'buyerCenter.sups': 'Pools',
  'buyerCenter.oemPageDesc': 'Limited co-branded collections for inflatable pool products.',
  // tech specs
  'techspecs.accessoriesDesc': 'Filter pumps, thermal covers, ground mats, and pool accessories.',
  // research hub
  'home.research.subtitle': 'In-depth technical research on drop-stitch pool materials, construction, safety standards, and manufacturing — written by our engineers.',
  'home.research.dropStitch.desc': 'The engineering behind the thousands of internal threads that transform flexible PVC into a rigid, high-pressure pool wall.',
  'home.research.supThickness': 'How to Choose Pool Size',
  'home.research.supThickness.desc': 'Practical guide to pool dimensions, wall height, and water capacity — finding the right size for your backyard and family.',
  // compare hub
  'compare.hubDesc': 'Side-by-side comparisons of pool materials, pool types, and models to help you choose the right pool.',
  // inflatable vs rigid pool
  'compare.inflatableVsHard.title': 'Inflatable vs Rigid Pool — Which Is Better for Your Backyard?',
  'compare.inflatableVsHard.desc': 'Compare inflatable drop-stitch pools and rigid above-ground pools across performance, durability, portability, cost, and use cases.',
  'compare.inflatableVsHard.headline': 'Inflatable vs Rigid Pool — Which Is Better for Your Backyard?',
  'compare.inflatableVsHard.heading': 'Inflatable vs Rigid Pool',
  'compare.inflatableVsHard.subtitle': 'The definitive comparison between inflatable drop-stitch pools and rigid steel-frame or resin pools.',
  'compare.inflatableVsHard.col1Title': 'Inflatable Drop-Stitch Pool',
  'compare.inflatableVsHard.col2Title': 'Rigid Pool (Steel/Resin)',
  'compare.inflatableVsHard.perfDesc': 'Modern drop-stitch pools are genuinely rigid at 10–15 PSI — the walls feel solid, not bouncy.',
  'compare.inflatableVsHard.bestDesc': 'Families, renters, seasonal use, smaller backyards, quick setup and winter storage.',
  'compare.inflatableVsHard.hardBestDesc': 'Permanent installations, very large sizes, buyers with level ground and dedicated space.',
  'compare.inflatableVsHard.isupShort': 'Inflatable Pool',
  'compare.inflatableVsHard.hardShort': 'Rigid Pool',
  'compare.inflatableVsHard.r6': 'Wall Rigidity',
  'compare.inflatableVsHard.verdictDesc': 'For most families, an inflatable drop-stitch pool is the smarter choice. 20 cm rigid walls, no tools, no hardware — and it stores away in a carry bag each winter.',
  'compare.inflatableVsHard.cta': 'Shop Inflatable Pools',
  'compare.inflatableVsHard.aiBlock': 'Definitive comparison between inflatable drop-stitch pools and rigid above-ground pools. Covers rigidity, durability, cost, setup, and storage.',
  // single vs multi chamber pool
  'compare.singleVsMulti.aiBlock': 'Comparison between single chamber and multi chamber inflatable pools across 11 key factors: safety, number of air chambers, puncture behavior, cost, and use cases.',
  'compare.singleVsMulti.cta': 'Shop Multi-Chamber Pools',
  'compare.singleVsMulti.desc': 'Compare single and multi chamber inflatable pools across safety, durability, weight, cost, and use cases.',
  'compare.singleVsMulti.heading': 'Single Chamber vs Multi Chamber Pool',
  'compare.singleVsMulti.headline': 'Single Chamber vs Multi Chamber Pool — Which Is Safer?',
  'compare.singleVsMulti.r11a': 'Casual backyard splashing in small, shallow pools with close supervision.',
  'compare.singleVsMulti.r1b': 'Each chamber is independent. A puncture in one leaves the others inflated — the pool stays up.',
  'compare.singleVsMulti.recDesc': 'For any pool deeper than knee height — and especially for resorts and commercial operators — a <strong>multi-chamber pool</strong> is worth the premium.',
  'compare.singleVsMulti.subtitle': 'The number of air chambers in an inflatable pool is one of the most important safety factors — yet it is rarely mentioned in product listings.',
  'compare.singleVsMulti.title': 'Single Chamber vs Multi Chamber Pool — Which Is Safer?',
  'compare.singleVsMulti.whenSingleDesc': 'Single-chamber pools are fine for small splash pools and shallow family fun where the risk profile is low.',
  'compare.singleVsMulti.whyMattersP1': 'The most significant safety advantage of multi-chamber construction is <strong>buoyancy redundancy</strong>. If one chamber fails, the others keep the pool walls standing.',
  'compare.singleVsMulti.whyMattersP2': 'For resorts, rental operators, and community programs, multi-chamber pools reduce liability and equipment downtime.',
  // solutions by use case
  'solutionsByUseCase.title': 'Solutions by Use Case — Find Your Inflatable Pool',
  'solutionsByUseCase.scenario7': 'I want to manufacture my own pool design',
  'solutionsByUseCase.rel1desc': 'Find the right inflatable pool for your industry sector.',
  'solutionsByUseCase.answer2': 'Commercial-grade pool fleets with reinforced drop-stitch construction for resort durability. Fleet pricing, custom branding, and bulk logistics.',
  // AI chat hints
  'ai.hintFamilyQuery': 'I need a family pool for weekend backyard fun with my two kids.',
  'ai.hintFamily': 'Family backyard pool',
  'ai.hintBeginnerQuery': 'I am shopping for my first inflatable pool. What do you recommend?',
  'ai.initialMessage': 'Tell me your backyard size, who will use the pool, and what you want – I will recommend models, setup tips, and safety advice.',
  'ai.hintCompareQuery': 'Compare the Family Oasis vs the Grand Lagoon for a family of four.',
  'ai.hintCoastalQuery': 'What safety equipment and accessories do I need for a backyard pool?',
  // meta / SEO strings
  'about.metaTitle': 'About OLagoon — Drop-Stitch Inflatable Pool Manufacturer & Engineering',
  'faq.metaDesc': 'Frequently asked questions about OLagoon drop-stitch inflatable pools, accessories, and water safety.',
  'sizeGuide.metaDesc': 'Find the right size inflatable pool for your backyard. Compare dimensions, water capacity, and recommended uses across the OLagoon range.',
  'learn.metaDesc': 'Guides, tutorials, and deep dives on pool care, water safety, and drop-stitch technology. Learn how to choose, set up, and maintain your pool.',
  'guides.metaDesc': 'Practical guides for pool owners — choosing a pool, setup, water care, safety, and winter storage.',
  'journal.metaDesc': 'Pool guides, gear comparisons, and OLagoon stories.',
  'custom.metaTitle': 'Custom Lab — OEM/ODM Inflatable Pool Manufacturer',
  'custom.metaDesc': 'OEM/ODM inflatable pool manufacturer. Custom designs, private label, bulk production. MOQ 50 units, CE certified.',
  'marineIndustry.metaTitle': 'Inflatable Pool & Backyard Water Guide — Materials, Selection & Safety',
  'marineIndustry.metaDesc': 'A comprehensive guide to drop-stitch inflatable pools covering types, construction methods, materials, and safety standards.',
  'products.metaTitle': 'Inflatable Pool Products',
  'products.metaDesc': 'Browse the full OLagoon product catalog — drop-stitch inflatable pools and accessories. Country distribution and co-brand options.',
  'product.pageDesc': 'Premium drop-stitch inflatable pools built for performance and durability season after season. Compact to store, quick to set up.',
  'home.tldr.summary': 'OLagoon designs and manufactures premium drop-stitch inflatable pools and accessories — CE certified and pressure-tested.',
  'exitIntent.subtitle': 'Learn how to launch your private label pool brand with our complete manufacturing white paper. 42 pages covering design, tooling, and compliance.',
  'news.ctaDesc': 'Download our complete guide to launching your private label pool brand.',
  'news.newsletterTitle': 'Stay Ahead in the Pool Industry',
  'academy.learningCenterDesc': 'Step-by-step guides and tutorials organized by experience level — from first pool setup to advanced water care.',
  'academy.metaDesc': 'Guides and tutorials for every experience level — from first pool setup to advanced water care. Learn at your own pace.',
  'design.altOceanVoyager': 'OLagoon drop-stitch pool',
  'engineeringPerfection.desc': 'OLagoon engineering philosophy: precision manufacturing, premium material selection, and rigorous quality control — from drop-stitch core to final pressure test.',
  // OEM page
  'oem.desc': 'OLagoon — premier OEM/ODM manufacturer of drop-stitch inflatable pools. CE-certified. Custom molds, private label, bulk production.',
  'oem.heading': 'Your Pool Brand.<br />Built By OLagoon.',
  'oem.process.subtitle': 'A proven 5-phase process that takes your pool brand from concept to global delivery.',
  'oem.subtitle': 'From idea to market in 16 weeks. We design, prototype, manufacture, and ship your custom inflatable pool — private label or co-branded.',
  'oem.title': 'Inflatable Pool OEM/ODM Manufacturer',
  // learn slugs ([lang]/learn/[slug].astro dynamic t('learn.'+slug+'.title'/'description'))
  'learn.water-safety.title': 'Water Safety Knowledge',
  'learn.water-safety.description': 'Comprehensive water safety resources for pool owners — supervision, safe entry, children and pets, and CE-certified construction.',
  'learn.drop-stitch-core.title': 'Drop-Stitch Core Technology',
  'learn.drop-stitch-core.description': 'Deep dive into drop-stitch construction and how thousands of polyester threads create rigid pool walls at 15 PSI.',
  'learn.inflatable-technology.title': 'Inflatable Pool Technology',
  'learn.inflatable-technology.description': 'How modern drop-stitch pools achieve yacht-grade rigidity — materials, welding, and air pressure engineering.',
  'learn.materials.title': 'Inflatable Pool Materials',
  'learn.materials.description': 'What goes into an OLagoon pool: reinforced PVC layers, drop-stitch cores, and UV-resistant coatings.',
  'learn.safety-in-water-sports.title': 'Water Safety Essentials',
  'learn.safety-in-water-sports.description': 'Essential safety knowledge for every pool owner — supervision, entry rules, children, and emergency readiness.',
};

// ---------------- banned-word validator ----------------
const BANNED =
  /\bsups?\b|\bpaddles?\b|\bpaddling\b|\bpaddlers?\b|\bsurf(?:ing|er|s)?\b|\bkayaks?\b|\bvests?\b|\bwetsuit\b|\biSUP\b|\bboards?\b/i;

// ---------------- 1. prune Header/Footer navTextMap dead entries ----------------
for (const f of ['src/components/widgets/Header.astro', 'src/components/widgets/Footer.astro']) {
  let src = readFileSync(f, 'utf8');
  for (const k of DELETE_KEYS) {
    const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`^[ \\t]*(?:"[^"]*"|'[^']*'):[ \\t]*['"]${esc}['"],?[ \\t]*\\r?\\n`, 'gm');
    src = src.replace(re, '');
  }
  writeFileSync(f, src, 'utf8');
  console.log('pruned map entries in', f);
}

// ---------------- 2. apply to i18n-config.json (all locales) ----------------
const cfg = JSON.parse(readFileSync(CONFIG, 'utf8'));
const locales = Object.keys(cfg);
let delCount = 0;
for (const lc of locales) {
  const map = cfg[lc];
  for (const k of DELETE_KEYS) {
    if (k in map) {
      delete map[k];
      delCount++;
    }
  }
  for (const [k, v] of Object.entries(POOL_VALUES)) map[k] = v;
}
writeFileSync(CONFIG, JSON.stringify(cfg, null, 2) + '\n', 'utf8');
console.log(`applied: ${locales.length} locales, ${delCount} key deletions, ${Object.keys(POOL_VALUES).length} pool values set`);

// ---------------- 3. validate ----------------
const errors = [];
for (const lc of locales) {
  for (const [k, v] of Object.entries(cfg[lc])) {
    if (BANNED.test(String(v)) || BANNED.test(k)) errors.push(`${lc}:${k} = ${String(v).slice(0, 80)}`);
  }
}
if (errors.length) {
  console.log(`\nBANNED REMAINING (${errors.length}):`);
  for (const e of errors) console.log('  ' + e);
  process.exitCode = 1;
} else {
  console.log('VALIDATION OK: no banned words in any locale');
}

// ---------------- 4. dangling reference check ----------------
const exts = new Set(['.astro', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.yaml', '.yml', '.json']);
const skipDirs = new Set(['node_modules', 'dist', '.astro', 'generated']);
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) {
      if (skipDirs.has(name)) continue;
      walk(p);
    } else if (exts.has(name.slice(name.lastIndexOf('.')))) {
      files.push(p);
    }
  }
}
for (const r of ['src', 'workers', 'functions']) {
  try { walk(r); } catch {}
}
const dangling = [];
for (const k of DELETE_KEYS) {
  for (const f of files) {
    if (readFileSync(f, 'utf8').includes(`'${k}'`)) {
      dangling.push(`${k} -> ${f.replace(/\\/g, '/')}`);
      break;
    }
  }
}
if (dangling.length) {
  console.log(`\nDANGLING REFERENCES (${dangling.length}):`);
  for (const d of dangling) console.log('  ' + d);
  process.exitCode = 1;
} else {
  console.log('NO DANGLING REFERENCES to deleted keys');
}
