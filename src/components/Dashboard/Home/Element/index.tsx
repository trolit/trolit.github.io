import { ReactNode } from 'react';
import { TablerIcon } from '@tabler/icons';
import { Group, Paper, Text, ThemeIcon, Stack, Flex } from '@mantine/core';

import { HOME_ELEMENT_HEIGHT } from '@/config';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  icon: TablerIcon;

  label?: ReactNode;

  text: string;

  extra?: ReactNode;
}

export function Element({ icon, label, text, extra }: IProps) {
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
          <Stack align='flex-start' spacing={0}>
            <Text mb={3} lineClamp={1}>
              {label}
            </Text>

            <Text fz='xs' lineClamp={2}>
              {text}
            </Text>

            <Text lineClamp={1}>{extra}</Text>
          </Stack>
        </Flex>
      </Group>
    </Paper>
  );
}
