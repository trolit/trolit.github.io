import { useSelector } from 'react-redux';
import { Center, Container, ScrollArea, MantineProvider, ColorSchemeProvider } from '@mantine/core';

import { RootState } from '@/store';
import { MainGrid } from './MainGrid';
import { useAppStyles } from '@/assets/styles/app';
import { toggleColorScheme } from '@/store/preferences';
import { useCommonStyles } from '@/assets/styles/common';
import { PRIMARY_COLOR, BACKGROUND_SRC, DARK_THEME_COLOR_SHADE, LIGHT_THEME_COLOR_SHADE } from '@/config';

export default function App() {
  const { h100, w100 } = useCommonStyles();

  const { scrollArea, container } = useAppStyles();

  const colorScheme = useSelector((state: RootState) => state.preferences.colorScheme);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: PRIMARY_COLOR,
          primaryShade: {
            light: LIGHT_THEME_COLOR_SHADE,
            dark: DARK_THEME_COLOR_SHADE,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {/* or Container -> Center -> ScrollArea -> MainGrid */}
        <ScrollArea
          className={scrollArea}
          style={{
            backgroundImage: `url(${BACKGROUND_SRC})`,
          }}
        >
          <Container fluid className={container}>
            <Center className={`${h100} ${w100}`}>
              <MainGrid />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
