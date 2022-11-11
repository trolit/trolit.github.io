import {
  Center,
  Container,
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { useState } from 'react';

import { LeadGrid } from './Grid';
import styles from './styles.module.css';
import { backgroundSrc, primaryColor } from '@/assets/data/common';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
