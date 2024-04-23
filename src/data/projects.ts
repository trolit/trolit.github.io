import { IProject } from '@/types/IProject';
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
    description: `Web app made from scratch, inteded to serve as source code intelligence "bank" 🏛️. It allows to save purpose of uploaded project(s) source code and extract chosen parts by generating zipped bundle. Due to dealing with sensitive data, it was built in a way to provide advanced access control over app (granular permissions system, workspace insights, data flow "footprints", sessions management). Apart of security measures it also provides implementation of real-time communication made with Engine.io, mailing system, global chat, option to store files locally or in S3 cloud (with option to easily implement own provider) and custom API ("Probata") for defining integration tests which are ran over testcontainers.`,
  },

  {
    name: 'Patchron',
    wrapperClassName: 'lg:col-span-7',
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
      'Bot made with Probot framework to support (not substitute) developers by making initial pull request code review. Can be used to e.g. watch over code conventions so reviewers can focus on other aspects of code. It runs set of rules (configured via JSON file) against hooked pull request data. Rules can be easily created via base class (see docs) plus bot can be ran via GitHub Actions.',
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
    description: `Top down view, educational, sandbox game with RPG elements about programming. The main motivation behind taking Unity was to face up challenge to create something complex (because in childhood I've attempted to learn Unity 3.x 🤪). It has 40 unique levels (5 lands x 8 levels), 4 minigames, character creation, NPCs interaction, dev console, installer, rich documentation and many more!`,
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
      'WYSIWYG tool 🪛 made with JS and JQuery to setup & generate interesting templates of markdown files (e.g. repository specifications). First, stable version was released in 6 days and afterwards it received total of 16 updates including settings, different themes, modal that allows to quickly jump to selected element or quickly swap two elements (so user does not have to drag element past N other components 😴).',
  },

  {
    name: 'tonodedo',
    wrapperClassName: 'lg:col-span-5',
    image: resolveProjectImagePath('tonodedo.png'),
    language: JAVASCRIPT_LANGUAGE,
    repositoryUrl: getGitHubUrl('tonodedo').toString(),
    startedAt: '2021-07-09',
    estimatedDurationInMonths: 0.1,
    tags: ['Node.js', 'React', 'MySQL', 'JWT'],
    links: [],
    description: `Simple todo app made in few days as task for recruitment process. Includes some unit tests done in Mocha.`,
  },

  {
    name: 'Leader selection algorithm',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-7',
    repositoryUrl: getGitHubUrl('leader-selection-Tanenbaum').toString(),
    startedAt: '2021-04-25',
    estimatedDurationInMonths: 2,
    tags: ['WinForms', 'Distributed Systems', 'WebSocket'],
    links: [],
    description: `This desktop application was made in order to simulate behaviour of leader election algorithm (Andrew Tanenbaum's variant) using .NET sockets mechanism and UDP protocol.`,
  },

  {
    name: 'Grocery store (frontend)',
    language: TYPESCRIPT_LANGUAGE,
    wrapperClassName: 'lg:col-span-5',
    repositoryUrl: getGitHubUrl('grocery-store-angular#-grocery-store-angular').toString(),
    startedAt: '2020-10-31',
    estimatedDurationInMonths: 1,
    tags: ['Angular 10', 'RxJS', 'Angular Material'],
    links: [],
    description: `Short, simple implementation of grocery store API which demonstrates shopping cart, sorting and filtering features from REST API created in Java.`,
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
    description: `Tiny tool that offers foreign language vocabulary learning. Approach based on personal experience.`,
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
    description: `Mobile app that allows to configure set of artists (or playlists) and afterwards on each day - gives random track. Allows to provide e.g. playlists IDs. The motivation behind taking Kotlin was to test different solution after checking out Xamarin.Forms`,
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
      'Mobile app designed to provide ability to document any element through photos and then generate PDF file that allows to easily compare changes like durability of hair dye, speed of hair growth, endurance of clothes material etc.',
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
    description: `Small, handy tool to give songs "second life". User provides set of tracks and sShuffler rearranges it's order, based on format that is respected by car audio players.`,
  },

  {
    name: 'NB Project',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('naive-bayes-classifiers-work').toString(),
    startedAt: '2019-05-19',
    estimatedDurationInMonths: 1,
    tags: ['.NET', 'CSP 2019'],
    links: [],
    description:
      'Program to test Naive Bayes Classifier efficency when training data set contains duplicates (Bootstrap) and then when it has unique objects only (Monte Carlo), made for scientific publication.',
  },

  {
    name: 'A*',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('Inne/tree/master/Algorytm%20A_star#o-algorytmie-a').toString(),
    startedAt: '2018-08-14',
    estimatedDurationInMonths: 1,
    tags: ['.NET', 'WinForms'],
    links: [],
    description: 'Algorithm visualization made after finding out interesting article at raywenderlich.com site.',
  },

  {
    name: 'Robots Strike',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('Robots_strike').toString(),
    startedAt: '2018-07-29',
    estimatedDurationInMonths: 1,
    tags: ['.NET', 'Unity 3D', 'uNet'],
    links: [],
    description:
      'Project made to meet Unity uNet technology and learn more about FPS game aspects like using Raycast technology for bullets.',
  },

  {
    name: 'Last Human',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-6',
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
    description: 'Small 2D platform game project as second attempt to Unity engine.',
  },

  {
    name: 'Enigma Project',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('Kryptosystemy/tree/master/6.%20Enigma%20I#projekt-enigmawersja---sol3-v20').toString(),
    startedAt: '2018-07-01',
    estimatedDurationInMonths: 1,
    tags: [],
    links: [],
    description: `My attempt in simulating three-rotor enigma as an project assigned while being in science club.`,
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
    wrapperClassName: 'lg:col-span-4',
    startedAt: '2016-06-20',
    estimatedDurationInMonths: 1,
    tags: ['gridster.js'],
    links: [
      {
        name: 'Website',
        url: 'http://przepisownik2016.opx.pl/',
      },
    ],
    description:
      'Page for storing culinary recipes. Project was made to play with gridster library and make own web recipe "book".',
  },

  {
    name: 'Car Themed API',
    language: CSHARP_LANGUAGE,
    wrapperClassName: 'lg:col-span-4',
    repositoryUrl: getGitHubUrl('car-themed-API').toString(),
    startedAt: '2020-08-15',
    estimatedDurationInMonths: 1,
    tags: ['NET Core 3.1', 'MediatR', 'integration tests'],
    links: [],
    description:
      'Basic CRUD implementation in car service theme to meet CQRS, MediatR, pagination and write some integration tests.',
  },
];

export default PROJECTS;