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
import { getColorByShade } from '@/helpers/getColorByShade';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import {
  name,
  links,
  quote,
  title,
  badges,
  avatarSrc,
} from '@/assets/data/profile';

export function Profile() {
  return (
    <Paper p='lg' radius='md' withBorder className={styles.profile}>
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

        <Group position='center' spacing='lg' className={styles.group}>
          {badges.map(({ text }, index) => (
            <Badge key={index} radius='xs'>
              {text}
            </Badge>
          ))}
        </Group>

        <Blockquote cite={`-${quote.author}`} color={getColorByShade('4')}>
          {quote.text}
        </Blockquote>

        <Group position='center' spacing='lg' className={styles.group}>
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
        </Group>
      </Stack>
    </Paper>
  );
}
