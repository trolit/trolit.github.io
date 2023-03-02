import { Badge, BadgeProps } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  name: string;

  value: ILanguage[];

  badgeProps?: BadgeProps;

  displayFullName?: boolean;

  useBadgeColorInHexAsBackground?: boolean;
}

export function Languages({ name, displayFullName, useBadgeColorInHexAsBackground, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ name: lanuageName, acronym, badgeColorInHex }, index) => (
        <Badge
          radius={0}
          variant='outline'
          key={`${name}-language-${index}`}
          style={{
            color: useBadgeColorInHexAsBackground ? 'white' : badgeProps?.color || badgeColorInHex,
            borderColor: badgeProps?.color || badgeColorInHex,
            backgroundColor: useBadgeColorInHexAsBackground ? badgeColorInHex : '',
          }}
          {...badgeProps}
        >
          {displayFullName ? lanuageName : acronym}
        </Badge>
      ))}
    </>
  );
}
