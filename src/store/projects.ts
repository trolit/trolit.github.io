import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProjectsSegment } from '@/enums/ProjectsSegment';

interface IState {
  activeSegment: ProjectsSegment;
}

const initialState: IState = {
  activeSegment: ProjectsSegment.ALL,
};

export const projectsSlice = createSlice({
  name: 'projects',

  initialState,

  reducers: {
    setActiveSegment: (state, action: PayloadAction<ProjectsSegment>) => {
      const segment = action.payload;

      state.activeSegment = segment;
    },
  },
});

export const { setActiveSegment } = projectsSlice.actions;

export default projectsSlice.reducer;
