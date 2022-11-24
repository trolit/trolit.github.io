import { Base } from './Base';
import { IParagraph } from '../interfaces';
import { PARAGRAPH_COMPONENT_KEY } from '../constants';

export class Paragraph extends Base<IParagraph> {
  protected key: string = PARAGRAPH_COMPONENT_KEY;
}
