import { IPost } from '@/interfaces/dashboard/posts/IPost';
import { IHeader } from '@/services/usePostRenderer/interfaces/IHeader';
import { IParagraph } from '@/services/usePostRenderer/interfaces/IParagraph';

const title: IHeader = {
  value: 'This is title 2',

  order: 1,
};

const paragraph: IParagraph = {
  value: 'this is my paragraph',
};

export const post: IPost = {
  name: 'This is post2',

  tags: [{ text: 'GitHub' }, { text: 'Tag1' }, { text: 'Tag2' }],

  date: '2022-02-22',

  components: [title, paragraph],
};
