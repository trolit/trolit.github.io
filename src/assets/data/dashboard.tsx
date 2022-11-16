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
import { projects } from './projects';
import { INavigationItem } from '@/interfaces/dashboard/INavigationItem';

export const homeNavigationItem: INavigationItem = {
  name: HOME_ROUTE_NAME,
  route: HOME_ROUTE,
};

export const projectsNavigationItem: INavigationItem = {
  name: PROJECTS_ROUTE_NAME,
  route: PROJECTS_ROUTE,
  links: projects,
};

export const postsNavigationItem: INavigationItem = {
  name: POSTS_ROUTE_NAME,
  route: POSTS_ROUTE,
};

export const tracksNavigationItem: INavigationItem = {
  name: TRACKS_ROUTE_NAME,
  route: TRACKS_ROUTE,
};

export const navigationItems: INavigationItem[] = [
  homeNavigationItem,
  projectsNavigationItem,
  postsNavigationItem,
  tracksNavigationItem,
];
