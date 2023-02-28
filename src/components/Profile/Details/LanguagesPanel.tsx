import { Stack } from '@mantine/core';

import { tags } from '@/assets/data/profile';
import { Tags } from '@/components/Dashboard/common/Tags';

export function LanguagesPanel() {
  return (
    <Stack justify='flex-end'>
      <Tags name='profile' value={tags} badgeProps={{ size: 'lg', radius: 'xs', py: 10 }} />
    </Stack>
  );
}
