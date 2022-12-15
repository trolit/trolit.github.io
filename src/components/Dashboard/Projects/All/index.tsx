import { Grid } from '@mantine/core';
import { useSelector } from 'react-redux';

import { Element } from './Element';
import { RootState } from '@/store';
import { ANY } from '@/assets/constants/common';
import { PROJECTS } from '@/assets/data/projects';

export function All() {
  const activeLanguage = useSelector(
    (state: RootState) => state.projects.activeLanguage,
  );

  const filteredProjects =
    activeLanguage === ANY
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.languages.some(({ acronym }) => acronym === activeLanguage),
        );

  return (
    <Grid gutter='xl' justify='center'>
      {filteredProjects.map((project, index) => (
        <Grid.Col key={`project-${index}`} xs={12} lg={4}>
          <Element item={project} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
