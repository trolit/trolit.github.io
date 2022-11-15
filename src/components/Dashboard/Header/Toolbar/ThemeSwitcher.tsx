import {
  Box,
  Group,
  Center,
  SegmentedControl,
  useMantineColorScheme,
  ColorScheme,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { IconSun, IconMoon } from '@tabler/icons';

import { toggleColorScheme } from '@/store/preferences';
import { DARK_THEME, LIGHT_THEME } from '@/assets/constants/themes';

export function ThemeSwitcher() {
  const dispatch = useDispatch();

  const { colorScheme } = useMantineColorScheme();

  return (
    <Group position='center'>
      <SegmentedControl
        value={colorScheme}
        transitionDuration={400}
        onChange={(value: ColorScheme) => dispatch(toggleColorScheme(value))}
        data={[
          {
            value: LIGHT_THEME,
            label: (
              <Center>
                <IconSun size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },

          {
            value: DARK_THEME,
            label: (
              <Center>
                <IconMoon size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}