import { sortByDate } from '@/helpers/sortByDate';
import { ITrack } from '@/interfaces/dashboard/ITrack';

import { COMMON_TAGS } from '@/assets/constants/common-tags';

const { SOUNDTRACK } = COMMON_TAGS;

const RAW_TRACKS: ITrack[] = [
  {
    authors: ['Joseph Trapanese'],

    title: `Tell Me What You Want (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: '7sRqApGHCdg',
  },

  {
    authors: ['Joseph Trapanese'],

    title: `I Believe in You (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'PKQCOP3tkuw',
  },

  {
    authors: ['Joseph Trapanese'],

    title: `Remembering Cintra (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 't7Y-oHwN0Qs',
  },

  {
    authors: ['Lorne Balfe'],

    title: `Assassins Creed Theme`,

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: 'qOvw6t-cxOs',
  },

  {
    authors: ['Two Steps From Hell'],

    title: `Protectors of the Earth`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'ASj81daun5Q',
  },

  {
    authors: ['Audiomachine'],

    title: `Legions of Doom`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'sjBjmwvikVc',
  },

  {
    authors: ['Gustavo Santaolalla', 'Mac Quayle'],

    title: `The Last of Us Part 2 OST`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'X-swJqjzjCI',
  },

  {
    authors: ['Hans Zimmer', 'Lisa Gerrard', 'Moya Brennan'],

    title: `Sorrow (King Arthur)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: '_ak9rTRuEJg',
  },

  {
    authors: ['Hans Zimmer'],

    title: `Red Warrior (The Last Samurai)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'f2omHyq6Lrg',
  },

  {
    authors: ['Hans Zimmer'],

    title: `Soundtrack mix (King Arthur)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'sKFLpfv4hSY',
  },

  {
    authors: ['Dougie MacLean'],

    title: `Promentory (The Last of the Mohicans)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'ygNuRpwZqRU',
  },

  {
    authors: ['Nicholas Britell'],

    title: `The King OST Suite`,

    date: '2022-11-29',

    tags: [SOUNDTRACK],

    youtubeId: 'HiNcCjQSz6o',
  },

  {
    authors: ['Thomas Newman'],

    title: `1917`,

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: 'KzmdfOh6su4',
  },

  {
    authors: ['James Horner'],

    title: `Braveheart (Main Theme)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'JYMySrHL0Fo',
  },

  {
    authors: ['Hans Zimmer'],

    title: `Lost But Won (Rush)`,

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: 'kOYcbod5J0w',
  },

  {
    authors: ['Joseph Trapanese', 'Joey Batey'],

    title: `Burn Butcher Burn (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'qSxBVHqA-RU',
  },

  {
    authors: ['James Horner'],

    title: `Calling To The Wind (Windtalkers)`,

    date: '2021-11-15',

    tags: [SOUNDTRACK],

    youtubeId: 'nXBdsGbc-Ao',
  },

  {
    authors: ['Steve Jablonsky'],

    title: `I Rise, You Fall (Transformers)`,

    date: '2021-11-18',

    tags: [SOUNDTRACK],

    youtubeId: 'YmfR2trnNOY',
  },

  {
    authors: ['Emanuele Patetta'],

    title: `Death of a Hero`,

    date: '2021-11-18',

    tags: [SOUNDTRACK],

    youtubeId: 'WIuely_hs9A',
  },

  {
    authors: ['Joseph Trapanese'],

    title: `Power and purpose (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'A89Mj_JbXoQ',
  },

  {
    authors: ['Joseph Trapanese'],

    title: `Who Did This to You? (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'QTa-078grnE',
  },

  {
    authors: ['Hans Zimmer'],

    title: `Leave No Man Behind (Black Hawk Down)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'BvrYDaWMeRE',
  },

  {
    authors: ['Two Steps From Hell'],

    title: `Victory`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'cjG5gcPcpsg',
  },

  {
    authors: ['Brian Tyler'],

    title: `Call Of Duty MW3 (OST)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'BDBXjyPfWyA',
  },

  {
    authors: ['Rupert Gregson-Williams'],

    title: `Praying (Hacksaw Ridge)`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'duPXV-OsfEU',
  },

  {
    authors: ['Johan Söderqvist', 'Patrik Andrén'],

    title: `Devastation`,

    date: '2021-11-12',

    tags: [SOUNDTRACK],

    youtubeId: 'DXPAqiqAqyg',
  },

  {
    authors: ['Hans Zimmer'],

    title: `The Jablonsky variations on a theme by HZ`,

    date: '2021-11-11',

    tags: [SOUNDTRACK],

    youtubeId: 'lxx7i13CPaE',
  },

  {
    authors: ['Rachid Taha'],

    title: `Barra Barra (Black Hawk Down)`,

    date: '2021-11-11',

    tags: [SOUNDTRACK],

    youtubeId: 'VmEV6qjY9Nc',
  },

  {
    authors: ['Hans Zimmer', 'Lisa Gerrard', 'Klaus Badelt'],

    title: `Now We Are Free (Gladiator)`,

    date: '2021-11-11',

    tags: [SOUNDTRACK],

    youtubeId: 'Y1UiD2sxoWo',
  },

  {
    authors: ['Joseph Trapanese'],

    title: `Pain and Desperation (Witcher, Season 2)`,

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'tdMH45dDlbM',
  },

  {
    authors: ['Steve Jablonsky'],

    title: `Tessa (Transformers)`,

    date: '2021-11-11',

    tags: [SOUNDTRACK],

    youtubeId: 'aNQhcbOIZdA',
  },

  {
    authors: ['Hans Zimmer'],

    title: `Rangers Lead The Way`,

    date: '2021-11-04',

    tags: [SOUNDTRACK],

    youtubeId: 'Rp26BJVy0nI',
  },

  {
    authors: ['Inon Zur'],

    title: `Dragon Age Origins - Main Theme`,

    date: '2022-11-04',

    tags: [SOUNDTRACK],

    youtubeId: 'oWFEVbfCcOY',
  },

  {
    authors: ['Neal Acree', 'Jason Hayes'],

    title: `Arthas My Son`,

    date: '2022-11-04',

    tags: [SOUNDTRACK],

    youtubeId: '3m51oKG3BKA',
  },

  {
    authors: ['Nick Glennie-Smith', 'Harry Gregson-Williams', 'Hans Zimmer'],

    title: `Hummell Gets The Rockets`,

    date: '2022-08-06',

    tags: [SOUNDTRACK],

    youtubeId: 'wppq0da1Bjc',
  },

  {
    authors: ['Ramin Djawadi'],

    title: `Light of the Seven`,

    date: '2022-08-02',

    tags: [SOUNDTRACK],

    youtubeId: '6LASz6HAL7E',
  },

  {
    authors: ['Mark Petrie', 'Andrew Prahlow'],

    title: `Aeons (with Jon Snow tribute)`,

    date: '2022-08-02',

    tags: [SOUNDTRACK],

    youtubeId: 't_jwAtCQ4-4',
  },

  {
    authors: ['J.T. Peterson'],

    title: `Vers L'avant`,

    date: '2022-08-02',

    tags: [SOUNDTRACK],

    youtubeId: 'hWxpuvFS2a4',
  },

  {
    authors: ['Serj Tankian', 'Ramin Djawadi'],

    title: 'The Rains of Castamere (Game Of Thrones)',

    date: '2022-08-02',

    tags: [SOUNDTRACK],

    youtubeId: 'gfYzrXmFN84',
  },

  {
    authors: ['Joseph Trapanese'],

    title: 'You Belong With Us (Witcher, Season 2)',

    date: '2021-12-26',

    tags: [SOUNDTRACK],

    youtubeId: 'oS5J9HnBdXU',
  },

  {
    authors: ['Aliye Mutlu'],

    title: 'Dawn of a New Time',

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: '7q8crDe54go',
  },

  {
    authors: ['Ludovico Einaudi'],

    title: 'Experience',

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: '09yNkwbKAyw',
  },

  {
    authors: ['Steven Norman'],

    title: 'Price (Fury)',

    date: '2021-10-23',

    tags: [SOUNDTRACK],

    youtubeId: 'xhfo-lB6JS8',
  },
];

export const TRACKS = sortByDate<ITrack>(RAW_TRACKS);

export const ALL_DATES = new Set(TRACKS.map(({ date }) => date));
