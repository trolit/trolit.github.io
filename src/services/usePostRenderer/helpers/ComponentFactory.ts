import { ReactNode } from 'react';

import { defineTypeChecker } from '@/services/usePostRenderer/helpers/defineTypeChecker';

export class ComponentFactory {
  create<T>(render: (index: number, component: unknown) => ReactNode) {
    return {
      isMatching: defineTypeChecker<T>,

      render,
    };
  }
}
