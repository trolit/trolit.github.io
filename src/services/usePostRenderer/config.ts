import {
  renderCode,
  renderPhoto,
  renderVideo,
  renderHeader,
  renderParagraph,
} from './renderers';
import { IComponentRenderer } from './interfaces';
import { ComponentRendererFactory } from './helpers';

export const CODE_COMPONENT_KEY = 'code';

export const PHOTO_COMPONENT_KEY = 'photo';

export const VIDEO_COMPONENT_KEY = 'video';

export const HEADER_COMPONENT_KEY = 'header';

export const PARAGRAPH_COMPONENT_KEY = 'paragraph';

const { create } = new ComponentRendererFactory();

export const COMPONENT_RENDERERS: IComponentRenderer[] = [
  create(CODE_COMPONENT_KEY, renderCode),
  create(PHOTO_COMPONENT_KEY, renderPhoto),
  create(VIDEO_COMPONENT_KEY, renderVideo),
  create(HEADER_COMPONENT_KEY, renderHeader),
  create(PARAGRAPH_COMPONENT_KEY, renderParagraph),
];
