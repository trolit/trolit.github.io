import { useSelector } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';

import '@/assets/styles/index.css';
import { RootState } from './store';
import { AppRoutes } from './Routes';
import { Navbar } from './components/Navbar';
import { HOME_ROUTE } from './assets/constants/routes';
import { useScrollToTopEffect } from './helpers/useScrollToTopEffect';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useSelector((state: RootState) => state.general.theme);

  useScrollToTopEffect();

  return (
    <NextUIProvider navigate={navigate}>
      <main className={`${theme} min-h-screen text-foreground bg-background`}>
        {location.pathname !== HOME_ROUTE && <Navbar />}

        <AppRoutes />
      </main>
    </NextUIProvider>
  );
}
