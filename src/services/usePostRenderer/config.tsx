import { renderHeader } from './renderHeader';
import { IHeader } from './interfaces/IHeader';
import { ComponentFactory } from './helpers/ComponentFactory';

const componentFactory = new ComponentFactory();

const headerComponent = componentFactory.create<IHeader>(renderHeader);

export const allowedComponents = [headerComponent];
