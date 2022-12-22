import { createStyles } from '@mantine/core';

import { HEADER_HEIGHT, OVERLAY_PADDING, DASHBOARD_PADDING } from '@/config';

const INNER_PADDING = '7px';

const DATE_BADGE_HEIGHT = '35px';

const SUB_HEADER_HEIGHT = '50px';

const BOARD_DATE_REF = 'boardDate';

const BOARD_ITEMS_REF = 'boardItems';

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

        [`&:first-of-type .${getRef(BOARD_DATE_REF)}`]: {
          borderBottomLeftRadius: theme.radius.sm,
        },

        [`&:last-of-type .${getRef(BOARD_DATE_REF)}`]: {
          borderBottomRightRadius: theme.radius.sm,
        },

        [`&:first-of-type .${getRef(BOARD_ITEMS_REF)}`]: {
          paddingLeft: DASHBOARD_PADDING,
          paddingRight: INNER_PADDING,
        },

        [`&:last-of-type .${getRef(BOARD_ITEMS_REF)}`]: {
          paddingRight: DASHBOARD_PADDING,
          paddingLeft: INNER_PADDING,
        },

        [`&:not(:first-of-type):not(:last-of-type) .${getRef(BOARD_ITEMS_REF)}`]: {
          padding: `0 ${INNER_PADDING}`,
        },
      },

      boardItems: {
        ref: getRef(BOARD_ITEMS_REF),
        height: `calc(${AVAILABLE_HEIGHT} - ${DATE_BADGE_HEIGHT})`,
      },

      boardDate: {
        ref: getRef(BOARD_DATE_REF),
        height: `${DATE_BADGE_HEIGHT}`,
      },
    };

    return classes;
  })();

  return classes;
};
