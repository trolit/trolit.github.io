import { Badge } from '@mantine/core';

import { Element } from '.';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_NAVIGATION_ITEM } from '@/assets/data/dashboard';

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

  return (
    <Element icon={POSTS_NAVIGATION_ITEM.icon} text={name} extra={extra} />
  );
}
