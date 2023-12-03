import { IPost } from '@/interfaces/dashboard/IPost';
import pixlrImage1 from '@/assets/media/posts/2022-01-09/1.png';
import pixlrImage2 from '@/assets/media/posts/2022-01-09/2.png';
import pixlrImage3 from '@/assets/media/posts/2022-01-09/3.png';
import { Photo, Header, Paragraph } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: `Awesome browser, photo editing tool`,

  abstract: `If you are looking after different tool to edit images and you are not fan of desktop apps then Pixlr might be worth checking. I'm continously using it since 2012 and it still appears to me as the best photo editing tool. It contains all basic tools and nice amount of effects that can be combined to achieve interesting effects.`,

  tags: [{ text: 'Tool' }],

  date: '2022-01-09',

  references: {
    items: [
      {
        match: 'Pixlr',
        title: 'Pixlr',
        url: 'https://pixlr.com',
      },
    ],

    renderInParagraphs: true,

    renderAtTheEnd: true,
  },

  components: [
    new Photo({
      description: '',

      overrideComponentProps: {
        src: pixlrImage1,
      },
    }),

    new Header({
      value: `Awesome browser, photo editing tool`,

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: `Pixlr is known to me since 2012 and the purpose of the post is unforced, voluntary recommendation. It serves me to remove the background, edit photo parts or create new one from collected clippings. As for the advantages it does not require any software installation and account creation. It allows to load images from URL. Project can be saved in format to restore it's structure. Pixlr contains nice effects, stickers, brush for overwriting specified color, cutting out (including lasso). I won't go into details of it's features since there is too much to describe. There are versions X (Express) and E (Editor) available, depending on whether we need to make quick modification (X) or work on advanced project (E). Personally I'm used to Pixlr Editor because Express GUI is too minimalistic to me. Pixlr's can be used for free, no watermarks. Of course there are ads and limits e.g. limited number of icons, stickers to pick from Pixlr but still it isn't that restricted like some other apps where you are literally forced to buy paid version or you won't finish your work or make anything. It can be extended with optional premium package which isn't invasive and adds more features. Below comparision between X and E GUI.`,
    }),

    new Photo({
      description: 'Pixlr E',

      overrideComponentProps: {
        src: pixlrImage2,
      },
    }),

    new Photo({
      description: 'Pixlr X',

      overrideComponentProps: {
        src: pixlrImage3,
      },
    }),

    new Paragraph({
      value: `Pixlr authors constantly improve their software 💙. Recently it has been extended with animations panel. If you are are looking after convenient graphics editor which: isn't complicated, is available online, does not force to create account, free version isn't stripped down in a way that it's unusable, has a lot of interesting features then Pixlr is good candidate to recommend.`,
    }),
  ],
};
