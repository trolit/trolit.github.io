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

      item: {
        borderRadius: theme.radius.md,
        backgroundColor:
          theme.colorScheme === DARK_THEME ? theme.colors.dark[7] : theme.white,

        '&:hover': {
          boxShadow: `${theme.shadows.md} !important`,
          transform: 'scale(1.05)',
        },
      },
    };

    return classes;
  })();

  return classes;
};
