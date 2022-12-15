import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProjectsSegment } from '@/enums/ProjectsSegment';

interface IState {
  activeSegment: ProjectsSegment;

  activeLanguage: string;
}

const initialState: IState = {
  activeSegment: ProjectsSegment.ALL,

  activeLanguage: 'any',
};

export const projectsSlice = createSlice({
  name: 'projects',

  initialState,

  reducers: {
    setActiveSegment: (state, action: PayloadAction<ProjectsSegment>) => {
      const segment = action.payload;

      state.activeSegment = segment;
    },

    setActiveLanguage: (state, action: PayloadAction<string>) => {
      state.activeLanguage = action.payload;
    },
  },
});

export const { setActiveSegment, setActiveLanguage } = projectsSlice.actions;

export default projectsSlice.reducer;
