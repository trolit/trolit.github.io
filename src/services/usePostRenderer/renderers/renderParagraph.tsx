import { ReactNode } from 'react';
import { Text } from '@mantine/core';

import { Paragraph } from '../components';

export function renderParagraph(
  index: number,
  paragraph: Paragraph,
): ReactNode {
  return <Text key={index}>{paragraph.data.value}</Text>;
}
