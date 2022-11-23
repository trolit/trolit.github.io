import { IPost } from '@/interfaces/dashboard/posts/IPost';
import { IHeader } from '@/services/usePostRenderer/interfaces/IHeader';

const title: IHeader = {
  value: 'This is title 1',

  order: 1,
};

export const post: IPost = {
  name: 'This is post1',

  tags: [{ text: 'GitHub' }],

  date: '2022-02-22',

  components: [title],
};
