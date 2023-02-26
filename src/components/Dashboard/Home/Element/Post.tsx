import { Anchor } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Element } from '.';
import { Tags } from '@/components/Dashboard/common/Tags';
import { IExtendedPost } from '@/interfaces/dashboard/IExtendedPost';
import { POSTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IExtendedPost;
}

export function PostElement({ item }: IProps) {
  const navigate = useNavigate();

  const { name, tags, address } = item;

  return (
    <Element
      icon={POSTS_NAVIGATION_ITEM.icon}
      text={name}
      extra={<Tags name={name} value={tags} badgeProps={{ mr: 5 }} />}
      postExtra={
        <Anchor size='xs' onClick={() => navigate(address)}>
          (View)
        </Anchor>
      }
    />
  );
}
