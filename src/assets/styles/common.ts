import { createStyles } from '@mantine/core';

export const useCommonStyles = () => {
  const { classes } = createStyles((theme) => {
    const { fn } = theme;

    const classes = {
      panel: {
        opacity: 0.98,
      },

      hiddenMobile: {
        [fn.smallerThan('sm')]: {
          display: 'none',
        },
      },

      hiddenDesktop: {
        [fn.largerThan('sm')]: {
          display: 'none',
        },
      },

      h100: {
        height: '100%',
      },

      w100: {
        width: '100%',
      },

      textCenter: {
        textAlign: 'center' as const,
      },
    };

    return classes;
  })();

  return classes;
};
