import {
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
  IconBrandGithub,
} from '@tabler/icons';

import { sortByDate } from '@/helpers/sortByDate';
import { indexToIcons } from '@/helpers/indexToIcons';
import { IProject } from '@/interfaces/dashboard/IProject';
import { PREDEFINED_LANGUAGES, defaultImageSrc } from '@/config';

const thumbnail = defaultImageSrc;

const { JAVASCRIPT, TYPESCRIPT, CSHARP, KOTLIN, JAVA } = PREDEFINED_LANGUAGES;

const icons = [
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
];

const rawProjects: IProject[] = [
  {
    name: 'Patchron',
    date: '2022-01-18',
    languages: [JAVASCRIPT],
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
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Patchron',
      },
    ],
  },

  {
    name: 'Portfolio (Jekyll)',
    date: '2021-09-29',
    languages: [JAVASCRIPT],
    tags: [
      {
        text: 'Semantic UI',
      },
      {
        text: 'Liquid',
      },
    ],
    description: 'Jekyll portfolio based on TechFolios template.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/trolit.github.io',
      },
    ],
  },

  {
    name: 'tonodedo',
    date: '2021-07-09',
    languages: [JAVASCRIPT],
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
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/tonodedo',
      },
    ],
  },

  {
    name: 'Leader selection algorithm',
    date: '2021-04-25',
    languages: [CSHARP],
    tags: [
      {
        text: 'WinForms',
      },
      {
        text: 'Distributed Systems',
      },
    ],
    description: `Election algorithm simulation in ring topology (Andrew Tanenbaum's variant) using .NET sockets mechanism and UDP protocol.`,
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/leader-selection-Tanenbaum',
      },
    ],
  },

  {
    name: 'Grocery store (frontend)',
    date: '2020-10-31',
    languages: [TYPESCRIPT],
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
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/grocery-store-angular#-grocery-store-angular',
      },
    ],
  },

  {
    name: 'Grocery store (backend)',
    date: '2020-09-21',
    languages: [JAVA],
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
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/grocery-store-themed-API#-grocery-store-api-v122',
      },
    ],
  },

  {
    name: 'Wordally',
    date: '2020-08-09',
    languages: [JAVASCRIPT],
    tags: [
      {
        text: 'Bootstrap 4',
      },
    ],
    description:
      'Tiny web tool that offers foreign language vocabulary learning, based on personal experience (short intervals, better effects).',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Wordally#wordally',
      },
    ],
  },

  {
    name: '3vry',
    date: '2020-06-03',
    languages: [KOTLIN],
    tags: [
      {
        text: 'Android',
      },
      {
        text: 'SQLite',
      },
      {
        text: 'Youtube API',
      },
    ],
    description: `Mobile app to encourage listening to music everyday and give a chance of finding something that wasn't heard before.`,
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/3vry#3vry',
      },
    ],
  },

  {
    name: 'Document And Compare',
    date: '2020-04-17',
    languages: [CSHARP],
    tags: [
      {
        text: 'Xamarin.Forms',
      },
      {
        text: 'Android',
      },
      {
        text: 'SQLite',
      },
    ],
    description:
      'Mobile app made to simplify documenting any "thing" under tag(s) and then quickly compare differences in generated doc.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/OS-expected/document-and-compare#document-and-compare',
      },
    ],
  },

  {
    name: 'sShuffler',
    date: '2020-04-12',
    languages: [CSHARP],
    tags: [
      {
        text: 'WinForms',
      },
      {
        text: '.NET Framework',
      },
    ],
    description:
      'Small, handy tool to give music playlists second life in format that is respected by car players.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/sShuffler',
      },
    ],
  },

  {
    name: 'EzGitDoc',
    date: '2020-02-23',
    languages: [JAVASCRIPT],
    tags: [
      {
        text: 'MDBootstrap',
      },
      {
        text: 'LESS',
      },
    ],
    description:
      'WYSIWYG web tool to let users easily and quickly develop repos documentation. First, stable version got released in 6 days.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/OS-expected/EzGitDoc',
      },
    ],
  },

  {
    name: 'Project Zero',
    date: '2019-06-16',
    languages: [CSHARP],
    tags: [
      {
        text: 'Unity 3D',
      },
    ],
    description:
      'Complete, educational, sandbox game about programming with 40 unique levels, 4 minigames, installer and rich documentation.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/projectZero',
      },
    ],
  },

  {
    name: 'NB Research Project',
    date: '2019-05-19',
    languages: [CSHARP],
    tags: [
      {
        text: 'CSP 2019',
      },
    ],
    description:
      'Naive Bayes Classifier efficency test when TRN set contains duplicates (Bootstrap) vs TRN containing unique objects only (Monte Carlo).',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/naive-bayes-classifiers-work#naive-bayes-classifiers-experimental-work',
      },
    ],
  },

  {
    name: 'A*',
    date: '2018-08-14',
    languages: [CSHARP],
    tags: [
      {
        text: 'WinForms',
      },
    ],
    description:
      'Attempt on A* algorithm visualization after finding out nice article in WinForms desktop app.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Inne/tree/master/Algorytm%20A_star#o-algorytmie-a',
      },
    ],
  },

  {
    name: 'Robots Strike',
    date: '2018-07-29',
    languages: [CSHARP],
    tags: [
      {
        text: 'Unity 3D',
      },
      {
        text: 'uNet',
      },
    ],
    description:
      'Meet Unity uNet technology while extending FPS project provided by Brackeys.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Robots_strike#robots-strike',
      },
    ],
  },

  {
    name: 'Last Human',
    date: '2018-06-10',
    languages: [CSHARP],
    tags: [
      {
        text: 'Unity 2D',
      },
    ],
    description:
      'Small 2D game project as personal second attempt to meet Unity IDE.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/LastHuman#last-human',
      },
    ],
  },

  {
    name: 'Projekt Enigma',
    date: '2018-01-07',
    languages: [CSHARP],
    tags: [],
    description: `Attempt to simulate three-rotor enigma as an project for science club. Versions before 2.0 doesn't count :p`,
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Kryptosystemy/tree/master/6.%20Enigma%20I#projekt-enigmawersja---sol3-v20',
      },
    ],
  },

  {
    name: 'Projekt Frog',
    date: '2017-11-12',
    languages: [CSHARP],
    tags: [
      {
        text: 'WinForms',
      },
    ],
    description:
      '2D game made in WinForms. Concept based on popular classic, Arcade Frogger with few enchancements like local coop.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/Projekt-Frog#projekt-frog',
      },
    ],
  },

  {
    name: 'Przepisownik 2016',
    date: '2016-07-19',
    languages: [JAVASCRIPT],
    tags: [],
    description:
      'Page storing culinary recipes. Project was made to get familiar with gridster library and release web recipe book.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'http://przepisownik2016.opx.pl/',
      },
    ],
  },

  {
    name: 'Przepisownik 2016',
    date: '2016-07-19',
    languages: [JAVASCRIPT],
    tags: [],
    description:
      'Page storing culinary recipes. Project was made to get familiar with gridster library and release web recipe book.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'http://przepisownik2016.opx.pl/',
      },
    ],
  },

  {
    name: 'cs_k1234_reedition',
    date: '2015-01-11',
    languages: [],
    tags: [],
    description:
      'Map developed for Counter Strike 1.6, made in Valve Hammer Editor tool.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://gamebanana.com/mods/92118',
      },
    ],
  },

  {
    name: 'Car Themed API',
    date: '2020-08-15',
    languages: [CSHARP],
    tags: [
      {
        text: 'NET Core 3.1',
      },
      {
        text: 'MediatR',
      },
      {
        text: 'integration tests',
      },
    ],
    description:
      'Basic CRUD implementation in car service theme in order to meet CQRS, MediatR, pagination and preview integration tests.',
    thumbnail,
    links: [
      {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: 'https://github.com/trolit/car-themed-API#car-themed-fake-api',
      },
    ],
  },
];

export const projects = sortByDate<IProject>(rawProjects).map(
  (project, index) => ({
    ...project,
    thumbnail: indexToIcons(icons, index, rawProjects.length),
  }),
);
