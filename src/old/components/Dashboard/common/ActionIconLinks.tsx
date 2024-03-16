import { ILink } from '@/interfaces/ILink';

import { ActionIcon, ActionIconProps } from '@mantine/core';

interface IProps {
  name: string;

  value: ILink[];

  actionIconProps?: ActionIconProps;
}

export function ActionIconLinks({ name, value, actionIconProps }: IProps) {
  return (
    <>
      {value.map(({ icon: Icon, url }, index) => (
        <ActionIcon
          variant='outline'
          key={`${name}-link-${index}`}
          onClick={() => {
            window.open(url, '_blank');
          }}
          {...actionIconProps}
        >
          <Icon />
        </ActionIcon>
      ))}
    </>
  );
}
