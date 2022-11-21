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

import { IPost } from '@/interfaces/dashboard/posts/IPost';

interface IProps {
  item: IPost;
}

export function Element({ item }: IProps) {
  return (
    <Paper p='md' radius='md' withBorder>
      <Flex align='center' justify='space-between' style={{ width: '100%' }}>
        <Text fz='xl'>{item.name}</Text>

        <Text ta='right'>{item.date}</Text>
      </Flex>

      <Group position='left'>
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
        <Button variant='subtle' size='md'>
          Read more
        </Button>
      </Center>
    </Paper>
  );
}