import { Badge, BadgeProps } from '@mantine/core';

import { ITag } from '@/interfaces/ITag';
import { PRIMARY_COLOR } from '@/config';

interface IProps {
  name: string;

  value: ITag[];

  badgeProps?: BadgeProps;
}

export function Tags({ name, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ text, color }, index) => (
        <Badge
          size='xs'
          radius={0}
          color={color || PRIMARY_COLOR}
          variant='filled'
          key={`${name}-tag-${index}`}
          {...badgeProps}
        >
          {text}
        </Badge>
      ))}
    </>
  );
}
