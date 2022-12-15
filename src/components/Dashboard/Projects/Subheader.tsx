import { Paper, SegmentedControl } from '@mantine/core';

import { PRIMARY_COLOR } from '@/config';
import { HomeSegment } from '@/enums/HomeSegment';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects';

export function Subheader() {
  const { subheader } = useProjectsStyles();

  return (
    <Paper radius={0} className={subheader}>
      <SegmentedControl
        color={PRIMARY_COLOR}
        data={[
          { label: 'All', value: HomeSegment.PROJECTS },
          { label: 'Featured', value: HomeSegment.POSTS },
        ]}
      />
    </Paper>
  );
}
