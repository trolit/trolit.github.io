import { useDispatch, useSelector } from 'react-redux';
import { IconSun, IconMoon, TablerIcon } from '@tabler/icons-react';
import { Box, Group, Center, ColorScheme, SegmentedControl } from '@mantine/core';

import { RootState } from '@/store';
import { toggleColorScheme } from '@/store/preferences';
import { DARK_THEME, LIGHT_THEME } from '@/assets/constants/common';

export function ThemeSwitcher() {
  const dispatch = useDispatch();

  const colorScheme = useSelector((state: RootState) => state.preferences.colorScheme);

  const Label = ({ text, icon: Icon }: { text: string; icon: TablerIcon }) => (
    <Center>
      <Icon size={16} stroke={1.5} />

      <Box ml={10}>{text}</Box>
    </Center>
  );

  return (
    <Group position='center'>
      <SegmentedControl
        value={colorScheme}
        transitionDuration={400}
        onChange={(value: ColorScheme) => dispatch(toggleColorScheme(value))}
        data={[
          {
            value: LIGHT_THEME,
            label: <Label icon={IconSun} text='Light' />,
          },

          {
            value: DARK_THEME,
            label: <Label icon={IconMoon} text='Dark' />,
          },
        ]}
      />
    </Group>
  );
}
