import { Base } from './Base';
import { IHeader } from '../interfaces/IHeader';

class Header extends Base<IHeader> {
  protected key: string = 'header';
}

export const header = (data: IHeader) => new Header(data);
