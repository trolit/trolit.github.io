import { ReactNode } from 'react';
import { Paper, Container } from '@mantine/core';

import { PanelHeader } from './Header';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;

  subHeader?: ReactNode;
}

export function Dashboard({ tab, subHeader }: IProps) {
  const { panel } = useCommonStyles();

  return (
    <Paper radius='md' withBorder className={panel}>
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
