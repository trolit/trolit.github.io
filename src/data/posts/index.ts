import { IExtendedPost } from '@/types/IExtendedPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { translateStringToAddress } from '@/helpers/translateStringToAddress';

import { POST as POST1 } from './2020-02-22';
import { POST as POST2 } from './2020-03-06';

export const POSTS: IExtendedPost[] = [POST1, POST2].map((post) => ({
  ...post,
  address: translateStringToAddress(post.name, POSTS_ROUTE),
}));
