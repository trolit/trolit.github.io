import { ILanguage } from '@/interfaces/ILanguage';

export const JAVASCRIPT_LANGUAGE: ILanguage = {
  name: 'JavaScript',
  acronym: 'JS',
  badgeColorInHex: '#daa520',
};

export const TYPESCRIPT_LANGUAGE: ILanguage = {
  name: 'TypeScript',
  acronym: 'TS',
  badgeColorInHex: '#007acc',
};

export const CSHARP_LANGUAGE: ILanguage = {
  name: 'C#',
  acronym: 'C#',
  badgeColorInHex: '#9b4993',
};

export const KOTLIN_LANGUAGE: ILanguage = {
  name: 'Kotlin',
  acronym: 'Kotlin',
  badgeColorInHex: '#E24462',
};

export const JAVA_LANGUAGE: ILanguage = {
  name: 'Java',
  acronym: 'Java',
  badgeColorInHex: '#d97014',
};

export const ALL_LANGUAGES = [
  JAVA_LANGUAGE,
  CSHARP_LANGUAGE,
  KOTLIN_LANGUAGE,
  JAVASCRIPT_LANGUAGE,
  TYPESCRIPT_LANGUAGE,
];
