import { Grid } from '@mantine/core';
import styles from './app.module.css';

export function LeadGrid() {
  return (
    <Grid grow className={styles.grid}>
      <Grid.Col span={12} sm={6}>
        1
      </Grid.Col>

      <Grid.Col span={6}>
        <Grid>
          <Grid.Col span={12}>2</Grid.Col>

          <Grid.Col span={12}>3</Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
