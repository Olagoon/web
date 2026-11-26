// Find orphan page YAMLs: root src/data/pages/*.yaml not referenced by pages.yaml registry
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const PAGES_DIR = 'src/data/pages';
const REGISTRY = 'src/data/site/pages.yaml';

const registryText = readFileSync(REGISTRY, 'utf8');
const registered = new Set(
  [...registryText.matchAll(/^  file: (.+)$/gm)].map((m) => m[1].trim().replace('src/data/pages/', ''))
);

const rootYamls = readdirSync(PAGES_DIR).filter((f) => f.endsWith('.yaml'));
const orphans = rootYamls.filter((f) => !registered.has(f));
console.log(`root page YAMLs: ${rootYamls.length}, registered: ${registered.size}, orphans: ${orphans.length}\n`);

// check code references for each orphan (getPageContent(lang, 'key') / pageContent loaders)
const exts = new Set(['.astro', '.ts', '.tsx', '.mjs', '.cjs', '.js']);
const skipDirs = new Set(['node_modules', 'dist', '.astro', 'generated', 'pages']);
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.isDirectory()) {
      if (skipDirs.has(name.name)) continue;
      walk(join(dir, name.name));
    } else if (exts.has(name.name.slice(name.name.lastIndexOf('.')))) {
      files.push(join(dir, name.name));
    }
  }
}
walk('src');
walk('scripts');
const contents = files
  .filter((f) => !f.includes('i18n') || !f.includes('generated'))
  .map((f) => ({ f, c: readFileSync(f, 'utf8') }));

for (const orphan of orphans) {
  const key = orphan.replace(/\.yaml$/, '');
  const refs = contents.filter(({ c }) => c.includes(`'${key}'`) || c.includes(`"${key}"`) || c.includes(`'${key}.yaml'`));
  // locale copies count
  const localeDirs = readdirSync(PAGES_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
  let localeCopies = 0;
  for (const d of localeDirs) if (existsSync(join(PAGES_DIR, d.name, orphan))) localeCopies++;
  console.log(`${orphan}  [locale copies: ${localeCopies}]`);
  if (refs.length) {
    console.log('  CODE REFS (check before delete):');
    for (const r of refs.slice(0, 5)) console.log(`    ${r.f}`);
  }
}
