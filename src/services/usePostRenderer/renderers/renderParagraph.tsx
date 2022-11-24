import { ReactNode } from 'react';
import { Text } from '@mantine/core';

import { Paragraph } from '../components';

export function renderParagraph(
  index: number,
  paragraph: Paragraph,
): ReactNode {
  const {
    data: { value },
  } = paragraph;

  return <Text key={index}>{value}</Text>;
}
