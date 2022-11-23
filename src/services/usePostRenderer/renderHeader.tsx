import { ReactNode } from 'react';
import { Title } from '@mantine/core';

import { IHeader } from '@/interfaces/dashboard/posts/IHeader';

export function renderHeader(index: number, header: unknown): ReactNode {
  const castedHeader = header as IHeader;

  return (
    <Title key={index} order={castedHeader.order}>
      {castedHeader.value}
    </Title>
  );
}
