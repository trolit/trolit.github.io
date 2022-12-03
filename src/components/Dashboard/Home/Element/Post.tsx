import { Badge } from '@mantine/core';

import { Element } from '.';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IPost;
}

export function PostElement({ item: { name, tags } }: IProps) {
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
