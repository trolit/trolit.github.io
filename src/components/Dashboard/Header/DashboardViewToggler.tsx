import { useDispatch } from 'react-redux';
import { ActionIcon } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

import { primaryColor } from '@/assets/data/common';
import { toggleDashboardView } from '@/store/preferences';

interface IProps {
  icon: TablerIcon;
}

export function DashboardViewToggler({ icon }: IProps) {
  const dispatch = useDispatch();

  const Icon = icon;

  return (
    <ActionIcon
      color={primaryColor}
      variant='light'
      onClick={() => dispatch(toggleDashboardView())}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
