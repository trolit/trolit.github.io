import { Base } from './Base';
import { IParagraph } from '../interfaces/IParagraph';

export class Paragraph extends Base<IParagraph> {
  protected key: string = 'paragraph';
}
