import {
  IconAt,
  IconApps,
  IconArticle,
  IconPlayerTrackNext,
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

export const homeNavigationItem: INavigationItem = {
  icon: IconAt,
  name: HOME_ROUTE_NAME,
  route: HOME_ROUTE,
};

export const projectsNavigationItem: INavigationItem = {
  icon: IconApps,
  name: PROJECTS_ROUTE_NAME,
  route: PROJECTS_ROUTE,
};

export const postsNavigationItem: INavigationItem = {
  icon: IconArticle,
  name: POSTS_ROUTE_NAME,
  route: POSTS_ROUTE,
};

export const tracksNavigationItem: INavigationItem = {
  icon: IconPlayerTrackNext,
  name: TRACKS_ROUTE_NAME,
  route: TRACKS_ROUTE,
};

export const navigationItems: INavigationItem[] = [
  homeNavigationItem,
  projectsNavigationItem,
  postsNavigationItem,
  tracksNavigationItem,
];
