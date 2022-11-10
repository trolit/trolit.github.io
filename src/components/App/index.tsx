import { Container, MantineProvider, Center } from '@mantine/core';

import { LeadGrid } from './Grid';
import styles from './app.module.css';
import { backgroundSrc } from '@/assets/data/profile';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
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
  );
}
