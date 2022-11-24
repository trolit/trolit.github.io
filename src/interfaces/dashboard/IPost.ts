import { ITag } from '@/interfaces/ITag';
import { PostComponent } from '@/services/usePostRenderer/types';

export interface IPost {
  name: string;

  date: string;

  tags: ITag[];

  components: PostComponent[];
}
