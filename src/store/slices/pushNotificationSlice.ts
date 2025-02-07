import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PushNotificationState {
  message: string;
}

const initialState: PushNotificationState = {
  message: "",
};

const pushNotificationSlice = createSlice({
  name: "pushNotification",
  initialState,
  reducers: {
    sendNotification: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { sendNotification } = pushNotificationSlice.actions;
export default pushNotificationSlice.reducer;