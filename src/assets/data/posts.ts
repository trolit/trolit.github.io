import { sortByDate } from '@/helpers/sortByDate';
import { post as post1 } from './posts/2022-02-22';
import { post as post2 } from './posts/2020-03-06';
import { post as post3 } from './posts/2021-12-27';
import { post as post4 } from './posts/2021-12-29';
import { post as post5 } from './posts/2022-01-09';

import { IPost } from '@/interfaces/dashboard/IPost';

const rawPosts: IPost[] = [post1, post2, post3, post4, post5];

export const posts = sortByDate<IPost>(rawPosts);
