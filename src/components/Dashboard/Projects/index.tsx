import { Grid } from '@mantine/core';

import { Element } from './Element';
import { projects } from '@/assets/data/projects';

export function Projects() {
  return (
    <Grid gutter='xl' justify='center'>
      {projects.map((project, index) => (
        <Grid.Col key={index} xs={12} lg={4}>
          <Element item={project} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
