import { ILink } from './ILink';

export interface INavigationItem {
  name: string;

  route: string;

  links?: ILink[];
}
