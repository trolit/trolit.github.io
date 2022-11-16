import { Text, UnstyledButton, Group, ThemeIcon, Image } from '@mantine/core';

import { primaryColor } from '@/assets/data/common';
import { ILink } from '@/interfaces/dashboard/ILink';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  item: ILink;
}

export function Link({ item }: IProps) {
  const dashboardStyles = useDashboardStyles();

  const { thumbnail } = item;

  const renderedThumbnail =
    typeof thumbnail === 'string' ? (
      <Image src={thumbnail} alt={`${item.name} - thumbnail`} withPlaceholder />
    ) : (
      <ThemeIcon size={34} variant='default' radius='md'>
        <item.thumbnail size={22} color={primaryColor} />
      </ThemeIcon>
    );

  return (
    <UnstyledButton
      className={dashboardStyles.subLink}
      onClick={() => {
        window.open(item.target, '_blank');
      }}
    >
      <Group noWrap align='flex-start'>
        {renderedThumbnail}

        <div>
          <Text size='sm' weight={500}>
            {item.name}
          </Text>

          <Text size='xs' color='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
