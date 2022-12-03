import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Drawer, Divider, ScrollArea, NavLink } from '@mantine/core';

import { RootState } from '@/store';
import { HEADER_HEIGHT } from '@/config';
import { useNavigate } from 'react-router';
import { DARK_THEME } from '@/assets/constants/themes';
import { useCommonStyles } from '@/assets/styles/common';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { NAVIGATION_ITEMS } from '@/assets/constants/navigation-items';

interface IProps {
  isDrawerOpened: boolean;

  onDrawerClose: () => void;
}

export function HeaderDrawer({ isDrawerOpened, onDrawerClose }: IProps) {
  const navigate = useNavigate();

  const location = useLocation();

  const { hiddenDesktop } = useCommonStyles();

  const { navigationLink } = useDashboardStyles();

  const colorScheme = useSelector(
    (state: RootState) => state.preferences.colorScheme,
  );

  const navigation = NAVIGATION_ITEMS.map(({ name, route }) => {
    return (
      <NavLink
        active={location.pathname === route}
        key={name}
        label={name}
        className={navigationLink}
        onClick={() => {
          navigate(route);

          onDrawerClose();
        }}
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
      className={hiddenDesktop}
    >
      <ScrollArea sx={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }} mx='-md'>
        <Divider
          my='sm'
          color={colorScheme === DARK_THEME ? 'dark.5' : 'gray.1'}
        />
        {navigation}
      </ScrollArea>
    </Drawer>
  );
}
