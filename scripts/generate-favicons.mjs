/**
 * Regenerates the favicon set from the brand logo.
 *
 *   node scripts/generate-favicons.mjs
 *
 * Source is public/images/apple-touch-icon.png — the highest-resolution copy of the
 * mark we have. The wordmark under the ring is cropped away: at 16–32px it is
 * unreadable and only muddies the icon. Everything is flattened onto white, because
 * iOS composites transparent touch icons onto black.
 */
import { Buffer } from 'node:buffer';
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const SOURCE = 'public/images/apple-touch-icon.png';
const OUT_DIR = 'public';
const BACKGROUND = { r: 255, g: 255, b: 255, alpha: 1 };

/** Rows 0–144 of the 180px source hold the ring; 150–172 hold the "APOWUS" wordmark. */
const MARK_REGION = { left: 0, top: 4, width: 180, height: 142 };

/** Share of the canvas the mark itself takes up; the rest is breathing room. */
const MARK_SCALE = 0.86;

/** Tight bounding box of everything non-transparent, computed from raw pixels. */
async function alphaBounds(buffer) {
  const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] > 16) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) throw new Error('mark region is fully transparent');
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function buildMark() {
  const region = await sharp(SOURCE).extract(MARK_REGION).png().toBuffer();
  return sharp(region).extract(await alphaBounds(region)).png().toBuffer();
}

async function renderSquare(mark, size) {
  const inner = Math.round(size * MARK_SCALE);
  const scaled = await sharp(mark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();

  return sharp({ create: { width: size, height: size, channels: 4, background: BACKGROUND } })
    .composite([{ input: scaled, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Packs PNG payloads into an .ico container (PNG-in-ICO, understood by every current browser). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette size
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const mark = await buildMark();
await mkdir(OUT_DIR, { recursive: true });

const icoSizes = [16, 32, 48];
const icoImages = [];
for (const size of icoSizes) {
  icoImages.push({ size, data: await renderSquare(mark, size) });
}
await writeFile(`${OUT_DIR}/favicon.ico`, buildIco(icoImages));

for (const size of [16, 32, 96]) {
  await writeFile(`${OUT_DIR}/favicon-${size}.png`, await renderSquare(mark, size));
}
await writeFile(`${OUT_DIR}/apple-touch-icon.png`, await renderSquare(mark, 180));

console.log('favicons written to', OUT_DIR);
