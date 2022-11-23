import { ReactNode } from 'react';
import { Text } from '@mantine/core';

import { IParagraph } from '../interfaces/IParagraph';

export function renderParagraph(index: number, paragraph: unknown): ReactNode {
  const castedParagraph = paragraph as IParagraph;

  return <Text key={index}>{castedParagraph.value}</Text>;
}
