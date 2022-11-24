import { ReactNode } from 'react';
import { Title } from '@mantine/core';

import { Header } from '../components';

export function renderHeader(index: number, header: Header): ReactNode {
  const {
    data: { order, value },
  } = header;

  return (
    <Title key={index} order={order}>
      {value}
    </Title>
  );
}
