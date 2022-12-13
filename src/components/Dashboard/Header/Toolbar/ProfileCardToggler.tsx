import { ActionIcon, ThemeIcon, Tooltip } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IconAddressBookOff, IconAddressBook } from '@tabler/icons';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { toggleProfileCard } from '@/store/preferences';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function ProfileCardToggler() {
  const dispatch = useDispatch();

  const { profileCardToggler } = useDashboardStyles();

  const isProfileCardVisible = useSelector(
    (state: RootState) => state.preferences.isProfileCardVisible,
  );

  const label = `${isProfileCardVisible ? 'Show' : 'Hide'} profile card`;

  const Icon = isProfileCardVisible ? IconAddressBook : IconAddressBookOff;

  return (
    <Tooltip label={label} position='bottom' withArrow withinPortal>
      <ActionIcon
        variant='light'
        color={PRIMARY_COLOR}
        className={profileCardToggler}
        onClick={() => dispatch(toggleProfileCard())}
      >
        <ThemeIcon variant='gradient'>
          <Icon size={25} />
        </ThemeIcon>
      </ActionIcon>
    </Tooltip>
  );
}
