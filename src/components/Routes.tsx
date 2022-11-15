import { Routes, Route } from 'react-router-dom';

import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Projects } from './Dashboard/Projects';

import {
  HOME_ROUTE,
  POSTS_ROUTE,
  TRACKS_ROUTE,
  PROJECTS_ROUTE,
} from '@/assets/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<App tab={<Home />} />} />

      <Route path={PROJECTS_ROUTE} element={<App tab={<Projects />} />} />

      <Route path={POSTS_ROUTE} element={<App tab={<Posts />} />} />

      <Route path={TRACKS_ROUTE} element={<App tab={<Tracks />} />} />
    </Routes>
  );
}
