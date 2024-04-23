import { useLocation, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import './index.css';
import { RootState } from './store';
import { AppRoutes } from './Routes';
import { useSelector } from 'react-redux';
import { MyNavbar } from './components/MyNavbar';
import { HOME_ROUTE } from './assets/constants/routes';

export function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useSelector((state: RootState) => state.general.theme);

  return (
    <NextUIProvider navigate={navigate}>
      <main className={`${theme} min-h-screen text-foreground bg-background`}>
        {location.pathname !== HOME_ROUTE && <MyNavbar />}

        <AppRoutes />
      </main>
    </NextUIProvider>
  );
}
