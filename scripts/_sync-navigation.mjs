// One-off: overwrite locale navigation YAML files + content/navigation/index.json with the EN pool navigation (Step 8).
import fs from 'node:fs';
import path from 'node:path';
import yaml from '../node_modules/js-yaml/index.js';

const ROOT = process.cwd();
const siteDir = path.join(ROOT, 'src', 'data', 'site');
const enPath = path.join(siteDir, 'navigation.yaml');
const en = fs.readFileSync(enPath, 'utf8');
const data = yaml.load(en);

let count = 0;
for (const entry of fs.readdirSync(siteDir)) {
  const m = entry.match(/^navigation\.([a-z]{2})\.yaml$/);
  if (!m) continue;
  fs.writeFileSync(path.join(siteDir, entry), en);
  count++;
}
console.log(`overwrote ${count} locale navigation files with EN content`);

const navJson = { header: data.header, footer: data.footer };
const jsonPath = path.join(ROOT, 'src', 'content', 'navigation', 'index.json');
fs.writeFileSync(jsonPath, JSON.stringify(navJson, null, 2) + '\n', 'utf8');
console.log('rewrote src/content/navigation/index.json from EN yaml');
