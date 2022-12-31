import { ITag } from '@/interfaces/ITag';
import { ILink } from '@/interfaces/ILink';
import { IQuote } from '@/interfaces/profile/IQuote';
import { GITHUB_LINK } from '@/assets/constants/predefined-links';

export const avatarSrc = require('@/assets/media/avatar.jpg');

export const name = 'p4w31 !d21k0w541';

export const title = '';

export const tags: ITag[] = [{ text: 'TypeScript' }, { text: 'JavaScript' }, { text: 'C#' }];

export const links: ILink[] = [GITHUB_LINK('')];

export const quote: IQuote = {
  author: 'Thomas Edison',
  text: "I have not failed. I just found 10,000 ways that won't work.",
};
