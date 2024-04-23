import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Posts } from '@/pages/Posts';
import { Soundtracks } from '@/pages/Soundtracks';
import { HOME_ROUTE, SOUNDTRACKS_ROUTE, POSTS_ROUTE, PROJECTS_ROUTE } from '@/assets/constants/routes';
import { Projects } from '@/pages/Projects';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path={PROJECTS_ROUTE}>
        <Route index element={<Projects />} />
      </Route>

      <Route path={POSTS_ROUTE}>
        <Route index element={<Posts />} />
      </Route>

      <Route path={SOUNDTRACKS_ROUTE}>
        <Route index element={<Soundtracks />} />
      </Route>

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
