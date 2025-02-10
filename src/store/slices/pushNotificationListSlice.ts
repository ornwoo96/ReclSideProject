import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid';
import { getRandomNotificationImage } from "../../utills/randomImage";
import { 
    PushNotificationModel, 
    PickupPushNotificationModel, 
    StorePushNotificationModel
} from "../../models/types";

// 푸시 알림 리스트 상태 정의 (배열 형태)
interface PushNotificationListState {
  allNotifications: PushNotificationModel[];
  pickupNotifications: PickupPushNotificationModel[];
  storeNotifications: StorePushNotificationModel[];
  hasUnreadNotifications: boolean; 
}

// 초기 상태 (빈 리스트)
const initialState: PushNotificationListState = {
    allNotifications: [],
    pickupNotifications: [],
    storeNotifications: [],
    hasUnreadNotifications: false,
};

const pushNotificationListSlice = createSlice({
  name: "pushNotificationList",
  initialState,
  reducers: {
    // 새로운 푸시 알림 아이템 추가
    addPushNotification: (state, action: PayloadAction<string>) => {
      state.allNotifications.unshift({
        id: uuid.v4() as string,  // UUID 생성
        message: action.payload,
        timestamp: Date.now(),
        image: getRandomNotificationImage()
      });
      state.pickupNotifications.unshift({
        id: uuid.v4() as string,  // UUID 생성
        message: action.payload,
        timestamp: Date.now(),
        image: getRandomNotificationImage()
      });
      state.hasUnreadNotifications = true;
      console.log(state.hasUnreadNotifications)
    },

    // 푸시 알림 전체 읽음 표시
    updatePushNotificationIsRead: (state) => {
      state.hasUnreadNotifications = false;
    },
  },
});

// 액션 & 리듀서 내보내기
export const { 
  addPushNotification, 
  updatePushNotificationIsRead
} = pushNotificationListSlice.actions;
export default pushNotificationListSlice.reducer;