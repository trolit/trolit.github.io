import { createStyles } from '@mantine/core';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        minWidth: 300,
      },

      titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
      },

      blockQuote: {
        fontSize: 14,
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
