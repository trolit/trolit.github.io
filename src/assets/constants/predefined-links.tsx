import {
  IconX,
  TablerIcon,
  IconWorldWww,
  IconAppWindow,
  IconBrandGithub,
} from '@tabler/icons';

import { ILink } from '@/interfaces/ILink';
import { GITHUB_USERNAME } from '@/config';

export const GITHUB_LINK = (target: string, username?: string): ILink => {
  return {
    name: 'GitHub',
    icon: IconBrandGithub,
    url: `https://github.com/${username || GITHUB_USERNAME}/${target}`,
  };
};

export const PREVIEW_LINK = (target: string): ILink => {
  return {
    name: 'Demo',
    icon: IconAppWindow,
    url: target,
  };
};

export const WWW_LINK = (target: string, name: string): ILink => {
  return {
    name,
    icon: IconWorldWww,
    url: target,
  };
};

export const CUSTOM_LINK = (
  target: string,
  name: string,
  icon: TablerIcon = IconX,
): ILink => {
  return {
    name,
    icon,
    url: target,
  };
};
