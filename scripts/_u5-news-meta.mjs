import fs from 'node:fs';

const dir = 'src/content/news';
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.mdx')) continue;
  const t = fs.readFileSync(`${dir}/${f}`, 'utf8');
  const title = (t.match(/title:\s*['"](.+?)['"]\n/) || t.match(/title:\s*(.+)\n/) || [])[1];
  const ex = (t.match(/excerpt:\s*['"](.+?)['"]\n/) || [])[1];
  const cat = (t.match(/category:\s*['"](.+?)['"]\n/) || t.match(/category:\s*(.+)\n/) || [])[1];
  const d = (t.match(/publishDate:\s*['"](.+?)['"]\n/) || t.match(/publishDate:\s*(.+)\n/) || [])[1];
  console.log(`${f.replace('.mdx', '')} :: ${title} :: ${(ex || '').slice(0, 130)} :: ${cat} :: ${d}`);
}
