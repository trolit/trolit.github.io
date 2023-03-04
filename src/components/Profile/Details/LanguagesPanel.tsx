import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Group, Text, Stack } from '@mantine/core';

import { setActiveLanguage } from '@/store/projects';
import { LANGUAGES_PANEL_DATA } from '@/assets/data/profile';
import { Languages } from '@/components/Dashboard/common/Languages';
import { PROJECTS_ROUTE } from '@/assets/constants/routes';

export function LanguagesPanel() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Stack>
      {LANGUAGES_PANEL_DATA.filter((element) => !!element.data.length).map(({ title, data }, index) => (
        <div key={`languages-panel-section-${index}`}>
          <Text fz='sm' fw={700} mb={10}>
            # {title}
          </Text>

          <Group grow>
            <Languages
              clickable
              displayFullName
              useBadgeColorInHexAsBackground
              name={`${title}-languages`}
              value={data}
              badgeProps={{ size: 'lg', radius: 'sm' }}
              onBadgeClick={(language) => {
                dispatch(setActiveLanguage(language.acronym));

                navigate(PROJECTS_ROUTE);
              }}
            />
          </Group>
        </div>
      ))}
    </Stack>
  );
}
