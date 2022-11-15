import {
  IconCode,
  IconCoin,
  IconBook,
  IconFingerprint,
  IconChartPie3,
  IconNotification,
} from '@tabler/icons';

import {
  HOME_ROUTE,
  POSTS_ROUTE,
  TRACKS_ROUTE,
  PROJECTS_ROUTE,
  HOME_ROUTE_NAME,
  POSTS_ROUTE_NAME,
  TRACKS_ROUTE_NAME,
  PROJECTS_ROUTE_NAME,
} from '@/assets/constants/routes';
import { INavigationItem } from '@/interfaces/dashboard/INavigationItem';

export const home: INavigationItem = {
  name: HOME_ROUTE_NAME,
  route: HOME_ROUTE,
};

export const projects: INavigationItem = {
  name: PROJECTS_ROUTE_NAME,
  route: PROJECTS_ROUTE,
  links: [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ],
};

export const posts: INavigationItem = {
  name: POSTS_ROUTE_NAME,
  route: POSTS_ROUTE,
};

export const tracks: INavigationItem = {
  name: TRACKS_ROUTE_NAME,
  route: TRACKS_ROUTE,
};

export const sections: INavigationItem[] = [home, projects, posts, tracks];
