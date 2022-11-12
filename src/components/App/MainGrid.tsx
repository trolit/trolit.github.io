import { Grid } from '@mantine/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import styles from './styles.module.css';
import { Profile } from '@/components/Profile';
import { Dashboard } from '@/components/Dashboard';

export function MainGrid() {
  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  if (isDashboardMaximized) {
    return (
      <Grid grow className={styles.mainGrid}>
        <Grid.Col span={12}>
          <Dashboard />
        </Grid.Col>
      </Grid>
    );
  }

  return (
    <Grid grow className={styles.mainGrid}>
      <Grid.Col span={3}>
        <Profile />
      </Grid.Col>

      <Grid.Col span={9}>
        <Dashboard />
      </Grid.Col>
    </Grid>
  );
}
