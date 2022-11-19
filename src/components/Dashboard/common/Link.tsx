import { Text, UnstyledButton, Group } from '@mantine/core';

import { ILink } from '@/interfaces/ILink';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  item: ILink;
}

export function Link({ item }: IProps) {
  const dashboardStyles = useDashboardStyles();

  return (
    <UnstyledButton
      className={dashboardStyles.subLink}
      onClick={() => {
        window.open(item.url, '_blank');
      }}
    >
      <Group align='flex-start'>
        <div>
          <Text size='sm' weight={500}>
            {item.name}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
