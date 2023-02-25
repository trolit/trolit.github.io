import { Avatar, BackgroundImage, Paper, Card, Badge, Text, Stack, Title, Group } from '@mantine/core';

import { PRIMARY_COLOR } from '@/config';
import { Languages } from '@/components/Dashboard/common/Languages';
import { IFeaturedProject } from '@/interfaces/dashboard/IFeaturedProject';
import { FormattedDate } from '@/components/Dashboard/common/FormattedDate';
import { ActionIconLinks } from '@/components/Dashboard/common/ActionIconLinks';
import { useFeaturedProjectsStyles } from '@/assets/styles/dashboard/projects/featured';

interface IProps {
  item: IFeaturedProject;
}

export function Element({ item: { name, date, thumbnail, languages, description, links } }: IProps) {
  const {
    classes: { avatar, element, dateBadge, card },
  } = useFeaturedProjectsStyles();

  return (
    <div className={element}>
      <Avatar size={160} radius='sm' src={thumbnail as string} alt={`${name} thumbnail`} className={avatar} />

      <Card p={0} shadow='sm' className={card}>
        <BackgroundImage src='https://cdn.pixabay.com/photo/2021/02/24/20/53/abstract-6047465_1280.jpg' radius='sm'>
          <Stack justify='space-between' pt={100}>
            <Card.Section py={20}>
              <Title color='white' align='center' order={1} lineClamp={1}>
                {name}
              </Title>
            </Card.Section>

            <div>
              <Group noWrap position='center'>
                <Languages name={name} value={languages} badgeProps={{ color: `${PRIMARY_COLOR}.1` }} />
              </Group>

              <Group py={10} noWrap spacing={15} position='center'>
                <ActionIconLinks
                  name={name}
                  value={links}
                  actionIconProps={{ color: PRIMARY_COLOR, size: 60, variant: 'filled' }}
                />
              </Group>

              <Badge fullWidth size='xl' radius={0} variant='filled' className={dateBadge}>
                <FormattedDate value={date} />
              </Badge>

              <Paper shadow='xl' radius='xs' p='xl' withBorder h={100}>
                <Text fz='xs' mx={20} lineClamp={3}>
                  {description}
                </Text>
              </Paper>
            </div>
          </Stack>
        </BackgroundImage>
      </Card>
    </div>
  );
}
