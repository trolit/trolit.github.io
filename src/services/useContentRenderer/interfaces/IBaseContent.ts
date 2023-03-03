import { IReferences } from './IReferences';
import { ContentComponent } from '../types';

export interface IBaseContent {
  components: ContentComponent[];

  references?: IReferences;
}
