import { useDispatch, useSelector } from 'react-redux';
import { ActionIcon, ThemeIcon, Tooltip } from '@mantine/core';
import { IconAddressBookOff, IconAddressBook } from '@tabler/icons';

import { RootState } from '@/store';
import { PRIMARY_COLOR } from '@/config';
import { toggleProfileCard } from '@/store/preferences';

export function ProfileCardToggler() {
  const dispatch = useDispatch();

  const isProfileCardVisible = useSelector(
    (state: RootState) => state.preferences.isProfileCardVisible,
  );

  const label = `${isProfileCardVisible ? 'Hide' : 'Show'} profile card`;

  const Icon = isProfileCardVisible ? IconAddressBook : IconAddressBookOff;

  return (
    <Tooltip label={label} position='bottom' withArrow withinPortal>
      <ActionIcon
        variant='light'
        color={PRIMARY_COLOR}
        onClick={() => dispatch(toggleProfileCard())}
      >
        <ThemeIcon variant='gradient'>
          <Icon size={25} />
        </ThemeIcon>
      </ActionIcon>
    </Tooltip>
  );
}
