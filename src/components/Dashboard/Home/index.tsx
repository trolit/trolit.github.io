import {
  Kbd,
  Flex,
  Text,
  Badge,
  Paper,
  Stack,
  Title,
  Group,
  Container,
  UnstyledButton,
} from '@mantine/core';
import { CSSProperties } from 'react';

import { dateSort } from '@/utilities/dateSort';
import { HOME_INTEREST_POINTS, PRIMARY_COLOR } from '@/config';
import { formatDate } from '@/helpers/formatDate';
import { useCommonStyles } from '@/assets/styles/common';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { ALL_DATES as POSTS_DATES } from '@/assets/data/posts';
import { ALL_DATES as TRACKS_DATES } from '@/assets/data/tracks';
import { ALL_DATES as PROJECTS_DATES } from '@/assets/data/projects';

export function Home() {
  const SORTED_DATES = [
    ...POSTS_DATES,
    ...TRACKS_DATES,
    ...PROJECTS_DATES,
  ].sort(dateSort);

  const interestPoints: string[] = [];

  for (const sortedDate of SORTED_DATES) {
    if (interestPoints.length === HOME_INTEREST_POINTS) {
      break;
    }

    if (!interestPoints.includes(sortedDate)) {
      interestPoints.unshift(sortedDate);
    }
  }

  const { w100, h100 } = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const horizontalView = interestPoints.map((interestPoint) => {
    return (
      <Flex key={interestPoint} direction='column' className={w100}>
        <Stack
          align='center'
          style={{
            padding: 15,
            flexGrow: 1,
            borderRight: '1px dashed gray',
          }}
        >
          <UnstyledButton
            className={w100}
            style={{ height: '50px', width: '100%' }}
          >
            <Group noWrap className={h100}>
              <Kbd
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Project
              </Kbd>

              <Paper>
                <Text fz='sm' lineClamp={1}>
                  TMP
                </Text>
              </Paper>
            </Group>
          </UnstyledButton>
        </Stack>

        <Badge fullWidth radius={0} color={PRIMARY_COLOR}>
          {formatDate(interestPoint)}
        </Badge>
      </Flex>
    );
  });

  const titleStyles: CSSProperties = {
    height: '30px',
    alignItems: 'center',
  };

  return (
    <Container px={0} fluid className={dashboardStyles.homeContainer}>
      <Title order={4} align='center' styles={titleStyles}>
        Recent Activity
      </Title>

      <Flex style={{ height: `calc(${h100} - ${titleStyles.height})` }}>
        {horizontalView}
      </Flex>
    </Container>
  );
}
