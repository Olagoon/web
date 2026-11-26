// Pass 2: sweep remaining banned-word i18n keys.
// - Refined BANNED with ASCII-letter boundaries (no French "supérieurs" false positives)
// - offending + unused  -> delete from all locales (+ prune Header/Footer map lines)
// - offending + used + clean EN -> copy EN value to all locales
// - offending + used + dirty/missing EN -> print MANUAL list for authoring
// - rename buyerCenter.sups -> buyerCenter.pools (+ call site)
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CONFIG = 'src/data/site/i18n-config.json';
const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/i;

const cfg = JSON.parse(readFileSync(CONFIG, 'utf8'));
const locales = Object.keys(cfg);

// ---------- rename buyerCenter.sups -> buyerCenter.pools ----------
for (const lc of locales) {
  if ('buyerCenter.sups' in cfg[lc]) {
    delete cfg[lc]['buyerCenter.sups'];
    cfg[lc]['buyerCenter.pools'] = 'Pools';
  }
}
{
  const f = 'src/pages/buyer-center/index.astro';
  let src = readFileSync(f, 'utf8');
  src = src.replace(/'buyerCenter\.sups'/g, "'buyerCenter.pools'");
  writeFileSync(f, src, 'utf8');
  console.log('renamed buyerCenter.sups -> buyerCenter.pools (config + call site)');
}

// ---------- collect offending keys ----------
const offending = new Set();
for (const lc of locales) {
  for (const [k, v] of Object.entries(cfg[lc])) {
    if (BANNED.test(String(v)) || BANNED.test(k)) offending.add(k);
  }
}
console.log('offending keys:', offending.size);

// ---------- usage scan ----------
const exts = new Set(['.astro', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.yaml', '.yml', '.json']);
const skipDirs = new Set(['node_modules', 'dist', '.astro', 'generated']);
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) {
      if (skipDirs.has(name)) continue;
      walk(p);
    } else if (exts.has(name.slice(name.lastIndexOf('.')))) {
      files.push(p);
    }
  }
}
for (const r of ['src', 'workers', 'functions']) {
  try { walk(r); } catch {}
}
const fileContents = new Map(
  files
    .filter((f) => !f.replace(/\\/g, '/').includes('i18n-config'))
    .map((f) => [f, readFileSync(f, 'utf8')])
);
const isUsed = (k) => {
  for (const [, c] of fileContents) {
    if (c.includes(`'${k}'`) || c.includes(`"${k}"`)) return true;
  }
  return false;
};

const toDelete = [];
const copyEn = [];
const manual = [];
for (const k of offending) {
  const used = isUsed(k);
  const enVal = cfg.en[k];
  if (!used) toDelete.push(k);
  else if (typeof enVal === 'string' && !BANNED.test(enVal)) copyEn.push(k);
  else manual.push(k);
}

// ---------- apply ----------
for (const lc of locales) {
  for (const k of toDelete) delete cfg[lc][k];
  for (const k of copyEn) cfg[lc][k] = cfg.en[k];
}
writeFileSync(CONFIG, JSON.stringify(cfg, null, 2) + '\n', 'utf8');

// prune Header/Footer map lines for deleted keys
for (const f of ['src/components/widgets/Header.astro', 'src/components/widgets/Footer.astro']) {
  let src = readFileSync(f, 'utf8');
  for (const k of [...toDelete]) {
    const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`^[ \\t]*(?:"[^"]*"|'[^']*'):[ \\t]*['"]${esc}['"],?[ \\t]*\\r?\\n`, 'gm');
    src = src.replace(re, '');
  }
  writeFileSync(f, src, 'utf8');
}

console.log(`deleted: ${toDelete.length}, copyEn: ${copyEn.length}, manual: ${manual.length}`);
console.log('\n== DELETED ==');
console.log(toDelete.sort().join('\n'));
console.log('\n== COPY_EN ==');
console.log(copyEn.sort().join('\n'));
console.log('\n== MANUAL (used + dirty/missing EN — need authored pool values) ==');
for (const k of manual.sort()) {
  console.log(`${k} = ${String(cfg.en[k] ?? 'MISSING').replace(/\n/g, ' ').slice(0, 100)}`);
}

// ---------- final validation ----------
const remaining = [];
for (const lc of locales) {
  for (const [k, v] of Object.entries(cfg[lc])) {
    if (BANNED.test(String(v)) || BANNED.test(k)) remaining.push(`${lc}:${k}`);
  }
}
console.log(`\nremaining offenders after pass 2: ${remaining.length}`);
for (const r of remaining) console.log('  ' + r);
