import { Badge, BadgeProps } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  name: string;

  value: ILanguage[];

  badgeProps?: BadgeProps;
}

export function Languages({ name, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ acronym, badgeColorInHex }, index) => (
        <Badge
          size='lg'
          radius={0}
          variant='outline'
          key={`${name}-language-${index}`}
          style={{
            color: badgeProps?.color || badgeColorInHex,
            borderColor: badgeProps?.color || badgeColorInHex,
          }}
          {...badgeProps}
        >
          {acronym}
        </Badge>
      ))}
    </>
  );
}
