import { Group } from '@mantine/core';
import { motion } from 'framer-motion';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ProfileCardToggler } from './ProfileCardToggler';

export function Toolbar() {
  return (
    <motion.div layout>
      <Group noWrap px='sm' spacing={5}>
        <ThemeSwitcher />

        <ProfileCardToggler />
      </Group>
    </motion.div>
  );
}
