import { IPhoto } from './interfaces/IPhoto';
import { IHeader } from './interfaces/IHeader';
import { IParagraph } from './interfaces/IParagraph';
import { renderHeader } from './renderers/renderHeader';
import { ComponentFactory } from './helpers/ComponentFactory';

const componentFactory = new ComponentFactory();

const headerComponent = componentFactory.create<IHeader>(renderHeader);

export const allowedComponents = [headerComponent];

export type PostComponent = IHeader | IPhoto | IParagraph;
