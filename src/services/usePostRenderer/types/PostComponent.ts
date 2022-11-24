import { Base } from '../components/Base';
import { IPhoto } from '../interfaces/IPhoto';
import { IHeader } from '../interfaces/IHeader';
import { IParagraph } from '../interfaces/IParagraph';

export type PostComponent = Base<IHeader | IPhoto | IParagraph>;
