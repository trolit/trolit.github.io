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

import { POSTS_ROUTE } from '@/assets/constants/routes';
import { IPost } from '@/interfaces/dashboard/posts/IPost';

interface IProps {
  id: number;

  item: IPost;
}

export function Element({ id, item }: IProps) {
  const navigate = useNavigate();

  return (
    <Paper p='md' radius='md' withBorder>
      <Flex align='center' justify='space-between' style={{ width: '100%' }}>
        <Text fz='xl'>{item.name}</Text>

        <Text ta='right'>{item.date}</Text>
      </Flex>

      <Group p='sm' pl={0} position='left'>
        {item.tags.map(({ text, color }, index) => (
          <Badge
            radius={0}
            variant='outline'
            key={`badge-${text}-${index}`}
            size='sm'
          >
            {text}
          </Badge>
        ))}
      </Group>

      <Divider my={10} />

      <Text c='dimmed'>
        This is test description that will come later on ok?
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
