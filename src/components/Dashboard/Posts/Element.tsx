import { useNavigate } from 'react-router-dom';
import { Flex, Text, Group, Paper, Button, Center, Divider } from '@mantine/core';

import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { useCommonStyles } from '@/assets/styles/common';
import { Tags } from '@/components/Dashboard/common/Tags';
import { FormattedDate } from '@/components/Dashboard/common/FormattedDate';

interface IProps {
  id: number;

  item: IPost;
}

export function Element({ id, item: { name, date, tags, abstract } }: IProps) {
  const navigate = useNavigate();

  const { w100 } = useCommonStyles();

  return (
    <Paper p='md' radius='md' withBorder>
      <Flex align='center' justify='space-between' className={w100}>
        <Text fz='xl'>{name}</Text>

        <Text ta='right'>
          <FormattedDate value={date} />
        </Text>
      </Flex>

      <Group p='sm' pl={0} position='left'>
        <Tags name={name} value={tags} badgeProps={{ size: 'sm', variant: 'outline' }} />
      </Group>

      <Divider my={10} />

      <Text p={15} my={10} c='dimmed' fs='italic' fz='sm'>
        {abstract}
      </Text>

      <Center>
        <Button size='md' variant='subtle' onClick={() => navigate(`${POSTS_ROUTE}/${id}`)}>
          Read more
        </Button>
      </Center>
    </Paper>
  );
}
