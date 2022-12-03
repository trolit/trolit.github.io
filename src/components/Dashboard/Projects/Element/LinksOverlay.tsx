import {
  Group,
  Stack,
  Button,
  Overlay,
  ScrollArea,
  SimpleGrid,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

import { ILink } from '@/interfaces/ILink';
import { useCommonStyles } from '@/assets/styles/common';
import { Link } from '@/components/Dashboard/common/Link';
import { useProjectsStyles } from '@/assets/styles/projects';

interface IProps {
  links: ILink[];

  toggleOverlay: Dispatch<SetStateAction<boolean>>;
}

export function LinksOverlay({ links, toggleOverlay }: IProps) {
  const { h100 } = useCommonStyles();

  const projectsStyles = useProjectsStyles();

  return (
    <Overlay radius='md' opacity={1}>
      <Stack p='md' className={`${h100} ${projectsStyles.overlay}`}>
        <ScrollArea style={{ flexGrow: 1 }}>
          <Group position='apart' align='start' grow>
            <SimpleGrid p={5} cols={3}>
              {links.map((link, index) => (
                <Link key={`link-${index}`} item={link} />
              ))}
            </SimpleGrid>
          </Group>
        </ScrollArea>

        <Button
          size='sm'
          radius='xs'
          color='gray'
          variant='outline'
          style={{ alignSelf: 'flex-end' }}
          onClick={() => toggleOverlay((isVisible) => !isVisible)}
        >
          show less
        </Button>
      </Stack>
    </Overlay>
  );
}
