import {
  Container,
  MantineProvider,
  BackgroundImage,
  Center,
} from '@mantine/core';

import { LeadGrid } from './Grid';
import styles from './app.module.css';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BackgroundImage
        src={require('@/assets/images/background.svg').default}
        radius='xs'
        className={styles.background}
      >
        <Container fluid className={styles.container}>
          <Center className={styles.container}>
            <LeadGrid />
          </Center>
        </Container>
      </BackgroundImage>
    </MantineProvider>
  );
}
