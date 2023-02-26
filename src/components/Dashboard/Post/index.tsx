import { Navigate } from 'react-router-dom';
import { ScrollArea, Stack } from '@mantine/core';

import { POSTS } from '@/assets/data/posts';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { usePostRenderer } from '@/services/usePostRenderer';
import { usePostStyles } from '@/assets/styles/dashboard/post';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { IExtendedPost } from '@/interfaces/dashboard/IExtendedPost';

export function Post() {
  const { wrapper } = usePostStyles();

  const { scrollArea } = useDashboardStyles();

  const postRenderer = usePostRenderer<IExtendedPost>();

  const pathname = window.location.pathname;

  const postIndex = POSTS.findIndex((post) => post.address === pathname);

  if (~postIndex) {
    return (
      <ScrollArea className={scrollArea}>
        <Stack spacing='xl' align='center' className={wrapper}>
          {postRenderer.render(POSTS[postIndex])}
        </Stack>
      </ScrollArea>
    );
  }

  return <Navigate to={POSTS_ROUTE} replace={true} />;
}
