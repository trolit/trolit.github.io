import { ReactNode } from 'react';
import { Grid, Paper, ScrollArea } from '@mantine/core';

import { MegaHeader } from './Header';
import { headerHeight } from '@/assets/data/common';
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

        <Grid.Col span={12}>
          <ScrollArea sx={{ height: `calc(100vh - ${headerHeight}px)` }}>
            <Paper p='lg'>{tab}</Paper>
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
