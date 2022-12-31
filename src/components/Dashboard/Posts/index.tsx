import { Container, ScrollArea, Stack } from '@mantine/core';

import { Element } from './Element';
import { POSTS } from '@/assets/data/posts';
import { DASHBOARD_PADDING } from '@/config';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function Posts() {
  const { scrollArea } = useDashboardStyles();

  return (
    <ScrollArea className={scrollArea}>
      <Container p={DASHBOARD_PADDING} fluid>
        <Stack>
          {POSTS.map((post, index) => (
            <Element key={`post-${index}`} id={index + 1} item={post} />
          ))}
        </Stack>
      </Container>
    </ScrollArea>
  );
}
