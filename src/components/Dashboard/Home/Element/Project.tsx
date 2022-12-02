import { Badge } from '@mantine/core';

import { Element } from '.';
import { IProject } from '@/interfaces/dashboard/IProject';
import { projectsNavigationItem } from '@/assets/data/dashboard';
interface IProps {
  item: IProject;
}

export function ProjectElement({ item }: IProps) {
  const { name, languages, tags } = item;

  const renderedLanguages = languages.map(
    ({ acronym, badgeColorInHex }, index) => (
      <Badge
        key={`${name}-badge-${index}`}
        radius={0}
        size='xs'
        style={{ backgroundColor: badgeColorInHex }}
        variant='filled'
      >
        {acronym}
      </Badge>
    ),
  );

  const renderedTags = tags.map(({ text }, index) => (
    <Badge
      mr={5}
      size='xs'
      radius={0}
      color='gray'
      variant='filled'
      key={`${name}-badge-${index}`}
    >
      {text}
    </Badge>
  ));

  return (
    <Element
      icon={projectsNavigationItem.icon}
      text={name}
      label={renderedLanguages}
      extra={renderedTags}
    />
  );
}
