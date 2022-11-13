import { ILink } from '@/interfaces/dashboard/ILink';
import { Text, UnstyledButton, Group, ThemeIcon } from '@mantine/core';

import { primaryColor } from '@/assets/data/common';

interface IProps {
  item: ILink;
}

export function Link({ item }: IProps) {
  //  className={classes.subLink}
  return (
    <UnstyledButton key={item.title}>
      <Group noWrap align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <item.icon size={22} color={primaryColor} />
        </ThemeIcon>

        <div>
          <Text size='sm' weight={500}>
            {item.title}
          </Text>

          <Text size='xs' color='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
