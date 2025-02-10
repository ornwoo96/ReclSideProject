import { configureStore } from '@reduxjs/toolkit';
import pushNotificationReducer from './slices/pushNotificationSlice';
import pushNotificationListReducer from './slices/pushNotificationListSlice';

export const store = configureStore({
  reducer: {
    pushNotificationReducer: pushNotificationReducer,
    pushNotificationListReducer: pushNotificationListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;