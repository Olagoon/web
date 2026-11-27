import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Visible-text scan of dist: HTML (tags stripped) + published text files (llms*.txt, robots, search index, rss).
const T = /(?<![A-Za-z@/.\-_])olagoon(?![A-Za-z0-9_-])(?!\.com\b)/g;
const TEXT_EXT = /\.(txt|xml|json)$/;
const SKIP = [/\/search-index\.json$/, /\/sitemap-index\.xml$/, /\/sitemap-[0-9]+\.xml$/, /\.well-known\//];
let htmlFiles = 0,
  textFiles = 0,
  htmlHits = 0,
  textHits = 0;
const samples = [];
function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n).replace(/\\/g, '/');
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (n.endsWith('.html')) {
      htmlFiles++;
      const c = readFileSync(p, 'utf8');
      const visible = c
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ');
      const m = visible.match(T) || [];
      if (m.length) {
        htmlHits += m.length;
        const s = visible.match(/.{0,50}(?<![A-Za-z@/.\\-_])olagoon.{0,30}/);
        samples.push(`HTML ${p} (${m.length}x): ${s ? s[0].replace(/\s+/g, ' ').trim() : ''}`);
      }
    } else if (TEXT_EXT.test(n) && !SKIP.some((re) => re.test(p))) {
      textFiles++;
      const c = readFileSync(p, 'utf8');
      // for JSON: scan string values only is complex; scan raw but this is a lowercase-visible audit — raw ok for txt/xml, approximate for json
      const m = c.match(T) || [];
      if (m.length) {
        textHits += m.length;
        const s = c.match(/.{0,50}(?<![A-Za-z@/.\\-_])olagoon.{0,30}/);
        samples.push(`TEXT ${p} (${m.length}x): ${s ? s[0].replace(/\s+/g, ' ').trim() : ''}`);
      }
    }
  }
}
walk('dist');
console.log(`scanned: ${htmlFiles} html + ${textFiles} text files`);
console.log(`html visible hits: ${htmlHits}, text hits: ${textHits}`);
samples.slice(0, 40).forEach((s) => console.log('  ' + s));
if (samples.length > 40) console.log(`  ... and ${samples.length - 40} more files`);
