import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ANY } from '@/assets/constants/common';
import { ProjectsSegment } from '@/enums/ProjectsSegment';

interface IState {
  activeSegment: ProjectsSegment;

  activeDuration: string;

  activeLanguage: string;
}

const initialState: IState = {
  activeSegment: ProjectsSegment.ALL,

  activeDuration: ANY,

  activeLanguage: ANY,
};

export const projectsSlice = createSlice({
  name: 'projects',

  initialState,

  reducers: {
    setActiveSegment: (state, action: PayloadAction<ProjectsSegment>) => {
      const segment = action.payload;

      state.activeSegment = segment;
    },

    setActiveDuration: (state, action: PayloadAction<string>) => {
      state.activeDuration = action.payload;
    },

    setActiveLanguage: (state, action: PayloadAction<string>) => {
      state.activeLanguage = action.payload;
    },
  },
});

export const { setActiveSegment, setActiveLanguage, setActiveDuration } = projectsSlice.actions;

export default projectsSlice.reducer;
