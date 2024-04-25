import { IPost } from '@/types/IPost';
import { resolveImagePath } from '@/helpers/resolveImagePath';
import { Code, Photo, Header, Paragraph } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: `Enchancing (Unity) project development`,

  abstract: `Planning to make expanded game or app in Unity? Consider sacrificing some time on implementing features that will shorten testing time. Not everything in Unity can be covered with unit tests. This document mentions two things that improved personal project development for me.`,

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
        match: 'EasyButtons',
        title: 'Easy Buttons (repository)',
        url: 'https://github.com/madsbangh/EasyButtons',
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
      value: `Enchancing (Unity) project development`,
    }),

    new Header({
      value: `Developer's console`,

      className: 'text-[2rem]',
    }),

    new Paragraph({
      value: `First and worth concept to add into the project is dev's console. It consists of commands which are intended to setup state or certain conditions, to allow to test different scenarios (or specific features) without spending time on reaching particular phase or manipulating project's source code. It can also be used in built version of the project which is cool feature. Since I was working on engineering thesis project with another person, our project (Project Zero) had to be large enough. In it's early stage I knew I wanted to add such feature to improve future testing. I've managed to find an idea on Joey The Lantern's youtube channel which I've used and modified with few things. I didn't include Unity logs though but if you are interested, you can find how to do it on his channel. After finishing the project I can say that sacrificing several hours to prepare commands and console itself definitely paid back and shorten the time spent on patching bugs in final stage of game development. It's also nice feature when you want to show certain game mechanic at any moment or let players play with it. If you're interested, feel free to check console template repository and it's implementation applied into Project Zero (there are more commands that may be useful for you 😁)`,
    }),

    new Header({
      value: `Easy Buttons`,

      className: 'text-[2rem]',
    }),

    new Paragraph({
      value: `Another nice way to improve project testing are buttons placed in the inspector. Imagine that you want to check whether all books give valid notification after they are read by player. You can get each book by 1) wandering around the world and spending currency on it, 2) making special command to dev console that will unlock them at once, or... 3) adding an button to the inspector.`,
    }),

    new Paragraph({
      value: `At first spot console command seems reasonable but in some scenarios it might be more convenient to make button and omit necessity of typing in command(s) to setup particular state or e.g. get information on demand to not flood console. Unity does not include such feature by default but there is ready solution which I've used - EasyButtons. Buttons are rendered within special attribute placed above functions. After using it, effect is as follows:`,
    }),

    new Photo({
      src: resolveImagePath('/posts/2020-03-06/1.png'),

      description: 'Unity Inspector Preview',
    }),

    new Paragraph({
      value: `You may wonder if these functions can have parameters. In EasyButtons you can't decorate functions with [Button] that have parameters (or they won't appear in the Inspector). At first look it might look as an obstacle but if you would like to pass some data, you could just call another function inside decorated method that can have parameters. Simple example:`,
    }),

    new Code({
      language: 'clike',
      lineNumbers: true,
      value: `using EasyButtons;

      [Header("Teleport To Destination Button Data")]
      [SerializeField]
      private float _X;

      [SerializeField]
      private float _Y;

      [SerializeField]
      private float _Z;

      [Button]
      public void TeleportToDestination()
      {
          SetCharacterPosition(_X, _Y, _Z);
      }`,
    }),

    new Paragraph({
      value: `Using EasyButtons is quite simple. If you are planning on making medium to large project in Unity, consider at least one of these features and you will surely won't regret spending time in early stage to faster later QA and exclude bugs. Dev console for me is a must (after applying it to Project Zero) but EasyButtons is also nice addition worth to consider.`,
    }),
  ],
};
