import { Badge, BadgeProps } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  name: string;

  value: ILanguage[];

  badgeProps?: BadgeProps;

  displayFullName?: boolean;

  clickable?: boolean;

  useBadgeColorInHexAsBackground?: boolean;

  onBadgeClick?: (language: ILanguage) => void;
}

export function Languages({
  name,
  value,
  clickable,
  badgeProps,
  onBadgeClick,
  displayFullName,
  useBadgeColorInHexAsBackground,
}: IProps) {
  return (
    <>
      {value.map(({ name: lanuageName, acronym, badgeColorInHex }, index) => (
        <Badge
          radius={0}
          variant='outline'
          key={`${name}-language-${index}`}
          style={{
            cursor: clickable ? 'pointer' : 'default',
            borderColor: badgeProps?.color || badgeColorInHex,
            backgroundColor: useBadgeColorInHexAsBackground ? badgeColorInHex : '',
            color: useBadgeColorInHexAsBackground ? 'white' : badgeProps?.color || badgeColorInHex,
          }}
          {...badgeProps}
          onClick={() => {
            if (onBadgeClick) {
              onBadgeClick(value[index]);
            }
          }}
        >
          {displayFullName ? lanuageName : acronym}
        </Badge>
      ))}
    </>
  );
}
