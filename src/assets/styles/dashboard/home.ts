import { createStyles } from '@mantine/core';

import { HEADER_HEIGHT, OVERLAY_PADDING, DASHBOARD_PADDING } from '@/config';

const TITLE_HEIGHT = '30px';

const INNER_PADDING = '10px';

const DATE_BADGE_HEIGHT = '30px';

const HORIZONTAL_SCROLL_PADDING = '12px';

export const useHomeStyles = () => {
  const { classes } = createStyles((theme) => {
    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${
      DASHBOARD_PADDING * 2
    }px - ${OVERLAY_PADDING}px)`;

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

      items: {
        padding: `0 ${INNER_PADDING} ${INNER_PADDING} ${INNER_PADDING}`,
        height: `calc(${AVAILABLE_HEIGHT} - ${TITLE_HEIGHT} - ${DATE_BADGE_HEIGHT} - ${HORIZONTAL_SCROLL_PADDING})`,
      },

      date: {
        height: `${DATE_BADGE_HEIGHT}`,
      },
    };

    return classes;
  })();

  return classes;
};
