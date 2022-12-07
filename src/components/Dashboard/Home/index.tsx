import { Title, Container, ScrollArea } from '@mantine/core';
import { IconClock2 } from '@tabler/icons';
import { Board } from './Board';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Home() {
  const { title, horizontalScroll } = useHomeStyles();

  return (
    <Container p={0} fluid>
      <Title order={4} align='center' className={title}>
        <IconClock2 /> &nbsp; Recent Activity
      </Title>

      <ScrollArea className={horizontalScroll}>
        <Container p={0} fluid>
          <Board />
        </Container>
      </ScrollArea>
    </Container>
  );
}
