// One-off: overwrite about.{locale}.yaml variants + proof-points.{de,fr}.yaml with EN pool versions
import { readFileSync, writeFileSync } from 'node:fs';

const aboutLocales = ['bg','de','et','fr','he','hr','hu','id','lt','lv','ms','sk','sl','sr','tl'];
const aboutEn = readFileSync('src/data/site/about.yaml', 'utf8');
for (const lc of aboutLocales) {
  const f = `src/data/site/about.${lc}.yaml`;
  writeFileSync(f, aboutEn, 'utf8');
  console.log('overwrote', f);
}

const ppEn = readFileSync('src/data/site/proof-points.yaml', 'utf8');
for (const lc of ['de', 'fr']) {
  const f = `src/data/site/proof-points.${lc}.yaml`;
  writeFileSync(f, ppEn, 'utf8');
  console.log('overwrote', f);
}
console.log('done');
