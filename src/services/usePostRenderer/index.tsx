import { ReactNode } from 'react';

import { IBasePost } from './interfaces';
import { Paragraph } from './components';
import { componentRenderers } from './config';
import { renderReferences } from './renderers';
import { PARAGRAPH_COMPONENT_KEY } from './constants';
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
    const componentKey = component.getKey();

    const componentRenderer = componentRenderers.find(
      (componentRenderer) => componentRenderer.key === componentKey,
    );

    if (!componentRenderer) {
      console.error('------------------------------------------------------');
      console.error(
        `Tried to render unregistered component (${componentKey}).`,
      );
      console.error(component);
      console.error('------------------------------------------------------');

      throw new Error();
    }

    if (componentKey === PARAGRAPH_COMPONENT_KEY && references) {
      return renderParagraphWithReferences(
        index,
        component as Paragraph,
        references,
      );
    }

    return componentRenderer.render(index, component);
  });

  return (
    <>
      {renderedComponents}

      {references && references.renderAtTheEnd && renderReferences(references)}
    </>
  );
}
