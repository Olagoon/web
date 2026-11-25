// One-off: overwrite every locale home.yaml with the EN home.yaml content (Step 7 pool rewrite).
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'data', 'pages');
const en = fs.readFileSync(path.join(pagesDir, 'home.yaml'), 'utf8');

let count = 0;
for (const entry of fs.readdirSync(pagesDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const target = path.join(pagesDir, entry.name, 'home.yaml');
  if (fs.existsSync(target)) {
    fs.writeFileSync(target, en);
    count++;
  } else {
    console.log('skip (no home.yaml):', entry.name);
  }
}
console.log('overwrote', count, 'locale home.yaml files with EN content');
