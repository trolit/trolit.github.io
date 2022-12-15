import { createStyles } from '@mantine/core';

import { DARK_THEME } from '@/assets/constants/themes';
import { DASHBOARD_PADDING, HEADER_HEIGHT, OVERLAY_PADDING } from '@/config';

const SUB_HEADER_HEIGHT = '50px';

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

      scrollArea: {
        borderRadius: theme.fn.radius('md'),
        height: `calc(100vh - ${HEADER_HEIGHT} - ${OVERLAY_PADDING}px - ${SUB_HEADER_HEIGHT})`,
      },
    };

    return classes;
  })();

  return classes;
};
