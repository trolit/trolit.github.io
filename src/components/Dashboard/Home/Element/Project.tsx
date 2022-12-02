import { Badge } from '@mantine/core';

import { Element } from '.';
import { IProject } from '@/interfaces/dashboard/IProject';
import { projectsNavigationItem } from '@/assets/data/dashboard';
interface IProps {
  item: IProject;
}

export function ProjectElement({ item }: IProps) {
  const { name, languages } = item;

  const renderedLanguages = languages.map(
    ({ name, badgeColorInHex }, index) => (
      <Badge
        key={`${name}-badge-${index}`}
        radius={0}
        size='xs'
        style={{ backgroundColor: badgeColorInHex }}
        variant='filled'
      >
        {name}
      </Badge>
    ),
  );

  return (
    <Element
      icon={projectsNavigationItem.icon}
      text={name}
      extra={renderedLanguages}
    />
  );
}
