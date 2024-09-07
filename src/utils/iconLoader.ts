import fs from 'fs';

export function loadIcons(path: string): Record<string, string> {
  const iconsDir = fs.readdirSync(path);
  const icons: Record<string, string> = {};

  for (const icon of iconsDir) {
    const name = icon.replace('.svg', '').toLowerCase();
    icons[name] = fs.readFileSync(`${path}/${icon}`, 'utf-8');
  }

  return icons;
}