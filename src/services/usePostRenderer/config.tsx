import { IPhoto } from './interfaces/IPhoto';
import { IHeader } from './interfaces/IHeader';
import { IParagraph } from './interfaces/IParagraph';
import { renderHeader } from './renderers/renderHeader';
import { renderParagraph } from './renderers/renderParagraph';
import { ComponentFactory } from './helpers/ComponentFactory';

const componentFactory = new ComponentFactory();

const headerComponent = componentFactory.create<IHeader>(renderHeader);

const paragraphComponent = componentFactory.create<IParagraph>(renderParagraph);

export const allowedComponents = [headerComponent, paragraphComponent];

export type PostComponent = IHeader | IPhoto | IParagraph;
