import dayjs, { Dayjs } from 'dayjs';

import { HOME_GROUP_BY, HOME_INTEREST_POINTS } from '@/config';
import { getPointsOfInterest } from '@/helpers/getPointsOfInterest';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as TRACKS_DATES, TRACKS } from '@/assets/data/tracks';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

export const PROJECTS_POINTS_OF_INTEREST = getPointsOfInterest(
  PROJECTS_DATES,
  HOME_INTEREST_POINTS,
  HOME_GROUP_BY,
);

export const PROJECTS_ARRAY_OF_INDEXES = getArrayOfIndexes(
  PROJECTS_POINTS_OF_INTEREST,
  PROJECTS,
);

export const TRACKS_POINTS_OF_INTEREST = getPointsOfInterest(
  TRACKS_DATES,
  HOME_INTEREST_POINTS,
  HOME_GROUP_BY,
);

export const TRACKS_ARRAY_OF_INDEXES = getArrayOfIndexes(
  TRACKS_POINTS_OF_INTEREST,
  TRACKS,
);

export const POSTS_POINTS_OF_INTEREST = getPointsOfInterest(
  POSTS_DATES,
  HOME_INTEREST_POINTS,
  HOME_GROUP_BY,
);

export const POSTS_ARRAY_OF_INDEXES = getArrayOfIndexes(
  POSTS_POINTS_OF_INTEREST,
  POSTS,
);

function getArrayOfIndexes<T>(
  pointsOfInterest: string[],
  source: T[],
): number[][] {
  const arrayOfIndexes: number[][] = [];

  for (let index = 0; index < HOME_INTEREST_POINTS; index++) {
    arrayOfIndexes.push([]);
  }

  const parsedPointsOfInterest: Dayjs[] = pointsOfInterest.map(
    (pointOfInterest) => dayjs(pointOfInterest),
  );

  source.forEach((item: T, index: number) => {
    const castedItem = item as { date: string };

    const pointOfInterestIndex = parsedPointsOfInterest.findIndex(
      (parsedPointOfInterest) =>
        parsedPointOfInterest.isSame(dayjs(castedItem.date), HOME_GROUP_BY),
    );

    if (~pointOfInterestIndex) {
      arrayOfIndexes[pointOfInterestIndex].push(index);
    }
  });

  return arrayOfIndexes;
}
