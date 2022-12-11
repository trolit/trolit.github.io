import { ScrollArea, Stack } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';

import { POSTS } from '@/assets/data/posts';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { usePostRenderer } from '@/services/usePostRenderer';
import { usePostStyles } from '@/assets/styles/dashboard/post';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function Post() {
  type ExpectedParams = {
    postId: string;
  };

  const { wrapper } = usePostStyles();

  const { scrollArea } = useDashboardStyles();

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
    <ScrollArea className={scrollArea}>
      <Stack spacing='xl' align='center' className={wrapper}>
        {postRenderer.render(post)}
      </Stack>
    </ScrollArea>
  );
}
