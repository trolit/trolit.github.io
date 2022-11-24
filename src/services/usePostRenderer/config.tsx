import { Header, Paragraph } from './components';
import { renderHeader, renderParagraph } from './renderers';
import { IComponentRenderer } from './interfaces/IComponentRenderer';
import { HEADER_COMPONENT_KEY, PARAGRAPH_COMPONENT_KEY } from './constants';

export const componentRenderers: IComponentRenderer[] = [
  {
    key: HEADER_COMPONENT_KEY,
    render: (index: number, value: unknown) =>
      renderHeader(index, value as Header),
  },

  {
    key: PARAGRAPH_COMPONENT_KEY,
    render: (index: number, value: unknown) =>
      renderParagraph(index, value as Paragraph),
  },
];
