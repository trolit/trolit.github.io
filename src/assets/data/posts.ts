import { sortByDate } from '@/helpers/sortByDate';
import { POST as POST1 } from './posts/2020-02-22';
import { POST as POST2 } from './posts/2020-03-06';
import { POST as POST3 } from './posts/2021-12-27';
import { POST as POST4 } from './posts/2021-12-29';
import { POST as POST5 } from './posts/2022-01-09';
import { POST as POST6 } from './posts/2023-12-04';
import { POST as POST7 } from './posts/2023-12-11';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { IExtendedPost } from '@/interfaces/dashboard/IExtendedPost';
import { translateStringToAddress } from '@/helpers/translateStringToAddress';

const RAW_POSTS: IExtendedPost[] = [POST1, POST2, POST3, POST4, POST5, POST6, POST7].map(
  (post) =>
    ({
      ...post,
      address: translateStringToAddress(post.name, POSTS_ROUTE),
    } as IExtendedPost),
);

export const POSTS = sortByDate<IExtendedPost>(RAW_POSTS, 'date');

export const ALL_DATES = POSTS.map(({ date }) => date);
