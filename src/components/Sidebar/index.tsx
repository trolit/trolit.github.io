import {
  Kbd,
  Text,
  Badge,
  Group,
  Paper,
  Stack,
  Avatar,
  Divider,
  ThemeIcon,
  Blockquote,
} from '@mantine/core';

import styles from './styles.module.css';
import { avatarSrc } from '@/assets/data/common';
import { getColorByShade } from '@/helpers/getColorByShade';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import { name, badges, links, title } from '@/assets/data/profile';

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

        <Avatar src={avatarSrc} size={160} radius={120} mx='auto' />

        <Divider variant='dashed' />

        <Text align='center' size='lg' weight={500}>
          {name}
        </Text>

        {title && (
          <div className={styles.title}>
            <Kbd>{title}</Kbd>
          </div>
        )}

        <Group position='center' spacing='lg' className={styles.badgesGroup}>
          {badges.map(({ text }, index) => (
            <Badge key={index} radius='xs'>
              {text}
            </Badge>
          ))}
        </Group>

        <Blockquote cite='-Thomas Edison' color={getColorByShade('4')}>
          I have not failed. I just found 10,000 ways that won't work.
        </Blockquote>

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
