import fs from 'node:fs';
import { execSync } from 'node:child_process';

const cur = JSON.parse(fs.readFileSync('src/i18n/generated/route-manifest.json', 'utf8'));
const oldRaw = execSync('git show HEAD:src/i18n/generated/route-manifest.json', {
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
});
const old = JSON.parse(oldRaw);

console.log('keys:', Object.keys(cur).slice(0, 5), '... total', Object.keys(cur).length);
console.log('old keys:', Object.keys(old).slice(0, 5), '... total', Object.keys(old).length);

function flat(o) {
  const out = [];
  for (const [k, v] of Object.entries(o)) {
    if (typeof v === 'string') out.push(k + ' -> ' + v);
    else if (Array.isArray(v)) out.push(k + ' -> ' + v.join(','));
    else if (v && typeof v === 'object') {
      for (const [k2, v2] of Object.entries(v)) {
        out.push(k + '|' + k2 + ' -> ' + (typeof v2 === 'object' ? JSON.stringify(v2) : v2));
      }
    }
  }
  return out;
}

const c = flat(cur);
const o = flat(old);
console.log('\nflat counts: old', o.length, 'cur', c.length);

const oldSet = new Set(o);
const curSet = new Set(c);
const removed = o.filter((x) => !curSet.has(x));
const added = c.filter((x) => !oldSet.has(x));
console.log('\nremoved:', removed.length, '\nadded:', added.length);
console.log('\nSAMPLE REMOVED:');
console.log(removed.slice(0, 15).join('\n'));
console.log('\nSAMPLE ADDED:');
console.log(added.slice(0, 15).join('\n'));

// group removed by path prefix
const groups = {};
for (const r of removed) {
  const p = r.split(' -> ')[0];
  const seg = p.split('|')[0].split('/').slice(0, 3).join('/');
  groups[seg] = (groups[seg] || 0) + 1;
}
console.log('\nREMOVED GROUPS:');
console.log(Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 20).map((g) => g.join(': ')).join('\n'));
