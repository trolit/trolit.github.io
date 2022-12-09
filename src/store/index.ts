import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from './dashboard';
import preferencesReducer from './preferences';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,

    preferences: preferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
