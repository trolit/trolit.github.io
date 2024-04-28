import { ILink } from './ILink';
import { ILanguage } from './ILanguage';

export interface IProject {
  sideImage?: string;

  name: string;

  wrapperClassName?: string;

  startedAt: string;

  estimatedDurationInMonths: number;

  height?: number;

  description?: string;

  repositoryUrl?: string;

  youTubeId?: string;

  youTubeVideoInSeparateLine?: boolean;

  language: ILanguage;

  tags: string[];

  links: ILink[];
}
