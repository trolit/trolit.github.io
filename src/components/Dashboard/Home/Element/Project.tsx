import { ActionIcon, Group } from '@mantine/core';

import { Element } from '.';
import { Tags } from '@/components/Dashboard/common/Tags';
import { IProject } from '@/interfaces/dashboard/IProject';
import { Languages } from '@/components/Dashboard/common/Languages';
import { PROJECTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: IProject;
}

export function ProjectElement({
  item: { name, languages, tags, links },
}: IProps) {
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
      textLineClamp={1}
      extra={<Tags name={name} value={tags} badgeProps={{ mr: 5 }} />}
      postExtra={renderedLinks}
      label={
        <Languages
          name={name}
          value={languages}
          badgeProps={{ mr: 5, size: 'sm', radius: 0, variant: 'outline' }}
        />
      }
      icon={PROJECTS_NAVIGATION_ITEM.icon}
    />
  );
}
