import { IPhoto } from './IPhoto';
import { ITitle } from './IHeader';
import { ITag } from '@/interfaces/ITag';
import { IParagraph } from './IParagraph';

type Components = IPhoto | ITitle | IParagraph;

export interface IPost {
  name: string;

  date: string;

  tags: ITag[];

  components: Components[];
}
