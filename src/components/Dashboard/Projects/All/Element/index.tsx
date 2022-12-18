import { useState } from 'react';
import { Paper, Grid, Text, Stack, Button, Box, Group } from '@mantine/core';

import { Languages } from './Languages';
import { LinksOverlay } from './LinksOverlay';
import { useCommonStyles } from '@/assets/styles/common';
import { Tags } from '@/components/Dashboard/common/Tags';
import { IProject } from '@/interfaces/dashboard/IProject';
import { Thumbnail } from '@/components/Dashboard/common/Thumbnail';
import { FormattedDate } from '@/components/Dashboard/common/FormattedDate';

interface IProps {
  item: IProject;
}

export function Element({
  item: { name, thumbnail, date, description, languages, tags, links },
}: IProps) {
  const { h100 } = useCommonStyles();

  const [isOverlayOpened, toggleOverlay] = useState(false);

  return (
    <Paper radius='md' withBorder className={h100}>
      <Box className={h100} style={{ position: 'relative' }}>
        {isOverlayOpened && (
          <LinksOverlay links={links} toggleOverlay={toggleOverlay} />
        )}

        <Languages projectName={name} value={languages} />

        <Grid p='lg' className={h100}>
          <Grid.Col span={12}>
            <Stack align='center' className={h100}>
              <Thumbnail name={name} value={thumbnail} />

              <Text>{name}</Text>

              <Text size='sm' c='dimmed'>
                <FormattedDate value={date} />
              </Text>

              <Group spacing='sm' position='center'>
                <Tags
                  name={name}
                  value={tags}
                  badgeProps={{ size: 'sm', variant: 'outline' }}
                />
              </Group>

              <Text fz='xs' style={{ flexGrow: '1' }}>
                {description}
              </Text>

              {links.length && (
                <Button
                  size='sm'
                  radius='xs'
                  color='gray'
                  variant='outline'
                  style={{ alignSelf: 'flex-end' }}
                  onClick={() => toggleOverlay((isVisible) => !isVisible)}
                >
                  show more ({links.length})
                </Button>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Paper>
  );
}