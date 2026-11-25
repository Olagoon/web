import { readFileSync, writeFileSync } from 'node:fs';

const file = new URL('../src/data/site/i18n-config.json', import.meta.url);
const raw = readFileSync(file, 'utf8');
const data = JSON.parse(raw);

let changed = 0;
for (const [locale, obj] of Object.entries(data)) {
  if (locale === 'en') continue;

  // techspecs.sup -> techspecs.pool
  if ('techspecs.sup' in obj) {
    delete obj['techspecs.sup'];
    obj['techspecs.pool'] = 'Inflatable Pools';
    changed++;
  }
  if ('techspecs.supDesc' in obj) {
    delete obj['techspecs.supDesc'];
    obj['techspecs.poolDesc'] = 'Full specifications for OLagoon drop-stitch inflatable pools.';
    changed++;
  }

  // home.category.sup -> home.category.pool
  if ('home.category.sup' in obj) {
    delete obj['home.category.sup'];
    obj['home.category.pool'] = 'Inflatable Pools';
    changed++;
  }
  if ('home.category.sups' in obj) {
    delete obj['home.category.sups'];
    changed++;
  }

  // faq.tab.sup -> faq.tab.pool
  if ('faq.tab.sup' in obj) {
    delete obj['faq.tab.sup'];
    obj['faq.tab.pool'] = 'Pools & Quality';
    changed++;
  }
}

// EN reference values
const en = data['en'];
if ('techspecs.sup' in en) {
  en['techspecs.pool'] = 'Inflatable Pools';
  delete en['techspecs.sup'];
  en['techspecs.poolDesc'] = 'Full specifications for OLagoon drop-stitch inflatable pools.';
  delete en['techspecs.supDesc'];
  changed++;
}
if ('home.category.sup' in en) {
  en['home.category.pool'] = 'Inflatable Pools';
  delete en['home.category.sup'];
  delete en['home.category.sups'];
  changed++;
}
if ('faq.tab.sup' in en) {
  en['faq.tab.pool'] = 'Pools & Quality';
  delete en['faq.tab.sup'];
  changed++;
}

writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log(`done, ${changed} key operations`);
