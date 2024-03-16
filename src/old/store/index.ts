import { configureStore } from '@reduxjs/toolkit';

import homeReducer from './home';
import projectsReducer from './projects';
import preferencesReducer from './preferences';

export const store = configureStore({
  reducer: {
    home: homeReducer,

    projects: projectsReducer,

    preferences: preferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
