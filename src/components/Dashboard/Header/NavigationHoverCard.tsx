import {
  Text,
  Group,
  Button,
  Divider,
  NavLink,
  HoverCard,
  SimpleGrid,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons';

import { Link } from './Link';
import { ILink } from '@/interfaces/dashboard/ILink';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  name: string;

  links: ILink[];

  route: string;
}

export function NavigationHoverCard({ name, links, route }: IProps) {
  const navigate = useNavigate();

  const dashboardStyles = useDashboardStyles();

  return (
    <HoverCard
      width={600}
      position='bottom'
      radius='md'
      shadow='md'
      withinPortal
    >
      <HoverCard.Target>
        <NavLink
          key={name}
          label={
            <span className={dashboardStyles.navLinkWithIcon}>
              {name} <IconChevronDown size={16} />
            </span>
          }
          className={dashboardStyles.link}
        />
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position='apart' px='md'>
          <Text weight={500}>Recent</Text>

          <Button variant='outline' onClick={() => navigate(route)}>
            View all
          </Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {links.map((item) => (
            // @TODO - navigate on click
            <Link item={item} />
          ))}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
