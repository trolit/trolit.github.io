import {
  Photo,
  Header,
  Paragraph,
} from '@/services/usePostRenderer/components';
import { IPost } from '@/interfaces/dashboard/IPost';

const title = new Header({
  value: 'DGBL - future or not?',

  order: 1,
});

const paragraph1 = new Paragraph({
  value: 'elelele',
});

const photo1 = new Photo({
  src: 'https://spencerauthor.com/wp-content/uploads/2018/07/sketch-note-game-based-learning.png',

  caption: '',

  sourceUrl:
    'http://www.spencerauthor.com/game-based-learning/sketch-note-game-based-learning/',

  overrideImageProps: {
    height: '400px',
  },
});

export const post: IPost = {
  name: 'DGBL - future or not?',

  tags: [{ text: 'Learning' }],

  date: '2022-02-22',

  components: [photo1, title, paragraph1],
};
