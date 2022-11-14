import { ActionIcon, Tooltip } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconMinimize, IconMaximize } from '@tabler/icons';

import { RootState } from '@/store';
import { primaryColor } from '@/assets/data/common';
import { useCommonStyles } from '@/assets/styles/common';
import { toggleDashboardView } from '@/store/preferences';

export function DashboardViewToggler() {
  const commonStyles = useCommonStyles();

  const dispatch = useDispatch();

  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  const label = isDashboardMaximized ? 'Minimize' : 'Maximize';

  const Icon = isDashboardMaximized ? IconMinimize : IconMaximize;

  return (
    <Tooltip label={label} position='bottom' withArrow>
      <ActionIcon
        variant='light'
        color={primaryColor}
        className={commonStyles.hiddenMobile}
        onClick={() => dispatch(toggleDashboardView())}
      >
        <Icon size={18} />
      </ActionIcon>
    </Tooltip>
  );
}
