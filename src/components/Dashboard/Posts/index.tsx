import { Stack } from '@mantine/core';

import { Element } from './Element';
import { POSTS } from '@/assets/data/posts';
import { DASHBOARD_PADDING } from '@/config';

export function Posts() {
  return (
    <Stack p={DASHBOARD_PADDING}>
      {POSTS.map((post, index) => (
        <Element key={`post-${index}`} id={index + 1} item={post} />
      ))}
    </Stack>
  );
}
