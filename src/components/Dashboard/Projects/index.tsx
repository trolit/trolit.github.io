import { useSelector } from 'react-redux';
import { Container, ScrollArea } from '@mantine/core';

import { All } from './All';
import { RootState } from '@/store';
import { Featured } from './Featured';
import { Subheader } from './Subheader';
import { DASHBOARD_PADDING } from '@/config';
import { ProjectsSegment } from '@/enums/ProjectsSegment';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects/common';

export function Projects() {
  const { scrollArea } = useProjectsStyles();

  const activeSegment = useSelector((state: RootState) => state.projects.activeSegment);

  return (
    <>
      <Subheader />

      <ScrollArea className={scrollArea}>
        <Container pt={0} p={DASHBOARD_PADDING} fluid>
          {activeSegment === ProjectsSegment.ALL ? <All /> : <Featured />}
        </Container>
      </ScrollArea>
    </>
  );
}
