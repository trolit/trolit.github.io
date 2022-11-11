import { primaryColor } from '@/assets/data/common';

export const getColorByShade = (shade: string) => {
  return `${primaryColor}.${shade}`;
};
