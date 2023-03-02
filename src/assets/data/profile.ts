import { ILink } from '@/interfaces/ILink';
import { ILanguage } from '@/interfaces/ILanguage';
import { IQuote } from '@/interfaces/profile/IQuote';
import { GITHUB_LINK } from '@/assets/constants/predefined-links';
import {
  JAVA_LANGUAGE,
  CSHARP_LANGUAGE,
  KOTLIN_LANGUAGE,
  TYPESCRIPT_LANGUAGE,
  JAVASCRIPT_LANGUAGE,
} from '@/assets/constants/predefined-languages';

export const PATH_TO_AVATAR = require('@/assets/media/avatar.jpg');

export const NAME = 'p4w31 !d21k0w541';

export const TITLE = 'code investigator';

export const FAVOURITE_LANGUAGES: ILanguage[] = [CSHARP_LANGUAGE, TYPESCRIPT_LANGUAGE, JAVASCRIPT_LANGUAGE];

export const OTHER_LANGUAGES: ILanguage[] = [KOTLIN_LANGUAGE, JAVA_LANGUAGE];

export const LINKS: ILink[] = [GITHUB_LINK('')];

export const QUOTE: IQuote = {
  author: 'Thomas Edison',
  text: "I have not failed. I just found 10,000 ways that won't work.",
};
