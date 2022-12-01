import { TablerIcon } from '@tabler/icons';
import { Group, Paper, Text, ThemeIcon, Stack } from '@mantine/core';

import { useCommonStyles } from '@/assets/styles/common';
import { HOME_ELEMENT_HEIGHT } from '@/config';
import { ReactNode } from 'react';

interface IProps {
  icon: TablerIcon;

  text: string;

  extra?: ReactNode;
}

export function Element({ icon, extra, text }: IProps) {
  const { w100, h100 } = useCommonStyles();

  const Icon = icon;

  const innerSpace = 10;

  return (
    <Paper
      withBorder
      pl={innerSpace}
      className={w100}
      style={{ height: `${HOME_ELEMENT_HEIGHT}px` }}
    >
      <Group align='center' noWrap className={`${h100}`} spacing={innerSpace}>
        <ThemeIcon p={5} size={30} radius={0}>
          <Icon />
        </ThemeIcon>

        <Paper className={w100} mr={innerSpace}>
          <Stack align='flex-start' spacing={3}>
            <Text fz='xs' lineClamp={1}>
              {text}
            </Text>

            {extra}
          </Stack>
        </Paper>
      </Group>
    </Paper>
  );
}
