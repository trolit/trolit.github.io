import {
  Text,
  Group,
  Stack,
  Button,
  Overlay,
  SimpleGrid,
  UnstyledButton,
} from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

import { ILink } from '@/interfaces/ILink';
import { useCommonStyles } from '@/assets/styles/common';
import { useProjectsStyles } from '@/assets/styles/projects';

interface IProps {
  links: ILink[];

  toggleOverlay: Dispatch<SetStateAction<boolean>>;
}

export function LinksOverlay({ links, toggleOverlay }: IProps) {
  const commonStyles = useCommonStyles();

  const projectsStyles = useProjectsStyles();

  return (
    <Overlay radius='md' opacity={1}>
      <Stack
        p='md'
        className={`${commonStyles.h100} ${projectsStyles.overlay}`}
      >
        <Group position='apart' align='start' grow style={{ flexGrow: 1 }}>
          <SimpleGrid cols={3}>
            {links.map((link, index) => (
              <UnstyledButton
                p='md'
                key={index}
                color='black'
                className={projectsStyles.item}
                onClick={() => {
                  window.open(link.url, '_blank');
                }}
              >
                <Stack
                  spacing={0}
                  align='center'
                  justify='center'
                  className={commonStyles.h100}
                >
                  <link.icon size={32} />

                  <Text fz='xs' c='dimmed' lineClamp={1} mt={7}>
                    {link.name}
                  </Text>
                </Stack>
              </UnstyledButton>
            ))}
          </SimpleGrid>
        </Group>

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
