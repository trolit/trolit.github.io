import {
  Paper,
  Text,
  Divider,
  Flex,
  Button,
  Center,
  Badge,
  Group,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { formatDate } from '@/helpers/formatDate';
import { IPost } from '@/interfaces/dashboard/IPost';
import { POSTS_ROUTE } from '@/assets/constants/routes';
import { useCommonStyles } from '@/assets/styles/common';

interface IProps {
  id: number;

  item: IPost;
}

export function Element({ id, item }: IProps) {
  const navigate = useNavigate();

  const { w100 } = useCommonStyles();

  const { name, date, tags, abstract } = item;

  return (
    <Paper p='md' radius='md' withBorder>
      <Flex align='center' justify='space-between' className={w100}>
        <Text fz='xl'>{name}</Text>

        <Text ta='right'>{formatDate(date)}</Text>
      </Flex>

      <Group p='sm' pl={0} position='left'>
        {tags.map(({ text, color }, index) => (
          <Badge
            size='sm'
            radius={0}
            color={color}
            variant='outline'
            key={`badge-${text}-${index}`}
          >
            {text}
          </Badge>
        ))}
      </Group>

      <Divider my={10} />

      <Text p={15} my={10} c='dimmed' fs='italic' fz='sm'>
        {abstract}
      </Text>

      <Center>
        <Button
          size='md'
          variant='subtle'
          onClick={() => navigate(`${POSTS_ROUTE}/${id}`)}
        >
          Read more
        </Button>
      </Center>
    </Paper>
  );
}
