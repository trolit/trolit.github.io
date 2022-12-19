import { Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { ANY } from '@/assets/constants/common';
import { setActiveLanguage } from '@/store/projects';
import { ALL_LANGUAGES } from '@/assets/constants/predefined-languages';

export function LanguageMenu() {
  const dispatch = useDispatch();

  const data = [
    {
      label: 'Any',
      value: ANY,
    },
    ...ALL_LANGUAGES.map(({ name, acronym }) => ({
      label: name,
      value: acronym,
    })),
  ];

  const activeLanguageLabel = useSelector(
    (state: RootState) =>
      data.find(({ value }) => value === state.projects.activeLanguage)?.label,
  );

  return (
    <Menu
      width={110}
      withinPortal
      position='left-start'
      transition='pop-top-left'
    >
      <Menu.Target>
        <Button rightIcon={<IconChevronDown size={18} stroke={1.5} />} pr={12}>
          {activeLanguageLabel}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {data.map(({ label, value }) => (
          <Menu.Item
            key={`${label}-language`}
            onClick={() => dispatch(setActiveLanguage(value))}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
