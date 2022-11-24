import { Base } from './Base';
import { IHeader } from '../interfaces/IHeader';

export class Header extends Base<IHeader> {
  protected key: string = 'header';
}
