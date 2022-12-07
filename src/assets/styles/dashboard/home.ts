import { createStyles } from '@mantine/core';

import {
  HEADER_HEIGHT,
  OVERLAY_PADDING,
  DASHBOARD_PADDING,
  MEDIUM_SCREEN_THRESHOLD,
} from '@/config';

const TITLE_HEIGHT = '50px';

const INNER_PADDING = '7px';

const DATE_BADGE_HEIGHT = '35px';

export const useHomeStyles = () => {
  const { classes } = createStyles((theme) => {
    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${OVERLAY_PADDING}px)`;

    const classes = {
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
        height: `calc(${AVAILABLE_HEIGHT} - ${TITLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,

        [`@media (max-width: ${MEDIUM_SCREEN_THRESHOLD})`]: {
          minWidth: '150px',
        },
      },

      firstBoardItem: {
        paddingLeft: DASHBOARD_PADDING,
        paddingRight: INNER_PADDING,
      },

      innerBoardItem: {
        padding: `0 ${INNER_PADDING}`,
      },

      lastBoardItem: {
        paddingRight: DASHBOARD_PADDING,
        paddingLeft: INNER_PADDING,
      },

      boardDate: {
        height: `${DATE_BADGE_HEIGHT}`,
      },
    };

    return classes;
  })();

  return classes;
};
