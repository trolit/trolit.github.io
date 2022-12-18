import { createStyles } from '@mantine/core';

import { DASHBOARD_PADDING, HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';

const SUB_HEADER_HEIGHT = '50px';

const DATE_BADGE_HEIGHT = '35px';

const MAX_TEXT_HEIGHT = '150px';

const MIN_CARD_WIDTH = '300px';

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

      card: {
        width: '100%',
        height: '100%',
        minWidth: MIN_CARD_WIDTH,
      },

      stack: {
        height: `calc(${AVAILABLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,
      },

      scrollArea: {
        height: MAX_TEXT_HEIGHT,
        border: '1px solid red',
      },
    };

    return classes;
  })();

  return classes;
};
