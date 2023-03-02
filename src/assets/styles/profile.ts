import { createStyles } from '@mantine/core';

const PRESENTATION_GROUP_HEIGHT = '30%';

const TABS_HEIGHT = '40%';

const BLOCKQUOTE_HEIGHT = '15%';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        minWidth: 300,
      },

      presentationGroup: {
        height: PRESENTATION_GROUP_HEIGHT,
      },

      titleWrapper: {
        display: 'flex',
        justifyContent: 'center',
      },

      tabs: {
        height: TABS_HEIGHT,
      },

      tabsList: {
        height: `calc(100% * 0.15)`,
      },

      tabsContent: {
        height: `calc(100% * 0.85)`,
        padding: '5%',
      },

      blockQuote: {
        fontSize: 13,
        height: BLOCKQUOTE_HEIGHT,
        textAlign: 'center' as const,
      },

      linksGroup: {
        height: `calc(100% - ${PRESENTATION_GROUP_HEIGHT} - ${TABS_HEIGHT} - ${BLOCKQUOTE_HEIGHT})`,
      },

      link: {
        '&:hover': {
          border: '2px dotted',
        },
      },
    };

    return classes;
  })();

  return classes;
};
