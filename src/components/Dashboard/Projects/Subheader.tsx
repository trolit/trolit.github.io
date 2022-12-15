import { useDispatch, useSelector } from 'react-redux';
import { Paper, SegmentedControl } from '@mantine/core';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { setActiveSegment } from '@/store/projects';
import { ProjectsSegment } from '@/enums/ProjectsSegment';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects';
import { ALL_LANGUAGES } from '@/assets/constants/predefined-languages';

export function Subheader() {
  const { subheader } = useProjectsStyles();

  const dispatch = useDispatch();

  const activeSegment = useSelector(
    (state: RootState) => state.projects.activeSegment,
  );

  const languagesSegmentedControlData = ALL_LANGUAGES.map(({ acronym }) => ({
    label: acronym,
    value: acronym,
  }));

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
        <SegmentedControl
          value={activeSegment}
          color={PRIMARY_COLOR}
          data={languagesSegmentedControlData}
        />
      )}
    </Paper>
  );
}
