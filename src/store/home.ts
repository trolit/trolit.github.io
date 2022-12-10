import dayjs, { Dayjs } from 'dayjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRACKS } from '@/assets/data/tracks';
import { HomeSegment } from '@/enums/HomeSegment';
import { IPost } from '@/interfaces/dashboard/IPost';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { IProject } from '@/interfaces/dashboard/IProject';
import { HOME_GROUP_BY, HOME_INTEREST_POINTS } from '@/config';
import { getPointsOfInterest } from '@/helpers/getPointsOfInterest';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

interface IState {
  activeSegment: HomeSegment;

  pointsOfInterest: Dayjs[];

  projects: IProject[][];

  tracks: ITrack[][];

  posts: IPost[][];
}

const pointsOfInterest = getPointsOfInterest(
  [...POSTS_DATES, ...PROJECTS_DATES],
  HOME_INTEREST_POINTS,
  HOME_GROUP_BY,
);

const initialState: IState = {
  activeSegment: HomeSegment.PROJECTS,

  pointsOfInterest,

  projects: filterData(PROJECTS),

  tracks: filterData(TRACKS),

  posts: filterData(POSTS),
};

export const homeSlice = createSlice({
  name: 'home',

  initialState,

  reducers: {
    setActiveSegment: (state, action: PayloadAction<HomeSegment>) => {
      const segment = action.payload;

      state.activeSegment = segment;
    },
  },
});

function filterData<T>(source: T[]) {
  return pointsOfInterest.map((pointOfInterest) =>
    source.filter((item: T) => {
      const castedItem = item as { date: string };

      return pointOfInterest.isSame(dayjs(castedItem.date), HOME_GROUP_BY);
    }),
  );
}

export const { setActiveSegment } = homeSlice.actions;

export default homeSlice.reducer;
