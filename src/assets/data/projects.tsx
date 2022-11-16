import { defaultImageSrc } from './common';
import { IProject } from '@/interfaces/dashboard/IProject';

const IMAGES = 'assets/media/projects';

export const projects: IProject[] = [
  {
    name: 'Patchron',
    date: '2022-01-18',
    languages: ['JavaScript'],
    tags: [
      {
        text: 'Probot',
      },
      {
        text: 'jsdoc',
      },
      {
        text: 'Jest',
      },
    ],
    description:
      'GitHub bot intended to provide first, early pull request review and faster further reviews done by humans. Includes type definitions and unit tests written in Jest.',
    thumbnail: require(`@/${IMAGES}/patchron.jpg`),
    target: 'https://github.com/trolit/Patchron',
  },

  {
    name: 'Portfolio (Jekyll)',
    date: '2021-09-29',
    languages: ['JavaScript'],
    tags: [
      {
        text: 'Semantic UI',
      },
      {
        text: 'Liquid',
      },
    ],
    description: 'Jekyll portfolio based on TechFolios template.',
    thumbnail: defaultImageSrc,
    target: 'https://github.com/trolit/trolit.github.io',
  },

  {
    name: 'tonodedo',
    date: '2021-07-09',
    languages: ['JavaScript'],
    tags: [
      {
        text: 'Node.js',
      },
      {
        text: 'React 17',
      },
      {
        text: 'MySQL',
      },
      {
        text: 'JWT',
      },
    ],
    description: `First approach to React with Node.js as web application for storing user's notes with some unit tests done in Mocha.`,
    thumbnail: require(`@/${IMAGES}/tonodedo.png`),
    target: 'https://github.com/trolit/tonodedo',
  },

  {
    name: 'Leader selection algorithm',
    date: '2021-04-25',
    languages: ['C#'],
    tags: [
      {
        text: 'WinForms',
      },
      {
        text: 'Distributed Systems',
      },
    ],
    description: `Election algorithm simulation in ring topology (Andrew Tanenbaum's variant) using .NET sockets mechanism and UDP protocol.`,
    thumbnail: require(`@/${IMAGES}/leader-selection.png`),
    target: 'https://github.com/trolit/leader-selection-Tanenbaum',
  },

  {
    name: 'Grocery store (frontend)',
    date: '2020-10-31',
    languages: ['TypeScript'],
    tags: [
      {
        text: 'Angular 10',
      },
      {
        text: 'RxJS',
      },
      {
        text: 'Angular Material',
      },
    ],
    description:
      'Grocery Store API frontend demonstration including sessionStorage, shopping cart, sorting and filtering.',
    thumbnail: defaultImageSrc,
    target:
      'https://github.com/trolit/grocery-store-angular#-grocery-store-angular',
  },

  {
    name: 'Grocery store (backend)',
    date: '2020-09-21',
    languages: ['Java'],
    tags: [
      {
        text: 'Maven',
      },
      {
        text: 'H2',
      },
      {
        text: 'Spring Boot 2.3.4',
      },
    ],
    description:
      'Grocery store API implementation in Java (JDK 14) using Spring Boot, JPA, Hibernate, Querydsl.',
    thumbnail: defaultImageSrc,
    target:
      'https://github.com/trolit/grocery-store-themed-API#-grocery-store-api-v122',
  },

  {
    name: 'Wordally',
    date: '2020-08-09',
    languages: ['JavaScript'],
    tags: [
      {
        text: 'Bootstrap 4',
      },
    ],
    description:
      'Tiny web tool that offers foreign language vocabulary learning, based on personal experience (short intervals, better effects).',
    thumbnail: require(`@/${IMAGES}/wordally.png`),
    target: 'https://github.com/trolit/Wordally#wordally',
  },

  {
    name: '3vry',
    date: '2020-06-03',
    languages: ['Kotlin'],
    tags: [
      {
        text: 'Android',
      },
      {
        text: 'SQLite',
      },
      {
        text: 'YoutubeAPI',
      },
    ],
    description: `Mobile app to encourage listening to music everyday and give a chance of finding something that wasn't heard before.`,
    thumbnail: require(`@/${IMAGES}/3vry.png`),
    target: 'https://github.com/trolit/3vry#3vry',
  },
];
