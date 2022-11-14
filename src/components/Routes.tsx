import { Routes, Route } from 'react-router-dom';

import App from '@/components/App';
import { Home } from './Dashboard/Home';
import { Posts } from './Dashboard/Posts';
import { Tracks } from './Dashboard/Tracks';
import { Projects } from './Dashboard/Projects';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<App tab={<Home />} />} />

      <Route path='/projects' element={<App tab={<Projects />} />} />

      <Route path='/posts' element={<App tab={<Posts />} />} />

      <Route path='/tracks' element={<App tab={<Tracks />} />} />
    </Routes>
  );
}
