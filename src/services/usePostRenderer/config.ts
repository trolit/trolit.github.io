import {
  renderCode,
  renderPhoto,
  renderVideo,
  renderHeader,
  renderParagraph,
} from './renderers';
import {
  CODE_COMPONENT_KEY,
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

const codeRenderer = create(CODE_COMPONENT_KEY, renderCode);

export const COMPONENT_RENDERERS: IComponentRenderer[] = [
  codeRenderer,
  photoRenderer,
  videoRenderer,
  headerRenderer,
  paragraphRenderer,
];
