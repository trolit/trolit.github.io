import { createStyles } from '@mantine/core';

export const useCommonStyles = () => {
  const { classes } = createStyles((theme) => {
    const { fn } = theme;

    const classes = {
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
    };

    return classes;
  })();

  return classes;
};
