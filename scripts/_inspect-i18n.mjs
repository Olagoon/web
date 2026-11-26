import { readFileSync } from 'node:fs';
const cfg = JSON.parse(readFileSync('src/data/site/i18n-config.json', 'utf8'));
const slugs = ['water-safety', 'drop-stitch-core', 'inflatable-technology', 'materials', 'safety-in-water-sports'];
for (const s of slugs) {
  for (const f of ['title', 'description']) {
    const k = `learn.${s}.${f}`;
    console.log(cfg.en[k] ? `${k} = ${String(cfg.en[k]).slice(0, 90)}` : `${k} MISSING`);
  }
}
// count keys per locale for sanity
for (const [lc, map] of Object.entries(cfg)) {
  console.log(lc, Object.keys(map).length);
}
