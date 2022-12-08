import { Badge, ActionIcon, Group } from '@mantine/core';

import { Element } from '.';
import { IProject } from '@/interfaces/dashboard/IProject';
import { PROJECTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IProject;
}

export function ProjectElement({
  item: { name, languages, tags, links },
}: IProps) {
  const renderedLanguages = languages.map(
    ({ acronym, badgeColorInHex }, index) => (
      <Badge
        mr={5}
        size='sm'
        radius={0}
        variant='outline'
        key={`${name}-language-${index}`}
        style={{ borderColor: badgeColorInHex, color: badgeColorInHex }}
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

  const renderedLinks = (
    <Group mt={5} spacing={5}>
      {links.map(({ icon: Icon, url }, index) => (
        <ActionIcon
          key={`${name}-link-${index}`}
          variant='subtle'
          size={22}
          onClick={() => {
            window.open(url, '_blank');
          }}
        >
          <Icon />
        </ActionIcon>
      ))}
    </Group>
  );

  return (
    <Element
      text={name}
      extra={renderedTags}
      postExtra={renderedLinks}
      label={renderedLanguages}
      icon={PROJECTS_NAVIGATION_ITEM.icon}
    />
  );
}
