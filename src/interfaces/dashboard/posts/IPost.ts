import { ITag } from '@/interfaces/ITag';

import { PostComponent } from '@/utilities/PostComponent';

export interface IPost {
  name: string;

  date: string;

  tags: ITag[];

  components: PostComponent[];
}
