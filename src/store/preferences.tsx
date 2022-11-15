import { ColorScheme } from '@mantine/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DARK_THEME } from '@/assets/constants/themes';

interface IState {
  colorScheme: ColorScheme;

  isDashboardMaximized: boolean;
}

const initialState: IState = {
  colorScheme: DARK_THEME,

  isDashboardMaximized: false,
};

export const preferencesSlice = createSlice({
  name: 'preferences',

  initialState,

  reducers: {
    toggleColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },

    toggleDashboardView: (state) => {
      state.isDashboardMaximized = !state.isDashboardMaximized;
    },
  },
});

export const { toggleColorScheme, toggleDashboardView } =
  preferencesSlice.actions;

export default preferencesSlice.reducer;
