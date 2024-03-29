import dayjs, { Dayjs } from 'dayjs';

import { HomeSegment } from '@/enums/HomeSegment';
import { IPost } from '@/interfaces/dashboard/IPost';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { IProject } from '@/interfaces/dashboard/IProject';
import { HOME_GROUP_BY, MAX_HOME_INTEREST_POINTS } from '@/config';
import { getPointsOfInterest } from '@/helpers/getPointsOfInterest';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as TRACKS_DATES, TRACKS } from '@/assets/data/tracks';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

const homeSegments = [
  {
    value: HomeSegment.PROJECTS,
    dates: PROJECTS_DATES,
    items: PROJECTS,
  },

  {
    value: HomeSegment.POSTS,
    dates: POSTS_DATES,
    items: POSTS,
  },

  {
    value: HomeSegment.TRACKS,
    dates: TRACKS_DATES,
    items: TRACKS,
  },
];

interface ISegmentData {
  value: HomeSegment;

  pointsOfInterest: string[];

  arrayOfIndexes: number[][];
}

const CONSTRUCTED_SEGMENTS: ISegmentData[] = [];

for (const { value, dates, items } of homeSegments) {
  const pointsOfInterest = getPointsOfInterest(dates, MAX_HOME_INTEREST_POINTS, HOME_GROUP_BY);

  const arrayOfIndexes = getArrayOfIndexes(
    value === HomeSegment.PROJECTS ? 'publishedAt' : 'date',
    pointsOfInterest,
    items,
  );

  CONSTRUCTED_SEGMENTS.push({
    value,
    pointsOfInterest,
    arrayOfIndexes,
  });
}

function getArrayOfIndexes(
  dateKey: string,
  pointsOfInterest: string[],
  source: IProject[] | IPost[] | ITrack[],
): number[][] {
  const arrayOfIndexes: number[][] = [];

  for (let index = 0; index < MAX_HOME_INTEREST_POINTS; index++) {
    arrayOfIndexes.push([]);
  }

  const parsedPointsOfInterest: Dayjs[] = pointsOfInterest.map((pointOfInterest) => dayjs(pointOfInterest));

  source.forEach((item: IProject | IPost | ITrack, index: number) => {
    const castedItem = item as any;

    const pointOfInterestIndex = parsedPointsOfInterest.findIndex((parsedPointOfInterest) =>
      parsedPointOfInterest.isSame(dayjs(castedItem[dateKey]), HOME_GROUP_BY),
    );

    if (~pointOfInterestIndex) {
      arrayOfIndexes[pointOfInterestIndex].push(index);
    }
  });

  return arrayOfIndexes;
}

export function getDataBySegment(segment: HomeSegment) {
  return (
    CONSTRUCTED_SEGMENTS.find((constructedSegment) => constructedSegment.value === segment) || CONSTRUCTED_SEGMENTS[0]
  );
}
