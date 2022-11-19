import { createStyles } from '@mantine/core';

import { overlayPadding } from '@/assets/data/common';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        height: `calc(100vh - ${overlayPadding}px)`,
      },

      title: {
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
