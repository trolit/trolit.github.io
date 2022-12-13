import { ColorScheme } from '@mantine/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DARK_THEME } from '@/assets/constants/themes';

interface IState {
  colorScheme: ColorScheme;

  isProfileCardVisible: boolean;
}

const initialState: IState = {
  colorScheme: DARK_THEME,

  isProfileCardVisible: true,
};

export const preferencesSlice = createSlice({
  name: 'preferences',

  initialState,

  reducers: {
    toggleColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },

    toggleProfileCard: (state) => {
      state.isProfileCardVisible = !state.isProfileCardVisible;
    },
  },
});

export const { toggleColorScheme, toggleProfileCard } =
  preferencesSlice.actions;

export default preferencesSlice.reducer;
