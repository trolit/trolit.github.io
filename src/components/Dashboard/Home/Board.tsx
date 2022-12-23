import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { Flex, ScrollArea, Stack, Badge } from '@mantine/core';

import { RootState } from '@/store';
import { POSTS } from '@/assets/data/posts';
import { PostElement } from './Element/Post';
import { TRACKS } from '@/assets/data/tracks';
import { TrackElement } from './Element/Track';
import { formatDate } from '@/helpers/formatDate';
import { HomeSegment } from '@/enums/HomeSegment';
import { PROJECTS } from '@/assets/data/projects';
import { ProjectElement } from './Element/Project';
import { PRIMARY_COLOR, HOME_DATE_FORMAT } from '@/config';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Board() {
  const { boardDate, boardItems, boardColumn } = useHomeStyles();

  const activeSegment = useSelector((state: RootState) => state.home.activeSegment);

  const arrayOfIndexes = useSelector((state: RootState) => state.home.arrayOfIndexes);

  const pointsOfInterest = useSelector((state: RootState) => state.home.pointsOfInterest);

  const getSegmentData = () => {
    switch (activeSegment) {
      case HomeSegment.POSTS:
        return {
          key: 'post',
          data: POSTS,
          component: PostElement as ComponentType,
        };

      case HomeSegment.TRACKS:
        return {
          key: 'track',
          data: TRACKS,
          component: TrackElement as ComponentType,
        };

      default:
        return {
          key: 'project',
          data: PROJECTS,
          component: ProjectElement as ComponentType,
        };
    }
  };

  const getBoardColumnItems = (pointOfInterestIndex: number) => {
    const { key, data, component: Component } = getSegmentData();

    return arrayOfIndexes[pointOfInterestIndex].map((index) => {
      const props = {
        key: `${key}-${index}`,
        item: data[index],
      };

      return <Component {...props} />;
    });
  };

  return (
    <Flex>
      {pointsOfInterest.map((pointOfInterest, index) => {
        const items = getBoardColumnItems(index);

        return (
          <Flex key={pointOfInterest} direction='column' className={boardColumn}>
            <ScrollArea className={boardItems}>
              <Stack align='center'>{items}</Stack>
            </ScrollArea>

            <Badge size='xl' radius={0} className={boardDate} color={PRIMARY_COLOR}>
              {formatDate(pointOfInterest, HOME_DATE_FORMAT)}
            </Badge>
          </Flex>
        );
      })}
    </Flex>
  );
}
