import {
  Center,
  Container,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { LeadGrid } from './LeadGrid';
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
        <Container
          fluid
          className={styles.container}
          style={{
            backgroundImage: `url(${backgroundSrc})`,
          }}
        >
          <Center className={styles.container}>
            <LeadGrid />
          </Center>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
