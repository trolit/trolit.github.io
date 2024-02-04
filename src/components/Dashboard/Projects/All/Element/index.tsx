import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid, Text, Stack, Button, Box, Group, Badge } from '@mantine/core';

import { Languages } from './Languages';
import { LinksOverlay } from './LinksOverlay';
import { useCommonStyles } from '@/assets/styles/common';
import { Tags } from '@/components/Dashboard/common/Tags';
import { Thumbnail } from '@/components/Dashboard/common/Thumbnail';
import { IExtendedProject } from '@/interfaces/dashboard/IExtendedProject';
import { FormattedDate } from '@/components/Dashboard/common/FormattedDate';

interface IProps {
  item: IExtendedProject;
}

export function Element({
  item: { name, address, article, thumbnail, publishedAt, description, languages, tags, links, months },
}: IProps) {
  const navigate = useNavigate();

  const { h100 } = useCommonStyles();

  const [isOverlayOpened, toggleOverlay] = useState(false);

  return (
    <Paper radius='md' withBorder className={h100}>
      <Box className={h100} style={{ position: 'relative' }}>
        {isOverlayOpened && <LinksOverlay links={links} toggleOverlay={toggleOverlay} />}

        <Languages projectName={name} value={languages} />

        <Grid p='sm'>
          <Grid.Col span={6}>
            <Thumbnail name={name} value={thumbnail} />

            <Text size='xl' style={{ marginTop: 20 }}>
              {name}
            </Text>

            <Text size='sm' c='dimmed'>
              <FormattedDate value={publishedAt} />
            </Text>

            <Text size='sm' c='dimmed' underline>
              {months} {`month${months > 1 ? 's' : ''}`}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Stack align='center' className={h100}>
              <Group spacing='sm' position='center'>
                <Tags
                  name={name}
                  value={tags}
                  badgeProps={{
                    size: 'xs',
                    radius: 'xs',
                    variant: 'outline',
                  }}
                />
              </Group>

              <Text fz='xs' style={{ borderLeft: '4px solid gray' }} pl={5}>
                {description}
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>

        <Group position='right' mr={15} mb={15}>
          {article && (
            <Button size='xs' variant='light' onClick={() => navigate(address)}>
              read more
            </Button>
          )}

          {!!links.length && (
            <Button
              size='xs'
              radius='xs'
              color='gray'
              variant='outline'
              onClick={() => toggleOverlay((isVisible) => !isVisible)}
            >
              show more ({links.length})
            </Button>
          )}
        </Group>
      </Box>
    </Paper>
  );
}
