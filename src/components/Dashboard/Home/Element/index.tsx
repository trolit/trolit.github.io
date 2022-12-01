import { UnstyledButton, Group, Kbd, Paper, Text } from '@mantine/core';

import { useCommonStyles } from '@/assets/styles/common';
import { HOME_ELEMENT_HEIGHT } from '@/config';

interface IProps {
  text: string;

  type: string;
}

export function Element({ text, type }: IProps) {
  const { w100, h100 } = useCommonStyles();

  return (
    <UnstyledButton
      className={w100}
      style={{ height: `${HOME_ELEMENT_HEIGHT}px` }}
    >
      <Group noWrap className={h100}>
        <Kbd
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {type}
        </Kbd>

        <Paper>
          <Text fz='sm' lineClamp={1}>
            {text}
          </Text>
        </Paper>
      </Group>
    </UnstyledButton>
  );
}
