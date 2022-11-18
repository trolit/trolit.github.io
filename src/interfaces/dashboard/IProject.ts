import { ITag } from './ITag';
import { ILink } from './ILink';
import { ILanguage } from '@/interfaces/ILanguage';

export interface IProject extends ILink {
  date: string;

  languages: ILanguage[];

  description: string;

  tags: ITag[];
}
