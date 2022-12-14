import { ReactNode } from 'react';
import { Paper, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;

  subheader?: ReactNode;
}

export function Dashboard({ tab, subheader }: IProps) {
  const { panel } = useCommonStyles();

  return (
    <Paper radius='md' withBorder className={panel}>
      <Container px={0} fluid>
        <PanelHeader />

        {subheader}
      </Container>

      <Container px={0} fluid>
        <Paper>{tab}</Paper>
      </Container>
    </Paper>
  );
}
