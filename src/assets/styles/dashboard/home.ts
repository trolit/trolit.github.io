import { createStyles } from '@mantine/core';

import { HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';

const TITLE_HEIGHT = 30;

const INNER_PADDING = 15;

const SCROLL_PADDING = 12;

const DATE_BADGE_HEIGHT = 30;

export const useHomeStyles = () => {
  const { classes } = createStyles((theme) => {
    const { spacing } = theme;

    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px - ${OVERLAY_PADDING}px - ${
      spacing.lg * 2
    }px - ${SCROLL_PADDING}px)`;

    const classes = {
      wrapper: {
        padding: 0,
        height: `${AVAILABLE_HEIGHT}px`,
      },

      title: {
        height: `${TITLE_HEIGHT}px`,
      },

      horizontalScroll: {
        height: `calc(100% - ${TITLE_HEIGHT}px)`,
      },

      elements: {
        padding: `${INNER_PADDING}px`,
        height: `calc(${AVAILABLE_HEIGHT} - ${
          INNER_PADDING * 2
        }px - ${DATE_BADGE_HEIGHT}px)`,
      },

      date: {
        height: `${DATE_BADGE_HEIGHT}px`,
      },
    };

    return classes;
  })();

  return classes;
};
