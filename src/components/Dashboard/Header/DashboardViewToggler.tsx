import { useDispatch } from 'react-redux';
import { ActionIcon } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

import { primaryColor } from '@/assets/data/common';
import { useCommonStyles } from '@/assets/styles/common';
import { toggleDashboardView } from '@/store/preferences';

interface IProps {
  icon: TablerIcon;
}

export function DashboardViewToggler({ icon }: IProps) {
  const commonStyles = useCommonStyles();

  const dispatch = useDispatch();

  const Icon = icon;

  return (
    <ActionIcon
      variant='light'
      color={primaryColor}
      className={commonStyles.hiddenMobile}
      onClick={() => dispatch(toggleDashboardView())}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
