import { IPost } from '@/interfaces/dashboard/IPost';
import updatePushedCommitImage from '@/assets/media/posts/2021-12-29/1.png';
import { Code, Photo, Header, Paragraph } from '@/services/useContentRenderer/components';

const title = `Update pushed commit(s) details`;

export const POST: IPost = {
  name: title,

  abstract: `If you've accidentally pushed commit to repository that you would like to change(e.g. committer details) check this post on how to do it using git rebase and commit with amend flag.`,

  tags: [{ text: 'Git' }],

  date: '2021-12-29',

  references: {
    items: [
      {
        title: 'Git - change commit name',
        url: 'http://treeindev.net/article/git-change-commit-name',
      },
      {
        match: 'extra procedure',
        title: 'How to reopen a pull-request after a force-push?',
        url: 'https://gist.github.com/robertpainsi/2c42c15f1ce6dab03a0675348edd4e2c',
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: true,
  },

  components: [
    new Photo({
      description: '',

      overrideComponentProps: {
        src: updatePushedCommitImage,

        width: '400px',
      },
    }),

    new Header({
      value: title,

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: `When working with git, mistakes happen quite often (especially if you need to switch between few projects). For instance someone can commit with wrong email :D. Situation gets complicated when we find it out after doing push. Fortunately commit details can be updated. Below example on how to do this using git rebase and commit with amend flag. Of course there are other ways (e.g. inserting commands directly under commit(s) that we want to change while editing rebase config) but that one came out to be hassle-free and easy to control (for me) ¯\\_(ツ )_/¯`,
    }),

    new Paragraph({
      value: `Move onto the branch whose commits you want to change. Check on how big Z (Z = 1, 2, ..., n + 1) value you need to access that commit(s). For given Z execute command:`,
    }),

    new Code({
      value: `git rebase -i HEAD~Z`,

      prism: {
        language: 'bash',
      },
    }),

    new Paragraph({
      value: `You will get last Z commit(s) in editor. Open remote repository and go to the same branch to display list of commits. Compare commit(s) identifiers. Change pick to edit for commit(s) that you want to update (in vi editor click A to turn on INSERT mode). Exit INSERT mode (in vi click Escape to do so). Save file and exit editor (in vi type :wq! and hit Enter). Modify --author value in command below and execute these`,
    }),

    new Code({
      value: `git commit --amend --author="Fikcyjny Kowalski <fikcyjny@example.com>"
      
git rebase --continue`,

      prism: {
        language: 'bash',
      },
    }),

    new Paragraph({
      value: `until you see, Successfully rebased and updated... In the meantime conflicts may interrupt rebase process (if they occured to the indicated commit) and screens asking for filling in comments for commits that are being changed. Pay attention to the terminal messages to complete rebase process.`,
    }),

    new Code({
      label: 'Execute command:',

      value: `git push -f`,

      prism: {
        language: 'bash',
      },
    }),

    new Paragraph({
      value: `Note: If changes refer to closed, unmerged PR, it's worth to open it again before pushing rebase results or in other case you will be forced to do extra procedure to be able to open PR again to see these changes to take effect into already logged PR.`,
    }),

    new Paragraph({
      value: `(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. *`,
    }),

    new Paragraph({
      value: `Done!`,
    }),
  ],
};
