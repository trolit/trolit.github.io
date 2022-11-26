import { sortByDate } from '@/helpers/sortByDate';
import { post as post1 } from './posts/2022-02-22';
import { post as post2 } from './posts/2020-03-06';
import { IPost } from '@/interfaces/dashboard/IPost';

const rawPosts: IPost[] = [post1, post2];

export const posts = sortByDate<IPost>(rawPosts);
