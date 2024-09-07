import path from 'path';
import fs from 'fs';

export function loadIcons(): Record<string, string> {
  const iconsDir = path.join(process.cwd(), 'public', 'icons');
  const icons: Record<string, string> = {};

  const files = fs.readdirSync(iconsDir);

  for (const file of files) {
    const name = file.replace('.svg', '').toLowerCase();
    icons[name] = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
  }

  return icons;
}