import { Group } from '@mantine/core';

import { tags } from '@/assets/data/profile';
import { Tags } from '@/components/Dashboard/common/Tags';

export function LanguagesPanel() {
  return (
    <Group>
      <Group position='center' spacing='lg'>
        <Tags name='profile' value={tags} badgeProps={{ size: 'md', radius: 'xs' }} />
      </Group>
    </Group>
  );
}
