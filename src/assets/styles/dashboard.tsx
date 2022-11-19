import { createStyles } from '@mantine/core';

import { DARK_THEME } from '@/assets/constants/themes';
import { overlayPadding, headerHeight } from '@/config';

export const useDashboardStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        height: `calc(100vh - ${overlayPadding}px)`,
      },

      header: {
        borderRadius: '8px 8px 0 0',
      },

      content: {
        height: `calc(100vh - ${headerHeight}px - ${overlayPadding}px)`,
        borderRadius: theme.fn.radius('md'),
      },

      link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
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

          '&:first-of-type': {
            borderTopLeftRadius: '8px',
          },
        }),
      },

      subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === DARK_THEME
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
      },
    };

    return classes;
  })();

  return classes;
};
