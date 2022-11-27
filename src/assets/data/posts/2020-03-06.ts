import {
  Code,
  Photo,
  Header,
  Paragraph,
} from '@/services/usePostRenderer/components';
import { IPost } from '@/interfaces/dashboard/IPost';

export const post: IPost = {
  name: `Enchancing (Unity) project development`,

  abstract: `Testing is crucial part of game development to reduce times on solving bugs in it's final stage. If you are planning on making expanded game or app in Unity, consider sacrificing some time on implementing features that will shorten testing time. Not everything in Unity can be covered with unit tests. Post mentions two things that improved personal project development.`,

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
      value: `Enchancing (Unity) project development`,

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Header({
      value: `Developer's console`,

      overrideComponentProps: {
        order: 2,
      },
    }),

    new Paragraph({
      value: `First and worth concept to add into the project is dev's console. It consists of commands which are intended to arrange certain conditions, to allow to test different scenarios (or specific features) without spending time on reaching particular state or manipulating project's source code. Since I was working on engineering thesis project with another person our project had to be large enough. We were working on Project Zero - sandbox, educational game with RPG elements. In it's early stage I knew I wanted to add such feature. I've managed to find an idea on Joey The Lantern's youtube channel which I've used and modified with few things. I didn't include Unity logs though but if you are interested, you can find how to add it on his channel. After finishing the project I can say that  sacrificing several hours to prepare commands and console itself definitely paid back and shorten the time spent on patching bugs in final stage of game development. It's also nice feature when you want to show certain game mechanic at any moment. If you're interested, feel free to check console template repository and it's implementation in Project Zero (there are more commands that you might want to use 😁)`,
    }),

    new Photo({
      description: 'GIF showing Unity Dev Console',

      sourceUrl: 'https://github.com/trolit/unity-dev-console',

      overrideComponentProps: {
        src: 'https://raw.githubusercontent.com/trolit/unity-dev-console/images/images/ezgif.gif',
      },
    }),

    new Header({
      value: `Easy Buttons`,

      overrideComponentProps: {
        order: 2,
      },
    }),

    new Paragraph({
      value: `Another nice way to improve project testing are buttons in inspector. Imagine that you want to check whether all books give valid notification after they are read by player. You can get each book by 1) wandering around the world and spending currency on it, 2) making special command to dev console that will unlock them at once, or... 3) adding an button to the inspector.`,
    }),

    new Paragraph({
      value: `At first spot console command seems reasonable but in some scenarios it might be more convenient to make button and omit necessity of typing in command(s) to setup particular state or e.g. get information on demand to not flood console. Unity does not include such feature by default but there is ready solution which I've used - EasyButtons. Buttons are rendered within special attribute placed above functions. After using it, effect is as follows:`,
    }),

    new Photo({
      description: 'Unity Inspector Preview',

      overrideComponentProps: {
        src: require('@/assets/media/posts/2020-03-06/1.png'),
      },
    }),

    new Paragraph({
      value: `You may wonder if these functions can have parameters. In EasyButtons you can't decorate functions with [Button] that have parameters (or they won't appear in the Inspector). At first look it might look as an obstacle but if you would like to pass some data, you could just call another function inside decorated method that can have parameters. Simple example:`,
    }),

    new Code({
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
      prism: {
        language: 'clike',
      },
    }),

    new Paragraph({
      value: `Using EasyButtons is that simple. You just need to add it to your project, import dependencies and decorate parameterless function with attribute.`,
    }),
  ],
};
