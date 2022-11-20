import { Badge, Group } from '@mantine/core';

import { ILanguage } from '@/interfaces/ILanguage';

interface IProps {
  languages: ILanguage[];
}

export function Languages({ languages }: IProps) {
  return (
    <Group spacing={5} noWrap>
      {languages.length ? (
        languages.map((language, index) => (
          <Badge
            key={`badge-${language.name}-${index}`}
            variant='filled'
            radius={index === 0 ? 'md' : 0}
            style={{
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: language.badgeColorInHex,
            }}
          >
            {language.acronym}
          </Badge>
        ))
      ) : (
        <span>&nbsp;</span>
      )}
    </Group>
  );
}
