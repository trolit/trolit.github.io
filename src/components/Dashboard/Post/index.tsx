import { Stack } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';

import { POSTS } from '@/assets/data/posts';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { usePostRenderer } from '@/services/usePostRenderer';

export function Post() {
  type ExpectedParams = {
    postId: string;
  };

  const postRenderer = usePostRenderer<IPost>();

  const { postId } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const parsedPostId = parseInt(postId);

  if (
    Number.isNaN(parsedPostId) ||
    parsedPostId < 1 ||
    parsedPostId > POSTS.length
  ) {
    return <Navigate to={POSTS_ROUTE} replace={true} />;
  }

  const post = POSTS[parsedPostId - 1];

  return (
    <Stack spacing='xl' align='center'>
      {postRenderer.render(post)}
    </Stack>
  );
}
