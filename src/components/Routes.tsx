import { Routes, Route, Navigate } from 'react-router-dom';

import {
  HOME_ROUTE,
  POSTS_ROUTE,
  TRACKS_ROUTE,
  PROJECTS_ROUTE,
  POSTS_POST_NAME_SLUG,
  PROJECTS_PROJECT_NAME_SLUG,
} from '@/assets/constants/routes';
import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Post } from './Dashboard/Post';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Project } from './Dashboard/Project';
import { Projects } from './Dashboard/Projects';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<App />}>
        <Route index element={<Home />} />

        <Route path={PROJECTS_ROUTE}>
          <Route index element={<Projects />} />

          <Route path={`:${PROJECTS_PROJECT_NAME_SLUG}`} element={<Project />} />
        </Route>

        <Route path={POSTS_ROUTE}>
          <Route index element={<Posts />} />

          <Route path={`:${POSTS_POST_NAME_SLUG}`} element={<Post />} />
        </Route>

        <Route path={TRACKS_ROUTE} element={<Tracks />} />

        <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
      </Route>
    </Routes>
  );
}
