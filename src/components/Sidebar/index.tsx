import {
  Kbd,
  Text,
  Badge,
  Paper,
  Stack,
  Avatar,
  Divider,
  ThemeIcon,
  Blockquote,
} from '@mantine/core';

import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import styles from './styles.module.css';
import { avatarSrc } from '@/assets/data/common';
import { name, badges, links } from '@/assets/data/profile';

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
        <ThemeSwitcher />

        <Avatar src={avatarSrc} size={120} radius={120} mx='auto' />

        <Divider my='sm' variant='dashed' />

        <Text align='center' size='lg' weight={500} mt='md'>
          {name}
        </Text>

        <div className={styles.sub}>
          <Kbd>Software Developer</Kbd>
        </div>

        <div className={styles.badges}>
          {badges.map(({ text }, index) => (
            <Badge key={index} radius='xs'>
              {text}
            </Badge>
          ))}
        </div>

        <div>
          <Blockquote cite='-Thomas Edison'>
            I have not failed. I just found 10,000 ways that won't work.
          </Blockquote>
        </div>

        <div className={styles.links}>
          {links.map(({ icon, url }, index) => {
            const LinkIcon = icon;

            return (
              <a key={index} href={url} target='_blank' rel='noreferrer'>
                <ThemeIcon
                  size='xl'
                  radius='xs'
                  variant='light'
                  className={styles.link}
                >
                  <LinkIcon />
                </ThemeIcon>
              </a>
            );
          })}
        </div>
      </Stack>
    </Paper>
  );
}
