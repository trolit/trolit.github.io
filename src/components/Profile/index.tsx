import { useSelector } from 'react-redux';
import { IconBadges } from '@tabler/icons';
import { Kbd, Text, Group, Paper, Avatar, ThemeIcon, Blockquote, Anchor, Divider } from '@mantine/core';

import { RootState } from '@/store';
import { Details } from './Details';
import { useCommonStyles } from '@/assets/styles/common';
import { useProfileStyles } from '@/assets/styles/profile';
import { NAME, LINKS, QUOTE, TITLE, PATH_TO_AVATAR } from '@/assets/data/profile';

export function Profile() {
  const { panel, h100 } = useCommonStyles();

  const shadedColor = useSelector((state: RootState) => state.preferences.shadedColor);

  const { wrapper, titleWrapper, link, blockQuote, presentationGroup, linksGroup } = useProfileStyles();

  return (
    <Paper p={0} radius='md' withBorder className={`${panel} ${wrapper} ${h100}`}>
      <Group grow p='lg' noWrap className={presentationGroup}>
        <Avatar src={PATH_TO_AVATAR} alt={NAME} size={130} radius={40} mx='auto' />

        <div>
          <Text align='center' size='lg' weight={500} mb={8}>
            {NAME}
          </Text>

          {TITLE && (
            <Text className={titleWrapper} lineClamp={1}>
              <IconBadges /> &nbsp; <Kbd>{TITLE}</Kbd>
            </Text>
          )}
        </div>
      </Group>

      <Details />

      <Divider />

      <Group position='center'>
        <Blockquote className={blockQuote} cite={`-${QUOTE.author}`} color={shadedColor}>
          {QUOTE.text}
        </Blockquote>
      </Group>

      <Group position='center' spacing='lg' className={linksGroup}>
        {LINKS.map(({ icon, url }, index) => {
          const LinkIcon = icon;

          return (
            <Anchor key={index} href={url} target='_blank'>
              <ThemeIcon size={40} radius='xs' variant='default' className={link}>
                <LinkIcon />
              </ThemeIcon>
            </Anchor>
          );
        })}
      </Group>
    </Paper>
  );
}
