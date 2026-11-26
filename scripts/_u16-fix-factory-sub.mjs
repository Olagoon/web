// Unit 16: poolize [lang]/factory subpages (equipment, oem-capability, process, quality-lab)
import fs from 'node:fs';

const FIXES = [
  {
    file: 'src/pages/[lang]/factory/equipment.astro',
    from: 'digital and screen printers for SUP boards, RF welders, and test rigs.',
    to: 'digital and screen printers for pool walls, RF welders, and test rigs.',
  },
  {
    file: 'src/pages/[lang]/factory/oem-capability.astro',
    from: 'content="oem-inflatable-sup-manufacturer,private-label-sup,oem-sup-manufacturer,custom-sup-production-china"',
    to: 'content="oem-inflatable-pool-manufacturer,private-label-pool,oem-pool-manufacturer,custom-pool-production-china"',
  },
  {
    file: 'src/pages/[lang]/factory/process.astro',
    from: 'From Raw Material to SUP |',
    to: 'From Raw Material to Pool |',
  },
  {
    file: 'src/pages/[lang]/factory/process.astro',
    from: 'SUP digital printing, assembly, quality testing, and',
    to: 'pool digital printing, assembly, quality testing, and',
  },
  {
    file: 'src/pages/[lang]/factory/quality-lab.astro',
    from: 'content="inflatable-sup-quality-control,marine-product-testing,iso-9001-sup-factory,ce-certification-testing"',
    to: 'content="inflatable-pool-quality-control,pool-product-testing,iso-9001-pool-factory,ce-certification-testing"',
  },
];

let fixed = 0;
for (const { file, from, to } of FIXES) {
  let t = fs.readFileSync(file, 'utf8');
  if (!t.includes(from)) {
    console.log(`MISS in ${file}: ${from.slice(0, 60)}`);
    continue;
  }
  t = t.replace(from, to);
  fs.writeFileSync(file, t, 'utf8');
  fixed++;
  console.log(`fixed ${file}: ${from.slice(0, 50)}...`);
}
console.log(`${fixed}/${FIXES.length} fixes applied`);
