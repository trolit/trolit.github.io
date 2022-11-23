import { Paper } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';

import { posts } from '@/assets/data/posts';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { usePostRenderer } from '@/services/usePostRenderer';

export function Post() {
  type ExpectedParams = {
    postId: string;
  };

  const postRenderer = usePostRenderer();

  const { postId } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const parsedPostId = parseInt(postId);

  if (
    Number.isNaN(parsedPostId) ||
    parsedPostId < 1 ||
    parsedPostId > posts.length
  ) {
    return <Navigate to={POSTS_ROUTE} replace={true} />;
  }

  const post = posts[parsedPostId - 1];

  return <Paper>{postRenderer.render(post)}</Paper>;
}
