import { createStyles } from '@mantine/core';

import {
  HEADER_HEIGHT,
  OVERLAY_PADDING,
  SMALL_SCREEN_THRESHOLD,
  MEDIUM_SCREEN_THRESHOLD,
} from '@/config';
import { DARK_THEME } from '@/assets/constants/themes';

export const useDashboardStyles = () => {
  const { classes } = createStyles((theme) => {
    const { spacing } = theme;

    const classes = {
      header: {
        borderRadius: '8px 8px 0 0',
      },

      wrapper: {
        height: `calc(100vh - ${OVERLAY_PADDING}px)`,

        [`@media (max-width: ${MEDIUM_SCREEN_THRESHOLD})`]: {
          marginTop: `${OVERLAY_PADDING}px`,
        },
      },

      scrollArea: {
        height: `calc(100vh - ${HEADER_HEIGHT}px - ${OVERLAY_PADDING}px)`,
        borderRadius: theme.fn.radius('md'),
      },

      content: {
        padding: spacing.lg,
        [`@media (max-width: ${SMALL_SCREEN_THRESHOLD})`]: {
          width: `calc(100vw - ${spacing.lg}px - 10px)`,
        },
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
