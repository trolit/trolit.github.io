import { ILink } from '@/interfaces/ILink';
import { IBadge } from '@/interfaces/IBadge';
import { IconBrandGithub } from '@tabler/icons';

export const avatarSrc = require('@/assets/media/avatar.png');

export const name = 'p4w31 !d21k0w541';

export const title = 'Software Developer';

export const badges: IBadge[] = [
  { text: 'TypeScript' },
  { text: 'JavaScript' },
  { text: 'C#' },
];

export const links: ILink[] = [
  {
    icon: IconBrandGithub,
    url: 'https://github.com/trolit/',
  },
];
