import {
  Card,
  Badge,
  Text,
  Stack,
  Image,
  Title,
  Group,
  Popover,
  Button,
  Container,
  ActionIcon,
  ScrollArea,
} from '@mantine/core';

import { Languages } from '@/components/Dashboard/common/Languages';
import { IFeaturedProject } from '@/interfaces/dashboard/IFeaturedProject';
import { FormattedDate } from '@/components/Dashboard/common/FormattedDate';
import { useFeaturedProjectsStyles } from '@/assets/styles/dashboard/projects/featured';

interface IProps {
  item: IFeaturedProject;
}

export function Element({
  item: { name, date, thumbnail, languages, description, links },
}: IProps) {
  const {
    classes: { dateBadge, stack, card },
    constants: { MIN_CARD_WIDTH },
  } = useFeaturedProjectsStyles();

  return (
    <Card p={0} withBorder shadow='sm' radius={0} className={card}>
      <Badge
        size='xl'
        fullWidth
        radius={0}
        variant='gradient'
        className={dateBadge}
      >
        <FormattedDate value={date} />
      </Badge>

      <ScrollArea type='auto'>
        <Stack justify='space-between' className={stack}>
          <Card.Section py={20}>
            <Image
              height={250}
              fit='contain'
              src={thumbnail as string}
              alt={`${name} thumbnail`}
            />

            <Title my={5} align='center' order={3} lineClamp={1}>
              {name}
            </Title>

            <Group noWrap position='center'>
              <Languages name={name} value={languages} />
            </Group>
          </Card.Section>

          <Popover
            withArrow
            shadow='md'
            position='bottom'
            width={MIN_CARD_WIDTH}
          >
            <Popover.Target>
              <Container>
                <Button size='sm' color='gray' variant='filled'>
                  description
                </Button>
              </Container>
            </Popover.Target>

            <Popover.Dropdown>
              <Container p={0}>
                <Text size='sm' align='center'>
                  {description}
                </Text>
              </Container>
            </Popover.Dropdown>
          </Popover>

          <Card.Section withBorder>
            <Group py={10} noWrap spacing={15} position='center'>
              {links.map(({ icon: Icon, url }, index) => (
                <ActionIcon
                  key={`${name}-link-${index}`}
                  color='gray'
                  variant='outline'
                  size={50}
                  onClick={() => {
                    window.open(url, '_blank');
                  }}
                >
                  <Icon />
                </ActionIcon>
              ))}
            </Group>
          </Card.Section>
        </Stack>
      </ScrollArea>
    </Card>
  );
}
