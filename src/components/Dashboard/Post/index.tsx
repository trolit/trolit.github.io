import { ScrollArea, Stack } from '@mantine/core';
import { Navigate, useParams } from 'react-router-dom';

import { POSTS } from '@/assets/data/posts';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { usePostStyles } from '@/assets/styles/dashboard/post';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { POSTS_POST_NAME_SLUG } from '@/assets/constants/routes';
import { useContentRenderer } from '@/services/useContentRenderer';
import { IExtendedPost } from '@/interfaces/dashboard/IExtendedPost';

export function Post() {
  type ExpectedParams = {
    [POSTS_POST_NAME_SLUG]: string;
  };

  const { wrapper } = usePostStyles();

  const { scrollArea } = useDashboardStyles();

  const contentRenderer = useContentRenderer<IExtendedPost>();

  const { postName } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const postIndex = POSTS.findIndex((post) => post.address.endsWith(postName));

  if (~postIndex) {
    return (
      <ScrollArea className={scrollArea}>
        <Stack spacing='xl' className={wrapper}>
          {contentRenderer.render(POSTS[postIndex])}
        </Stack>
      </ScrollArea>
    );
  }

  return <Navigate to={POSTS_ROUTE} replace={true} />;
}
