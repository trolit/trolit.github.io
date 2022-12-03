import { Badge, Anchor } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Element } from '.';
import { POSTS } from '@/assets/data/posts';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { POSTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IPost;
}

export function PostElement({ item }: IProps) {
  const navigate = useNavigate();

  const id = POSTS.indexOf(item) + 1;

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

  const postExtra = (
    <Anchor size='xs' onClick={() => navigate(`${POSTS_ROUTE}/${id}`)}>
      (View)
    </Anchor>
  );

  return (
    <Element
      icon={POSTS_NAVIGATION_ITEM.icon}
      text={name}
      extra={extra}
      postExtra={postExtra}
    />
  );
}
