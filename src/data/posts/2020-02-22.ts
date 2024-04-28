import { IPost } from '@/types/IPost';
import { getYouTubeUrl } from '@/helpers/getYouTubeUrl';
import { Header, Paragraph, Video } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: 'DGBL - future or not?',

  abstract: `DGBL is an subject which got my attention while working on engineering thesis. It means "digital game-based learning". Educational games aren't new but what if GBL was implemented into education system? Would it improve learning quality? Personal view.`,

  tags: [{ text: 'Education' }, { text: 'Games' }],

  date: '2020-02-22',

  references: {
    items: [
      {
        match: 'Project Zero',
        title: 'Project Zero (repository)',
        url: 'https://github.com/trolit/projectZero',
      },
      {
        match: `It's Not Just the Digital Natives Who Are Restless`,
        title: `It's Not Just the Digital Natives Who Are Restless`,
        author: 'Richard Van Eck',
        url: `https://www.researchgate.net/publication/242513283_Digital_Game_Based_LEARNING_It's_Not_Just_the_Digital_Natives_Who_Are_Restless`,
      },
      {
        match: `Using Agile Games to Invigorate Agile and Lean Software Development Learning in Classrooms`,
        title: `Using Agile Games to Invigorate Agile and Lean Software Development Learning in Classrooms`,
        author: 'Rashina Hoda',
        url: `https://www.researchgate.net/publication/328516545_Using_Agile_Games_to_Invigorate_Agile_and_Lean_Software_Development_Learning_in_Classrooms_Bringing_Methodologies_from_Industry_to_the_Classroom`,
      },
      {
        title: 'How Digital Game-Based Learning Improves Student Success',
        url: 'https://www.prodigygame.com/main-en/blog/digital-game-based-learning/',
      },
      {
        match: 'Prensky',
        title: 'Marc Prensky - bio',
        url: 'https://marcprensky.com/bio/',
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: true,
  },

  components: [
    new Header({
      value: 'DGBL - future or not?',
    }),

    new Paragraph({
      value: `DGBL term (which stands for Digital Game-Based Learning, shortened to GBL) got my attention while I was working on engineering thesis. It is related to games which not only entertain but are intended to give some particular knowledge (don't confuse with gamification) in a given field like history, criminology, IT, biology. Someone might say that: "Hey, there are educational games already. Why introducing another term?"`,
    }),

    new Paragraph({
      value: `GBL games aren't supposed to only convey substantive value but give idea that would completely change the way we learn, revolutionise education system in e.g. terms of efficiency learning.`,
    }),

    new Paragraph({
      value: `DGBL effectiveness continuous research is carried out to confirm it's positive impact. On one of the WWW sites I've found interesting comparision between three learning methods (traditional, practical, DGBL). Sadly it's not available anymore but Game-Based Learning met all criteria according to author (learning speed, durability of remembering, attitude etc.). Why? In traditional learning )(which relies on e.g. listening to lecture) it happens that lecturer does it in a monotonous manner. Then the listeners only count down time to the end of the meeting. In practical learning we usually deal with devices that are expensive and there is a chance that it will be damaged. Institution is not keen on spending money on new devices each time they break, which restricts testing possibilities. What about GBL? Well made app/game can give good initial preparation before using actual equipment, lowering risk of damaging training devices. It also allows to perform actions that aren't possible (assume that we have game that simulates aquatic mammals and we choose dolphin. For example having sliders responsible for the wingspan, we can check how their width affects dolphins movement speed. Ability to test different scenarios (also dangerous ones) allow to experience consequences. It all depends of course on type of the game, it's complexity.`,
    }),

    new Paragraph({
      value: `Richard Van Eck in It's Not Just the Digital Natives Who Are Restless mentioned that Prensky (very famous person in a field of education) prepared list of games that qualify to GBL. List includes for instance Civilization, CSI, Simcity. Civilization allows to meet history, CSI - cryminology, SimCity - management and civil engineering. They were given also examples of games that do not qualify for this title like RollerCoaster Tycoon. Reason can be found in author's publication which I recommend to check out!`,
    }),

    new Paragraph({
      value: `In Using Agile Games to Invigorate Agile and Lean Software Development Learning in Classrooms from Ms Rashina Hoda students had opportunity to increase their cooperation skills and iterative approach to the problem(s). After classes, they were given survey. On "I enjoyed playing games in class" 20 out of 23 people expressed their approval. 20/23 respondents agreed that "Learning by playing cooperative games was much more effective than for example listening to the lecture.". Not surprising at all - right?`,
    }),

    new Paragraph({
      value: `In addition to the previously mentioned advantages over other teaching methods, GBL makes a big impression because it is much more motivating for new generations. It associates with something pleasant, encourages to explore knowledge, expands imagination. Let's consider Minecraft. It is so popular that books are created on how to create complex circuits from "redstone". There are even programming lessons in Minecraft.`,
    }),

    new Paragraph({
      value: `Will there be any company that take a risk and offer AAA product that will serve as more than entertainment but also learning? I don't have idea but I'd love to see that. At this moment we see tiny games like Rabbids Coding from Ubisoft (F2P) which learns basic programming skills.`,
    }),

    new Video({
      title: 'RABBIDS CODING – Release trailer',

      src: getYouTubeUrl('5S9z6DFHt6o', { embed: true }).toString(),
    }),

    new Paragraph({
      value: `Like with most of the subjects, Game-Based Learning has also many opponents. Their primary complaint is that GBL still does not have enough research carried out. Some say that it promotes isolation and depressive states due to lack of contact with peers (although they can play together, at lessons, communicate & exchange experiences). I think that it is more about a fear of something new, of big change (not to mention people that state "NO" and that games are bad). I personally support to include GBL into education system. I don't mean that instantly all subjects should be learnt within such method. Implementing it into education system would be some kind of revolution and there is no option to disagree. I'm keeping fingers crossed for Game-Based Learning and for developers and their games that will claim GBL title.`,
    }),
  ],
};
