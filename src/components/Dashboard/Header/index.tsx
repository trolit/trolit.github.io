import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Group, Header, Burger, NavLink } from '@mantine/core';

import { Toolbar } from './Toolbar';
import { HeaderDrawer } from './Drawer';
import { HEADER_HEIGHT } from '@/config';
import { useDisclosure } from '@mantine/hooks';
import { useCommonStyles } from '@/assets/styles/common';
import { navigationItems } from '@/assets/data/dashboard';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function PanelHeader() {
  const navigate = useNavigate();

  const location = useLocation();

  const commonStyles = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const [isDrawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const navigation = navigationItems.map(({ icon: Icon, name, route }) => (
    <NavLink
      key={name}
      label={name}
      icon={<Icon size={16} />}
      className={dashboardStyles.link}
      active={location.pathname === route}
      onClick={() => navigate(route)}
    />
  ));

  return (
    <Box>
      <Header height={HEADER_HEIGHT} className={dashboardStyles.header}>
        <Group position='apart' className={commonStyles.h100}>
          <Group
            noWrap
            spacing={0}
            className={`${commonStyles.hiddenMobile} ${commonStyles.h100} `}
          >
            {navigation}
          </Group>

          <Burger
            px='md'
            opened={isDrawerOpened}
            onClick={toggleDrawer}
            className={commonStyles.hiddenDesktop}
          />

          <Toolbar />
        </Group>
      </Header>

      <HeaderDrawer
        isDrawerOpened={isDrawerOpened}
        onDrawerClose={closeDrawer}
      />
    </Box>
  );
}
