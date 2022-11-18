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

import { ILink } from '@/interfaces/dashboard/ILink';
import { Link } from '@/components/Dashboard/common/Link';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  name: string;

  links: ILink[];

  route: string;

  linksLimit: number;
}

export function NavigationHoverCard({
  name,
  links,
  linksLimit,
  route,
}: IProps) {
  const navigate = useNavigate();

  const dashboardStyles = useDashboardStyles();

  const slicedLinks = links.slice(0, linksLimit);

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
          <Text weight={500}>Latest</Text>

          <Button variant='outline' onClick={() => navigate(route)}>
            View all
          </Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {slicedLinks.map((item) => (
            <Link item={item} key={item.name} />
          ))}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
