import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = {
  favicon: [16, 32],
  apple: [180],
  android: [192, 512]
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/icons/icon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Ensure the public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Generate favicon.ico (16x16 and 32x32)
  for (const size of sizes.favicon) {
    await sharp(inputSvg)
      .resize(size, size)
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
  }

  // Generate Apple Touch Icon
  await sharp(inputSvg)
    .resize(180, 180)
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate Android Chrome Icons
  for (const size of sizes.android) {
    await sharp(inputSvg)
      .resize(size, size)
      .toFile(path.join(publicDir, `android-chrome-${size}x${size}.png`));
  }

  // Copy SVG for Safari Pinned Tab
  fs.copyFileSync(inputSvg, path.join(publicDir, 'safari-pinned-tab.svg'));

  console.log('All favicon files have been generated successfully!');
}

generateFavicons().catch(console.error); 