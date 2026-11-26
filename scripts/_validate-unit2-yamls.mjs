// Validate the Unit 2 root page YAMLs parse cleanly before locale sync.
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const files = [
  'src/data/pages/solutions.yaml',
  'src/data/pages/b2b-solutions-matrix.yaml',
  'src/data/pages/solutions-rental-operators.yaml',
  'src/data/pages/solutions-resorts-hotels.yaml',
  'src/data/pages/solutions-retail-partners.yaml',
  'src/data/pages/solutions-build-your-own-brand.yaml',
  'src/data/pages/co-brand.yaml',
  'src/data/pages/distributor-program.yaml',
  'src/data/pages/solutions-distributors.yaml',
  'src/data/pages/oem-odm-manufacturer.yaml',
];

for (const f of files) {
  const doc = yaml.load(readFileSync(f, 'utf8'));
  if (!doc || typeof doc !== 'object') throw new Error(`${f}: parsed to non-object`);
  console.log('OK', f);
}
console.log('all valid');
