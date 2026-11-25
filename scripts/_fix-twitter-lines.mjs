// One-off: repair corrupted twitter handle/site lines in src/config*.yaml
// (rebrand script String.replace $1 special-pattern bug left bare `$1''` lines).
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.join(process.cwd(), 'src');
const BAD = "$1''";
const files = fs.readdirSync(SRC).filter((f) => /^config\.(yaml|[a-z-]+\.yaml)$/.test(f));
let fixed = 0;
for (const f of files) {
  const p = path.join(SRC, f);
  let t = fs.readFileSync(p, 'utf-8');
  if (!t.includes(BAD)) continue;
  const lines = t.split('\n');
  let n = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === BAD) {
      n++;
      lines[i] = lines[i].replace(BAD, n === 1 ? "handle: ''" : "site: ''");
    }
  }
  fs.writeFileSync(p, lines.join('\n'), 'utf-8');
  fixed++;
  console.log('fixed', f, `(${n} lines)`);
}
console.log('total files fixed:', fixed);
