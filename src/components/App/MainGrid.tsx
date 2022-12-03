import { ReactNode } from 'react';
import { Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Profile } from '@/components/Profile';
import { Dashboard } from '@/components/Dashboard';
import { useAppStyles } from '@/assets/styles/app';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;
}

export function MainGrid({ tab }: IProps) {
  const { mainGrid } = useAppStyles();

  const { h100, w100 } = useCommonStyles();

  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <Grid grow gutter='xs' align='center' className={mainGrid}>
      {!isDashboardMaximized && (
        <Grid.Col py={0} span={3} className={`${h100} ${w100}`}>
          <Profile />
        </Grid.Col>
      )}

      <Grid.Col
        py={0}
        span={isDashboardMaximized ? 12 : 9}
        className={`${h100} ${w100}`}
      >
        <motion.div layout className={`${h100} ${w100}`}>
          <Dashboard tab={tab} />
        </motion.div>
      </Grid.Col>
    </Grid>
  );
}
