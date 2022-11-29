import { ReactNode } from 'react';
import { Paper, ScrollArea, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  tab: ReactNode;
}

export function Dashboard({ tab }: IProps) {
  const commonStyles = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  return (
    <Paper
      radius='md'
      withBorder
      className={`${commonStyles.panel} ${dashboardStyles.wrapper}`}
    >
      <Container px={0} fluid>
        <PanelHeader />
      </Container>

      <Container px={0} fluid>
        <ScrollArea className={dashboardStyles.scrollArea}>
          <Paper className={dashboardStyles.content}>{tab}</Paper>
        </ScrollArea>
      </Container>
    </Paper>
  );
}
