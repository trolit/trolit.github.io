import { RootState } from '@/store';
import { IconMaximize, IconMinimize } from '@tabler/icons';
import { useSelector } from 'react-redux';

import { DashboardViewToggler } from './DashboardViewToggler';

export function Header() {
  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <DashboardViewToggler
      icon={isDashboardMaximized ? IconMaximize : IconMinimize}
    />
  );
}
