import { ITag } from './ITag';
import { IBaseContent } from '@/services/useContentRenderer/interfaces';

export interface IPost extends IBaseContent {
  name: string;

  abstract: string;

  date: string;

  tags: ITag[];
}
