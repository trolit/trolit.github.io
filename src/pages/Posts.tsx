import { POSTS } from '@/data/posts';
import { IPost } from '@/types/IPost';
import { Post } from '@/components/Post';
import { sortByDate } from '@/helpers/sortByDate';
import { Layout } from '@/components/common/Layout';

export function Posts() {
  const sortedPosts = sortByDate<IPost>(POSTS);

  return (
    <Layout>
      {sortedPosts.map((post, index) => (
        <div key={`post-${index}`} className='px-4'>
          <Post value={post} />
        </div>
      ))}
    </Layout>
  );
}
