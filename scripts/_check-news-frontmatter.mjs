// Validate YAML frontmatter of all news MDX files (EN + locale dirs).
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const bad = [];
function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.mdx') || e.name.endsWith('.md')) {
      const raw = readFileSync(p, 'utf8');
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!m) {
        bad.push([p, 'NO FRONTMATTER']);
        continue;
      }
      try {
        yaml.load(m[1]);
      } catch (err) {
        bad.push([p, `${err.message.split('\n')[0]} @${err.mark ? err.mark.line + ':' + err.mark.column : '?'}`]);
      }
    }
  }
}
walk('src/content/news');
console.log('bad count:', bad.length);
for (const [p, e] of bad) console.log(p, '::', e);
