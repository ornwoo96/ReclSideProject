import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 푸시 알림 상태 정의 (단일 메시지)
interface PushNotificationState {
  message: string;
}

// 초기 상태 (메시지 없음)
const initialState: PushNotificationState = {
  message: "",
};

const pushNotificationSlice = createSlice({
  name: "pushNotification",
  initialState,
  reducers: {
    // 새로운 푸시 알림 전송
    sendNotification: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// 액션 & 리듀서 내보내기
export const { sendNotification } = pushNotificationSlice.actions;
export default pushNotificationSlice.reducer;