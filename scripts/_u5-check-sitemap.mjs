import fs from 'node:fs';

const paths = [
  'dist/index.html',
  'dist/about/index.html',
  'dist/about/olagoon/index.html',
  'dist/brand/index.html',
  'dist/products/index.html',
  'dist/faq/index.html',
  'dist/v2/index.html',
  'dist/academy/index.html',
  'dist/factory/index.html',
  'dist/technology/index.html',
  'dist/safety/index.html',
  'dist/news/index.html',
  'dist/guides/index.html',
  'dist/compare/index.html',
  'dist/custom/index.html',
  'dist/media/index.html',
  'dist/contact/index.html',
  'dist/size-guide/index.html',
  'dist/randdcenter/index.html',
];
for (const p of paths) {
  console.log(`${fs.existsSync(p) ? 'OK  ' : 'MISS'} ${p}`);
}
