import {
  Center,
  Container,
  ScrollArea,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { MainGrid } from './MainGrid';
import { useAppStyles } from '@/assets/styles/app';
import { toggleColorScheme } from '@/store/preferences';
import { backgroundSrc, primaryColor } from '@/assets/data/common';

export default function App() {
  const appStyles = useAppStyles();

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
          <Container fluid className={appStyles.container}>
            <Center className={appStyles.center}>
              <MainGrid />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
