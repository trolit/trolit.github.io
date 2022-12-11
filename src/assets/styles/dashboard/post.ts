import { createStyles } from '@mantine/core';

import { SMALL_SCREEN_THRESHOLD, DASHBOARD_PADDING } from '@/config';

export const usePostStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        padding: `calc(${DASHBOARD_PADDING} * 2)`,

        [`@media (max-width: ${SMALL_SCREEN_THRESHOLD})`]: {
          paddingLeft: 20,
          paddingRight: 15,
          width: `calc(100vw - 35px)`,
        },
      },
    };

    return classes;
  })();

  return classes;
};
