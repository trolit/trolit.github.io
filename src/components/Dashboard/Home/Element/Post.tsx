import { Badge } from '@mantine/core';

import { Element } from '.';
import { IPost } from '@/interfaces/dashboard/IPost';
import { postsNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: IPost;
}

export function PostElement({ item }: IProps) {
  const { name, tags } = item;

  const extra = tags.map(({ text, color }, index) => (
    <Badge
      size='xs'
      radius={0}
      color={color}
      variant='filled'
      key={`${name}-tag-${index}`}
    >
      {text}
    </Badge>
  ));

  return <Element icon={postsNavigationItem.icon} text={name} extra={extra} />;
}
