import {
  Avatar,
  Text,
  Paper,
  Blockquote,
  Badge,
  Stack,
  Center,
  Kbd,
  Divider,
} from '@mantine/core';
import { name, avatar, badges } from '@/assets/data/profile';
import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <Paper
      radius='md'
      withBorder
      p='lg'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
      className={styles.sidebar}
    >
      <Stack justify='center' className={styles.stack}>
        <Avatar src={avatar} size={120} radius={120} mx='auto' />

        <Divider my='sm' variant='dashed' />

        <Text align='center' size='lg' weight={500} mt='md'>
          {name}
        </Text>

        <Kbd>Software Developer</Kbd>

        <div className={styles.badges}>
          {badges.map(({ text }, index) => (
            <Badge key={index} radius='xs'>
              {text}
            </Badge>
          ))}
        </div>

        <Blockquote cite='-Thomas Edison'>
          I have not failed. I just found 10,000 ways that won't work.
        </Blockquote>
      </Stack>
    </Paper>
  );
}
