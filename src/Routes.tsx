import { Routes, Route, Navigate } from 'react-router-dom';

import {
  HOME_ROUTE,
  POSTS_ROUTE,
  PROJECTS_ROUTE,
  SOUNDTRACKS_ROUTE,
  POSTS_POST_NAME_SLUG,
} from '@/assets/constants/routes';
import { Post } from '@/pages/Post';
import { Home } from '@/pages/Home';
import { Posts } from '@/pages/Posts';
import { Projects } from '@/pages/Projects';
import { Soundtracks } from '@/pages/Soundtracks';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path={PROJECTS_ROUTE}>
        <Route index element={<Projects />} />
      </Route>

      <Route path={POSTS_ROUTE}>
        <Route index element={<Posts />} />

        <Route path={`:${POSTS_POST_NAME_SLUG}`} element={<Post />} />
      </Route>

      <Route path={SOUNDTRACKS_ROUTE}>
        <Route index element={<Soundtracks />} />
      </Route>

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
