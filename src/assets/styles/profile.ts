import { OVERLAY_PADDING } from '@/config';
import { createStyles } from '@mantine/core';

const PRESENTATION_GROUP_HEIGHT = '25vh';

const TABS_LIST_HEIGHT = '35px';

const BLOCKQUOTE_HEIGHT = '15vh';

const LINKS_GROUP_HEIGHT = '10vh';

export const useProfileStyles = () => {
  const { classes } = createStyles((theme) => {
    const classes = {
      wrapper: {
        minWidth: 300,
        borderRight: OVERLAY_PADDING === 0 ? '1px dashed #3F484B' : '',
      },

      presentationGroup: {
        height: PRESENTATION_GROUP_HEIGHT,
      },

      titleWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      tabs: {
        height: `calc(100% - ${PRESENTATION_GROUP_HEIGHT} - ${BLOCKQUOTE_HEIGHT} - ${LINKS_GROUP_HEIGHT})`,
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
        height: LINKS_GROUP_HEIGHT,
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
