import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  homeSegmentValue: string;
}

const initialState: IState = {
  homeSegmentValue: 'Projects',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',

  initialState,

  reducers: {
    setHomeSegmentValue: (state, action: PayloadAction<string>) => {
      state.homeSegmentValue = action.payload;
    },
  },
});

export const { setHomeSegmentValue } = dashboardSlice.actions;

export default dashboardSlice.reducer;
