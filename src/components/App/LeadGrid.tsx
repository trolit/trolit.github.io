import { Grid, Paper } from '@mantine/core';

import styles from './styles.module.css';
import { Profile } from '@/components/Profile';

export function LeadGrid() {
  return (
    <Grid grow className={styles.grid}>
      <Grid.Col span={3}>
        <Profile />
      </Grid.Col>

      <Grid.Col span={9}>
        <Paper
          p='lg'
          radius='md'
          withBorder
          style={{ height: '100%', opacity: 0.8 }}
        >
          <Grid>
            <Grid.Col span={12}>1</Grid.Col>

            <Grid.Col span={3}>2</Grid.Col>

            <Grid.Col span={9}>3</Grid.Col>
          </Grid>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
