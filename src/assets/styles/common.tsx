import { createStyles } from '@mantine/core';

export const useCommonStyles = createStyles((theme) => {
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
  };

  return classes;
});
