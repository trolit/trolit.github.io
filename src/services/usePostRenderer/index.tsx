import { ReactNode } from 'react';

import { IBasePost } from './interfaces';
import { Paragraph } from './components';
import { renderReferences } from './renderers';
import { COMPONENT_RENDERERS, PARAGRAPH_COMPONENT_KEY } from './config';
import { renderParagraphWithReferences } from './renderers/renderParagraph';

interface IRenderer<T> {
  render: (post: T) => ReactNode;
}

export function usePostRenderer<T extends IBasePost>(): IRenderer<T> {
  return {
    render: (post: T) => render<T>(post),
  };
}

function render<T extends IBasePost>(post: T) {
  const { components, references } = post;

  const renderedComponents = components.map((component, index) => {
    const key = component.getKey();

    const COMPONENT_RENDERER = COMPONENT_RENDERERS.find((COMPONENT_RENDERER) => COMPONENT_RENDERER.key === key);

    if (!COMPONENT_RENDERER) {
      console.error('------------------------------------------------------');
      console.error(`Tried to render unregistered component (key: ${key}).`);
      console.error(component);
      console.error('------------------------------------------------------');

      throw new Error();
    }

    if (key === PARAGRAPH_COMPONENT_KEY && references) {
      return renderParagraphWithReferences(index, component as Paragraph, references);
    }

    return COMPONENT_RENDERER.render(index, component);
  });

  return (
    <>
      {renderedComponents}

      {references && references.renderAtTheEnd && renderReferences(references)}
    </>
  );
}
