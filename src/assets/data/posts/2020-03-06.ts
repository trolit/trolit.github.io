import {
  Photo,
  Header,
  Paragraph,
} from '@/services/usePostRenderer/components';
import { IPost } from '@/interfaces/dashboard/IPost';

export const post: IPost = {
  name: `Enchancing (Unity) project with developer's console`,

  abstract: `Testing is crucial part of game development to reduce times on solving bugs in it's final stage. If you are planning on making expanded game or app in Unity consider sacrificing some time on implementing console that will handle commands. That way you will shorten testing time. Not everything in Unity can be covered with unit tests. It can be extremely useful in built version since it allows to e.g. print logs. Without it functional testing can take much longer.`,

  tags: [{ text: 'Unity' }],

  date: '2020-03-06',

  references: {
    items: [
      {
        match: 'Project Zero',
        title: 'Project Zero (repository)',
        url: 'https://github.com/trolit/projectZero',
      },
      {
        match: 'Joey The Lantern',
        title: 'Joey The Lantern YT Channel',
        url: 'https://www.youtube.com/channel/UCmG1UbEI0iFE1tAw2SyvvXg',
      },
      {
        match: 'console template repository',
        title: 'Console Template Repository',
        url: 'https://github.com/trolit/unity-dev-console',
        excludeFromReferencesComponent: true,
      },
      {
        match: `it's implementation`,
        title: 'dw',
        url: 'https://github.com/trolit/projectZero/tree/master/projectZero/Assets/Scripts/Dev',
        excludeFromReferencesComponent: true,
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: true,
  },

  components: [
    new Header({
      value: `Enchancing project with developer's console`,

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: `Developer console consists of commands which are intended to fullfil certain conditions, to be able to test different scenarios without spending time on reaching particular state. Scene preconditions modification isn't that convenient because it requires to do changes in different places, discard them and at another point restore again but it saves a lot of time when project enters final testing phase.`,
    }),

    new Paragraph({
      value: `In my case, project eligible for adding console was Project Zero, educational game made prepared for engineering thesis. Due to the fact that it was developed in two people, it had to be large enough. Therefore in it's early stage I've wanted to include such feature. I've managed to find idea on Joey The Lantern's youtube channel. I've modified it with few things. I didn't include Unity logs though but if you are interested, you can find how to do it on his channel. From the perspective of that project I can say that sacrificing several hours to prepare commands and console itself definitely paid back and shorten the time spent on patching bugs in final stage of game development. It's also nice feature when you want to show certain game mechanic at any moment. If you're interested, feel free to check console template repository and it's implementation in Project Zero as well (there are more commands that you might want to use 😁)`,
    }),

    new Photo({
      description: 'Short preview of Unity Dev Console',

      sourceUrl: 'https://github.com/trolit/unity-dev-console',

      overrideComponentProps: {
        src: 'https://raw.githubusercontent.com/trolit/unity-dev-console/images/images/ezgif.gif',
      },
    }),
  ],
};
