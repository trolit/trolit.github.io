import { Base } from './Base';
import { ICode } from '../interfaces';
import { CODE_COMPONENT_KEY } from '../constants';

export class Code extends Base<ICode> {
  protected key: string = CODE_COMPONENT_KEY;
}
