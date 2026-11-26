#!/usr/bin/env node
/**
 * One-shot rebrand: afarer/Aquafarer -> OLagoon/olagoon
 *
 * Usage:
 *   node scripts/rebrand-olagoon.mjs         # renames + token replacement + social cleanup
 *   node scripts/rebrand-olagoon.mjs remap   # href remap sweep for deleted SUP routes
 *
 * Idempotent: safe to re-run. All IO is strict UTF-8 (Windows GBK safe).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SELF = path.basename(fileURLToPath(import.meta.url));

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  '.wrangler',
  '.astro',
  'dist',
  '.yarn',
  'public/data',
  'src/i18n/generated',
  'optimized-assets',
  'test-results',
  'playwright-report',
  'coverage',
  '.cache',
]);

const BINARY_EXT = new Set([
  'png',
  'jpg',
  'jpeg',
  'webp',
  'ico',
  'gif',
  'pdf',
  'woff',
  'woff2',
  'ttf',
  'otf',
  'eot',
  'zip',
  'gz',
  'tgz',
  'mp4',
  'webm',
  'mov',
  'exe',
  'dll',
  'jar',
  'wasm',
  'avif',
  '7z',
  'rar',
  'db',
  'sqlite',
]);

const MAX_SIZE = 32 * 1024 * 1024;

function isSkippedDir(rel) {
  if (!rel) return false;
  for (const d of SKIP_DIRS) {
    if (rel === d || rel.startsWith(d + '/')) return true;
  }
  return false;
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === '.git') continue;
    const full = path.join(dir, ent.name);
    const rel = path.relative(ROOT, full).replace(/\\/g, '/');
    if (ent.isDirectory()) {
      if (isSkippedDir(rel)) continue;
      walk(full, out);
    } else {
      const ext = path.extname(ent.name).slice(1).toLowerCase();
      if (BINARY_EXT.has(ext)) continue;
      if (ent.name === SELF) continue;
      out.push(full);
    }
  }
  return out;
}

function replaceName(s) {
  return s
    .replace(/Aquafarer/g, 'Olagoon')
    .replace(/AQUAFARER/g, 'OLAGOON')
    .replace(/aquafarer/g, 'olagoon')
    .replace(/Afarer/g, 'Olagoon')
    .replace(/AFARER/g, 'OLAGOON')
    .replace(/afarer/g, 'olagoon');
}

/* ---------------- rename pass ---------------- */

function collectDirs(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!ent.isDirectory() || ent.name === '.git') continue;
    const full = path.join(dir, ent.name);
    const rel = path.relative(ROOT, full).replace(/\\/g, '/');
    if (isSkippedDir(rel)) continue;
    out.push(full);
    collectDirs(full, out);
  }
  return out;
}

function renamePass() {
  let filesRenamed = 0;
  let dirsRenamed = 0;
  const allDirs = collectDirs(ROOT);
  // rename files (deepest dirs first so dir renames later do not invalidate paths)
  allDirs.sort((a, b) => b.length - a.length);
  for (const d of allDirs) {
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const ent of entries) {
      if (ent.isFile() && /afarer/i.test(ent.name)) {
        const from = path.join(d, ent.name);
        const to = path.join(d, replaceName(ent.name));
        if (from !== to && !fs.existsSync(to)) {
          fs.renameSync(from, to);
          filesRenamed++;
        }
      }
    }
  }
  // rename directories (deepest first)
  allDirs.sort((a, b) => b.length - a.length);
  for (const d of allDirs) {
    const base = path.basename(d);
    if (/afarer/i.test(base)) {
      const to = path.join(path.dirname(d), replaceName(base));
      if (!fs.existsSync(to)) {
        fs.renameSync(d, to);
        dirsRenamed++;
      }
    }
  }
  return { filesRenamed, dirsRenamed };
}

/* ---------------- content replacement ---------------- */

// Ordered: specials MUST run before generic (aquafarer contains afarer as substring)
const SPECIALS = [
  ['Aquafarer', 'Olagoon'],
  ['AQUAFARER', 'OLAGOON'],
  ['aquafarer', 'olagoon'],
  ['https://www.facebook.com/profile.php?id=61572404318679', 'https://www.facebook.com/TheOlagoon'],
  [/facebook\.com\/afarer/gi, 'facebook.com/TheOlagoon'],
  [/youtube\.com\/@afarer/gi, 'youtube.com/@TheOlagoon'],
  [/web@afarer\.net/gi, 'web@olagoon.com'],
];

const GENERIC = [
  ['Afarer', 'OLagoon'],
  ['AFARER', 'OLAGOON'],
  ['afarer', 'olagoon'],
];

const TWITTER_BLANK = [/^(\s*(?:handle|site):\s*)'@afarer'\s*$/gim, "$1''"];

function applyReplacements(content, pairs) {
  let n = 0;
  for (const [from, to] of pairs) {
    if (from instanceof RegExp) {
      content = content.replace(from, () => {
        n++;
        return to;
      });
    } else {
      let idx = content.indexOf(from);
      while (idx !== -1) {
        n++;
        content = content.slice(0, idx) + to + content.slice(idx + from.length);
        idx = content.indexOf(from, idx + to.length);
      }
    }
  }
  return { content, n };
}

/* ---------------- social entry cleanup (YAML line scan) ---------------- */

function removeYamlListItem(content, itemStartRegex) {
  const lines = content.split('\n');
  const out = [];
  let removed = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(itemStartRegex);
    if (m) {
      const indent = m[1].length;
      let j = i + 1;
      while (j < lines.length) {
        const line = lines[j];
        if (line.trim() === '') break;
        const li = line.match(/^\s*/)[0].length;
        if (li > indent) {
          j++;
        } else {
          break;
        }
      }
      removed += j - i;
      i = j - 1;
      continue;
    }
    out.push(lines[i]);
  }
  return { content: out.join('\n'), removed };
}

const CONFIG_PLATFORM_ITEM = /^(\s*)- platform:\s*(?:x|instagram)\s*$/i;
const NAV_TEXT_ITEM = /^(\s*)- text:\s*["']?(?:X|Instagram)["']?\s*$/i;

/* ---------------- entity.json sameAs cleanup ---------------- */

const DROP_SAMEAS =
  /(?:x\.com|twitter\.com|instagram\.com|alibaba\.com|made-in-china\.com|nauticexpo\.com|globalspec\.com)/i;

function deepCleanSameAs(obj) {
  let changed = 0;
  if (Array.isArray(obj)) {
    for (const v of obj) changed += deepCleanSameAs(v);
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'sameAs' && Array.isArray(v)) {
        const before = v.length;
        const filtered = v.filter((u) => !DROP_SAMEAS.test(String(u)));
        if (filtered.length !== before) {
          obj[k] = filtered;
          changed += before - filtered.length;
        }
      } else {
        changed += deepCleanSameAs(v);
      }
    }
  }
  return changed;
}

function cleanEntityJson(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const obj = JSON.parse(raw);
  const removed = deepCleanSameAs(obj);
  if (removed > 0) {
    fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
  }
  return removed;
}

/* ---------------- remap mode ---------------- */

const LANG = '(?:[a-z]{2}(?:-[a-zA-Z]+)?/)?';
const REMAP = [
  [
    new RegExp(
      `/${LANG}(?:all-around|touring|yoga|fishing|kids|whitewater|surf|giant|ultra-stable|adventure|travel|beginner|lightweight|performance|inflatable)-sup/`,
      'g'
    ),
    '/products/',
  ],
  [new RegExp(`/${LANG}sup-accessories/`, 'g'), '/products/'],
  [new RegExp(`/${LANG}sup-manufacturer/`, 'g'), '/oem-odm-manufacturer/'],
  [new RegExp(`/${LANG}(?:oem-sup-board|odm-sup-board|private-label-sup)/`, 'g'), '/oem-odm-manufacturer/'],
  [new RegExp(`/${LANG}what-is-sup/`, 'g'), '/technology/'],
  [new RegExp(`/${LANG}inflatable-vs-hardboard/`, 'g'), '/technology/'],
  [new RegExp(`/${LANG}oem-paddle/`, 'g'), '/oem-odm-manufacturer/'],
  [
    new RegExp(`/${LANG}(?:fabricant-sup-gonflable|fournisseur-nautique|bateau-gonflable-fabricant)/`, 'g'),
    '/oem-odm-manufacturer/',
  ],
  [new RegExp(`/${LANG}dock-platform/`, 'g'), '/products/'],
  [new RegExp(`/${LANG}use-cases/fishing/`, 'g'), '/products/'],
  [new RegExp(`/${LANG}solutions/paddle-clubs/`, 'g'), '/solutions/resorts-hotels/'],
  [new RegExp(`/${LANG}whitepaper/oem-sup-manufacturing-guide/`, 'g'), '/oem-odm-manufacturer/'],
  [new RegExp(`/${LANG}randdcenter/(?:hull-engineering|hydrodynamic-test-tank)/`, 'g'), '/technology/'],
  [
    new RegExp(
      `/${LANG}research/(?:sup-thickness-guide|sup-paddle-technology|board-hull-design|fin-systems-guide|eva-foam-technology)/`,
      'g'
    ),
    '/technology/',
  ],
  [
    new RegExp(
      `/${LANG}guides/(?:how-to-choose-your-sup|choosing-paddle|paddling-techniques|kayak-techniques|multi-day-trip|inflatable-vs-hard|beginner-guide|sup-fishing|sup-yoga|sup-fitness|sup-maintenance|sup-with-kids|what-is-sup|understanding-specs|weather-conditions)/`,
      'g'
    ),
    '/technology/',
  ],
  [new RegExp(`/${LANG}research/sup-valve-types/`, 'g'), '/technology/'],
  [new RegExp(`/${LANG}research/sup-manufacturing-process/`, 'g'), '/technology/'],
  [new RegExp(`/${LANG}learn/sup/`, 'g'), '/learn/water-safety/'],
];

/* ---------------- main ---------------- */

const mode = process.argv[2] || 'run';

if (mode === 'remap') {
  const files = walk(ROOT);
  let changedFiles = 0;
  let total = 0;
  for (const file of files) {
    let content;
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    const { content: next, n } = applyReplacements(content, REMAP);
    if (n > 0) {
      fs.writeFileSync(file, next, 'utf8');
      changedFiles++;
      total += n;
    }
  }
  console.log(`remap: ${changedFiles} files updated, ${total} hrefs remapped`);
  process.exit(0);
}

// Phase A: renames
const { filesRenamed, dirsRenamed } = renamePass();
console.log(`renamed: ${filesRenamed} files, ${dirsRenamed} directories`);

// Phase B: content replacement over all text files
const files = walk(ROOT);
let changedFiles = 0;
const counts = { special: 0, generic: 0, twitter: 0 };
for (const file of files) {
  let stat;
  try {
    stat = fs.statSync(file);
  } catch {
    continue;
  }
  if (stat.size > MAX_SIZE) continue;
  let content;
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  let total = 0;

  const s1 = applyReplacements(content, SPECIALS);
  content = s1.content;
  counts.special += s1.n;
  total += s1.n;

  // twitter handle blanking (before generic so '@afarer' still matches)
  const s2 = applyReplacements(content, [TWITTER_BLANK]);
  content = s2.content;
  counts.twitter += s2.n;
  total += s2.n;

  const s3 = applyReplacements(content, GENERIC);
  content = s3.content;
  counts.generic += s3.n;
  total += s3.n;

  if (total > 0) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
  }

  // Phase C: social entry cleanup on config/navigation YAML
  if (/^src\/config(\.[a-z]{2})?\.yaml$/.test(rel)) {
    const r = removeYamlListItem(content, CONFIG_PLATFORM_ITEM);
    if (r.removed > 0) {
      fs.writeFileSync(file, r.content, 'utf8');
      console.log(`  social cleanup: ${rel} (-${r.removed} lines)`);
    }
  }
  if (/^src\/data\/site\/navigation(\.[a-z]{2})?\.yaml$/.test(rel)) {
    const r = removeYamlListItem(content, NAV_TEXT_ITEM);
    if (r.removed > 0) {
      fs.writeFileSync(file, r.content, 'utf8');
      console.log(`  social cleanup: ${rel} (-${r.removed} lines)`);
    }
  }
}

// Phase D: entity.json sameAs cleanup
const entityFiles = [path.join(ROOT, 'src/data/geo/entity.json'), path.join(ROOT, 'public/.well-known/entity.json')];
for (const f of entityFiles) {
  if (fs.existsSync(f)) {
    const removed = cleanEntityJson(f);
    console.log(`  entity sameAs cleanup: ${path.relative(ROOT, f)} (-${removed} entries)`);
  }
}

console.log(`content: ${changedFiles} files changed`);
console.log(`  special replacements: ${counts.special}`);
console.log(`  twitter handle blanks: ${counts.twitter}`);
console.log(`  generic replacements: ${counts.generic}`);
console.log('done.');
