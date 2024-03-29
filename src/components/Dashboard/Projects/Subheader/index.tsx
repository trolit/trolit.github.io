import { useDispatch, useSelector } from 'react-redux';
import { Paper, SegmentedControl } from '@mantine/core';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { LanguageMenu } from './LanguageMenu';
import { setActiveSegment } from '@/store/projects';
import { ProjectsSegment } from '@/enums/ProjectsSegment';
import { ProjectDurationMenu } from './ProjectDurationMenu';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects/common';

export function Subheader() {
  const { subheader, menuWrapper } = useProjectsStyles();

  const dispatch = useDispatch();

  const activeSegment = useSelector((state: RootState) => state.projects.activeSegment);

  return (
    <Paper radius={0} className={subheader}>
      <SegmentedControl
        value={activeSegment}
        color={PRIMARY_COLOR}
        data={[
          { label: 'All', value: ProjectsSegment.ALL },
          { label: 'Featured', value: ProjectsSegment.FEATURED },
        ]}
        onChange={(value: ProjectsSegment) => dispatch(setActiveSegment(value))}
      />

      {activeSegment === ProjectsSegment.ALL && (
        <div className={menuWrapper}>
          <ProjectDurationMenu />

          <LanguageMenu />
        </div>
      )}
    </Paper>
  );
}
