import {
  Container,
  MantineProvider,
  BackgroundImage,
  Center,
} from '@mantine/core';
import { LeadGrid } from './Grid';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BackgroundImage
        src={require('@/assets/images/background.svg').default}
        radius='xs'
        style={{ height: '100vh' }}
      >
        <Center
          style={{ width: '100%', height: '100%', border: '1px solid red' }}
        >
          <Container>
            <LeadGrid />
          </Container>
        </Center>
      </BackgroundImage>
    </MantineProvider>
  );
}
