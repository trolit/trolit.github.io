import { Title, Container, ScrollArea } from '@mantine/core';

import { Board } from './Board';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Home() {
  const { wrapper, title, horizontalScroll } = useHomeStyles();

  return (
    <Container className={wrapper} fluid>
      <Title order={4} align='center' className={title}>
        Recent Activity
      </Title>

      <ScrollArea className={horizontalScroll}>
        <Container p={0} fluid>
          <Board />
        </Container>
      </ScrollArea>
    </Container>
  );
}
