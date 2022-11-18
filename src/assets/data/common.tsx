import { ILanguage } from '@/interfaces/ILanguage';

export const backgroundSrc = require('@/assets/media/background.svg').default;

export const defaultImageSrc = require('@/assets/media/projects/default.jpg');

export const primaryColor = 'green';

export const headerHeight = 50;

export const languages: Record<string, ILanguage> = {
  js: {
    name: 'JavaScript',
    acronym: 'JS',
    badgeColorInHex: '#f0db4f',
  },

  ts: {
    name: 'TypeScript',
    acronym: 'TS',
    badgeColorInHex: '#007acc',
  },

  csharp: {
    name: 'C#',
    acronym: 'C#',
    badgeColorInHex: '#9b4993',
  },
};
