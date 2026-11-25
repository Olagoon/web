const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ROOT = process.cwd();

const REPLACEMENTS = {
  'https://assets.olagoon.com/images/olagoon/factory/olagoon factory.webp':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-factory-building.webp',
  'https://assets.olagoon.com/images/olagoon/factory/design discuss2.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-design-discussion-2.webp',
  'https://assets.olagoon.com/images/olagoon/factory/design discuss original.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-design-discussion-original.webp',
  'https://assets.olagoon.com/images/olagoon/factory/PVC material.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-pvc-material-testing.webp',
  'https://assets.olagoon.com/images/olagoon/factory/Pressure Testing.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-pressure-testing.webp',
  'https://assets.olagoon.com/images/olagoon/factory/Stock Boat.webp':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-stock-boat-inventory.webp',
  'https://assets.olagoon.com/images/olagoon/factory/UV Resistance Testing.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-uv-resistance-testing.webp',
  'https://assets.olagoon.com/images/olagoon/factory/sup making.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-sup-manufacturing.webp',
  'https://assets.olagoon.com/images/olagoon/factory/sup making3.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-sup-manufacturing-3.webp',
  'https://assets.olagoon.com/images/olagoon/factory/producing department.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-production-department.webp',
  'https://assets.olagoon.com/images/olagoon/factory/producing department2.jpeg':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-production-department-2.webp',
  'https://assets.olagoon.com/images/olagoon/hero/about-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/production-dept.webp',
  'https://assets.olagoon.com/images/olagoon/hero/academy-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/tech-meeting-small.webp',
  'https://assets.olagoon.com/images/olagoon/hero/contact-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/factory-gate.webp',
  'https://assets.olagoon.com/images/olagoon/hero/custom-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/olagoon-hero-design-concept.webp',
  'https://assets.olagoon.com/images/olagoon/products/fishing-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/production-dept.webp',
  'https://assets.olagoon.com/images/olagoon/factory/factory-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/factory-gate.webp',
  'https://assets.olagoon.com/images/olagoon/factory/process-banner.webp':
    'https://assets.olagoon.com/images/olagoon/hero/production-dept.webp',
  'https://assets.olagoon.com/images/olagoon/factory/production-workshop.webp':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-production-department.webp',
  'https://assets.olagoon.com/images/olagoon/factory/quality-workshop.webp':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-pvc-material-testing.webp',
  'https://assets.olagoon.com/images/olagoon/factory/rib-workshop.webp':
    'https://assets.olagoon.com/images/olagoon/products/rib/olagoon-rib-330-boat.webp',
  'https://assets.olagoon.com/images/olagoon/factory/welding-workshop.webp':
    'https://assets.olagoon.com/images/olagoon/factory/producting department3.webp',
  'https://assets.olagoon.com/images/olagoon/hero/hero-5.webp':
    'https://assets.olagoon.com/images/olagoon/hero/factory-gate.webp',
  'https://assets.olagoon.com/images/olagoon/hero/hero-image.webp':
    'https://assets.olagoon.com/images/olagoon/hero/olagoon-hero-design-concept.webp',
  'https://assets.olagoon.com/images/olagoon/hero/hero-scenic.webp':
    'https://assets.olagoon.com/images/olagoon/hero/tech-meeting-small.webp',
  'https://assets.olagoon.com/images/olagoon/hero/boat man olagoon-min.jpeg':
    'https://assets.olagoon.com/images/olagoon/hero/olagoon-hero-design-concept.webp',
  'https://assets.olagoon.com/images/olagoon/hero/production-workshop.webp':
    'https://assets.olagoon.com/images/olagoon/factory/olagoon-production-department.webp',
  'https://assets.olagoon.com/images/olagoon/hero/trust-hero.webp':
    'https://assets.olagoon.com/images/olagoon/hero/tech-meeting-small.webp',
  'https://assets.olagoon.com/images/olagoon/products/rib-330.webp':
    'https://assets.olagoon.com/images/olagoon/products/rib/olagoon-rib-330-boat.webp',
};

const yamlFiles = glob.sync('src/data/pages/**/*.yaml').map((f) => path.join(ROOT, f));
let totalReplaced = 0;
let totalFiles = 0;

for (const filePath of yamlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
    const re = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const count = (content.match(re) || []).length;
    if (count > 0) {
      content = content.split(oldUrl).join(newUrl);
      totalReplaced += count;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    totalFiles++;
  }
}

// Summary per replacement
console.log('Replacement summary:');
for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
  const oldName = oldUrl.split('/').pop();
  const newName = newUrl.split('/').pop();
  // Count by scanning files
  let c = 0;
  for (const filePath of yamlFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(newUrl)) c++;
  }
  if (c > 0) console.log('  ' + oldName + ' -> ' + newName + ' (' + c + ' files)');
}

console.log('---');
console.log('Total replacements: ' + totalReplaced);
console.log('Total files changed: ' + totalFiles);

// Verify
let missingCount = 0;
for (const f of yamlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  for (const oldUrl of Object.keys(REPLACEMENTS)) {
    if (content.includes(oldUrl)) {
      console.error('STILL MISSING in ' + f.replace(ROOT + path.sep, '').replace(/\\/g, '/'));
      missingCount++;
    }
  }
}
if (missingCount === 0) console.log('All references updated successfully!');
