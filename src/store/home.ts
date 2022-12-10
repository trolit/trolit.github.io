import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomeSegment } from '@/enums/HomeSegment';
import { getDataBySegment } from '@/assets/constants/home-segmented-data';

interface IState {
  activeSegment: HomeSegment;

  pointsOfInterest: string[];

  arrayOfIndexes: number[][];
}

const activeSegment = HomeSegment.PROJECTS;

const { pointsOfInterest, arrayOfIndexes } = getDataBySegment(activeSegment);

const initialState: IState = {
  activeSegment,

  pointsOfInterest,

  arrayOfIndexes,
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

export const { setActiveSegment } = homeSlice.actions;

export default homeSlice.reducer;
