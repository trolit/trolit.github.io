import { IComponentRenderer } from './interfaces';
import { ComponentRendererFactory } from './helpers';
import { renderHeader, renderParagraph } from './renderers';
import { HEADER_COMPONENT_KEY, PARAGRAPH_COMPONENT_KEY } from './constants';

const { create } = new ComponentRendererFactory();

const headerRenderer = create(HEADER_COMPONENT_KEY, renderHeader);

const paragraphRenderer = create(PARAGRAPH_COMPONENT_KEY, renderParagraph);

export const componentRenderers: IComponentRenderer[] = [
  headerRenderer,
  paragraphRenderer,
];
