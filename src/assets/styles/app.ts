import { createStyles } from '@mantine/core';

import { OVERLAY_PADDING } from '@/config';

export const useAppStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      scrollArea: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },

      container: {
        padding: 0,
        width: '100vw',
        height: '100vh',
      },

      mainGrid: {
        height: `calc(100% - ${OVERLAY_PADDING}px)`,
        width: `calc(100% - ${OVERLAY_PADDING}px)`,
      },
    };

    return classes;
  })();

  return classes;
};
