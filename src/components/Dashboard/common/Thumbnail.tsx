import { TablerIcon } from '@tabler/icons';
import { Group, Image } from '@mantine/core';

import { PRIMARY_COLOR } from '@/config';

interface IProps {
  name: string;

  value: string | TablerIcon | TablerIcon[];
}

export function Thumbnail({ name, value }: IProps) {
  if (Array.isArray(value)) {
    return (
      <Group>
        {value.map((Icon, index) => (
          <Icon size={35} key={`${name}-icon-${index}`} />
        ))}
      </Group>
    );
  }

  if (typeof value === 'string') {
    return (
      <Image
        width={34}
        height={34}
        radius='md'
        src={value}
        alt={`${name} image`}
        withPlaceholder
      />
    );
  }

  const Value = value;

  return <Value size={22} color={PRIMARY_COLOR} />;
}
