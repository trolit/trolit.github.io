import { Grid } from '@mantine/core';

import styles from './styles.module.css';
import { Profile } from '@/components/Profile';
import { Dashboard } from '@/components/Dashboard';

export function MainGrid() {
  return (
    <Grid grow className={styles.grid}>
      <Grid.Col span={3}>
        <Profile />
      </Grid.Col>

      <Grid.Col span={9}>
        <Dashboard />
      </Grid.Col>
    </Grid>
  );
}
