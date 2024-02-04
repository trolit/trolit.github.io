import { Grid } from '@mantine/core';
import { useSelector } from 'react-redux';

import { Element } from './Element';
import { RootState } from '@/store';
import { ANY } from '@/assets/constants/common';
import { PROJECTS } from '@/assets/data/projects';

export function All() {
  const activeDuration = useSelector((state: RootState) => state.projects.activeDuration);
  const activeLanguage = useSelector((state: RootState) => state.projects.activeLanguage);

  const projectsFilteredByLanguage =
    activeLanguage === ANY
      ? PROJECTS
      : PROJECTS.filter((project) => project.languages.some(({ acronym }) => acronym === activeLanguage));

  const projectsFilteredByDuration =
    activeDuration === 0
      ? projectsFilteredByLanguage
      : projectsFilteredByLanguage.filter(
          (project) => project.months > activeDuration - 3 && project.months <= activeDuration,
        );

  return (
    <Grid gutter='xl' justify='center'>
      {projectsFilteredByDuration.length ? (
        projectsFilteredByDuration.map((project, index) => (
          <Grid.Col key={`project-${index}`} xs={12} lg={6}>
            <Element item={project} />
          </Grid.Col>
        ))
      ) : (
        <div style={{ marginTop: '20px', width: '100%' }}>
          <small>Nothing found..</small>
        </div>
      )}
    </Grid>
  );
}
