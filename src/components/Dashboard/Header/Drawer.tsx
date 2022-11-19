import { useSelector } from 'react-redux';
import { Drawer, Divider, ScrollArea, NavLink } from '@mantine/core';

import { RootState } from '@/store';
import { useNavigate } from 'react-router';
import { headerHeight } from '@/assets/data/common';
import { DARK_THEME } from '@/assets/constants/themes';
import { useCommonStyles } from '@/assets/styles/common';
import { navigationItems } from '@/assets/data/dashboard';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  isDrawerOpened: boolean;

  onDrawerClose: () => void;
}

export function HeaderDrawer({ isDrawerOpened, onDrawerClose }: IProps) {
  const navigate = useNavigate();

  const commonStyles = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const colorScheme = useSelector(
    (state: RootState) => state.preferences.colorScheme,
  );

  const navigation = navigationItems.map(({ name, route }) => {
    return (
      <NavLink
        key={name}
        label={name}
        className={dashboardStyles.link}
        onClick={() => navigate(route)}
      />
    );
  });

  return (
    <Drawer
      size='100%'
      padding='md'
      zIndex={1000000}
      title='Navigation'
      opened={isDrawerOpened}
      onClose={onDrawerClose}
      className={commonStyles.hiddenDesktop}
    >
      <ScrollArea sx={{ height: `calc(100vh - ${headerHeight}px)` }} mx='-md'>
        <Divider
          my='sm'
          color={colorScheme === DARK_THEME ? 'dark.5' : 'gray.1'}
        />
        {/* @TODO Add "View All" option */}
        {navigation}
      </ScrollArea>
    </Drawer>
  );
}
