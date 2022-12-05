import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Drawer, Divider, ScrollArea, NavLink } from '@mantine/core';

import { RootState } from '@/store';
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

  const { navigationLink, headerDrawerScrollArea } = useDashboardStyles();

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
      <Divider
        my='sm'
        mx='-md'
        color={colorScheme === DARK_THEME ? 'dark.5' : 'gray.1'}
      />

      <ScrollArea className={headerDrawerScrollArea} mx='-md'>
        {navigation}
      </ScrollArea>
    </Drawer>
  );
}
