// Fix unescaped apostrophe in single-quoted excerpt of supply-chain news MDX (19 copies).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const FROM =
  "excerpt: 'From German-made PVC formulations to vertically integrated production in Qingdao, OLagoon's 2025 supply chain upgrades cut lead times and secure capacity for 15,000 pools a year.'";
const TO =
  "excerpt: 'From German-made PVC formulations to vertically integrated production in Qingdao, OLagoon''s 2025 supply chain upgrades cut lead times and secure capacity for 15,000 pools a year.'";

const targets = ['src/content/news'];
let fixed = 0;
function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'olagoon-supply-chain-2025.mdx') {
      const raw = readFileSync(p, 'utf8');
      if (raw.includes(FROM)) {
        writeFileSync(p, raw.split(FROM).join(TO), 'utf8');
        fixed++;
      } else {
        console.log('PATTERN MISS:', p);
      }
    }
  }
}
walk(targets[0]);
console.log('fixed:', fixed);
