import { Base } from './Base';
import { IHeader } from '../interfaces';
import { HEADER_COMPONENT_KEY } from '../config';

export class Header extends Base<IHeader> {
  protected key: string = HEADER_COMPONENT_KEY;
}
