import { IBaseContent } from '@/services/useContentRenderer/interfaces';

import { Paragraph, Photo } from '@/services/useContentRenderer/components';

export const PATCHRON_PROJECT_ARTICLE: IBaseContent = {
  components: [
    new Photo({
      description: '',

      overrideComponentProps: {
        src: require('@/assets/media/projects/patchron/banner.png'),
      },
    }),

    new Paragraph({
      value: `Patchron (initially named as Pepega The Detective) was wandering around my head once I've spotted Probot. I wanted to test that framework out and at the same time make tool that - once GitHub PR is opened - would perform basic code review for issuer. I didn't want to rely on compilers. I wanted to create my own logic of "understanding" received source code, depending on rule. After deep analysis of data structure given within hook, I've faced major problem.`,
    }),

    new Paragraph({
      value: `If issued pull request targets changes on part of source code in hooked event, we only have access to those code parts. Of course we also have few more lines per hunk header but most of the times, it won't be enough to determine context of analyzed fragment. There is option to request complete file from specific commit but such approach would easily deplete available resources (and most probably would result in a block). Therefore I've decided to accept such disadvantage and continue on. Anyway, nevertheless of that limit, if we would seek for code review tool, we would look after advanced ESLint config or extension where we would have access to whole source code, without necessity to handle API requests.`,
    }),

    new Paragraph({
      value: `Project came out as curiosity to find out Probot framework and in the meantime do something bigger with Node.js, improve JavaScript experience, deeply understand how GIT identifies lines, how to translate hooked data so it can be analyzed further, how to determine whether code fragment is invalid (depending on rule), write unit tests to test out rules logic, apply jsdoc to leave code documentation and lastly combine bot with GitHub actions. `,
    }),

    new Photo({
      description: 'StrictWorkflow rule preview',

      overrideComponentProps: {
        src: require('@/assets/media/projects/patchron/example1.png'),
      },
    }),

    new Photo({
      description: 'SingleLineBlockPattern rule preview',

      overrideComponentProps: {
        src: require('@/assets/media/projects/patchron/example2.png'),
      },
    }),

    new Paragraph({
      value: `more insights can be found in Patchron's README at GitHub repository 😃`,
    }),
  ],

  references: {
    items: [
      {
        match: 'Probot',
        title: 'Probot',
        url: 'https://probot.github.io/',
      },

      {
        match: 'Patchron',
        title: 'Patchron',
        url: 'https://github.com/trolit/Patchron',
      },

      {
        match: 'hunk header',
        title: 'hunk header',
        url: 'https://github.com/trolit/Patchron/blob/master/.github/DEV_OVERVIEW.md#11--patch-details',
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: false,
  },
};
