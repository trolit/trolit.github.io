import { useDispatch, useSelector } from 'react-redux';
import { Paper, SegmentedControl, Text } from '@mantine/core';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { setActiveSegment } from '@/store/home';
import { HomeSegment } from '@/enums/HomeSegment';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Subheader() {
  const { subheader } = useHomeStyles();

  const dispatch = useDispatch();

  const activeSegment = useSelector(
    (state: RootState) => state.home.activeSegment,
  );

  return (
    <Paper radius={0} className={subheader}>
      <Text c='dimmed' fz='sm'>
        Recent activity
      </Text>

      <SegmentedControl
        value={activeSegment}
        color={PRIMARY_COLOR}
        data={[
          { label: 'Projects', value: HomeSegment.PROJECTS },
          { label: 'Posts', value: HomeSegment.POSTS },
          { label: 'Tracks', value: HomeSegment.TRACKS },
        ]}
        onChange={(value: HomeSegment) => dispatch(setActiveSegment(value))}
      />
    </Paper>
  );
}
