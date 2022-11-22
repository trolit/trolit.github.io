import { IPhoto } from './IPhoto';
import { IHeader } from './IHeader';
import { ITag } from '@/interfaces/ITag';
import { IParagraph } from './IParagraph';

type Component = IPhoto | IHeader | IParagraph;

export interface IPost {
  name: string;

  date: string;

  tags: ITag[];

  components: Component[];
}
