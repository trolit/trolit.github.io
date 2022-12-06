import { createStyles } from '@mantine/core';

import {
  HEADER_HEIGHT,
  OVERLAY_PADDING,
  MEDIUM_SCREEN_THRESHOLD,
} from '@/config';

const TITLE_HEIGHT = '40px';

const INNER_PADDING = '10px';

const DATE_BADGE_HEIGHT = '35px';

export const useHomeStyles = () => {
  const { classes } = createStyles((theme) => {
    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${OVERLAY_PADDING}px)`;

    const classes = {
      wrapper: {
        padding: 0,
        height: `${AVAILABLE_HEIGHT}`,
      },

      title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${TITLE_HEIGHT}`,
      },

      horizontalScroll: {
        height: `calc(${AVAILABLE_HEIGHT} - ${TITLE_HEIGHT})`,
      },

      boardColumn: {
        width: '100%',
        flexShrink: 1,
      },

      boardItems: {
        padding: `0 ${INNER_PADDING} ${INNER_PADDING} ${INNER_PADDING}`,
        height: `calc(${AVAILABLE_HEIGHT} - ${TITLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,

        [`@media (max-width: ${MEDIUM_SCREEN_THRESHOLD})`]: {
          minWidth: '150px',
        },
      },

      boardDate: {
        height: `${DATE_BADGE_HEIGHT}`,
      },
    };

    return classes;
  })();

  return classes;
};
