import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { posts } from '@/assets/data/posts';
import { POSTS_ROUTE } from '@/assets/constants/routes';

export function Post() {
  type ExpectedParams = {
    postId: string;
  };

  const navigate = useNavigate();

  const { postId } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const parsedPostId = parseInt(postId);

  useEffect(() => {
    if (
      Number.isNaN(postId) ||
      parsedPostId < 1 ||
      parsedPostId > posts.length
    ) {
      navigate(POSTS_ROUTE);
    }
  });

  const post = posts[parsedPostId - 1];

  //   if (location.pathname === POSTS_ROUTE) {
  //     return (
  //       <Stack>
  //         {posts.map((post, index) => (
  //           <Element item={post} key={index} />
  //         ))}
  //       </Stack>
  //     );
  //   }

  return <span>Hello from {post.name}</span>;
}
