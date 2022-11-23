import { IPhoto } from './interfaces/IPhoto';
import { renderHeader } from './renderHeader';
import { IHeader } from './interfaces/IHeader';
import { IParagraph } from './interfaces/IParagraph';
import { ComponentFactory } from './helpers/ComponentFactory';

const componentFactory = new ComponentFactory();

const headerComponent = componentFactory.create<IHeader>(renderHeader);

export const allowedComponents = [headerComponent];

export type PostComponent = IHeader | IPhoto | IParagraph;
