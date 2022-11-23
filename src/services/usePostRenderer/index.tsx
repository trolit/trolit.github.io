import { ReactNode } from 'react';

import { allowedComponents } from './config';
import { IPost } from './interfaces/IPost';

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
      return <span key={index}>error</span>;
    }

    return result.render(index, component);
  });
}
