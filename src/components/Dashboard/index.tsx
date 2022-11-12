import { Grid, Paper } from '@mantine/core';

import { Header } from './Header';
import styles from './styles.module.css';

export function Dashboard() {
  return (
    <Paper p='lg' radius='md' withBorder className={styles.dashboard}>
      <Grid>
        <Grid.Col span={12}>
          <Header />
        </Grid.Col>

        <Grid.Col span={3}>2</Grid.Col>

        <Grid.Col span={9}>3</Grid.Col>
      </Grid>
    </Paper>
  );
}
