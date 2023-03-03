import { IBaseContent } from '@/services/useContentRenderer/interfaces';

import { Header } from '@/services/useContentRenderer/components';

export const patchronProjectArticle: IBaseContent = {
  components: [
    new Header({
      value: 'Patchron',

      overrideComponentProps: {
        order: 1,
      },
    }),
  ],
};
