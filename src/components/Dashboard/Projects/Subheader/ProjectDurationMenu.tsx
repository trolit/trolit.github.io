import { Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { setActiveDuration } from '@/store/projects';
import { PROJECTS_DURATION_OPTIONS_COUNT, PROJECTS_DURATION_OPTIONS_STEP } from '@/config';

export function ProjectDurationMenu() {
  const dispatch = useDispatch();

  let previousValue = 0;

  const data = [
    {
      label: 'Any duration',
      value: 0,
    },
  ];

  for (let index = 0; index < PROJECTS_DURATION_OPTIONS_COUNT; index++) {
    if (index === 0) {
      data.push({
        label: `1-${PROJECTS_DURATION_OPTIONS_STEP} months`,
        value: PROJECTS_DURATION_OPTIONS_STEP,
      });
    } else if (index === PROJECTS_DURATION_OPTIONS_COUNT - 1) {
      data.push({
        label: `${previousValue + 1}-${previousValue + PROJECTS_DURATION_OPTIONS_STEP} months`,
        value: previousValue + PROJECTS_DURATION_OPTIONS_STEP,
      });

      data.push({
        label: `${previousValue + 1 + PROJECTS_DURATION_OPTIONS_STEP}+ months`,
        value: previousValue + 2 * PROJECTS_DURATION_OPTIONS_STEP,
      });
    } else {
      data.push({
        label: `${previousValue + 1}-${previousValue + PROJECTS_DURATION_OPTIONS_STEP} months`,
        value: previousValue + PROJECTS_DURATION_OPTIONS_STEP,
      });
    }

    previousValue += PROJECTS_DURATION_OPTIONS_STEP;
  }

  const activeLengthLabel = useSelector(
    (state: RootState) => data.find(({ value }) => value === state.projects.activeDuration)?.label,
  );

  return (
    <Menu width={110} withinPortal position='left-start' transition='pop-top-left'>
      <Menu.Target>
        <Button rightIcon={<IconChevronDown size={18} stroke={1.5} />} pr={12}>
          {activeLengthLabel}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {data.map(({ label, value }) => (
          <Menu.Item key={`${label}-language`} onClick={() => dispatch(setActiveDuration(value))}>
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
