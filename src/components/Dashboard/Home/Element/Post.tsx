import { Element } from '.';
import { IPost } from '@/interfaces/dashboard/IPost';
import { postsNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: IPost;
}

export function PostElement({ item }: IProps) {
  const { name } = item;

  return <Element icon={postsNavigationItem.icon} text={name} />;
}
