import { Grid } from '@mantine/core';

import { Element } from './Element';
import { PROJECTS } from '@/assets/data/projects';

export function Projects() {
  return (
    <Grid gutter='xl' justify='center'>
      {PROJECTS.map((project, index) => (
        <Grid.Col key={`project-${index}`} xs={12} lg={4}>
          <Element item={project} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
