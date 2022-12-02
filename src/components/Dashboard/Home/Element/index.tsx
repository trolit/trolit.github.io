import { ReactNode } from 'react';
import { TablerIcon } from '@tabler/icons';
import { Group, Paper, Text, ThemeIcon, Stack, Flex } from '@mantine/core';

import { HOME_ELEMENT_HEIGHT } from '@/config';
import { useCommonStyles } from '@/assets/styles/common';

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
      className={w100}
      style={{ height: `${HOME_ELEMENT_HEIGHT}px` }}
    >
      <Group align='center' noWrap className={`${h100}`} spacing={innerSpace}>
        <ThemeIcon
          p={5}
          size={30}
          radius={0}
          className={h100}
          variant='default'
        >
          <Icon />
        </ThemeIcon>

        <Flex align='center' mr={innerSpace}>
          <Stack align='flex-start' spacing={3}>
            <Text fz='xs' lineClamp={1}>
              {text}
            </Text>

            <div style={{ overflow: 'hidden' }}>{extra}</div>
          </Stack>
        </Flex>
      </Group>
    </Paper>
  );
}
