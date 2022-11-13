import { RootState } from '@/store';
import { Group } from '@mantine/core';
import { useSelector } from 'react-redux';
import { IconMinimize, IconMaximize } from '@tabler/icons';

import { DashboardViewToggler } from './DashboardViewToggler';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';

export function Toolbar() {
  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <Group>
      <ThemeSwitcher />

      <DashboardViewToggler
        icon={isDashboardMaximized ? IconMinimize : IconMaximize}
      />
    </Group>
  );
}
