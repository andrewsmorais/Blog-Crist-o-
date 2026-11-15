// Otimiza as imagens da pasta public/: cria versão .webp leve (usada nas páginas)
// e reduz o original (usado só para compartilhamento no WhatsApp/Facebook).
// Rodar uma vez sempre que adicionar imagens novas:  npm run images
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public');
const MAX = 1000;
for (const f of fs.readdirSync(dir)) {
  if (!/\.(png|jpe?g)$/i.test(f)) continue;
  const file = path.join(dir, f);
  const webp = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const before = fs.statSync(file).size;
  const input = fs.readFileSync(file);
  const meta = await sharp(input).metadata();
  const resize = meta.width > MAX ? { width: MAX } : undefined;
  if (!fs.existsSync(webp)) await sharp(input).resize(resize).webp({ quality: 72 }).toFile(webp);
  if (before > 300 * 1024) {
    const img = sharp(input).resize(resize);
    const out = /\.png$/i.test(f) ? await img.png({ palette: true, quality: 80, compressionLevel: 9 }).toBuffer() : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    if (out.length < before) fs.writeFileSync(file, out);
  }
  console.log(f, Math.round(before / 1024) + 'KB →', Math.round(fs.statSync(file).size / 1024) + 'KB | webp', Math.round(fs.statSync(webp).size / 1024) + 'KB');
}
