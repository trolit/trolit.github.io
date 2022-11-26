import { PRIMARY_COLOR } from '@/config';

export const getColorByShade = (shade: number) => {
  if (shade < 0 || shade > 9) {
    throw Error(
      'Each color has 10 shades. Access color shade by color name and index (0-9). All colors should always have 10 shades.',
    );
  }

  return `${PRIMARY_COLOR}.${shade}`;
};
