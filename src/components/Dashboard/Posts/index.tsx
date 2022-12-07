import { Container, Stack } from '@mantine/core';

import { Element } from './Element';
import { POSTS } from '@/assets/data/posts';
import { DASHBOARD_PADDING } from '@/config';

export function Posts() {
  return (
    <Container p={DASHBOARD_PADDING} fluid>
      <Stack>
        {POSTS.map((post, index) => (
          <Element key={`post-${index}`} id={index + 1} item={post} />
        ))}
      </Stack>
    </Container>
  );
}
