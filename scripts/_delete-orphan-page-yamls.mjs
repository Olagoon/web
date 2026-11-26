// Delete 5 orphan page YAMLs (no route exists) + clean dead references
import { readFileSync, writeFileSync, unlinkSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const PAGES_DIR = 'src/data/pages';
const ORPHANS = [
  'co-brand.yaml',
  'distributor-program.yaml',
  'solutions-distributors.yaml',
  'hull-engineering.yaml',
  'hydrodynamic-test-tank.yaml',
];

const localeDirs = readdirSync(PAGES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let deleted = 0;
for (const f of ORPHANS) {
  for (const dir of ['', ...localeDirs]) {
    const p = join(PAGES_DIR, dir, f);
    if (existsSync(p)) {
      unlinkSync(p);
      deleted++;
    }
  }
}
console.log(`deleted ${deleted} orphan YAML files (5 slugs x ${localeDirs.length + 1} dirs)`);

// routing.ts: drop dead LOCALIZED_ROUTES entries
const rt = 'src/i18n/routing.ts';
let routing = readFileSync(rt, 'utf8');
for (const dead of ["  '/co-brand',\n", "  '/distributor-program',\n", "  '/solutions/distributors',\n"]) {
  routing = routing.replace(dead, '');
}
writeFileSync(rt, routing, 'utf8');
console.log('routing.ts cleaned');

// middleware: redirect target /solutions/distributors/ -> /solutions/
const mw = 'functions/_middleware.ts';
let middleware = readFileSync(mw, 'utf8');
middleware = middleware.replace("'/solutions/rescue-watercraft': '/solutions/distributors/',", "'/solutions/rescue-watercraft': '/solutions/',");
writeFileSync(mw, middleware, 'utf8');
console.log('middleware LEGACY_REDIRECTS fixed');
