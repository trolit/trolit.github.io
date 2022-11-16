import { ITag } from './ITag';
import { ILink } from './ILink';

export interface IProject extends ILink {
  date: string;

  languages: string[];

  description: string;

  tags: ITag[];
}
