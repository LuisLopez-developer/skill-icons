export function svgGenerator(iconNames: string[], icons: Record<string, string>, perLine: number): string {
  const iconSvgList: string[] = iconNames.map(i => icons[i]);

  const length = Math.min(perLine * 300, iconNames.length * 300) - 44;
  const height = Math.ceil(iconSvgList.length / perLine) * 300 - 44;
  const scaledHeight = height * 48 / (300 - 44);
  const scaledWidth = length * 48 / (300 - 44);

  return `
  <svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    ${iconSvgList
      .map(
        (i, index) => `
        <g transform="translate(${(index % perLine) * 300}, ${
          Math.floor(index / perLine) * 300
        })">
          ${i}
        </g>
        `
      )
      .join(' ')}
  </svg>
  `;
}
