import { createStyles } from '@mantine/core';

import { HEADER_HEIGHT, OVERLAY_PADDING, DASHBOARD_PADDING } from '@/config';

const INNER_PADDING = '7px';

const DATE_BADGE_HEIGHT = '35px';

const SUB_HEADER_HEIGHT = '50px';

export const useHomeStyles = () => {
  const { classes } = createStyles((theme, _params, getRef) => {
    const AVAILABLE_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${SUB_HEADER_HEIGHT} - ${OVERLAY_PADDING}px)`;

    const classes = {
      subheader: {
        display: 'flex',
        alignItems: 'center',
        height: SUB_HEADER_HEIGHT,
        justifyContent: 'space-between',
        padding: `0 ${DASHBOARD_PADDING}px`,
      },

      horizontalScroll: {
        height: AVAILABLE_HEIGHT,
      },

      boardColumn: {
        width: 0,
        minWidth: 200,
        flex: '1 1 0px',

        [`&:first-of-type .${getRef('boardDate')}`]: {
          borderBottomLeftRadius: theme.radius.sm,
        },

        [`&:last-of-type .${getRef('boardDate')}`]: {
          borderBottomRightRadius: theme.radius.sm,
        },
      },

      boardItems: {
        height: `calc(${AVAILABLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,
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
        ref: getRef('boardDate'),
        height: `${DATE_BADGE_HEIGHT}`,
      },
    };

    return classes;
  })();

  return classes;
};
