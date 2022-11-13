import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { IconMaximize, IconMinimize } from '@tabler/icons';

import { DashboardViewToggler } from './DashboardViewToggler';

export function Header() {
  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <DashboardViewToggler
      icon={isDashboardMaximized ? IconMinimize : IconMaximize}
    />
  );
}
