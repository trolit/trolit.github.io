import {
  Box,
  Flex,
  Text,
  SegmentedControl,
  SegmentedControlItem,
  Title,
  Paper,
} from '@mantine/core';

import { useHomeStyles } from '@/assets/styles/dashboard/home';

interface IProps {
  title?: string;

  segmentedControlData?: SegmentedControlItem[];
}

export function SubHeader({ title, segmentedControlData }: IProps) {
  const { subHeader } = useHomeStyles();

  return (
    <Paper radius={0} className={subHeader}>
      <Title order={5}>Recent Activity</Title>

      <SegmentedControl
        data={[
          { label: 'Projects', value: 'projects' },
          { label: 'Posts', value: 'posts' },
          { label: 'Tracks', value: 'tracks' },
        ]}
      />
    </Paper>
  );
}
