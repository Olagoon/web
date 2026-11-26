import fs from 'node:fs';

// 1. Concat the four part files into the new index.ts
const parts = ['_biz-part1.txt', '_biz-part2.txt', '_biz-part3.txt', '_biz-part4.txt'];
let out = '';
for (const p of parts) {
  let c = fs.readFileSync('scripts/' + p, 'utf8');
  out += c;
  if (!c.endsWith('\n')) out += '\n';
}
fs.writeFileSync('src/data/biz-solutions/index.ts', out, 'utf8');
console.log('index.ts written:', out.length, 'chars,', out.split('\n').length, 'lines');

// 2. Stub all 32 translation files, preserving each file's original
//    structural pattern (import-type-from-fr vs local type export).
const dir = 'src/data/biz-solutions/translations';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
if (files.length !== 31) throw new Error('expected 31 translation files, found ' + files.length);

for (const f of files) {
  const p = dir + '/' + f;
  const t = fs.readFileSync(p, 'utf8');
  const lang = f.replace('.ts', '');
  let stub;
  if (t.startsWith("import type { SolutionOverride } from './fr';")) {
    stub =
      "import type { SolutionOverride } from './fr';\n\n" +
      `const ${lang}: Record<string, SolutionOverride> = {};\n\n` +
      `export default ${lang};\n`;
  } else if (t.startsWith('export type SolutionOverride = {')) {
    const lines = t.split('\n');
    let typeEnd = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === '};') {
        typeEnd = i;
        break;
      }
    }
    if (typeEnd < 0) throw new Error('type close not found in ' + f);
    const typeBlock = lines.slice(0, typeEnd + 1).join('\n');
    stub =
      typeBlock +
      '\n\n' +
      `const ${lang}: Record<string, SolutionOverride> = {};\n\n` +
      `export default ${lang};\n`;
  } else {
    throw new Error('unexpected file head in ' + f);
  }
  fs.writeFileSync(p, stub, 'utf8');
  console.log('stubbed', f, t.length, '->', stub.length);
}
console.log('DONE');
