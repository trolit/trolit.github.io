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

import { useStyles } from '@/components/Dashboard/styles';

interface IProps {
  title: string;

  links: JSX.Element[];
}

export function NavigationCard({ title, links }: IProps) {
  const { classes } = useStyles();

  return (
    <HoverCard
      width={600}
      position='bottom'
      radius='md'
      shadow='md'
      withinPortal
    >
      <HoverCard.Target>
        <a href='#' className={classes.link}>
          <Center inline>
            <Box component='span' mr={5}>
              {title}
            </Box>

            <IconChevronDown size={16} />
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position='apart' px='md'>
          <Text weight={500}>Recent</Text>

          <Button variant='outline'>View all</Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
