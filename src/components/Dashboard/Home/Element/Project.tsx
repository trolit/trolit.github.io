import { Group } from '@mantine/core';

import { Element } from '.';
import { Tags } from '@/components/Dashboard/common/Tags';
import { IProject } from '@/interfaces/dashboard/IProject';
import { Languages } from '@/components/Dashboard/common/Languages';
import { PROJECTS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';
import { ActionIconLinks } from '@/components/Dashboard/common/ActionIconLinks';

interface IProps {
  item: IProject;
}

export function ProjectElement({ item: { name, languages, tags, links } }: IProps) {
  const label = <Languages name={name} value={languages} badgeProps={{ mr: 5, size: 'md', radius: 55 }} />;

  const extra = <Tags name={name} value={tags} badgeProps={{ mr: 5 }} />;

  const postExtra = (
    <Group mt={5} spacing={5}>
      <ActionIconLinks name={name} value={links} actionIconProps={{ size: 22, variant: 'subtle' }} />
    </Group>
  );

  return (
    <Element
      text={name}
      extra={extra}
      label={label}
      textLineClamp={1}
      postExtra={postExtra}
      icon={PROJECTS_NAVIGATION_ITEM.icon}
    />
  );
}
