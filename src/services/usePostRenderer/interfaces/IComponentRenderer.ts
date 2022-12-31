import { ReactNode } from 'react';

export interface IComponentRenderer {
  key: string;

  render: (index: number, value: unknown) => ReactNode;
}
