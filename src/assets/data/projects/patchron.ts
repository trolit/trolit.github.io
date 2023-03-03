import { IBaseContent } from '@/services/useContentRenderer/interfaces';

import { Header } from '@/services/useContentRenderer/components';

export const PATCHRON_PROJECT_ARTICLE: IBaseContent = {
  components: [
    new Header({
      value: 'Patchron',

      overrideComponentProps: {
        order: 1,
      },
    }),
  ],
};
