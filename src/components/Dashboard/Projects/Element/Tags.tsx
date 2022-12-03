import { Group, Badge } from '@mantine/core';

import { ITag } from '@/interfaces/ITag';

interface IProps {
  tags: ITag[];
}

export function Tags({ tags }: IProps) {
  return (
    <Group spacing='sm' position='center'>
      {tags.map(({ text, color }, index) => (
        <Badge
          size='sm'
          color={color}
          variant='outline'
          key={`badge-${text}-${index}`}
        >
          {text}
        </Badge>
      ))}
    </Group>
  );
}
