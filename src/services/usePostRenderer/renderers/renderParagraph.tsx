import { ReactNode } from 'react';
import { Text } from '@mantine/core';

import { Paragraph } from '../components';

export function renderParagraph(
  index: number,
  paragraph: Paragraph,
): ReactNode {
  const {
    data: { value, overrideComponentProps },
  } = paragraph;

  return (
    <Text key={index} align='justify' {...overrideComponentProps}>
      {value}
    </Text>
  );
}
