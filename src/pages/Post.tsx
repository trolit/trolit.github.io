import { Navigate, useParams } from 'react-router-dom';
import { POSTS } from '@/data/posts';
import { IExtendedPost } from '@/types/IExtendedPost';
import { useContentRenderer } from '@/services/useContentRenderer';
import { POSTS_POST_NAME_SLUG, POSTS_ROUTE } from '@/assets/constants/routes';
import { PrimsLoader } from '@/components/PrismLoader';
import { Layout } from '@/components/common/Layout';

type ExpectedParams = {
  [POSTS_POST_NAME_SLUG]: string;
};

export function Post() {
  const contentRenderer = useContentRenderer<IExtendedPost>();

  const { postName } = useParams<keyof ExpectedParams>() as ExpectedParams;

  const postIndex = POSTS.findIndex((post) => post.address.endsWith(postName));

  if (~postIndex) {
    const post = POSTS[postIndex];
    const hasCodeComponent = post.components.some((component) => component.getKey() === 'code');

    return (
      <Layout>
        <div style={{ overflow: 'auto' }}>
          <div className='px-8 space-y-4 dark:text-slate-400'>{contentRenderer.render(post)}</div>

          {hasCodeComponent && <PrimsLoader />}
        </div>
      </Layout>
    );
  }

  return <Navigate to={POSTS_ROUTE} replace={true} />;
}
