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
import styles from './styles.module.css';
import { toggleColorScheme } from '@/store/preferences';
import { backgroundSrc, primaryColor } from '@/assets/data/common';

export default function App() {
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
          className={styles.scrollArea}
          style={{
            backgroundImage: `url(${backgroundSrc})`,
          }}
        >
          <Container fluid className={styles.container}>
            <Center className={styles.center}>
              <MainGrid />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
