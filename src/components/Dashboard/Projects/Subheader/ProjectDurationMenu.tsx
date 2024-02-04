import { Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { ANY } from '@/assets/constants/common';
import { setActiveDuration } from '@/store/projects';

export function ProjectDurationMenu() {
  const dispatch = useDispatch();

  const data = [
    {
      label: 'Any duration',
      value: ANY,
    },
    {
      label: 'up to 1 month',
      value: '1',
    },
    {
      label: '6+ months',
      value: '6',
    },
    {
      label: '9+ months',
      value: '9',
    },
  ];

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
