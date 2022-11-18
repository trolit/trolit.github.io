import { Text, UnstyledButton, Group } from '@mantine/core';

import { ILink } from '@/interfaces/dashboard/ILink';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { Thumbnail } from '@/components/Dashboard/common/Thumbnail';

interface IProps {
  item: ILink;
}

export function Link({ item }: IProps) {
  const dashboardStyles = useDashboardStyles();

  return (
    <UnstyledButton
      className={dashboardStyles.subLink}
      onClick={() => {
        window.open(item.target, '_blank');
      }}
    >
      <Group noWrap align='flex-start'>
        <Thumbnail name={item.name} value={item.thumbnail} />

        <div>
          <Text size='sm' weight={500}>
            {item.name}
          </Text>

          <Text size='xs' color='dimmed' lineClamp={2}>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
