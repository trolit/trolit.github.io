import { createStyles } from '@mantine/core';

import { DARK_THEME } from '@/assets/constants/common';
import { DASHBOARD_HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';

export const useDashboardStyles = () => {
  const { classes } = createStyles((theme) => {
    const { spacing } = theme;

    const classes = {
      header: {
        borderRadius: OVERLAY_PADDING > 0 ? '8px 8px 0 0' : '0',
      },

      headerDrawerScrollArea: {
        height: `calc(100vh - ${DASHBOARD_HEADER_HEIGHT} - 20px)`,
      },

      scrollArea: {
        borderRadius: theme.fn.radius('md'),
        height: `calc(100vh - ${DASHBOARD_HEADER_HEIGHT} - ${OVERLAY_PADDING}px)`,
      },

      navigationLink: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === DARK_THEME ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
          height: 42,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        },

        ...theme.fn.hover({
          backgroundColor: theme.colorScheme === DARK_THEME ? theme.colors.dark[6] : theme.colors.gray[0],
        }),

        '&:first-of-type': {
          borderTopLeftRadius: OVERLAY_PADDING > 0 ? '8px' : 0,
        },
      },

      link: {
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === DARK_THEME ? theme.colors.dark[7] : theme.white,

        '&:hover': {
          boxShadow: `${theme.shadows.md} !important`,
          transform: 'scale(1.05)',
        },
      },
    };

    return classes;
  })();

  return classes;
};
