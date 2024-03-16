import { ITag } from '@/interfaces/ITag';

export interface ITrack {
  authors: string[];

  title: string;

  date: string;

  tags: ITag[];

  youtubeId: string;
}
