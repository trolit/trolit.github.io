import { useSelector } from 'react-redux';
import { Container, Grid, ScrollArea } from '@mantine/core';

import { Element } from './Element';
import { RootState } from '@/store';
import { Featured } from './Featured';
import { DASHBOARD_PADDING } from '@/config';
import { PROJECTS } from '@/assets/data/projects';
import { ProjectsSegment } from '@/enums/ProjectsSegment';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects';

export function Projects() {
  const { scrollArea } = useProjectsStyles();

  const activeSegment = useSelector(
    (state: RootState) => state.projects.activeSegment,
  );

  const content =
    activeSegment === ProjectsSegment.ALL ? (
      <Grid gutter='xl' justify='center'>
        {PROJECTS.map((project, index) => (
          <Grid.Col key={`project-${index}`} xs={12} lg={4}>
            <Element item={project} />
          </Grid.Col>
        ))}
      </Grid>
    ) : (
      <Featured />
    );

  return (
    <ScrollArea className={scrollArea}>
      <Container pt={0} p={DASHBOARD_PADDING} fluid>
        {content}
      </Container>
    </ScrollArea>
  );
}
