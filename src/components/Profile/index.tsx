import {
  Kbd,
  Text,
  Badge,
  Group,
  Paper,
  Stack,
  Avatar,
  ThemeIcon,
  Blockquote,
} from '@mantine/core';

import {
  tags,
  name,
  links,
  quote,
  title,
  avatarSrc,
} from '@/assets/data/profile';
import { useCommonStyles } from '@/assets/styles/common';
import { useProfileStyles } from '@/assets/styles/profile';
import { getColorByShade } from '@/helpers/getColorByShade';
import { PRIMARY_COLOR } from '@/config';

export function Profile() {
  const commonStyles = useCommonStyles();

  const profileStyles = useProfileStyles();

  return (
    <Paper
      p='lg'
      radius='md'
      withBorder
      className={`${commonStyles.panel} ${profileStyles.wrapper}`}
    >
      <Stack align='center' justify='center' className={commonStyles.h100}>
        <Avatar src={avatarSrc} size={160} radius={120} mx='auto' />

        <Text align='center' size='lg' weight={500}>
          {name}
        </Text>

        {title && (
          <div className={profileStyles.title}>
            <Kbd>{title}</Kbd>
          </div>
        )}

        <Group position='center' spacing='lg' className={profileStyles.group}>
          {tags.map(({ text, color }, index) => (
            <Badge key={index} color={color || PRIMARY_COLOR} radius='xs'>
              {text}
            </Badge>
          ))}
        </Group>

        <Blockquote cite={`-${quote.author}`} color={getColorByShade(4)}>
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
