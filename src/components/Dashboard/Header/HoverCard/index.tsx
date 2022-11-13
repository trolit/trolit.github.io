import {
  Box,
  Text,
  Group,
  Center,
  Button,
  Divider,
  HoverCard,
  SimpleGrid,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

import { Link } from './Link';
import { primaryColor } from '@/assets/data/common';
import { ILink } from '@/interfaces/dashboard/ILink';

interface IProps {
  title: string;

  links: ILink[];
}

export function Care({ title, links }: IProps) {
  return (
    <HoverCard
      width={600}
      position='bottom'
      radius='md'
      shadow='md'
      withinPortal
    >
      <HoverCard.Target>
        <a href='#'>
          <Center inline>
            <Box component='span' mr={5}>
              {title}
            </Box>

            <IconChevronDown size={16} color={primaryColor} />
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position='apart' px='md'>
          <Text weight={500}>{title}</Text>

          <Button variant='outline'>View all</Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {links.map((item) => (
            <Link item={item} />
          ))}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
