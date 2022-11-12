import { ColorScheme } from '@mantine/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  colorScheme: ColorScheme;

  isDashboardMaximized: boolean;
}

const initialState: IState = {
  colorScheme: 'dark',

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
