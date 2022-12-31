import { Container, ScrollArea } from '@mantine/core';

import { Board } from './Board';
import { Subheader } from './Subheader';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Home() {
  const { horizontalScroll } = useHomeStyles();

  return (
    <>
      <Subheader />

      <ScrollArea className={horizontalScroll}>
        <Container p={0} fluid>
          <Board />
        </Container>
      </ScrollArea>
    </>
  );
}
