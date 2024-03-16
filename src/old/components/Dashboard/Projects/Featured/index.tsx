import { Group } from '@mantine/core';

import { Element } from './Element';
import { FEATURED_PROJECTS } from '@/assets/data/projects';

export function Featured() {
  return (
    <Group position='center'>
      {FEATURED_PROJECTS.map((project, index) => (
        <Element key={`featured-project-${index}`} item={project} />
      ))}
    </Group>
  );
}
