import { sortByDate } from '@/helpers/sortByDate';
import { ITrack } from '@/interfaces/dashboard/ITrack';

import { COMMON_TAGS } from '@/assets/constants/common-tags';

const { SOUNDTRACK } = COMMON_TAGS;

const rawTracks: ITrack[] = [
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

export const tracks = sortByDate<ITrack>(rawTracks);
