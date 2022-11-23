import { ITag } from '@/interfaces/ITag';
import { PostComponent } from '@/services/usePostRenderer/config';

export interface IPost {
  name: string;

  date: string;

  tags: ITag[];

  components: PostComponent[];
}
