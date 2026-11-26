// Unit 15: poolize [lang]/factory/capacity.astro ai-intent
import fs from 'node:fs';

const FILE = 'src/pages/[lang]/factory/capacity.astro';
let t = fs.readFileSync(FILE, 'utf8');
const before = t;
t = t.replace(
  'content="inflatable-sup-factory-capacity,oem-sup-production"',
  'content="inflatable-pool-factory-capacity,oem-pool-production"'
);
if (t === before) {
  console.log('NO CHANGE');
  process.exit(1);
}
fs.writeFileSync(FILE, t, 'utf8');
console.log('fixed ai-intent in [lang]/factory/capacity.astro');
