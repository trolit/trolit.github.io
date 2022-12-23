import { TablerIcon } from '@tabler/icons';
import { Group, Image } from '@mantine/core';

import { PRIMARY_COLOR } from '@/config';

interface IProps {
  name: string;

  value: string | TablerIcon | TablerIcon[];
}

export function Thumbnail({ name, value: Value }: IProps) {
  if (Array.isArray(Value)) {
    return (
      <Group>
        {Value.map((Icon, index) => (
          <Icon size={35} key={`${name}-icon-${index}`} />
        ))}
      </Group>
    );
  }

  if (typeof Value === 'string') {
    return <Image width={34} height={34} radius='md' src={Value} alt={`${name} image`} withPlaceholder />;
  }

  return <Value size={22} color={PRIMARY_COLOR} />;
}
