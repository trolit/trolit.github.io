import { useNavigate } from 'react-router-dom';
import { POSTS } from '@/data/posts';
import { Post } from '@/components/Post';
import { sortByDate } from '@/helpers/sortByDate';
import { Layout } from '@/components/common/Layout';
import { IExtendedPost } from '@/types/IExtendedPost';

export function Posts() {
  const navigate = useNavigate();
  const sortedPosts = sortByDate<IExtendedPost>(POSTS);

  return (
    <Layout>
      {sortedPosts.map((post, index) => (
        <div key={`post-${index}`} className='px-4'>
          <Post value={post} onPress={() => navigate(post.address)} />
        </div>
      ))}
    </Layout>
  );
}
