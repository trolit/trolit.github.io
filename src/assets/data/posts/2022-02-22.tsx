import { IPost } from '@/interfaces/dashboard/posts/IPost';
import { Header, Paragraph } from '@/services/usePostRenderer/components';

const title = new Header({
  value: 'This is title 1',

  order: 1,
});

const paragraph1 = new Paragraph({
  value: 'elelele',
});

export const post: IPost = {
  name: 'This is post1',

  tags: [{ text: 'GitHub' }],

  date: '2022-02-22',

  components: [title, paragraph1],
};
