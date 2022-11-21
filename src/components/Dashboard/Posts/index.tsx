import { Stack } from '@mantine/core';

import { Element } from './Element';
import { posts } from '@/assets/data/posts';

export function Posts() {
  return (
    <Stack>
      {posts.map((post, index) => (
        <Element item={post} key={index} />
      ))}
    </Stack>
  );
}
