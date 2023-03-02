import { Group, Text, Stack } from '@mantine/core';

import { LANGUAGES_PANEL_DATA } from '@/assets/data/profile';
import { Languages } from '@/components/Dashboard/common/Languages';

export function LanguagesPanel() {
  return (
    <Stack>
      {LANGUAGES_PANEL_DATA.filter((element) => !!element.data.length).map(({ title, data }, index) => (
        <div key={`languages-${index}`}>
          <Text fz='sm' fw={700} mb={10}>
            # {title}
          </Text>

          <Group grow>
            <Languages
              displayFullName
              useBadgeColorInHexAsBackground
              name={`profile-${title}-languages`}
              value={data}
            />
          </Group>
        </div>
      ))}
    </Stack>
  );
}
