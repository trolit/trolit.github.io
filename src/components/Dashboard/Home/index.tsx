import { CSSProperties } from 'react';
import { Flex, Badge, Stack, Title, Container } from '@mantine/core';

import { PostElement } from './Element/Post';
import { TRACKS } from '@/assets/data/tracks';
import { TrackElement } from './Element/Track';
import { dateSort } from '@/utilities/dateSort';
import { formatDate } from '@/helpers/formatDate';
import { ProjectElement } from './Element/Project';
import { useCommonStyles } from '@/assets/styles/common';
import { HOME_INTEREST_POINTS, PRIMARY_COLOR } from '@/config';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

export function Home() {
  const SORTED_DATES = [...POSTS_DATES, ...PROJECTS_DATES].sort(dateSort);

  const interestPoints: string[] = [];

  for (const sortedDate of SORTED_DATES) {
    if (interestPoints.length === HOME_INTEREST_POINTS) {
      break;
    }

    if (!interestPoints.includes(sortedDate)) {
      interestPoints.unshift(sortedDate);
    }
  }

  const { w100 } = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const horizontalView = interestPoints.map((interestPoint) => {
    const matchedProjects = PROJECTS.filter(
      (project) => project.date === interestPoint,
    );

    const renderedProjects = matchedProjects.map((project, index) => (
      <ProjectElement key={`project-${index}`} item={project} />
    ));

    const matchedPosts = POSTS.filter((post) => post.date === interestPoint);

    const renderedPosts = matchedPosts.map((post, index) => (
      <PostElement key={`post-${index}`} item={post} />
    ));

    const matchedTracks = TRACKS.filter(
      (track) => track.date === interestPoint,
    );

    const renderedTracks = matchedTracks.map((track, index) => (
      <TrackElement key={`track-${index}`} item={track} />
    ));

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
          {renderedProjects}

          {renderedPosts}

          {renderedTracks}
        </Stack>

        <Badge size='lg' fullWidth radius={0} color={PRIMARY_COLOR}>
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

      <Flex style={{ height: `calc(100% - ${titleStyles.height})` }}>
        {horizontalView}
      </Flex>
    </Container>
  );
}
