import { Element } from '.';
import { IPost } from '@/interfaces/dashboard/IPost';
import { postsNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: IPost;
}

export function ProjectElement({ item }: IProps) {
  const { name } = item;

  return <Element icon={postsNavigationItem.icon} text={name} />;
}
