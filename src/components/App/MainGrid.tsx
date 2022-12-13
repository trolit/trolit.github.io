import { ReactNode } from 'react';
import { Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { OVERLAY_PADDING } from '@/config';
import { Profile } from '@/components/Profile';
import { Dashboard } from '@/components/Dashboard';
import { useAppStyles } from '@/assets/styles/app';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  tab: ReactNode;

  subHeader?: ReactNode;
}

export function MainGrid({ tab, subHeader }: IProps) {
  const { mainGrid } = useAppStyles();

  const { h100, w100 } = useCommonStyles();

  const isProfileCardVisible = useSelector(
    (state: RootState) => state.preferences.isProfileCardVisible,
  );

  return (
    <Grid grow gutter={OVERLAY_PADDING / 2} align='center' className={mainGrid}>
      {isProfileCardVisible && (
        <Grid.Col py={0} span={3} className={`${h100} ${w100}`}>
          <Profile />
        </Grid.Col>
      )}

      <Grid.Col
        py={0}
        span={isProfileCardVisible ? 12 : 9}
        className={`${h100} ${w100}`}
      >
        <motion.div layout className={`${h100} ${w100}`}>
          <Dashboard tab={tab} subHeader={subHeader} />
        </motion.div>
      </Grid.Col>
    </Grid>
  );
}
