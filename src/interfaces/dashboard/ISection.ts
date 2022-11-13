import { ILink } from './ILink';

export interface ISection {
  name: string;

  routeName: string;

  links?: ILink[];
}
