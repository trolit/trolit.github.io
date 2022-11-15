import { createStyles } from '@mantine/core';

export const useDashboardStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      header: {
        borderRadius: '8px 8px 0 0',
      },

      link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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
            theme.colorScheme === 'dark'
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
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
      },

      navLinkWithIcon: {
        display: 'flex',
        alignItems: 'center',
      },
    };

    return classes;
  })();

  return classes;
};
