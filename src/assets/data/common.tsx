import { ILanguage } from '@/interfaces/ILanguage';

export const backgroundSrc = require('@/assets/media/background.svg').default;

export const defaultImageSrc = require('@/assets/media/projects/default.jpg');

export const primaryColor = 'green';

export const headerHeight = 50;

export const languages: Record<string, ILanguage> = {
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
