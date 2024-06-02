import { IExtendedPost } from '@/types/IExtendedPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { translateStringToAddress } from '@/helpers/translateStringToAddress';

import { POST as POST1 } from './2020-02-22';
import { POST as POST2 } from './2020-03-06';
import { POST as POST3 } from './2021-12-27';
import { POST as POST4 } from './2021-12-29';
import { POST as POST5 } from './2022-01-09';
import { POST as POST6 } from './2023-12-04';
import { POST as POST7 } from './2023-12-11';
import { POST as POST8 } from './2024-05-18';
import { POST as POST9 } from './2024-05-20';
import { POST as POST10 } from './2024-06-02';

export const POSTS: IExtendedPost[] = [POST1, POST2, POST3, POST4, POST5, POST6, POST7, POST8, POST9, POST10].map(
  (post) => ({
    ...post,
    address: translateStringToAddress(post.name, POSTS_ROUTE),
  }),
);
