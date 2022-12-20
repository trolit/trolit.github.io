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
import { PRIMARY_COLOR, BACKGROUND_SRC, PRIMARY_COLOR_SHADE } from '@/config';

interface IProps {
  tab: ReactNode;

  subheader?: ReactNode;
}

export default function App({ tab, subheader }: IProps) {
  const { scrollArea, container } = useAppStyles();

  const { h100, w100 } = useCommonStyles();

  const colorScheme = useSelector(
    (state: RootState) => state.preferences.colorScheme,
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          primaryColor: PRIMARY_COLOR,
          primaryShade: PRIMARY_COLOR_SHADE,
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
              <MainGrid tab={tab} subheader={subheader} />
            </Center>
          </Container>
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
