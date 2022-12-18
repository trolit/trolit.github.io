import { createStyles } from '@mantine/core';

import { DASHBOARD_PADDING, HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';

const MIN_CARD_WIDTH = 300;

const DATE_BADGE_HEIGHT = '35px';

const SUB_HEADER_HEIGHT = '50px';

export const useFeaturedProjectsStyles = () => {
  const { classes } = createStyles((theme) => {
    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${OVERLAY_PADDING}px - ${SUB_HEADER_HEIGHT} - ${DASHBOARD_PADDING}px)`;

    const classes = {
      wrapper: {
        height: AVAILABLE_HEIGHT,
      },

      dateBadge: {
        height: DATE_BADGE_HEIGHT,
      },

      stack: {
        position: 'relative' as const,
        height: `calc(${AVAILABLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,
      },

      card: {
        width: '100%',
        height: '100%',
        minWidth: MIN_CARD_WIDTH,
      },
    };

    return classes;
  })();

  return {
    classes,
    constants: {
      MIN_CARD_WIDTH,
    },
  };
};