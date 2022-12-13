import { createStyles } from '@mantine/core';

import { OVERLAY_PADDING } from '@/config';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        height: `calc(100vh - ${OVERLAY_PADDING}px)`,
        minWidth: 300,
      },

      titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
      },

      group: {
        margin: '10px 20px',
      },

      link: {
        '&:hover': {
          border: '2px dotted',
          filter: 'grayscale(100%)',
        },
      },
    };

    return classes;
  })();

  return classes;
};
