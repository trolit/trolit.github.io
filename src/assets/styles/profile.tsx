import { createStyles } from '@mantine/core';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      paper: {
        height: '100%',
        opacity: 0.95,
      },

      title: {
        display: 'flex',
        justifyContent: 'center',
      },

      group: {
        margin: '10px 20px',
      },

      link: {
        '&:hover': {
          border: '2px dotted',
          filter: 'grayscale(100%)',
        },
      },
    };

    return classes;
  })();

  return classes;
};
