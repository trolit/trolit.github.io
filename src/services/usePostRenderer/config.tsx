import {
  PHOTO_COMPONENT_KEY,
  HEADER_COMPONENT_KEY,
  PARAGRAPH_COMPONENT_KEY,
} from './constants';
import { IComponentRenderer } from './interfaces';
import { ComponentRendererFactory } from './helpers';
import { renderHeader, renderParagraph, renderPhoto } from './renderers';

const { create } = new ComponentRendererFactory();

const headerRenderer = create(HEADER_COMPONENT_KEY, renderHeader);

const paragraphRenderer = create(PARAGRAPH_COMPONENT_KEY, renderParagraph);

const photoRenderer = create(PHOTO_COMPONENT_KEY, renderPhoto);

export const componentRenderers: IComponentRenderer[] = [
  photoRenderer,
  headerRenderer,
  paragraphRenderer,
];
