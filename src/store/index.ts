import { configureStore } from '@reduxjs/toolkit';
import pushNotificationReducer from './slices/pushNotificationSlice';
import pushNotificationListReducer from './slices/pushNotificationListSlice';
import globalAlertReducer from "./slices/globalAlertSlice";

export const store = configureStore({
  reducer: {
    pushNotificationReducer: pushNotificationReducer,
    pushNotificationListReducer: pushNotificationListReducer,
    globalAlert: globalAlertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;