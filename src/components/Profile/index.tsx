import { useSelector } from 'react-redux';
import { Kbd, Text, Group, Paper, Stack, Avatar, ThemeIcon, Blockquote, Anchor, Button, Divider } from '@mantine/core';

import { RootState } from '@/store';
import { Details } from './Details';
import { useCommonStyles } from '@/assets/styles/common';
import { useProfileStyles } from '@/assets/styles/profile';
import { name, links, quote, title, avatarSrc } from '@/assets/data/profile';

export function Profile() {
  const { panel, h100 } = useCommonStyles();

  const shadedColor = useSelector((state: RootState) => state.preferences.shadedColor);

  const { wrapper, titleWrapper, link, blockQuote } = useProfileStyles();

  return (
    <Paper p={0} radius='md' withBorder className={`${panel} ${wrapper} ${h100}`}>
      <Stack justify='space-between' className={h100}>
        <Group grow p='lg' pb={0} noWrap>
          <Avatar src={avatarSrc} alt={name} size={130} radius={50} mx='auto' />

          <div>
            <Text align='center' size='lg' weight={500} mb={8}>
              {name}
            </Text>

            {title && (
              <Text className={titleWrapper} lineClamp={1}>
                <Kbd>{title}</Kbd>
              </Text>
            )}
          </div>
        </Group>

        <Details />

        <Blockquote className={blockQuote} cite={`-${quote.author}`} color={shadedColor}>
          {quote.text}
        </Blockquote>

        <Group px='lg' grow>
          <Button variant='default'>timeline</Button>
        </Group>

        <div>
          <Divider color='dark.5' />

          <Group py={10} position='center' spacing='lg'>
            {links.map(({ icon, url }, index) => {
              const LinkIcon = icon;

              return (
                <Anchor key={index} href={url} target='_blank'>
                  <ThemeIcon size={45} radius='xs' variant='light' className={link}>
                    <LinkIcon />
                  </ThemeIcon>
                </Anchor>
              );
            })}
          </Group>
        </div>
      </Stack>
    </Paper>
  );
}
