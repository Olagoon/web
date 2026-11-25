// Generate OLagoon brand icons, logo, hero and OG images from source materials.
// Usage: node scripts/generate-brand-icons.mjs
// Inputs : E:/DevEcoCode/Olagoon-cailiao/Olagoon_logo.png (master, 1436x1424, alpha)
//          E:/DevEcoCode/Olagoon-cailiao/Olagoon p_pool.jpeg (product photo)
//          E:/DevEcoCode/Olagoon-cailiao/young boy and girl in pool.jpeg (lifestyle photo)
// Outputs: public/olagoon-logo.png, favicons (src/assets/favicons + public mirrors),
//          hero images, default OG image.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC = 'E:/DevEcoCode/Olagoon-cailiao';
const LOGO = path.join(SRC, 'Olagoon_logo.png');
const POOL_PHOTO = path.join(SRC, 'Olagoon p_pool.jpeg');
const KIDS_PHOTO = path.join(SRC, 'young boy and girl in pool.jpeg');

const FAV_DIR = path.join(ROOT, 'src', 'assets', 'favicons');
const PUB = path.join(ROOT, 'public');
const IMG_DIR = path.join(ROOT, 'src', 'assets', 'images');
const HERO_PUB = path.join(PUB, 'images', 'olagoon', 'hero');

fs.mkdirSync(HERO_PUB, { recursive: true });

async function trimToSquareBuffer(size) {
  // Trim transparent margins, then contain on a transparent square canvas.
  const trimmed = await sharp(LOGO).trim({ threshold: 12 }).toBuffer();
  return sharp(trimmed)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function iconOnWhite(size, bgHex) {
  const trimmed = await sharp(LOGO).trim({ threshold: 12 }).toBuffer();
  const [r, g, b] = bgHex;
  return sharp({
    create: { width: size, height: size, channels: 4, background: { r, g, b, alpha: 1 } },
  })
    .composite([
      {
        input: await sharp(trimmed)
          .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer(),
      },
    ])
    .png()
    .toBuffer();
}

function pngToIco(pngBuf) {
  // Minimal ICO wrapping a single embedded PNG (supported by all modern browsers).
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, pngBuf]);
}

async function main() {
  console.log('[1/6] favicon PNGs (transparent)...');
  const png16 = await trimToSquareBuffer(16);
  const png32 = await trimToSquareBuffer(32);
  const png192 = await trimToSquareBuffer(192);
  const png512 = await trimToSquareBuffer(512);
  fs.writeFileSync(path.join(FAV_DIR, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(FAV_DIR, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(FAV_DIR, 'android-chrome-192x192.png'), png192);
  fs.writeFileSync(path.join(FAV_DIR, 'android-chrome-512x512.png'), png512);

  console.log('[2/6] apple-touch-icon (180, warm-sand bg)...');
  const apple = await iconOnWhite(180, [247, 245, 240]);
  fs.writeFileSync(path.join(FAV_DIR, 'apple-touch-icon.png'), apple);

  console.log('[3/6] favicon.ico + favicon.svg...');
  fs.writeFileSync(path.join(FAV_DIR, 'favicon.ico'), pngToIco(png32));
  const svg128 = await trimToSquareBuffer(128);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><image width="128" height="128" href="data:image/png;base64,${svg128.toString('base64')}"/></svg>`;
  fs.writeFileSync(path.join(FAV_DIR, 'favicon.svg'), svg);

  console.log('[4/6] logo -> public/olagoon-logo.png (512)...');
  fs.writeFileSync(path.join(PUB, 'olagoon-logo.png'), png512);

  console.log('[5/6] public mirrors for manifest + /favicon.ico convention...');
  fs.writeFileSync(path.join(PUB, 'favicon.ico'), pngToIco(png32));
  fs.writeFileSync(path.join(PUB, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(PUB, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(PUB, 'android-chrome-192x192.png'), png192);
  fs.writeFileSync(path.join(PUB, 'android-chrome-512x512.png'), png512);
  fs.writeFileSync(path.join(PUB, 'apple-touch-icon.png'), apple);
  fs.writeFileSync(path.join(PUB, 'favicon.svg'), svg);

  console.log('[6/6] hero + OG images...');
  await sharp(POOL_PHOTO).resize({ width: 1920 }).webp({ quality: 82 }).toFile(path.join(IMG_DIR, 'hero-image.webp'));
  await sharp(POOL_PHOTO)
    .resize({ width: 1920 })
    .webp({ quality: 82 })
    .toFile(path.join(HERO_PUB, 'pool-lagoon-hero.webp'));
  await sharp(KIDS_PHOTO)
    .resize({ width: 1920 })
    .webp({ quality: 82 })
    .toFile(path.join(HERO_PUB, 'kids-pool-fun.webp'));
  await sharp(POOL_PHOTO)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .webp({ quality: 85 })
    .toFile(path.join(IMG_DIR, 'default.webp'));

  console.log('done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
