import { ITag } from '@/interfaces/ITag';
import { IBasePost } from '@/services/usePostRenderer/interfaces';

export interface IPost extends IBasePost {
  name: string;

  abstract: string;

  date: string;

  tags: ITag[];
}
