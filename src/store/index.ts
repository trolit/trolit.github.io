import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './home';
import preferencesReducer from './preferences';

export const store = configureStore({
  reducer: {
    home: homeReducer,

    preferences: preferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
