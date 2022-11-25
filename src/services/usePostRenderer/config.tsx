import {
  renderPhoto,
  renderVideo,
  renderHeader,
  renderParagraph,
} from './renderers';
import {
  PHOTO_COMPONENT_KEY,
  VIDEO_COMPONENT_KEY,
  HEADER_COMPONENT_KEY,
  PARAGRAPH_COMPONENT_KEY,
} from './constants';
import { IComponentRenderer } from './interfaces';
import { ComponentRendererFactory } from './helpers';

const { create } = new ComponentRendererFactory();

const headerRenderer = create(HEADER_COMPONENT_KEY, renderHeader);

const paragraphRenderer = create(PARAGRAPH_COMPONENT_KEY, renderParagraph);

const photoRenderer = create(PHOTO_COMPONENT_KEY, renderPhoto);

const videoRenderer = create(VIDEO_COMPONENT_KEY, renderVideo);

export const componentRenderers: IComponentRenderer[] = [
  photoRenderer,
  videoRenderer,
  headerRenderer,
  paragraphRenderer,
];
