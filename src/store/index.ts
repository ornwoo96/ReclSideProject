import { configureStore } from '@reduxjs/toolkit';
import pushNotificationReducer from './slices/pushNotificationSlice';

export const store = configureStore({
  reducer: {
    pushNotificationReducer: pushNotificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;