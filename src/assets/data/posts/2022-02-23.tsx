import { IPost } from '@/interfaces/dashboard/posts/IPost';
import { ITitle } from '@/interfaces/dashboard/posts/IHeader';

const title: ITitle = {
  value: 'This is title1',

  component: 'h1',
};

export const post: IPost = {
  name: 'This is post2',

  date: '2022-02-22',

  components: [title],
};
