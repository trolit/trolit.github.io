import {
  IconX,
  TablerIcon,
  IconWorldWww,
  IconAppWindow,
  IconBrandGithub,
} from '@tabler/icons';

import { ILink } from '@/interfaces/ILink';
import { ILanguage } from '@/interfaces/ILanguage';

export const backgroundSrc = require('@/assets/media/background.svg').default;

export const defaultImageSrc = require('@/assets/media/projects/default.jpg');

export const primaryColor = 'green';

export const headerHeight = 50;

export const overlayPadding = 17;

export const GITHUB_USERNAME = 'trolit';

export const PREDEFINED_LANGUAGES: Record<string, ILanguage> = {
  JAVASCRIPT: {
    name: 'JavaScript',
    acronym: 'JS',
    badgeColorInHex: '#daa520',
  },

  TYPESCRIPT: {
    name: 'TypeScript',
    acronym: 'TS',
    badgeColorInHex: '#007acc',
  },

  CSHARP: {
    name: 'C#',
    acronym: 'C#',
    badgeColorInHex: '#9b4993',
  },

  KOTLIN: {
    name: 'Kotlin',
    acronym: 'Kotlin',
    badgeColorInHex: '#E24462',
  },

  JAVA: {
    name: 'Java',
    acronym: 'Java',
    badgeColorInHex: '#d97014',
  },
};

type PredefinedLinks = 'githubLink' | 'previewLink' | 'wwwLink' | 'customLink';

export const PREDEFINED_LINKS: Record<
  PredefinedLinks,
  (target: string) => ILink
> = {
  githubLink: (target: string) => {
    return {
      name: 'GitHub',
      icon: IconBrandGithub,
      url: `https://github.com/${GITHUB_USERNAME}/${target}`,
    };
  },

  previewLink: (target: string) => {
    return {
      name: 'Demo',
      icon: IconAppWindow,
      url: target,
    };
  },

  wwwLink: (target: string, name: string = '') => {
    return {
      name,
      icon: IconWorldWww,
      url: target,
    };
  },

  customLink: (target: string, name: string = '', icon: TablerIcon = IconX) => {
    return {
      name,
      icon,
      url: target,
    };
  },
};
