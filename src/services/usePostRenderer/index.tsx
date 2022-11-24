import { ReactNode } from 'react';

import { IPost } from './interfaces/IPost';
import { componentRenderers } from './config';

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
    const componentRenderer = componentRenderers.find(
      (componentRenderer) => componentRenderer.key === component.getKey(),
    );

    if (!componentRenderer) {
      console.error('----------------------------------------');
      console.error('Tried to render unregistered component.');
      console.error('----------------------------------------');

      throw new Error();
    }

    return componentRenderer.render(index, component);
  });
}
