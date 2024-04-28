import { IProject } from '@/types/IProject';
import { sortByDate } from '@/helpers/sortByDate';
import { getGitHubUrl } from '@/helpers/getGitHubUrl';
import { CSHARP_LANGUAGE, JAVASCRIPT_LANGUAGE, JAVA_LANGUAGE, KOTLIN_LANGUAGE, TYPESCRIPT_LANGUAGE } from './languages';
import { getYouTubeUrl } from '@/helpers/getYouTubeUrl';
import { resolveImagePath } from '@/helpers/resolveImagePath';

const resolveProjectImagePath = (filename: string) => resolveImagePath(`projects/${filename}`);

const PROJECTS: IProject[] = [
  {
    name: 'itvault',
    wrapperClassName: 'lg:col-span-12',
    language: TYPESCRIPT_LANGUAGE,
    repositoryUrl: getGitHubUrl('itvault').toString(),
    startedAt: '2023-03-01',
    estimatedDurationInMonths: 16,
    tags: [
      'Node.js',
      'Express.js',
      'TypeORM',
      'Formidable',
      'LocalStack',
      'Mocha',
      'Cypress',
      'Engine.io',
      'Vue',
      'apexcharts',
      'Naive UI',
      'PostCSS',
      'Pinia',
      'vee-validate',
      'MySQL',
      'Redis',
      'RabbitMQ',
      'winston',
      'yup',
      'mustache',
      'nodemailer',
      'tsyringe',
      'JWT',
      'testcontainers',
    ],
    youTubeId: 'aJ9LEZ9TF4k',
    links: [],
    description: `Source code intelligence "bank" 🏛️. Allows to save purpose of uploaded project(s) source code and extract chosen parts on demand. Due to dealing with sensitive data, it was built in a way to provide advanced access control over app (granular permissions system, workspace insights, data flow "footprints", sessions management). It also provides implementation of real-time communication made with Engine.io, mailing system, global chat, option to store files locally or in S3 cloud (with option to easily add own provider) and custom API ("Probata") for defining integration tests which are ran over testcontainers.`,
  },

  {
    name: 'Patchron',
    wrapperClassName: 'lg:col-span-6',
    language: JAVASCRIPT_LANGUAGE,
    image: resolveProjectImagePath('patchron.jpg'),
    repositoryUrl: getGitHubUrl('patchron').toString(),
    startedAt: '2022-01-18',
    estimatedDurationInMonths: 6,
    tags: ['Node.js', 'Probot', 'Jest', 'octokit', 'GitHub Actions', 'jsdoc', 'bot'],
    links: [
      {
        name: 'Bot in action',
        url: 'https://github.com/trolit/patchron-test/pulls',
      },
    ],
    description:
      'Bot to support (not substitute) developers by making initial pull request code review. Can be used to e.g. watch over agreed code conventions so reviewers can focus on more important aspects of code. It runs set of rules (configured via JSON file) against hooked pull request data. Rules can be easily added via base class plus bot can be ran via GitHub Actions.',
  },

  {
    name: 'Project Zero',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-12',
    repositoryUrl: getGitHubUrl('projectZero').toString(),
    startedAt: '2019-06-16',
    estimatedDurationInMonths: 6,
    tags: ['Unity 3D', 'A*'],
    youTubeId: 'W4FGTbqTwsY',
    links: [
      {
        name: 'Levels demonstration',
        url: getYouTubeUrl('UtQ0g11_Juc').toString(),
      },
    ],
    description: `Top down view, educational, sandbox game with RPG elements about programming. The main motivation behind taking Unity was to face up challenge to create something complex (in childhood I've attempted to learn Unity 3.x 🤪). It has 40 unique levels (5 lands x 8 levels), 4 minigames, character creation, NPCs interaction, dev console, installer, rich documentation and much more!`,
  },

  {
    name: 'EzGitDoc',
    wrapperClassName: 'lg:col-span-7',
    image: resolveProjectImagePath('ezGitDoc.png'),
    language: JAVASCRIPT_LANGUAGE,
    repositoryUrl: getGitHubUrl('EzGitDoc', 'OS-expected').toString(),
    startedAt: '2020-02-23',
    estimatedDurationInMonths: 1,
    tags: ['MD Bootstrap', 'Less.js', 'JQuery', 'Font Awesome', 'FileSaverJS', 'SortableJS', 'Docusaurus', 'Algolia'],
    links: [
      {
        name: 'Tool',
        url: 'https://os-expected.github.io/EzGitDoc/',
      },
      {
        name: 'Documentation',
        url: 'https://os-expected.github.io/EzGitDoc-documentation/',
      },
    ],
    description:
      'WYSIWYG tool 🪛 created with JS and JQuery to setup & generate interesting templates of markdown files (e.g. repository specifications). First, stable version was released in 6 days and afterwards it received total of 16 updates including settings,  different themes, modal that allows to quickly jump to selected element or quickly swap two elements (so user does not have to drag element past N other components 😴).',
  },

  {
    name: 'Leader selection algorithm',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
    repositoryUrl: getGitHubUrl('leader-selection-Tanenbaum').toString(),
    startedAt: '2021-04-25',
    estimatedDurationInMonths: 2,
    tags: ['WinForms', 'Distributed Systems', 'WebSocket'],
    links: [],
    description: `This desktop application demonstrates behaviour of leader election algorithm (Andrew Tanenbaum's variant) using .NET sockets mechanism and UDP protocol.`,
  },

  {
    name: 'Grocery store (frontend)',
    language: TYPESCRIPT_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('grocery-store-angular#-grocery-store-angular').toString(),
    startedAt: '2020-10-31',
    estimatedDurationInMonths: 1,
    tags: ['Angular 10', 'RxJS', 'Angular Material'],
    links: [],
    description: `Short, simple frontend demonstrating shopping cart, sorting and filtering features implemented on server side in Java.`,
  },

  {
    name: 'Grocery store (backend)',
    language: JAVA_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('grocery-store-themed-API').toString(),
    startedAt: '2020-09-21',
    estimatedDurationInMonths: 1,
    tags: ['H2', 'Maven', 'Spring Boot 2.3.4'],
    links: [],
    description: `Grocery store API implementation in Java (JDK 14) using Spring Boot, JPA, Hibernate, Querydsl.`,
  },

  {
    name: 'Wordally',
    language: JAVASCRIPT_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('Wordally').toString(),
    startedAt: '2020-08-09',
    estimatedDurationInMonths: 1,
    tags: ['Bootstrap 4', 'gulp.js'],
    links: [
      {
        name: 'Page',
        url: 'https://trolit.github.io/Wordally/',
      },
    ],
    description: `Tiny tool that for learning foreign language vocabulary.`,
  },

  {
    name: '3vry',
    language: KOTLIN_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
    image: resolveProjectImagePath('3vry.png'),
    repositoryUrl: getGitHubUrl('3vry').toString(),
    startedAt: '2020-06-03',
    estimatedDurationInMonths: 1,
    tags: ['Android', 'SQLite', 'Youtube API'],
    links: [],
    youTubeId: 'ZJ2wglKpu5M',
    youTubeVideoInSeparateLine: true,
    description: `Mobile app that promotes listening to music. User configures set of artists (or playlists) and afterwards on each day gets random track according to preferences. The motivation behind taking Kotlin was to test different solution after playing with Xamarin.Forms`,
  },

  {
    name: 'Document And Compare',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
    image: resolveProjectImagePath('docAndCom.png'),
    repositoryUrl: getGitHubUrl('document-and-compare', 'OS-expected').toString(),
    startedAt: '2020-04-17',
    estimatedDurationInMonths: 1,
    tags: ['Android', 'Xamarin.Forms', 'SQLite'],
    links: [],
    description:
      'Mobile app designed to provide ability to document any case through photos and then generate PDF file that allows to easily compare changes like durability of hair dye, speed of hair growth, endurance of clothes material etc.',
  },

  {
    name: 'sShuffler',
    language: CSHARP_LANGUAGE,
    image: resolveProjectImagePath('sShuffler.PNG'),
    wrapperClassName: 'lg:col-span-5',
    repositoryUrl: getGitHubUrl('sShuffler').toString(),
    startedAt: '2020-04-12',
    estimatedDurationInMonths: 1,
    tags: ['WinForms', '.NET Framework'],
    links: [],
    description: `Small tool that gives songs "second life" by shuffling their order. It's based on format that is respected by car audio players.`,
  },

  {
    name: 'NB Project',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-5',
    repositoryUrl: getGitHubUrl('naive-bayes-classifiers-work').toString(),
    startedAt: '2019-05-19',
    estimatedDurationInMonths: 1,
    tags: ['.NET', 'CSP 2019'],
    links: [],
    description:
      'Program to test Naive Bayes Classifier efficency when training data set contains duplicates (Bootstrap) and then when it has unique objects only (Monte Carlo), made for scientific publication.',
  },

  {
    name: 'Last Human',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-7',
    image: resolveProjectImagePath('lastHuman.png'),
    repositoryUrl: getGitHubUrl('LastHuman').toString(),
    startedAt: '2018-06-11',
    estimatedDurationInMonths: 1,
    tags: ['Unity 2D'],
    links: [
      {
        name: 'v0.31 preview',
        url: getYouTubeUrl('hcdU7WipB5c').toString(),
      },
      {
        name: 'v0.40 preview',
        url: getYouTubeUrl('aM6dEtEPYnU').toString(),
      },
    ],
    description: 'Small 2D platform game project as second attempt to Unity.',
  },

  {
    name: 'Project Frog',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
    image: resolveProjectImagePath('projectFrog.png'),
    repositoryUrl: getGitHubUrl('Kryptosystemy/tree/master/6.%20Enigma%20I#projekt-enigmawersja---sol3-v20').toString(),
    startedAt: '2017-11-18',
    estimatedDurationInMonths: 1,
    tags: ['.NET', 'WinForms'],
    links: [],
    description:
      '2D game made in WinForms for University project. Project concept based on popular arcade game, Frogger with few personal enchancements like local cooperation.',
  },

  {
    name: 'Przepisownik 2016',
    language: JAVASCRIPT_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
    startedAt: '2016-06-20',
    estimatedDurationInMonths: 1,
    tags: ['gridster.js'],
    links: [
      {
        name: 'Website',
        url: 'http://przepisownik2016.opx.pl/',
      },
    ],
    description: 'Site created to store references to interesting culinary recipes.',
  },
];

export const SORTED_PROJECTS: IProject[] = sortByDate<IProject>(PROJECTS);
