import { createStyles } from '@mantine/core';

import { SMALL_SCREEN_THRESHOLD, DASHBOARD_PADDING } from '@/config';

export const usePostStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        padding: DASHBOARD_PADDING,
        [`@media (max-width: ${SMALL_SCREEN_THRESHOLD})`]: {
          width: `calc(100vw - ${DASHBOARD_PADDING * 2}px)`,
        },
      },
    };

    return classes;
  })();

  return classes;
};
