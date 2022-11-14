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

import {
  name,
  links,
  quote,
  title,
  badges,
  avatarSrc,
} from '@/assets/data/profile';
import { useCommonStyles } from '@/assets/styles/common';
import { useProfileStyles } from '@/assets/styles/profile';
import { getColorByShade } from '@/helpers/getColorByShade';

export function Profile() {
  const commonStyles = useCommonStyles();

  const profileStyles = useProfileStyles();

  return (
    <Paper p='lg' radius='md' withBorder className={profileStyles.paper}>
      <Stack justify='center' className={commonStyles.h100}>
        <Avatar src={avatarSrc} size={160} radius={120} mx='auto' />

        <Divider variant='dashed' />

        <Text align='center' size='lg' weight={500}>
          {name}
        </Text>

        {title && (
          <div className={profileStyles.title}>
            <Kbd>{title}</Kbd>
          </div>
        )}

        <Group position='center' spacing='lg' className={profileStyles.group}>
          {badges.map(({ text }, index) => (
            <Badge key={index} radius='xs'>
              {text}
            </Badge>
          ))}
        </Group>

        <Blockquote cite={`-${quote.author}`} color={getColorByShade('4')}>
          {quote.text}
        </Blockquote>

        <Group position='center' spacing='lg' className={profileStyles.group}>
          {links.map(({ icon, url }, index) => {
            const LinkIcon = icon;

            return (
              <a key={index} href={url} target='_blank' rel='noreferrer'>
                <ThemeIcon
                  size='xl'
                  radius='xs'
                  variant='light'
                  className={profileStyles.link}
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
