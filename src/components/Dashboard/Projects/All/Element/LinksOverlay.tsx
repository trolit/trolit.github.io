import { Dispatch, SetStateAction } from 'react';
import { Group, Stack, Button, Overlay, ScrollArea, SimpleGrid } from '@mantine/core';

import { ILink } from '@/interfaces/ILink';
import { useCommonStyles } from '@/assets/styles/common';
import { useProjectsStyles } from '@/assets/styles/dashboard/projects';
import { Link } from '@/components/Dashboard/Projects/All/Element/Link';

interface IProps {
  links: ILink[];

  toggleOverlay: Dispatch<SetStateAction<boolean>>;
}

export function LinksOverlay({ links, toggleOverlay }: IProps) {
  const { h100 } = useCommonStyles();

  const { overlay } = useProjectsStyles();

  return (
    <Overlay radius='md' opacity={1}>
      <Stack p='md' className={`${h100} ${overlay}`}>
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
