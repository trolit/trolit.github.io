import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  theme: 'light' | 'dark';
}

const initialState: IState = {
  theme: 'dark',
};

export const generalSlice = createSlice({
  name: 'general',

  initialState,

  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = generalSlice.actions;

export default generalSlice.reducer;
