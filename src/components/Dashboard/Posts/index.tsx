import { Stack } from '@mantine/core';

import { Element } from './Element';
import { POSTS } from '@/assets/data/posts';

export function Posts() {
  return (
    <Stack>
      {POSTS.map((post, index) => (
        <Element id={index + 1} item={post} key={index} />
      ))}
    </Stack>
  );
}
