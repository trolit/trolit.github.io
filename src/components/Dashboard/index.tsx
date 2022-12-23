import { Paper, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { Outlet } from 'react-router-dom';
import { useCommonStyles } from '@/assets/styles/common';

export function Dashboard() {
  const { panel } = useCommonStyles();

  return (
    <Paper radius='md' withBorder className={panel}>
      <Container px={0} fluid>
        <PanelHeader />

        <Outlet />
      </Container>
    </Paper>
  );
}
