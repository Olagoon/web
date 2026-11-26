import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = path.join(ROOT, 'src/data/site');
const DATA = path.join(ROOT, 'src/data');

// --- 1. site yaml families: overwrite locale variants with EN content ---
const FAMILIES = [
  'content-v2',
  'faqs',
  'evidence',
  'learning-center',
  'research',
  'tech-cards',
  'testimonials',
  'top-guides',
  'use-cases',
];
let copied = 0;
for (const base of FAMILIES) {
  const en = path.join(SITE, `${base}.yaml`);
  if (!fs.existsSync(en)) {
    console.log(`SKIP (no EN): ${base}`);
    continue;
  }
  const content = fs.readFileSync(en, 'utf8');
  const re = new RegExp(`^${base}\\.([a-z]{2})\\.yaml$`);
  for (const f of fs.readdirSync(SITE)) {
    if (re.test(f)) {
      fs.writeFileSync(path.join(SITE, f), content);
      copied++;
    }
  }
}
console.log(`site yaml locale copies overwritten: ${copied}`);

// --- 2. learn-*.yaml (data root): replace with EN misc-only yaml ---
const LEARN_EN = [
  'misc:',
  "  readGuide: 'Read guide →'",
  "  techDesc: 'Marine safety engineering and material testing'",
  "  productsDesc: 'Explore the full OLagoon product catalog'",
  "  trustDesc: 'CE, ISO and BSCI compliance'",
  '',
].join('\n');
let learnCount = 0;
for (const f of fs.readdirSync(DATA)) {
  if (/^learn-[a-z]{2}\.yaml$/.test(f)) {
    fs.writeFileSync(path.join(DATA, f), LEARN_EN);
    learnCount++;
  }
}
console.log(`learn-*.yaml overwritten: ${learnCount}`);

// --- 3. guides.{lc}.ts / faq.{lc}.ts wrappers: re-export EN, delete locale yaml ---
const cap = (s) => s[0].toUpperCase() + s.slice(1);
let rewired = 0;
let deletedYaml = 0;
for (const f of fs.readdirSync(DATA)) {
  let m = /^guides\.([a-z]{2})\.ts$/.exec(f);
  if (m) {
    const lc = m[1];
    fs.writeFileSync(path.join(DATA, f), `export { guides as guides${cap(lc)} } from './guides';\n`);
    rewired++;
    const yamlFile = path.join(DATA, `guides-${lc}.yaml`);
    if (fs.existsSync(yamlFile)) {
      fs.rmSync(yamlFile);
      deletedYaml++;
    }
    continue;
  }
  m = /^faq\.([a-z]{2})\.ts$/.exec(f);
  if (m) {
    const lc = m[1];
    fs.writeFileSync(path.join(DATA, f), `export { faqs as faqs${cap(lc)} } from './faq';\n`);
    rewired++;
    const yamlFile = path.join(DATA, `faq-${lc}.yaml`);
    if (fs.existsSync(yamlFile)) {
      fs.rmSync(yamlFile);
      deletedYaml++;
    }
  }
}
console.log(`wrappers rewired to EN re-export: ${rewired}`);
console.log(`data-root locale yaml deleted: ${deletedYaml}`);
