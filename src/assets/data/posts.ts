import { sortByDate } from '@/helpers/sortByDate';
import { POST as POST1 } from './posts/2022-02-22';
import { POST as POST2 } from './posts/2020-03-06';
import { POST as POST3 } from './posts/2021-12-27';
import { POST as POST4 } from './posts/2021-12-29';
import { POST as POST5 } from './posts/2022-01-09';

import { IPost } from '@/interfaces/dashboard/IPost';

const RAW_POSTS: IPost[] = [POST1, POST2, POST3, POST4, POST5];

export const POSTS = sortByDate<IPost>(RAW_POSTS);

export const ALL_DATES = POSTS.map(({ date }) => date);
