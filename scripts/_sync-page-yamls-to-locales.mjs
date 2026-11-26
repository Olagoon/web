// Sync root EN page YAMLs into the 31 locale dirs (mechanical overwrite of existing files only).
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/data/pages';
const langs = readdirSync(DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const roots = readdirSync(DIR).filter((f) => f.endsWith('.yaml'));

let copied = 0;
const missing = [];
for (const f of roots) {
  const raw = readFileSync(join(DIR, f), 'utf8');
  for (const lang of langs) {
    const target = join(DIR, lang, f);
    if (existsSync(target)) {
      writeFileSync(target, raw, 'utf8');
      copied++;
    } else {
      missing.push(`${lang}/${f}`);
    }
  }
}
console.log(`copied: ${copied}`);
console.log(`locale files not present (skipped): ${missing.length}`);
for (const m of missing.slice(0, 30)) console.log('  ' + m);
if (missing.length > 30) console.log(`  ...and ${missing.length - 30} more`);
