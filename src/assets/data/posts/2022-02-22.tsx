import {
  Photo,
  Video,
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
  value: `In that post I wanted to touch DGBL term that interested me. I've found it while working on engineering thesis for which I've made with friend full educational game, Project Zero. I was surprised that it's mentioned by scientists in scientific publications. 'DGBL', which stands for Digital Game-Based Learning (often shortened to GBL acronym) targets games which not only entertain but give ability to gain some particular knowledge (don't confuse with gamification). By particular knowledge, we mean elements in a given field like history, criminology, IT, biology. Someone might say that: "Hey, there are educational games already. Why introducing another term?"`,
});

const paragraph2 = new Paragraph({
  value: `DGBL games aren't supposed to only convey substantive value but give idea that would completely change the way we learn, revolutionise education system in e.g. terms of efficiency learning.`,
});

const paragraph3 = new Paragraph({
  value: `Towards DGBL effectiveness continuous research is carried out to confirm it's positive impact. Scientists are making publications about that. On one of the WWW sites I've found interesting comparision between three learning methods (traditional, practical, DGBL). Sadly it's not available anymore but guess which method met all criteria prepared by it's author? Yes, Game-Based Learning. Why? It's simple. In traditional learning which relies on e.g. listening to lecture it happens that lecturer does it in a monotonous manner. Then the listeners only count down time to the end of the meeting. In practical learning we are usually dealing with devices that are expensive and there is a chance that it will be damaged. Institution does not want to constantly spend money on new devices which restricts possibilities that you can do with purchased ones. What about GBL? Well made app/game can give good initial preparation before using actual equipment lowering risk of damaging training devices. Mentioned solution also allows to perform actions that aren't possible (assume that we have game that simulates aquatic mammalsa and we choose dolphin. For example having sliders responsible for the wingspan, we can check how their width affects dolphins movement speed. We will not check something like this in reality). Ability to test different scenarios (also dangerous ones) allow to experience consequences of different actions. It all depends of course on type of the game, it's complexity.`,
});

const paragraph4 = new Paragraph({
  value: `From the publication by Richard Van Eck you can learn that Prensky (very famous person in a field of education) prepared list of games that qualify for GBL. List includes for instance Civilization, CSI, Simcity. Civilization allows to meet history, CSI - cryminology, SimCity - management and civil engineering. They were given also examples of games that do not qualify for this title like RollerCoaster Tycoon. Reason can be found in author's publication which I recommend to check out.`,
});

const paragraph5 = new Paragraph({
  value: `Ms Rashina Hoda, in turn made research on learning effectivness using Agile games. Students had opportunity to increase their cooperation skills and iterative approach to the problem(s). After classes, Ms Hoda made survey. It's participants had to rate sentences. On "I enjoyed playing games in class" 20 out of 23 people expressed their approval. Not surprising at all right?`,
});

const paragraph6 = new Paragraph({
  value: `Let's look at different one.. "Learning by playing cooperative games was much more effective than for example listening to the lecture." - 20 respondents agreed with that, 2 had no opinion and one person disagreed with that sentence. There are many more results in the publication I won't spoiler more :p`,
});

const paragraph7 = new Paragraph({
  value: `In addition to the previously mentioned advantages over other teaching methods, GBL makes a big impression because it is much more motivating. It associates with something pleasant, encourages to explore knowledge, expands imagination. For instance let's look at Minecraft. It is so popular that books are created on how to create complex circuits from redstone. There are even programming lessons in Minecraft. Type in youtube e.g. 'minecraft calculator' and check results. One of the popular videos has even 2 million views. Games are gaining popularity very quickly. We get better and better components to make more advanced games. Gamedev is constantly raising and their risings year by year reach record values.`,
});

const paragraph8 = new Paragraph({
  value: `Will there be any company that take a risk and offer AAA product that will serve as more than entertainment but also learning? I don't have idea. Maybe we should ask using "When" and not "Will". At this moment we see tiny games like Rabbids Coding from Ubisoft (F2P) which learns basic programming skills. Short trailer reference for interested:`,
});

const video = new Video({
  title: 'RABBIDS CODING – Release trailer',

  src: 'https://www.youtube.com/embed/5S9z6DFHt6o',
});

const paragraph9 = new Paragraph({
  value: `Will there be any company that take a risk and offer AAA product that will serve as more than entertainment but also learning? I don't have idea. Maybe we should ask using "When" and not "Will". At this moment we see tiny games like Rabbids Coding from Ubisoft (F2P) which learns basic programming skills. Short trailer reference for interested:`,
});

const paragraph10 = new Paragraph({
  value: `Unfortunately.. In case of GBL, how many followers there are so many opponents. They mainly complain that Game-Based Learning still does not have enough research carried out. Some say that GBL promotes isolation and depressive statesdue to lack of contact with peers but they can play together, at lessons. They can communicate, exchange experiences. I think that it is more about a fear of something new, of big change (not to mention people that state NO and that games are bad). I personally support the education system being modified, that GBL will be closer future for next generations. I don't mean that instantly all subjects should be learned within GBL method. Implementing it into education system would be some kind of revolution and there is no option to disagree. I'm keeping fingers crossed for GBL method and for developers and their games that will claim GBL title.`,
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

  components: [
    photo1,
    title,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    paragraph7,
    paragraph8,
    video,
    paragraph9,
    paragraph10,
  ],
};
