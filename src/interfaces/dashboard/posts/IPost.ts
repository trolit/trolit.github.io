import { IPhoto } from './IPhoto';
import { ITitle } from './IHeader';
import { IParagraph } from './IParagraph';

type Components = IPhoto | ITitle | IParagraph;

export interface IPost {
  name: string;

  date: string;

  components: Components[];
}
