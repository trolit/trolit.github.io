import { CSSProperties } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {
  Flex,
  Badge,
  Stack,
  Title,
  Container,
  ScrollArea,
} from '@mantine/core';

import { PostElement } from './Element/Post';
import { TRACKS } from '@/assets/data/tracks';
import { TrackElement } from './Element/Track';
import { dateSort } from '@/utilities/dateSort';
import { ProjectElement } from './Element/Project';
import { useCommonStyles } from '@/assets/styles/common';
import {
  HOME_GROUP_BY,
  PRIMARY_COLOR,
  HOME_DATE_FORMATTER,
  HOME_INTEREST_POINTS,
} from '@/config';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

interface IElement {
  date: string;
}

function matchElements<T>(source: T[], pointOfInterest: Dayjs) {
  return source.filter((esoure: T) => {
    const casted = esoure as IElement;

    return pointOfInterest.isSame(dayjs(casted.date), HOME_GROUP_BY);
  });
}

export function Home() {
  const SORTED_DATES = [...POSTS_DATES, ...PROJECTS_DATES].sort(dateSort);

  const interestPoints: Dayjs[] = [];

  for (const date of SORTED_DATES) {
    if (interestPoints.length === HOME_INTEREST_POINTS) {
      break;
    }

    const parsedDate = dayjs(date);

    if (
      !interestPoints.some((interestPoint) =>
        interestPoint.isSame(date, HOME_GROUP_BY),
      )
    ) {
      interestPoints.unshift(parsedDate);
    }
  }

  const { w100 } = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const view = interestPoints.map((interestPoint) => {
    const renderedProjects = matchElements(PROJECTS, interestPoint).map(
      (project, index) => (
        <ProjectElement key={`project-${index}`} item={project} />
      ),
    );

    const renderedPosts = matchElements(POSTS, interestPoint).map(
      (post, index) => <PostElement key={`post-${index}`} item={post} />,
    );

    const renderedTracks = matchElements(TRACKS, interestPoint).map(
      (track, index) => <TrackElement key={`track-${index}`} item={track} />,
    );

    return (
      <Flex key={interestPoint.format()} direction='column' className={w100}>
        <ScrollArea
          style={{
            height: `calc(100% - 20px)`,
            padding: 15,
            flexGrow: 1,
            borderRight: '1px dashed gray',
          }}
        >
          <Stack align='center'>
            {renderedProjects}

            {renderedPosts}

            {renderedTracks}
          </Stack>
        </ScrollArea>

        <Badge size='lg' fullWidth radius={0} color={PRIMARY_COLOR}>
          {interestPoint.format(HOME_DATE_FORMATTER)}
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

      <Flex style={{ height: `calc(100% - ${titleStyles.height})` }}>
        {view}
      </Flex>
    </Container>
  );
}
