import { ReactNode } from 'react';

import { IPost } from './interfaces/IPost';
import { allowedComponents } from './config';

interface IRenderer<T> {
  render: (post: T) => ReactNode;
}

export function usePostRenderer<T extends IPost<T>>(): IRenderer<T> {
  return {
    render: (post: T) => render<T>(post),
  };
}

function render<T extends IPost<T>>(post: T) {
  const { components } = post;

  return components.map((component, index) => {
    const result = allowedComponents.find((allowedComponent) =>
      allowedComponent.isMatching(component),
    );

    if (!result) {
      console.error('----------------------------------------');
      console.error('Tried to render unregistered component.');
      console.error('----------------------------------------');

      throw new Error();
    }

    return result.render(index, component);
  });
}
