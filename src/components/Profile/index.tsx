import {
  Kbd,
  Text,
  Badge,
  Group,
  Paper,
  Stack,
  Avatar,
  ThemeIcon,
  ScrollArea,
  Blockquote,
  Anchor,
} from '@mantine/core';

import {
  tags,
  name,
  links,
  quote,
  title,
  avatarSrc,
} from '@/assets/data/profile';
import { PRIMARY_COLOR } from '@/config';
import { useCommonStyles } from '@/assets/styles/common';
import { useProfileStyles } from '@/assets/styles/profile';
import { getColorByShade } from '@/helpers/getColorByShade';

export function Profile() {
  const { panel, h100 } = useCommonStyles();

  const { wrapper, titleWrapper, group, link } = useProfileStyles();

  return (
    <Paper
      p='lg'
      radius='md'
      withBorder
      className={`${panel} ${wrapper} ${h100}`}
    >
      <Stack align='center' justify='center' className={h100}>
        <Avatar src={avatarSrc} size={160} radius={120} mx='auto' />

        <Text align='center' size='lg' weight={500}>
          {name}
        </Text>

        {title && (
          <Text className={titleWrapper} lineClamp={1}>
            <Kbd>{title}</Kbd>
          </Text>
        )}

        <ScrollArea>
          <Group position='center' spacing='lg' className={group}>
            {tags.map(({ text, color }, index) => (
              <Badge key={index} color={color || PRIMARY_COLOR} radius='xs'>
                {text}
              </Badge>
            ))}
          </Group>

          <Blockquote cite={`-${quote.author}`} color={getColorByShade(4)}>
            {quote.text}
          </Blockquote>

          <Group position='center' spacing='lg' className={group}>
            {links.map(({ icon, url }, index) => {
              const LinkIcon = icon;

              return (
                <Anchor key={index} href={url} target='_blank'>
                  <ThemeIcon
                    size='xl'
                    radius='xs'
                    variant='light'
                    className={link}
                  >
                    <LinkIcon />
                  </ThemeIcon>
                </Anchor>
              );
            })}
          </Group>
        </ScrollArea>
      </Stack>
    </Paper>
  );
}
