import { Routes, Route, Navigate } from 'react-router-dom';

import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Post } from './Dashboard/Post';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Projects } from './Dashboard/Projects';
import { HOME_ROUTE, POSTS_ROUTE, TRACKS_ROUTE, PROJECTS_ROUTE } from '@/assets/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<App />}>
        <Route index element={<Home />} />

        <Route path={PROJECTS_ROUTE} element={<Projects />} />

        <Route path={POSTS_ROUTE}>
          <Route index element={<Posts />} />

          <Route path=':postId' element={<Post />} />
        </Route>

        <Route path={TRACKS_ROUTE} element={<Tracks />} />
      </Route>

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
