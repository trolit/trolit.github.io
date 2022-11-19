import { Paper, Grid, Text, Stack, Button } from '@mantine/core';

import { Tags } from './Tags';
import { Languages } from './Languages';
import { useCommonStyles } from '@/assets/styles/common';
import { IProject } from '@/interfaces/dashboard/IProject';
import { Thumbnail } from '@/components/Dashboard/common/Thumbnail';

interface IProps {
  item: IProject;
}

export function Element({ item }: IProps) {
  const commonStyles = useCommonStyles();

  return (
    <Paper radius='md' withBorder className={commonStyles.h100}>
      <Languages languages={item.languages} />

      <Grid p='lg' className={commonStyles.h100}>
        <Grid.Col span={12}>
          <Stack align='center' className={commonStyles.h100}>
            <Thumbnail name={item.name} value={item.thumbnail} />

            <Text>{item.name}</Text>

            <Text size='sm' c='dimmed'>
              {item.date}
            </Text>

            <Tags tags={item.tags} />

            <Text fz='xs' style={{ flexGrow: '1' }}>
              {item.description}
            </Text>

            <Button
              size='sm'
              radius='xs'
              color='gray'
              variant='outline'
              style={{ alignSelf: 'flex-end' }}
            >
              more
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
