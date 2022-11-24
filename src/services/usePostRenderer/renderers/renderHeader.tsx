import { ReactNode } from 'react';
import { Title } from '@mantine/core';

import { Header } from '../components';

export function renderHeader(index: number, header: Header): ReactNode {
  return (
    <Title key={index} order={header.data.order}>
      {header.data.value}
    </Title>
  );
}
