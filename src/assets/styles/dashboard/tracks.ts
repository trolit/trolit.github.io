import { createStyles } from '@mantine/core';

export const useTracksStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      headerCell: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    };

    return classes;
  })();

  return classes;
};
