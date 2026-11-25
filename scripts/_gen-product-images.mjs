import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'images', 'olagoon', 'products');

const TEAL = '#008294';
const SLATE = '#182430';
const SAND = '#F7F5F0';

const products = [
  { id: 'compact-plunge', name: 'The Compact Plunge', sub: '2.0 m × 1.5 m · Plunge Series', accent: TEAL },
  { id: 'family-oasis', name: 'The Family Oasis', sub: '3.0 m × 2.0 m · Family Series', accent: TEAL },
  { id: 'grand-lagoon', name: 'The Grand Lagoon', sub: '5.0 m × 2.5 m · Grand Series', accent: TEAL },
  { id: 'sand-filter-pump', name: 'Sand Filter Pump System', sub: '2,400 L/h · 6-way valve', accent: SLATE },
  { id: 'thermal-cover', name: 'Thermal Pool Cover', sub: 'Custom-fit · 350-micron insulation', accent: SLATE },
  { id: 'ground-mat', name: 'Protective Ground Mat', sub: 'Heavy-duty woven protection', accent: SLATE },
  { id: 'entry-steps', name: 'Inflatable Entry Steps', sub: 'Drop-stitch steps + seating', accent: SLATE },
];

const W = 1200;
const H = 630;

for (const p of products) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${SLATE}"/>
      <stop offset="1" stop-color="${p.accent}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="${W - 140}" cy="130" r="220" fill="${SAND}" opacity="0.08"/>
  <circle cx="120" cy="${H - 60}" r="260" fill="${SAND}" opacity="0.06"/>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="${SAND}" opacity="0.9"/>
  <text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="${SAND}">${p.name}</text>
  <text x="80" y="370" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="${SAND}" opacity="0.8">${p.sub}</text>
  <text x="80" y="${H - 60}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="${SAND}" opacity="0.9">OLAGOON</text>
</svg>`;
  const file = path.join(outDir, `${p.id}.webp`);
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(file);
  console.log(`written ${file}`);
}
