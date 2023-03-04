import { IBaseContent } from '@/services/useContentRenderer/interfaces';

import { Code, Paragraph, Photo } from '@/services/useContentRenderer/components';

export const PATCHRON_PROJECT_ARTICLE: IBaseContent = {
  components: [
    new Photo({
      description: '',

      overrideComponentProps: {
        src: require('@/assets/media/projects/patchron/banner.png'),
      },
    }),

    new Paragraph({
      value: `Patchron (initially named as Pepega The Detective) was wandering around my head once I've spotted Probot. I wanted to test that framework out and at the same time make tool that - once GitHub PR is opened - would perform basic code review for issuer. I didn't want to rely on compilers. I wanted to create my own logic of "understanding" received source code, depending on rule. After deep analysis of data structure given within hook, I've faced major obstacle.`,
    }),

    new Paragraph({
      value: `If issued pull request targets changes on part of source code, in hooked event we only have access to those code parts. Of course we also have few more lines per hunk header but most of the times, it won't be enough to determine context of analyzed fragment. There is option to request complete file from specific commit but such approach would easily deplete available resources (and most probably would result in a block). I've decided to accept such limit and continue on.`,
    }),

    new Paragraph({
      value: `We can create rules for specific extension or for pull request itself. I've created some to showcase the idea behind configuration that is taking place in json file and how to use base class. Each exposed rule has following properties`,
    }),

    new Code({
      value: `{
        "enabled": true,
        "rulename": "v1/common/FixedLoopLengthCondition",
        "config": {
            "regex": "(\\w+).length"
        }
    },`,

      prism: {
        language: 'json',
      },
    }),

    new Paragraph({
      value: `So without having to modify app source code, potential user can tweak each rule's state, source and configuration. Then those rules can be grouped by extension or by directory (depending on needs)`,
    }),

    new Code({
      value: `// (1) via extension
    {
      "pull": [],
      "files": {
          "js": [],
          "vue": []
      }
    }  
    // (2) via relative paths
    {
      "pull": [],
      "files": [
          "server/*": {
              "js": [
                  { }
              ]
          },
          "client/*": {
              "js": [
                  { }
              ],
              "vue": [
                  { }
              ]
          }
      ]
    }`,

      prism: {
        language: 'json',
      },
    }),

    new Paragraph({
      value: `and then saved at some place and used within GitHub Actions workflow to obtain basic code review with least efforts ⚡`,
    }),

    new Code({
      value: `
      - run: npm start
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }} # or secrets.PAT
          NODE_ENV: "github"
          RULES_CONFIGURATION_URL: 'https://raw.githubusercontent.com/trolit/Patchron/master/.github/examples/rulesByRelativePaths.json'`,

      prism: {
        language: 'yaml',
      },
    }),

    new Paragraph({
      value: `Project came out as curiosity to find out Probot framework, play with Node, improve JavaScript experience, deeply understand how GIT identifies lines, translate hooked data so it can be analyzed further, find ways to determine whether code fragment is invalid, write unit tests to produce some cases for rules implementations and finally combine bot with GitHub actions so it can be used in other repositories without having to deploying own instance of application.`,
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
      value: `more insights can be found in README at GitHub (Patchron)`,

      overrideComponentProps: {
        align: 'center',
      },
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
