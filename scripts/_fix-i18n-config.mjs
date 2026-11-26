// One-off: fix b2bSolutionsMatrix.metaDesc count (24 -> 12) in all locales and
// drop orphan solutions.yachtTender.metaDesc UI keys (no consumers).
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'src/data/site/i18n-config.json';
let raw = readFileSync(FILE, 'utf8');
const beforeYacht = raw;

// 1) Drop orphan yachtTender lines (then repair any dangling comma).
const lines = raw.split('\n');
const kept = lines.filter((l) => !l.includes('"solutions.yachtTender.metaDesc"'));
raw = kept.join('\n');
const yachtRemoved = lines.length - kept.length;
raw = raw.replace(/,(\s*[}\]])/g, '$1');

// 2) 24 -> 12 inside b2bSolutionsMatrix.metaDesc values (word-boundary safe).
let metaFixed = 0;
const out = raw.split('\n').map((line) => {
  if (line.includes('"b2bSolutionsMatrix.metaDesc"') && /\b24\b/.test(line)) {
    metaFixed++;
    return line.replace(/\b24\b/g, '12');
  }
  return line;
});
raw = out.join('\n');

writeFileSync(FILE, raw, 'utf8');
console.log('yachtTender lines removed:', yachtRemoved);
console.log('metaDesc lines fixed 24->12:', metaFixed);

// 3) Validate.
JSON.parse(readFileSync(FILE, 'utf8'));
console.log('JSON valid');
if (raw.includes('yachtTender') || /b2bSolutionsMatrix\.metaDesc[^\n]*\b24\b/.test(raw)) {
  throw new Error('residual stale strings remain');
}
console.log('no residual yachtTender/24 metaDesc strings');
