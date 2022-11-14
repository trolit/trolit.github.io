import { Group } from '@mantine/core';

import { DashboardViewToggler } from './DashboardViewToggler';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';

export function Toolbar() {
  return (
    <Group>
      <ThemeSwitcher />

      <DashboardViewToggler />
    </Group>
  );
}
