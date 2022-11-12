import { ColorScheme } from '@mantine/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  colorScheme: ColorScheme;
}

const initialState: IState = {
  colorScheme: 'dark',
};

export const preferencesSlice = createSlice({
  name: 'preferences',

  initialState,

  reducers: {
    toggleColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { toggleColorScheme } = preferencesSlice.actions;

export default preferencesSlice.reducer;
