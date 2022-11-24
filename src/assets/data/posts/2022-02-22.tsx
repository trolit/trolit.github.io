import {
  Photo,
  Header,
  Paragraph,
} from '@/services/usePostRenderer/components';
import { IPost } from '@/interfaces/dashboard/IPost';

const title = new Header({
  value: 'DGBL - future or not?',

  overrideComponentProps: {
    order: 1,
  },
});

const paragraph1 = new Paragraph({
  value: `In that post I wanted to touch DGBL term that interested me. I've found it while working on engineering thesis for
  which I've made with friend full educational game, Project Zero. I was surprised that it's mentioned by scientists in scientific
  publications. 'DGBL', which stands for Digital Game-Based Learning (often shortened to GBL acronym) targets games
  which not only entertain but give ability to gain some particular knowledge (don't confuse with gamification). By
  particular knowledge, we mean elements in a given field like history, criminology, IT, biology. Someone might say
  that: "Hey, there are educational games already. Why introducing another term?"`,
});

const paragraph2 = new Paragraph({
  value: `DGBL games aren't supposed to only convey substantive value but give idea that would completely change the way we
  learn, revolutionise education system in e.g. terms of efficiency learning.`,
});

const paragraph3 = new Paragraph({
  value: `Towards DGBL effectiveness continuous research is carried out to confirm it's positive impact. Scientists are making
  publications about that. On one of the WWW sites I've found interesting comparision between three learning methods
  (traditional, practical, DGBL). Sadly it's not available anymore but guess which method met all criteria prepared by
  it's author? Yes, Game-Based Learning. Why? It's simple. In traditional learning which relies on e.g. listening to
  lecture it happens that lecturer does it in a monotonous manner. Then the listeners only count down time to the end
  of the meeting. In practical learning we are usually dealing with devices that are expensive and there is a chance
  that it will be damaged. Institution does not want to constantly spend money on new devices which restricts
  possibilities that you can do with purchased ones. What about GBL? Well made app/game can give good initial
  preparation before using actual equipment lowering risk of damaging training devices. Mentioned solution also allows
  to perform actions that aren't possible (assume that we have game that simulates aquatic mammalsa and we choose
  dolphin. For example having sliders responsible for the wingspan, we can check how their width affects dolphins
  movement speed. We will not check something like this in reality). Ability to test different scenarios (also
  dangerous ones) allow to experience consequences of different actions. It all depends of course on type of the game,
  it's complexity.`,
});

const photo1 = new Photo({
  src: 'https://spencerauthor.com/wp-content/uploads/2018/07/sketch-note-game-based-learning.png',

  caption: '',

  sourceUrl:
    'http://www.spencerauthor.com/game-based-learning/sketch-note-game-based-learning/',

  overrideComponentProps: {
    height: '400px',
  },
});

export const post: IPost = {
  name: 'DGBL - future or not?',

  abstract: `DGBL is an subject which got my attention while working on engineering thesis. It means "digital game-based learning". Educational games aren't new but what if DGBL was implemented into education system? Would it improve learning quality? Some thoughts :P`,

  tags: [{ text: 'Learning' }],

  date: '2022-02-22',

  components: [photo1, title, paragraph1, paragraph2, paragraph3],
};
