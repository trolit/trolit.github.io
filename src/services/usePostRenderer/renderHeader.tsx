import { Title } from '@mantine/core';

import { IHeader } from '@/interfaces/dashboard/posts/IHeader';

export function renderHeader(index: number, header: IHeader) {
  return (
    <Title key={index} order={header.order}>
      {header.value}
    </Title>
  );
}
