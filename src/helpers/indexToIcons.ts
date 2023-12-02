import { TablerIcon } from '@tabler/icons-react';

export const indexToIcons = (data: TablerIcon[], index: number, length?: number): TablerIcon[] => {
  const icons: TablerIcon[] = [];

  const dataLength = data.length;

  let number = length ? length - index : index + 1;

  if (number <= dataLength) {
    icons.push(data[length ? number - 1 : index]);

    return icons;
  }

  while (number > 0) {
    if (number >= dataLength) {
      icons.push(data[dataLength - 1]);

      number -= dataLength;

      continue;
    }

    for (let value = dataLength - 1; value >= 1; value--) {
      if (number === value) {
        icons.push(data[number - 1]);

        number -= value;

        break;
      }
    }
  }

  return icons;
};
