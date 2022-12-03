import { createStyles } from '@mantine/core';

import { DARK_THEME } from '../constants/themes';

export const useProjectsStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      overlay: {
        borderRadius: '6px',
        backgroundColor:
          theme.colorScheme === DARK_THEME
            ? theme.colors.dark[6]
            : theme.colors.gray[1],
      },
    };

    return classes;
  })();

  return classes;
};
