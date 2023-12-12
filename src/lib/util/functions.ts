export function lightenColor(hex: string, percent: number) {
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  const rgbToHex = ({ r, g, b }: { r: number; g: number; b: number }) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };
  const rgb = hexToRgb(hex);

  const adjustedRgb = {
    r: Math.min(255, rgb.r + Math.round((255 * percent) / 100)),
    g: Math.min(255, rgb.g + Math.round((255 * percent) / 100)),
    b: Math.min(255, rgb.b + Math.round((255 * percent) / 100)),
  };

  return rgbToHex(adjustedRgb);
}
