import dayjs, { Dayjs } from 'dayjs';
import { Flex, ScrollArea, Stack, Badge } from '@mantine/core';

import {
  PRIMARY_COLOR,
  HOME_GROUP_BY,
  HOME_DATE_FORMATTER,
  HOME_INTEREST_POINTS,
} from '@/config';
import { PostElement } from './Element/Post';
import { TRACKS } from '@/assets/data/tracks';
import { TrackElement } from './Element/Track';
import { ProjectElement } from './Element/Project';
import { useCommonStyles } from '@/assets/styles/common';
import { useHomeStyles } from '@/assets/styles/dashboard/home';
import { getPointsOfInterest } from '@/helpers/getPointsOfInterest';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

function filterCollectionByPointOfInterest<T>(
  collection: T[],
  pointOfInterest: Dayjs,
) {
  return collection.filter((element: T) => {
    const castedElement = element as { date: string };

    return pointOfInterest.isSame(dayjs(castedElement.date), HOME_GROUP_BY);
  });
}

export function Board() {
  const { w100 } = useCommonStyles();

  const { date, items } = useHomeStyles();

  const pointsOfInterest = getPointsOfInterest(
    [...POSTS_DATES, ...PROJECTS_DATES],
    HOME_INTEREST_POINTS,
    HOME_GROUP_BY,
  );

  return (
    <Flex>
      {pointsOfInterest.map((pointOfInterest) => {
        const projects = filterCollectionByPointOfInterest(
          PROJECTS,
          pointOfInterest,
        ).map((project, index) => (
          <ProjectElement key={`project-${index}`} item={project} />
        ));

        const posts = filterCollectionByPointOfInterest(
          POSTS,
          pointOfInterest,
        ).map((post, index) => (
          <PostElement key={`post-${index}`} item={post} />
        ));

        const tracks = filterCollectionByPointOfInterest(
          TRACKS,
          pointOfInterest,
        ).map((track, index) => (
          <TrackElement key={`track-${index}`} item={track} />
        ));

        return (
          <Flex
            key={pointOfInterest.format()}
            direction='column'
            className={`${w100}`}
          >
            <ScrollArea className={`${items}`}>
              <Stack align='center'>
                {projects}

                {posts}

                {tracks}
              </Stack>
            </ScrollArea>

            <Badge size='lg' radius={0} className={date} color={PRIMARY_COLOR}>
              {pointOfInterest.format(HOME_DATE_FORMATTER)}
            </Badge>
          </Flex>
        );
      })}
    </Flex>
  );
}
