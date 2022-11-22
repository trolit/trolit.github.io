import { Title } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';

import { posts } from '@/assets/data/posts';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { IHeader } from '@/interfaces/dashboard/posts/IHeader';

// @TMP
function isHeader(object: any): object is IHeader {
  return 'value' in object;
}

export function Post() {
  type ExpectedParams = {
    postId: string;
  };

  const { postId } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const parsedPostId = parseInt(postId);

  if (
    Number.isNaN(parsedPostId) ||
    parsedPostId < 1 ||
    parsedPostId > posts.length
  ) {
    return <Navigate to={POSTS_ROUTE} replace={true} />;
  }

  const { components } = posts[parsedPostId - 1];

  return (
    <div>
      {components.map((component, index) => {
        if (isHeader(component)) {
          const parsedComponent = component as IHeader;

          return (
            <Title key={index} order={parsedComponent.order}>
              {parsedComponent.value}
            </Title>
          );
        }

        return <span key={index}>kok</span>;
      })}
    </div>
  );
}
