import { createStyles } from '@mantine/core';

const PRESENTATION_GROUP_HEIGHT = '27%';

const TABS_HEIGHT = '41%';

const TABS_LIST_HEIGHT = '35px';

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
        height: TABS_LIST_HEIGHT,
      },

      tabsContent: {
        height: `calc(100% - ${TABS_LIST_HEIGHT})`,
      },

      blockQuote: {
        fontSize: 13,
        height: BLOCKQUOTE_HEIGHT,
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
