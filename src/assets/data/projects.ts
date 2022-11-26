import {
  IconDice1,
  IconDice2,
  IconDice3,
  IconDice4,
  IconDice5,
  IconDice6,
} from '@tabler/icons';

import { DEFAULT_IMAGE_SRC } from '@/config';
import {
  WWW_LINK,
  VIDEO_LINK,
  GITHUB_LINK,
  GALLERY_LINK,
  DOCUMENTATION_LINK,
} from '@/assets/constants/predefined-links';
import {
  JAVA_LANGUAGE,
  CSHARP_LANGUAGE,
  KOTLIN_LANGUAGE,
  JAVASCRIPT_LANGUAGE,
  TYPESCRIPT_LANGUAGE,
} from '@/assets/constants/predefined-languages';
import { sortByDate } from '@/helpers/sortByDate';
import { indexToIcons } from '@/helpers/indexToIcons';
import { IProject } from '@/interfaces/dashboard/IProject';

const thumbnail = DEFAULT_IMAGE_SRC;

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
    name: 'Personal portfolio Y22',
    date: '2022-11-04',
    languages: [TYPESCRIPT_LANGUAGE],
    tags: [
      {
        text: 'React',
      },
      {
        text: 'Redux',
      },
      {
        text: 'Mantine UI',
      },
    ],
    description:
      'New personal portfolio made from scratch during break on primary full stack project.',
    thumbnail,
    links: [GITHUB_LINK('Patchron')],
  },

  {
    name: 'Patchron',
    date: '2022-01-18',
    languages: [JAVASCRIPT_LANGUAGE],
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
    links: [GITHUB_LINK('Patchron')],
  },

  {
    name: 'Personal portfolio Y20',
    date: '2021-09-29',
    languages: [JAVASCRIPT_LANGUAGE],
    tags: [
      {
        text: 'Jekyll',
      },
      {
        text: 'Liquid',
      },
      {
        text: 'Semantic UI',
      },
    ],
    description:
      'Portfolio website based on TechFolios v1 template. Used from 2020, reworked in 2021.',
    thumbnail,
    links: [GITHUB_LINK('jekyll-portfolio#about')],
  },

  {
    name: 'tonodedo',
    date: '2021-07-09',
    languages: [JAVASCRIPT_LANGUAGE],
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
    links: [GITHUB_LINK('tonodedo')],
  },

  {
    name: 'Leader selection algorithm',
    date: '2021-04-25',
    languages: [CSHARP_LANGUAGE],
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
    links: [GITHUB_LINK('leader-selection-Tanenbaum')],
  },

  {
    name: 'Grocery store (frontend)',
    date: '2020-10-31',
    languages: [TYPESCRIPT_LANGUAGE],
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
      GITHUB_LINK('grocery-store-angular#-grocery-store-angular'),
      GALLERY_LINK(
        'https://github.com/trolit/grocery-store-angular#-launch-preview-',
      ),
    ],
  },

  {
    name: 'Grocery store (backend)',
    date: '2020-09-21',
    languages: [JAVA_LANGUAGE],
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
    links: [GITHUB_LINK('grocery-store-themed-API#-grocery-store-api-v122')],
  },

  {
    name: 'Wordally',
    date: '2020-08-09',
    languages: [JAVASCRIPT_LANGUAGE],
    tags: [
      {
        text: 'Bootstrap 4',
      },
      {
        text: 'gulp.js',
      },
    ],
    description:
      'Tiny web tool that offers foreign language vocabulary learning, based on personal experience (short intervals, better effects).',
    thumbnail,
    links: [
      GITHUB_LINK('Wordally#wordally'),
      GALLERY_LINK('https://github.com/trolit/Wordally#screenshots'),
      WWW_LINK('https://trolit.github.io/Wordally/', 'Preview'),
    ],
  },

  {
    name: '3vry',
    date: '2020-06-03',
    languages: [KOTLIN_LANGUAGE],
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
      GITHUB_LINK('3vry#3vry'),
      GALLERY_LINK('https://github.com/trolit/3vry#screens'),
      VIDEO_LINK('https://www.youtube.com/watch?v=ZJ2wglKpu5M'),
    ],
  },

  {
    name: 'Document And Compare',
    date: '2020-04-17',
    languages: [CSHARP_LANGUAGE],
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
      GITHUB_LINK('document-and-compare#document-and-compare', 'OS-expected'),
      GALLERY_LINK(
        'https://github.com/OS-expected/document-and-compare#screens',
      ),
    ],
  },

  {
    name: 'sShuffler',
    date: '2020-04-12',
    languages: [CSHARP_LANGUAGE],
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
    links: [GITHUB_LINK('sShuffler')],
  },

  {
    name: 'EzGitDoc',
    date: '2020-02-23',
    languages: [JAVASCRIPT_LANGUAGE],
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
      GITHUB_LINK('EzGitDoc', 'OS-expected'),
      DOCUMENTATION_LINK(
        'https://os-expected.github.io/EzGitDoc-documentation/',
      ),
    ],
  },

  {
    name: 'Project Zero',
    date: '2019-06-16',
    languages: [CSHARP_LANGUAGE],
    tags: [
      {
        text: 'Unity 3D',
      },
    ],
    description:
      'Complete, educational, sandbox game about programming with 40 unique levels, 4 minigames, installer and rich documentation.',
    thumbnail,
    links: [
      GITHUB_LINK('projectZero'),
      VIDEO_LINK('https://www.youtube.com/watch?v=W4FGTbqTwsY', '1 (features)'),
      VIDEO_LINK('https://www.youtube.com/watch?v=UtQ0g11_Juc', '2 (levels)'),
    ],
  },

  {
    name: 'NB Research Project',
    date: '2019-05-19',
    languages: [CSHARP_LANGUAGE],
    tags: [
      {
        text: 'CSP 2019',
      },
    ],
    description:
      'Naive Bayes Classifier efficency test when TRN set contains duplicates (Bootstrap) vs TRN containing unique objects only (Monte Carlo).',
    thumbnail,
    links: [
      GITHUB_LINK(
        'naive-bayes-classifiers-work#naive-bayes-classifiers-experimental-work',
      ),
    ],
  },

  {
    name: 'A*',
    date: '2018-08-14',
    languages: [CSHARP_LANGUAGE],
    tags: [
      {
        text: 'WinForms',
      },
    ],
    description:
      'Attempt on A* algorithm visualization after finding out nice article in WinForms desktop app.',
    thumbnail,
    links: [GITHUB_LINK('Inne/tree/master/Algorytm%20A_star#o-algorytmie-a')],
  },

  {
    name: 'Robots Strike',
    date: '2018-07-29',
    languages: [CSHARP_LANGUAGE],
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
    links: [GITHUB_LINK('Robots_strike#robots-strike')],
  },

  {
    name: 'Last Human',
    date: '2018-06-10',
    languages: [CSHARP_LANGUAGE],
    tags: [
      {
        text: 'Unity 2D',
      },
    ],
    description:
      'Small 2D game project as personal second attempt to meet Unity IDE.',
    thumbnail,
    links: [
      GITHUB_LINK('LastHuman#last-human'),
      VIDEO_LINK('https://www.youtube.com/watch?v=hcdU7WipB5c', 'v0.31'),
      VIDEO_LINK('https://www.youtube.com/watch?v=aM6dEtEPYnU', 'v0.40'),
    ],
  },

  {
    name: 'Projekt Enigma',
    date: '2018-01-07',
    languages: [CSHARP_LANGUAGE],
    tags: [],
    description: `Attempt to simulate three-rotor enigma as an project for science club. Versions before 2.0 doesn't count :p`,
    thumbnail,
    links: [
      GITHUB_LINK(
        'Kryptosystemy/tree/master/6.%20Enigma%20I#projekt-enigmawersja---sol3-v20',
      ),
    ],
  },

  {
    name: 'Projekt Frog',
    date: '2017-11-12',
    languages: [CSHARP_LANGUAGE],
    tags: [
      {
        text: 'WinForms',
      },
    ],
    description:
      '2D game made in WinForms. Concept based on popular classic, Arcade Frogger with few enchancements like local coop.',
    thumbnail,
    links: [GITHUB_LINK('Projekt-Frog#projekt-frog')],
  },

  {
    name: 'Przepisownik 2016',
    date: '2016-07-19',
    languages: [JAVASCRIPT_LANGUAGE],
    tags: [],
    description:
      'Page storing culinary recipes. Project was made to get familiar with gridster library and release web recipe book.',
    thumbnail,
    links: [WWW_LINK('http://przepisownik2016.opx.pl/', 'Source')],
  },

  {
    name: 'Car Themed API',
    date: '2020-08-15',
    languages: [CSHARP_LANGUAGE],
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
    links: [GITHUB_LINK('car-themed-API#car-themed-fake-api')],
  },
];

export const projects = sortByDate<IProject>(rawProjects).map(
  (project, index) => ({
    ...project,
    thumbnail: indexToIcons(icons, index, rawProjects.length),
  }),
);