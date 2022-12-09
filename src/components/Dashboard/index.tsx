import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  tab: ReactNode;

  subHeader?: ReactNode;
}

export function Dashboard({ tab, subHeader }: IProps) {
  const location = useLocation();

  const { panel } = useCommonStyles();

  const { wrapper } = useDashboardStyles(location.pathname);

  return (
    <Paper radius='md' withBorder className={`${panel} ${wrapper}`}>
      <Container px={0} fluid>
        <PanelHeader />

        {subHeader}
      </Container>

      <Container px={0} fluid>
        <Paper>{tab}</Paper>
      </Container>
    </Paper>
  );
}
