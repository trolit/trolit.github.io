import { Badge, Group } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  projectName: string;

  value: ILanguage[];
}

export function Languages({ projectName, value }: IProps) {
  if (!value.length) {
    return <span>&nbsp;</span>;
  }

  return (
    <Group spacing={5} noWrap>
      {value.map(({ badgeColorInHex, acronym }, index) => (
        <Badge
          variant='filled'
          radius={index === 0 ? 'md' : 0}
          key={`${projectName}-language-${index}`}
          style={{
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: badgeColorInHex,
          }}
        >
          {acronym}
        </Badge>
      ))}
    </Group>
  );
}
