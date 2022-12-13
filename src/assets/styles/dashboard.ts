import { createStyles } from '@mantine/core';

import { HOME_ROUTE } from '@/assets/constants/routes';
import { DARK_THEME } from '@/assets/constants/themes';
import { HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';
import { ACTIVE_THRESHOLD_VALUE } from '@/assets//constants/home-view-thresholds';

export const useDashboardStyles = (route?: string) => {
  const { classes } = createStyles((theme) => {
    const { spacing } = theme;

    const classes = {
      header: {
        borderRadius: '8px 8px 0 0',
      },

      headerDrawerScrollArea: {
        height: `calc(100vh - ${HEADER_HEIGHT} - 20px)`,
      },

      wrapper: {
        [`@media (max-width: ${
          route === HOME_ROUTE ? ACTIVE_THRESHOLD_VALUE : '861px'
        })`]: {
          margin: `calc(${OVERLAY_PADDING}px / 2) 0`,
        },
      },

      scrollArea: {
        borderRadius: theme.fn.radius('md'),
        height: `calc(100vh - ${HEADER_HEIGHT} - ${OVERLAY_PADDING}px)`,
      },

      navigationLink: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === DARK_THEME ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
          height: 42,
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === DARK_THEME
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        }),

        '&:first-of-type': {
          borderTopLeftRadius: '8px',
        },
      },

      link: {
        borderRadius: theme.radius.md,
        backgroundColor:
          theme.colorScheme === DARK_THEME ? theme.colors.dark[7] : theme.white,

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
