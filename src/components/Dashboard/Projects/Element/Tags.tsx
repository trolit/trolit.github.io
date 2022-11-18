import { Group, Badge } from '@mantine/core';

import { ITag } from '@/interfaces/dashboard/ITag';

interface IProps {
  tags: ITag[];
}

export function Tags({ tags }: IProps) {
  return (
    <Group spacing='sm' position='center'>
      {tags.map(({ text, color }, index) => (
        <Badge variant='outline' key={`badge-${text}-${index}`} size='sm'>
          {text}
        </Badge>
      ))}
    </Group>
  );
}
