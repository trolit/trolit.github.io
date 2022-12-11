import dayjs from 'dayjs';
import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { Flex, ScrollArea, Stack, Badge } from '@mantine/core';

import {
  PRIMARY_COLOR,
  HOME_DATE_FORMATTER,
  MAX_HOME_INTEREST_POINTS,
} from '@/config';
import { RootState } from '@/store';
import { POSTS } from '@/assets/data/posts';
import { PostElement } from './Element/Post';
import { TRACKS } from '@/assets/data/tracks';
import { TrackElement } from './Element/Track';
import { HomeSegment } from '@/enums/HomeSegment';
import { PROJECTS } from '@/assets/data/projects';
import { ProjectElement } from './Element/Project';
import { useHomeStyles } from '@/assets/styles/dashboard/home';

export function Board() {
  const {
    boardDate,
    boardItems,
    boardColumn,
    lastBoardItem,
    firstBoardItem,
    innerBoardItem,
  } = useHomeStyles();

  const activeSegment = useSelector(
    (state: RootState) => state.home.activeSegment,
  );

  const arrayOfIndexes = useSelector(
    (state: RootState) => state.home.arrayOfIndexes,
  );

  const pointsOfInterest = useSelector(
    (state: RootState) => state.home.pointsOfInterest,
  );

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

  const specifyItemsClass = (index: number): string => {
    if (index === 0) {
      return firstBoardItem;
    }

    if (index === MAX_HOME_INTEREST_POINTS - 1) {
      return lastBoardItem;
    }

    return innerBoardItem;
  };

  return (
    <Flex>
      {pointsOfInterest.map((pointOfInterest, index) => {
        const items = getBoardColumnItems(index);

        return (
          <Flex
            key={pointOfInterest}
            direction='column'
            className={boardColumn}
          >
            <ScrollArea className={`${boardItems} ${specifyItemsClass(index)}`}>
              <Stack align='center'>{items}</Stack>
            </ScrollArea>

            <Badge
              size='xl'
              radius={0}
              className={boardDate}
              color={PRIMARY_COLOR}
            >
              {dayjs(pointOfInterest).format(HOME_DATE_FORMATTER)}
            </Badge>
          </Flex>
        );
      })}
    </Flex>
  );
}
