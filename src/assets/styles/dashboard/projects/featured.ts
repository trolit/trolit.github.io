import { createStyles } from '@mantine/core';

const MIN_CARD_WIDTH = 350;

export const useFeaturedProjectsStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      avatar: {
        top: 30,
        left: 0,
        right: 0,
        zIndex: 9999,
        margin: 'auto',
        border: `4px solid #354ec4`, // @NOTE manually set cause of indigo
        borderBottomLeftRadius: 140,
        borderBottomRightRadius: 140,
        position: 'absolute' as const,
      },

      element: {
        position: 'relative' as const,
      },

      dateBadge: {
        height: 35,
      },

      card: {
        marginTop: 85,
        width: MIN_CARD_WIDTH,
      },
    };

    return classes;
  })();

  return {
    classes,
    constants: {
      MIN_CARD_WIDTH,
    },
  };
};
