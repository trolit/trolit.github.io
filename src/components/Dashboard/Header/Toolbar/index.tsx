import { Group } from '@mantine/core';
import { motion } from 'framer-motion';

import { ThemeSwitcher } from './ThemeSwitcher';
import { DashboardViewToggler } from './DashboardViewToggler';

export function Toolbar() {
  return (
    <motion.div layout>
      <Group px='md'>
        <ThemeSwitcher />

        <DashboardViewToggler />
      </Group>
    </motion.div>
  );
}
