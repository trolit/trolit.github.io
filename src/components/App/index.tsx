import {
  Center,
  Container,
  ScrollArea,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import {
  primaryColor,
  backgroundSrc,
  overlayPadding,
} from '@/assets/data/common';
import { RootState } from '@/store';
import { MainGrid } from './MainGrid';
import { useAppStyles } from '@/assets/styles/app';
import { toggleColorScheme } from '@/store/preferences';
import { useCommonStyles } from '@/assets/styles/common';

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
        theme={{ colorScheme, primaryColor }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ScrollArea
          className={appStyles.scrollArea}
          style={{
            backgroundImage: `url(${backgroundSrc})`,
          }}
        >
          <Container px={overlayPadding} fluid className={appStyles.container}>
            <Center className={commonStyles.h100}>
              <MainGrid tab={tab} />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
