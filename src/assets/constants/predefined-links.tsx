import {
  IconX,
  IconNotes,
  IconVideo,
  IconCamera,
  TablerIcon,
  IconWorldWww,
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

export const GALLERY_LINK = (target: string, name?: string): ILink => {
  return {
    name: `Album ${name ? '- ' + name : ''}`,
    icon: IconCamera,
    url: target,
  };
};

export const DOCUMENTATION_LINK = (target: string, name?: string): ILink => {
  return {
    name: `Documentation ${name ? '- ' + name : ''}`,
    icon: IconNotes,
    url: target,
  };
};

export const VIDEO_LINK = (target: string, name?: string): ILink => {
  return {
    name: `Video ${name ? '- ' + name : ''}`,
    icon: IconVideo,
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
