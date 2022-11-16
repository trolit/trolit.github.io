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
];
