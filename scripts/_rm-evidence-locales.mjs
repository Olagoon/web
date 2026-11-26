import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIRS = ['src/data/site/evidence-body', 'src/data/site/evidence-meta'];
const KEEP = new Set(['index.ts', 'types.ts']);

let removed = 0;
for (const dir of DIRS) {
  const full = path.join(ROOT, dir);
  for (const f of fs.readdirSync(full)) {
    if (f.endsWith('.ts') && !KEEP.has(f)) {
      fs.rmSync(path.join(full, f));
      removed++;
    }
  }
}
console.log(`Removed ${removed} locale override files.`);
