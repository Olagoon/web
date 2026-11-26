// One-off: copy the two new meta-only page YAMLs into all 31 locale dirs.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';
const files = ['solutions-by-industry.yaml', 'solutions-by-use-case.yaml'];
const langs = readdirSync(DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
let copied = 0;
for (const f of files) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  for (const lang of langs) {
    writeFileSync(join(DIR, lang, f), raw, 'utf8');
    copied++;
  }
}
console.log('copied:', copied, '(expect', files.length * langs.length, '-', langs.length, 'locales)');
