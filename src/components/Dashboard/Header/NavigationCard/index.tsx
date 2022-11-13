import {
  Box,
  Text,
  Group,
  Anchor,
  Center,
  Button,
  Divider,
  HoverCard,
  SimpleGrid,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';

import { Link } from './Link';
import { ILink } from '@/interfaces/dashboard/ILink';

interface IProps {
  title: string;

  links: ILink[];
}

export function NavigationCard({ title, links }: IProps) {
  const renderedLinks = links.map((item) => <Link item={item} />);

  return (
    <HoverCard
      width={600}
      position='bottom'
      radius='md'
      shadow='md'
      withinPortal
    >
      <HoverCard.Target>
        <Anchor>
          <Center inline>
            <Box component='span' mr={5}>
              {title}
            </Box>

            <IconChevronDown size={16} />
          </Center>
        </Anchor>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position='apart' px='md'>
          <Text weight={500}>Recent</Text>

          <Button variant='outline'>View all</Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {renderedLinks}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
