import { Group } from '@mantine/core';
import { motion } from 'framer-motion';

import { DashboardViewToggler } from './DashboardViewToggler';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';

export function Toolbar() {
  return (
    <motion.div layout>
      <Group>
        <ThemeSwitcher />

        <DashboardViewToggler />
      </Group>
    </motion.div>
  );
}
