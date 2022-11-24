import { Base } from '../components/Base';
import { IPhoto, IHeader, IParagraph } from '../interfaces';

export type PostComponent = Base<IHeader | IPhoto | IParagraph>;
