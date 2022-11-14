import { ReactNode } from 'react';
import { Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Profile } from '@/components/Profile';
import { Dashboard } from '@/components/Dashboard';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;
}

export function MainGrid({ tab }: IProps) {
  const commonStyles = useCommonStyles();

  const isDashboardMaximized = useSelector(
    (state: RootState) => state.preferences.isDashboardMaximized,
  );

  return (
    <Grid grow className={`${commonStyles.h100} ${commonStyles.w100}`}>
      {!isDashboardMaximized && (
        <Grid.Col span={3}>
          <Profile />
        </Grid.Col>
      )}

      <Grid.Col span={isDashboardMaximized ? 12 : 9}>
        <motion.div layout className={commonStyles.h100}>
          <Dashboard tab={tab} />
        </motion.div>
      </Grid.Col>
    </Grid>
  );
}
