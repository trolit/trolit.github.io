import { Badge, BadgeProps } from '@mantine/core';

import { ITag } from '@/interfaces/ITag';

interface IProps {
  projectName: string;

  value: ITag[];

  badgeProps?: BadgeProps;
}

export function Tags({ projectName, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ text, color }, index) => (
        <Badge
          mr={5}
          size='xs'
          radius={0}
          color={color}
          variant='filled'
          key={`${projectName}-tag-${index}`}
          {...badgeProps}
        >
          {text}
        </Badge>
      ))}
    </>
  );
}
