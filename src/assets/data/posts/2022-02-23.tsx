import { IPost } from '@/interfaces/dashboard/IPost';
import { Header } from '@/services/usePostRenderer/components';

const title = new Header({
  value: 'This is title 2',

  order: 1,
});

export const post: IPost = {
  name: 'This is post2',

  tags: [{ text: 'GitHub' }, { text: 'Tag1' }, { text: 'Tag2' }],

  date: '2022-02-22',

  components: [title],
};
