import { ColorScheme } from '@mantine/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DARK_THEME } from '@/assets/constants/common';
import { PRIMARY_COLOR, DARK_THEME_COLOR_SHADE, LIGHT_THEME_COLOR_SHADE } from '@/config';

interface IState {
  colorScheme: ColorScheme;

  isProfileCardVisible: boolean;

  shadedColor: string;
}

const initialColorScheme = DARK_THEME;

const initialState: IState = {
  colorScheme: initialColorScheme,

  isProfileCardVisible: true,

  shadedColor: getShadedColor(initialColorScheme),
};

export const preferencesSlice = createSlice({
  name: 'preferences',

  initialState,

  reducers: {
    toggleColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      const colorScheme = action.payload;

      state.colorScheme = colorScheme;

      state.shadedColor = getShadedColor(colorScheme);
    },

    toggleProfileCard: (state) => {
      state.isProfileCardVisible = !state.isProfileCardVisible;
    },
  },
});

function getShadedColor(colorScheme: ColorScheme) {
  return `${PRIMARY_COLOR}.${colorScheme === DARK_THEME ? DARK_THEME_COLOR_SHADE : LIGHT_THEME_COLOR_SHADE}`;
}

export const { toggleColorScheme, toggleProfileCard } = preferencesSlice.actions;

export default preferencesSlice.reducer;
