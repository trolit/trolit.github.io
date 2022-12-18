import { Group } from '@mantine/core';

import { Element } from './Element';
import { FEATURED_PROJECTS } from '@/assets/data/projects';
import { useFeaturedProjectsStyles } from '@/assets/styles/dashboard/projects/featured';

export function Featured() {
  const { wrapper } = useFeaturedProjectsStyles();

  return (
    <Group noWrap position='center' className={wrapper}>
      {FEATURED_PROJECTS.map((project, index) => (
        <Element key={`featured-project-${index}`} item={project} />
      ))}
    </Group>
  );
}
