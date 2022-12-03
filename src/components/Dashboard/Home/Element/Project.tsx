import { Badge } from '@mantine/core';

import { Element } from '.';
import { IProject } from '@/interfaces/dashboard/IProject';
import { PROJECTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IProject;
}

export function ProjectElement({ item }: IProps) {
  const { name, languages, tags } = item;

  const renderedLanguages = languages.map(
    ({ acronym, badgeColorInHex }, index) => (
      <Badge
        mr={5}
        size='xs'
        radius={0}
        variant='filled'
        key={`${name}-language-${index}`}
        style={{ backgroundColor: badgeColorInHex }}
      >
        {acronym}
      </Badge>
    ),
  );

  const renderedTags = tags.map(({ text, color }, index) => (
    <Badge
      mr={5}
      size='xs'
      radius={0}
      color={color}
      variant='filled'
      key={`${name}-tag-${index}`}
    >
      {text}
    </Badge>
  ));

  return (
    <Element
      text={name}
      extra={renderedTags}
      label={renderedLanguages}
      icon={PROJECTS_NAVIGATION_ITEM.icon}
    />
  );
}
