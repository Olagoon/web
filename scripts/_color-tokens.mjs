// One-off: replace legacy OLagoon blue tokens with OLagoon teal/slate palette.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'src');
const MAP = [
  ['#0088B3', '#006a78'],
  ['#0284c7', '#008294'],
  ['#0369a1', '#006a78'],
  ['#0c4a6e', '#0e3a42'],
  ['#030621', '#182430'],
  ['rgb(10 61 98)', 'rgb(24 36 48)'],
  ['rgb(7 30 45)', 'rgb(13 20 27)'],
];
const EXTS = new Set(['.astro', '.css', '.ts', '.tsx', '.js', '.cjs', '.mjs']);

let files = 0;
let changed = 0;
let total = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'generated' && dir.endsWith('i18n')) continue;
      walk(p);
    } else if (EXTS.has(path.extname(e.name))) {
      files++;
      const raw = fs.readFileSync(p, 'utf-8');
      let out = raw;
      let n = 0;
      for (const [from, to] of MAP) {
        const split = out.split(from);
        n += split.length - 1;
        out = split.join(to);
      }
      if (n > 0) {
        fs.writeFileSync(p, out, 'utf-8');
        changed++;
        total += n;
        console.log(`${path.relative(process.cwd(), p)}: ${n}`);
      }
    }
  }
}

walk(ROOT);
console.log(`\nscanned ${files} files, changed ${changed}, ${total} replacements`);
