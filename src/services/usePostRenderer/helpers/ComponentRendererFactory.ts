import { ReactNode } from 'react';
import { IComponentRenderer } from '../interfaces';

export class ComponentRendererFactory {
  create<T>(
    key: string,
    onRender: (index: number, value: T) => ReactNode,
  ): IComponentRenderer {
    return {
      key,

      render: (index: number, value: unknown) => onRender(index, value as T),
    };
  }
}
