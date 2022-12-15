import { Container, Grid, ScrollArea } from '@mantine/core';

import { Element } from './Element';
import { DASHBOARD_PADDING } from '@/config';
import { PROJECTS } from '@/assets/data/projects';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects';

export function Projects() {
  const { scrollArea } = useProjectsStyles();

  return (
    <ScrollArea className={scrollArea}>
      <Container p={DASHBOARD_PADDING} fluid>
        <Grid gutter='xl' justify='center'>
          {PROJECTS.map((project, index) => (
            <Grid.Col key={`project-${index}`} xs={12} lg={4}>
              <Element item={project} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </ScrollArea>
  );
}
