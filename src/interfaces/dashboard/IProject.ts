import { Icon as TablerIcon } from '@tabler/icons-react';

import { ITag } from '@/interfaces/ITag';
import { ILink } from '@/interfaces/ILink';
import { ILanguage } from '@/interfaces/ILanguage';
import { IBaseContent } from '@/services/useContentRenderer/interfaces';

export interface IProject {
  thumbnail: string | TablerIcon[];

  name: string;

  startedAt: string;

  publishedAt: string;

  description: string;

  languages: ILanguage[];

  tags: ITag[];

  links: ILink[];

  article?: IBaseContent;
}
