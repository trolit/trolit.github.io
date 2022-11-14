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
    };

    return classes;
  })();

  return classes;
};
