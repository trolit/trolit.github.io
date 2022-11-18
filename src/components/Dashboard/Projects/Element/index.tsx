import { Paper, Grid, Text, Group, Stack, Image } from '@mantine/core';

import { Tags } from './Tags';
import { Languages } from './Languages';
import { useCommonStyles } from '@/assets/styles/common';
import { IProject } from '@/interfaces/dashboard/IProject';

interface IProps {
  item: IProject;
}

export function Element({ item }: IProps) {
  const { thumbnail } = item;

  const commonStyles = useCommonStyles();

  const renderedThumbnail = Array.isArray(thumbnail) ? (
    thumbnail.map((Icon, index) => <Icon size={35} key={index} />)
  ) : (
    <Image
      radius='md'
      src={thumbnail}
      alt={`${item.name} - thumbnail`}
      withPlaceholder
    />
  );

  return (
    <Paper radius='md' withBorder className={commonStyles.h100}>
      <Languages languages={item.languages} />

      <Grid p='lg'>
        <Grid.Col span={12}>
          <Stack align='center'>
            <Group>{renderedThumbnail}</Group>

            <Text>{item.name}</Text>

            <Text size='sm' c='dimmed'>
              {item.date}
            </Text>

            <Tags tags={item.tags} />

            <Text fz='xs'>{item.description}</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
