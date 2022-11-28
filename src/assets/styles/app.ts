import { createStyles } from '@mantine/core';

export const useAppStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      scrollArea: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },

      container: {
        padding: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      },
    };

    return classes;
  })();

  return classes;
};
