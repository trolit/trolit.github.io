import { Base } from './Base';
import { IReferences } from '../interfaces';
import { REFERENCES_COMPONENT_KEY } from '../constants';

export class References extends Base<IReferences> {
  protected key: string = REFERENCES_COMPONENT_KEY;
}
