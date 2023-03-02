import { Badge, BadgeProps } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  name: string;

  value: ILanguage[];

  badgeProps?: BadgeProps;

  displayFullName?: boolean;
}

export function Languages({ name, displayFullName, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ name: lanuageName, acronym, badgeColorInHex }, index) => (
        <Badge
          radius={0}
          variant='outline'
          key={`${name}-language-${index}`}
          style={{
            color: 'white',
            borderColor: badgeProps?.color || badgeColorInHex,
            backgroundColor: badgeProps?.color || badgeColorInHex,
          }}
          {...badgeProps}
        >
          {displayFullName ? lanuageName : acronym}
        </Badge>
      ))}
    </>
  );
}
