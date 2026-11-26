// Pass 4: fix [lang] buyer-center call site + prune dead nav.inflatableVsHardboard
import { readFileSync, writeFileSync } from 'node:fs';

// 1. [lang] variant call site
const f = 'src/pages/[lang]/buyer-center/index.astro';
let src = readFileSync(f, 'utf8');
const before = src;
src = src.replace(/'buyerCenter\.sups'/g, "'buyerCenter.pools'");
writeFileSync(f, src, 'utf8');
console.log(f, before === src ? 'UNCHANGED (check manually)' : 'renamed buyerCenter.sups -> buyerCenter.pools');

// 2. Footer + Header map lines
for (const ff of ['src/components/widgets/Footer.astro', 'src/components/widgets/Header.astro']) {
  let comp = readFileSync(ff, 'utf8');
  const re = /^[ \t]*(?:"[^"]*"|'[^']*'):[ \t]*['"]nav\.inflatableVsHardboard['"],?[ \t]*\r?\n/gm;
  const count = (comp.match(re) || []).length;
  comp = comp.replace(re, '');
  writeFileSync(ff, comp, 'utf8');
  console.log(ff, 'pruned map lines:', count);
}

const CONFIG = 'src/data/site/i18n-config.json';
const cfg = JSON.parse(readFileSync(CONFIG, 'utf8'));
let del = 0;
for (const map of Object.values(cfg)) {
  if ('nav.inflatableVsHardboard' in map) {
    delete map['nav.inflatableVsHardboard'];
    del++;
  }
}
writeFileSync(CONFIG, JSON.stringify(cfg, null, 2) + '\n', 'utf8');
console.log('deleted nav.inflatableVsHardboard from', del, 'locales');
