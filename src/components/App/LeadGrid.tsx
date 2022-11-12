import { Grid } from '@mantine/core';

import styles from './styles.module.css';
import { Sidebar } from '@/components/Sidebar';

export function LeadGrid() {
  return (
    <Grid grow className={styles.grid}>
      <Grid.Col span={3}>
        <Sidebar />
      </Grid.Col>

      <Grid.Col span={9}>
        <Grid>
          <Grid.Col span={12}>2</Grid.Col>

          <Grid.Col span={12}>3</Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
