import type { VercelRequest, VercelResponse } from '@vercel/node';
import { loadIcons } from '../src/utils/iconLoader';
import { svgGenerator } from '../src/utils/svgGenerator';
import { mapShortNamesToFullNames } from '../src/constants/svgShortName';

// Cargar íconos
const icons = loadIcons();

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { i, t, perline } = req.query;

  if (!i) {
    return res.status(400).json({
      error: "You didn't specify any icons!",
    });
  }

  const theme = t === 'light' || t === 'dark' ? t : 'dark';
  const perLine = parseInt(perline as string) || 15;

  let iconShortNames: string[] = [];

  if (i === 'all') {
    iconShortNames = Object.keys(icons);
  } else {
    iconShortNames = (i as string).split(',');
  }

  // Pasar icons como argumento a la función mapShortNamesToFullNames
  const iconNames = mapShortNamesToFullNames(iconShortNames, theme, icons).filter(name => name in icons);

  if (iconNames.length === 0) {
    return res.status(400).json({
      error: "You didn't format the icons param correctly!",
    });
  }

  const svg = svgGenerator(iconNames, icons, perLine);

  res.setHeader('Content-Type', 'image/svg+xml');
  return res.send(svg);
}
