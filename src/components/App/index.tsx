import {
  Center,
  Container,
  ScrollArea,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { MainGrid } from './MainGrid';
import { useAppStyles } from '@/assets/styles/app';
import { toggleColorScheme } from '@/store/preferences';
import { useCommonStyles } from '@/assets/styles/common';
import { PRIMARY_COLOR, BACKGROUND_SRC, OVERLAY_PADDING } from '@/config';

interface IProps {
  tab: ReactNode;
}

export default function App({ tab }: IProps) {
  const appStyles = useAppStyles();

  const commonStyles = useCommonStyles();

  const colorScheme = useSelector(
    (state: RootState) => state.preferences.colorScheme,
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, PRIMARY_COLOR }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ScrollArea
          className={appStyles.scrollArea}
          style={{
            backgroundImage: `url(${BACKGROUND_SRC})`,
          }}
        >
          <Container px={OVERLAY_PADDING} fluid className={appStyles.container}>
            <Center className={commonStyles.h100}>
              <MainGrid tab={tab} />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
