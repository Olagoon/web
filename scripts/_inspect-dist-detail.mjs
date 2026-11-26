import fs from 'node:fs';

const d = fs.readFileSync('dist/en/solutions/wellness-spa-pool-program/index.html', 'utf8');
const re = /(?<![a-zA-Z])sup(?![a-zA-Z])/gi;
let m;
while ((m = re.exec(d)) !== null) {
  console.log('SUP hit @' + m.index + ': ...' + d.slice(Math.max(0, m.index - 90), m.index + 90).replace(/\n/g, ' ') + '...\n');
}

const md = fs.readFileSync('dist/en/b2b-solutions-matrix/index.html', 'utf8');
const titleMatch = md.match(/<title>([^<]*)<\/title>/);
console.log('matrix <title>:', titleMatch && titleMatch[1]);
console.log('matrix contains "24":', md.includes('24'));
const desc = md.match(/name="description" content="([^"]*)"/);
console.log('matrix meta desc:', desc && desc[1]);
