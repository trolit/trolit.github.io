import { Routes, Route, Navigate } from 'react-router-dom';

import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Post } from './Dashboard/Post';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Projects } from './Dashboard/Projects';
import { Subheader as HomeSubheader } from './Dashboard/Home/Subheader';

import {
  HOME_ROUTE,
  POSTS_ROUTE,
  TRACKS_ROUTE,
  PROJECTS_ROUTE,
} from '@/assets/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        index
        path={HOME_ROUTE}
        element={<App tab={<Home />} subheader={<HomeSubheader />} />}
      />

      <Route path={PROJECTS_ROUTE} element={<App tab={<Projects />} />} />

      <Route path={POSTS_ROUTE}>
        <Route index element={<App tab={<Posts />} />} />

        <Route path=':postId' element={<App tab={<Post />} />} />
      </Route>

      <Route path={TRACKS_ROUTE} element={<App tab={<Tracks />} />} />

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
