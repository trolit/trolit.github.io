import { Text, UnstyledButton, Stack } from '@mantine/core';

import { ILink } from '@/interfaces/ILink';
import { useCommonStyles } from '@/assets/styles/common';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  item: ILink;
}

export function Link({ item: { icon: Icon, name, url } }: IProps) {
  const { h100 } = useCommonStyles();

  const { link } = useDashboardStyles();

  return (
    <UnstyledButton
      p='md'
      color='black'
      className={link}
      onClick={() => {
        window.open(url, '_blank');
      }}
    >
      <Stack spacing={0} align='center' justify='center' className={h100}>
        <Icon size={32} />

        <Text fz='xs' c='dimmed' lineClamp={1} mt={7}>
          {name}
        </Text>
      </Stack>
    </UnstyledButton>
  );
}
