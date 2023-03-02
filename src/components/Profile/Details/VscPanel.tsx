import { Group, Anchor } from '@mantine/core';

import { VSC_PANEL_DATA } from '@/assets/data/profile';

export function VscPanel() {
  return (
    <>
      <Group position='center'>
        {VSC_PANEL_DATA.map(({ name, url }) => (
          <Anchor key={name} size='md' href={url} target='_blank'>
            {name}
          </Anchor>
        ))}
      </Group>
    </>
  );
}
