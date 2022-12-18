import { Badge, BadgeProps } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  projectName: string;

  value: ILanguage[];

  badgeProps?: BadgeProps;
}

export function Languages({ projectName, value, badgeProps }: IProps) {
  return (
    <>
      {value.map(({ acronym, badgeColorInHex }, index) => (
        <Badge
          size='lg'
          radius={0}
          variant='outline'
          key={`${projectName}-language-${index}`}
          style={{
            color: badgeColorInHex,
            borderColor: badgeColorInHex,
          }}
          {...badgeProps}
        >
          {acronym}
        </Badge>
      ))}
    </>
  );
}
