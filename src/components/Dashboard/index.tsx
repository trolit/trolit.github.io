import { Paper, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { Outlet } from 'react-router-dom';
import { OVERLAY_PADDING } from '@/config';
import { useCommonStyles } from '@/assets/styles/common';

export function Dashboard() {
  const { panel } = useCommonStyles();

  return (
    <Paper radius={OVERLAY_PADDING > 0 ? 'md' : 0} className={panel}>
      <Container px={0} fluid>
        <PanelHeader />

        <Outlet />
      </Container>
    </Paper>
  );
}
