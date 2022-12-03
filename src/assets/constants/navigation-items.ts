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
} from './routes';
import { INavigationItem } from '@/interfaces/INavigationItem';

export const HOME_NAVIGATION_ITEM: INavigationItem = {
  icon: IconAt,
  name: HOME_ROUTE_NAME,
  route: HOME_ROUTE,
};

export const PROJECTS_NAVIGATION_ITEM: INavigationItem = {
  icon: IconApps,
  name: PROJECTS_ROUTE_NAME,
  route: PROJECTS_ROUTE,
};

export const POSTS_NAVIGATION_ITEM: INavigationItem = {
  icon: IconArticle,
  name: POSTS_ROUTE_NAME,
  route: POSTS_ROUTE,
};

export const TRACKS_NAVIGATION_ITEM: INavigationItem = {
  icon: IconPlayerTrackNext,
  name: TRACKS_ROUTE_NAME,
  route: TRACKS_ROUTE,
};

export const NAVIGATION_ITEMS: INavigationItem[] = [
  HOME_NAVIGATION_ITEM,
  PROJECTS_NAVIGATION_ITEM,
  POSTS_NAVIGATION_ITEM,
  TRACKS_NAVIGATION_ITEM,
];
