import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid';
import { getRandomNotificationImage } from "../../utills/randomImage"; // ✅ 랜덤 이미지 가져오기
import { PushNotificationModel } from "../../models/types";

// 푸시 알림 리스트 상태 정의 (배열 형태)
interface PushNotificationListState {
  notifications: PushNotificationModel[];
}

// 초기 상태 (빈 리스트)
const initialState: PushNotificationListState = {
  notifications: [],
};

const pushNotificationListSlice = createSlice({
  name: "pushNotificationList",
  initialState,
  reducers: {
    // 새로운 푸시 알림 아이템 추가
    addPushNotification: (state, action: PayloadAction<string>) => {
      state.notifications.unshift({
        id: uuid.v4() as string,  // UUID 생성
        message: action.payload,
        timestamp: Date.now(),
        image: getRandomNotificationImage(),
        type: "의류 수거" // 임시 사용
      });
    },

    // 특정 ID의 푸시 알림 삭제
    removePushNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },

    // 모든 푸시 알림 초기화
    clearPushNotificationList: (state) => {
      state.notifications = [];
    },
  },
});

// 액션 & 리듀서 내보내기
export const { addPushNotification, removePushNotification, clearPushNotificationList } =
  pushNotificationListSlice.actions;
export default pushNotificationListSlice.reducer;