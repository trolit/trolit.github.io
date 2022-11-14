import { Grid, Paper } from '@mantine/core';

import { MegaHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';

export function Dashboard() {
  const commonStyles = useCommonStyles();

  return (
    <Paper
      p='lg'
      radius='md'
      withBorder
      className={`${commonStyles.panel} ${commonStyles.h100}`}
    >
      <Grid>
        <Grid.Col span={12}>
          <MegaHeader />
        </Grid.Col>

        <Grid.Col span={3}>2</Grid.Col>

        <Grid.Col span={9}>3</Grid.Col>
      </Grid>
    </Paper>
  );
}
