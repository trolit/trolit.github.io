import { useLocation } from 'react-router-dom';
import { ActionIcon, Tooltip } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconMinimize, IconMaximize } from '@tabler/icons';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { toggleDashboardView } from '@/store/preferences';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function DashboardViewToggler() {
  const dispatch = useDispatch();

  const location = useLocation();

  const { viewToggler } = useDashboardStyles(location.pathname);

  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  const label = isDashboardMaximized ? 'Minimize' : 'Maximize';

  const Icon = isDashboardMaximized ? IconMinimize : IconMaximize;

  return (
    <Tooltip label={label} position='bottom' withArrow withinPortal>
      <ActionIcon
        variant='light'
        color={PRIMARY_COLOR}
        className={viewToggler}
        onClick={() => dispatch(toggleDashboardView())}
      >
        <Icon size={18} />
      </ActionIcon>
    </Tooltip>
  );
}
