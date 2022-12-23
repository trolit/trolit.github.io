import { Routes, Route, Navigate } from 'react-router-dom';

import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Dashboard } from './Dashboard';
import { Post } from './Dashboard/Post';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Projects } from './Dashboard/Projects';
import { Subheader as HomeSubheader } from './Dashboard/Home/Subheader';
import { Subheader as ProjectsSubheader } from './Dashboard/Projects/Subheader';

import { HOME_ROUTE, POSTS_ROUTE, TRACKS_ROUTE, PROJECTS_ROUTE } from '@/assets/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<App />}>
        <Route index element={<Dashboard tab={<Home />} subheader={<HomeSubheader />} />} />

        <Route path={PROJECTS_ROUTE} element={<Dashboard tab={<Projects />} subheader={<ProjectsSubheader />} />} />

        <Route path={POSTS_ROUTE}>
          <Route index element={<Dashboard tab={<Posts />} />} />

          <Route path=':postId' element={<Dashboard tab={<Post />} />} />
        </Route>

        <Route path={TRACKS_ROUTE} element={<Dashboard tab={<Tracks />} />} />
      </Route>

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
