import { PostComponent } from '../types';
import { IReferences } from './IReferences';

export interface IBasePost {
  components: PostComponent[];

  references?: IReferences;
}
