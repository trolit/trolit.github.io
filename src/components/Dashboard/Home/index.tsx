import { Container, ScrollArea } from '@mantine/core';
import { Board } from './Board';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Home() {
  const { horizontalScroll } = useHomeStyles();

  return (
    <Container p={0} fluid>
      <ScrollArea className={horizontalScroll}>
        <Container p={0} fluid>
          <Board />
        </Container>
      </ScrollArea>
    </Container>
  );
}
