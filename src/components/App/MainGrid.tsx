import { Grid } from '@mantine/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Profile } from '@/components/Profile';
import { useAppStyles } from '@/assets/styles/app';
import { Dashboard } from '@/components/Dashboard';

export function MainGrid() {
  const appStyles = useAppStyles();

  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <Grid grow className={appStyles.mainGrid}>
      {!isDashboardMaximized && (
        <Grid.Col span={3}>
          <Profile />
        </Grid.Col>
      )}

      <Grid.Col span={isDashboardMaximized ? 12 : 9}>
        <Dashboard />
      </Grid.Col>
    </Grid>
  );
}
