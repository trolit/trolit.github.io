import { useDispatch, useSelector } from 'react-redux';
import { Paper, SegmentedControl, Text } from '@mantine/core';

import { RootState } from '@/store';
import { setActiveSegment } from '@/store/home';
import { HomeSegment } from '@/enums/HomeSegment';
import { useHomeStyles } from '@/assets/styles/dashboard/home';
import { HOME_GROUP_BY, PRIMARY_COLOR, MAX_HOME_INTEREST_POINTS } from '@/config';

export function Subheader() {
  const { subheader } = useHomeStyles();

  const dispatch = useDispatch();

  const activeSegment = useSelector((state: RootState) => state.home.activeSegment);

  const textContent = (() => {
    const value = MAX_HOME_INTEREST_POINTS > 1 ? MAX_HOME_INTEREST_POINTS : '';

    const unit = MAX_HOME_INTEREST_POINTS > 1 ? `${HOME_GROUP_BY}s` : HOME_GROUP_BY;

    return `Activity (last ${value} ${unit})`;
  })();

  return (
    <Paper radius={0} className={subheader}>
      <Text c='dimmed' fz='sm'>
        {textContent}
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
