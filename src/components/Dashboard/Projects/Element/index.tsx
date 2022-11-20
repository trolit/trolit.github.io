import { useState } from 'react';
import { Paper, Grid, Text, Stack, Button, Box } from '@mantine/core';

import { Tags } from './Tags';
import { Languages } from './Languages';
import { LinksOverlay } from './LinksOverlay';
import { useCommonStyles } from '@/assets/styles/common';
import { IProject } from '@/interfaces/dashboard/IProject';
import { Thumbnail } from '@/components/Dashboard/common/Thumbnail';

interface IProps {
  item: IProject;
}

export function Element({ item }: IProps) {
  const commonStyles = useCommonStyles();

  const [isOverlayOpened, toggleOverlay] = useState(false);

  const { name, thumbnail, date, description, languages, tags, links } = item;

  return (
    <Paper radius='md' withBorder className={commonStyles.h100}>
      <Box className={commonStyles.h100} style={{ position: 'relative' }}>
        {isOverlayOpened && (
          <LinksOverlay links={links} toggleOverlay={toggleOverlay} />
        )}

        <Languages languages={languages} />

        <Grid p='lg' className={commonStyles.h100}>
          <Grid.Col span={12}>
            <Stack align='center' className={commonStyles.h100}>
              <Thumbnail name={name} value={thumbnail} />

              <Text>{name}</Text>

              <Text size='sm' c='dimmed'>
                {date}
              </Text>

              <Tags tags={tags} />

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
