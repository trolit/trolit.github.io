import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { HOME_ROUTE } from '@/assets/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
    </Routes>
  );
}
