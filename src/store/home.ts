import dayjs from 'dayjs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomeSegment } from '@/enums/HomeSegment';
import { IPost } from '@/interfaces/dashboard/IPost';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { IProject } from '@/interfaces/dashboard/IProject';
import { IBoardData } from '@/interfaces/dashboard/IBoardData';
import { HOME_GROUP_BY, HOME_INTEREST_POINTS } from '@/config';
import { getPointsOfInterest } from '@/helpers/getPointsOfInterest';
import { ALL_DATES as POSTS_DATES, POSTS } from '@/assets/data/posts';
import { ALL_DATES as TRACKS_DATES, TRACKS } from '@/assets/data/tracks';
import { ALL_DATES as PROJECTS_DATES, PROJECTS } from '@/assets/data/projects';

interface IState {
  activeSegment: HomeSegment;

  projects: IBoardData<IProject>[];

  tracks: IBoardData<ITrack>[];

  posts: IBoardData<IPost>[];
}

const initialState: IState = {
  activeSegment: HomeSegment.PROJECTS,

  projects: filterData(PROJECTS, PROJECTS_DATES),

  tracks: filterData(TRACKS, TRACKS_DATES),

  posts: filterData(POSTS, POSTS_DATES),
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

function filterData<T>(source: T[], dates: string[]): IBoardData<T>[] {
  const pointsOfInterest = getPointsOfInterest(
    dates,
    HOME_INTEREST_POINTS,
    HOME_GROUP_BY,
  );

  return pointsOfInterest.map((pointOfInterest) => {
    const items = source.filter((item: T) => {
      const castedItem = item as { date: string };

      return pointOfInterest.isSame(dayjs(castedItem.date), HOME_GROUP_BY);
    });

    return {
      pointOfInterest,

      items,
    };
  });
}

export const { setActiveSegment } = homeSlice.actions;

export default homeSlice.reducer;
