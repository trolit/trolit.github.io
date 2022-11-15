import {
  Text,
  Group,
  Button,
  Divider,
  NavLink,
  HoverCard,
  SimpleGrid,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  title: string;

  links: JSX.Element[];

  viewAllUrl: string;
}

export function NavigationCard({ title, links, viewAllUrl }: IProps) {
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
          key={title}
          label={
            <span className={dashboardStyles.navLinkWithIcon}>
              {title} <IconChevronDown size={16} />
            </span>
          }
          className={dashboardStyles.link}
        />
      </HoverCard.Target>

      <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
        <Group position='apart' px='md'>
          <Text weight={500}>Recent</Text>

          <Button variant='outline' onClick={() => navigate(viewAllUrl)}>
            View all
          </Button>
        </Group>

        <Divider my='sm' mx='-md' />

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
