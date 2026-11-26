// One-off: restore twitter handle/site lines deleted by a bad inline regex.
import fs from 'node:fs';

const files = fs.readdirSync('src').filter((f) => /^config\.(yaml|[a-z]{2}\.yaml)$/.test(f));
let fixed = 0;
for (const f of files) {
  const p = 'src/' + f;
  let t = fs.readFileSync(p, 'utf-8');
  const re = /\n {2}twitter:\n(?:\n)* {4}cardType: summary_large_image/;
  if (re.test(t)) {
    t = t.replace(re, "\n  twitter:\n    handle: ''\n    site: ''\n    cardType: summary_large_image");
    fs.writeFileSync(p, t, 'utf-8');
    fixed++;
  }
}
console.log('restored', fixed, 'files');
