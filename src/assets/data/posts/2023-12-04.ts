import { IPost } from '@/interfaces/dashboard/IPost';
import { Header, Paragraph } from '@/services/useContentRenderer/components';

export const POST: IPost = {
  name: 'Vue x Composition API - try or not to try',

  abstract: `Composition API is more advanced approach when working with Vue as it comes with bigger flexibility. When I've started full stack project in 08.2022, I've decided to try out that API with big hopes but started to curse myself the longer I kept it but I think that I've finally found something promising and decided to share the details.`,

  tags: [{ text: 'Vue' }, { text: 'Composition API' }],

  date: '2023-12-04',

  references: {
    items: [],

    renderInParagraphs: true,

    renderAtTheEnd: true,
  },

  components: [
    new Header({
      value: 'Vue x Composition API - try or not to try',

      overrideComponentProps: {
        order: 1,
      },
    }),

    new Paragraph({
      value: ``,
    }),
  ],
};
