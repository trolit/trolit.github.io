import { createStyles } from '@mantine/core';

export const useAppStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      scrollArea: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },

      container: {
        height: '100vh',
      },

      mainGrid: {
        width: '100%',
        height: '100%',
      },
    };

    return classes;
  })();

  return classes;
};
