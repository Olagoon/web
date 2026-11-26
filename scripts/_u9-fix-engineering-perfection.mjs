import fs from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
const doc = JSON.parse(fs.readFileSync(FILE, 'utf8'));

// Pool-ized EN values: overwrite boat-language segment keys, add missing keys.
const VALUES = {
  'engineeringPerfection.title': 'Engineering Perfection — Drop-Stitch Inflatable Pool Manufacturing Excellence',
  'engineeringPerfection.p2desc':
    'Our design team comprises experienced product designers who leverage advanced CAD software and real-world testing to create pools that are structurally rigid, exceptionally stable, and robust. Every curve, seam, and attachment point is meticulously planned and analyzed.',
  'engineeringPerfection.segTitle': 'Tailored for Every Backyard',
  'engineeringPerfection.s1': 'Family Pools',
  'engineeringPerfection.s1desc':
    'High-denier PVC with heavily reinforced walls, wide stable bases, and continuous grab lines for maximum safety and comfort.',
  'engineeringPerfection.s2': 'Plunge Pools',
  'engineeringPerfection.s2desc':
    'Exceptional stability and a compact footprint. Features include integrated seating, reinforced walls, and thermal-efficient materials for cold-water recovery.',
  'engineeringPerfection.s3': 'Large-Capacity Pools',
  'engineeringPerfection.s3desc':
    'Full-size swimming zones with stiff drop-stitch cores and 20 cm walls, with robust ladder mounts and filtration-ready fittings.',
  'engineeringPerfection.s4': 'All-Around Backyard Pools',
  'engineeringPerfection.s4desc':
    'Versatile design for backyard swimming with high priority on stability, safety, comfort, and ease of inflation, deflation, and storage.',
  'engineeringPerfection.artDesc':
    'From CNC-precision fabric cutting and advanced thermal welding to controlled-environment adhesive bonding and exhaustive multi-stage testing, every OLagoon pool represents the pinnacle of drop-stitch manufacturing. Our production process is designed to prevent common defects — seam leaks, delamination, valve failures, dimensional inconsistencies — before they can occur.',
};

let updated = 0;
let added = 0;
for (const keys of Object.values(doc)) {
  for (const [k, v] of Object.entries(VALUES)) {
    if (typeof keys[k] === 'string') {
      if (keys[k] !== v) {
        keys[k] = v;
        updated += 1;
      }
    } else {
      keys[k] = v;
      added += 1;
    }
  }
}

fs.writeFileSync(FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
console.log(`updated ${updated}, added ${added} engineeringPerfection.* values`);
