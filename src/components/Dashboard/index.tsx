import { ReactNode } from 'react';
import { Grid, Paper } from '@mantine/core';

import { MegaHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;
}

export function Dashboard({ tab }: IProps) {
  const commonStyles = useCommonStyles();

  return (
    <Paper
      radius='md'
      withBorder
      className={`${commonStyles.panel} ${commonStyles.h100}`}
    >
      <Grid>
        <Grid.Col span={12}>
          <MegaHeader />
        </Grid.Col>

        <Grid.Col p='lg' span={12}>
          {tab}
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
