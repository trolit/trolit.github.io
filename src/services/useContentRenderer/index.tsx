import { ReactNode } from 'react';

import { Paragraph } from './components';
import { IBaseContent } from './interfaces';
import { renderReferences } from './renderers';
import { COMPONENT_RENDERERS, PARAGRAPH_COMPONENT_KEY } from './config';
import { renderParagraphWithReferences } from './renderers/renderParagraph';

interface IRenderer<T> {
  render: (content: T) => ReactNode;
}

export function useContentRenderer<T extends IBaseContent>(): IRenderer<T> {
  return {
    render: (content: T) => render<T>(content),
  };
}

function render<T extends IBaseContent>(content: T) {
  const { components, references } = content;

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
