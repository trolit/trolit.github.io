import { TablerIcon } from '@tabler/icons';

import { ITag } from '@/interfaces/ITag';
import { ILink } from '@/interfaces/ILink';
import { ILanguage } from '@/interfaces/ILanguage';

export interface IProject {
  thumbnail: string | TablerIcon[];

  name: string;

  date: string;

  description: string;

  languages: ILanguage[];

  tags: ITag[];

  links: ILink[];
}
