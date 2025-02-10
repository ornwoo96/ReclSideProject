import { useDispatch } from "react-redux";
import {
   addPushNotification, 
   removePushNotification,
   clearPushNotificationList
} from "../store/slices/pushNotificationListSlice";
import { sendLocalNotification } from "../services/local/localPushNotification";

// 푸시 알림을 관리하는 커스텀 훅
export const usePushNotification = () => {
  const dispatch = useDispatch();

  // 새로운 푸시 알림 추가
  const triggerNotification = (msg: string) => {
    dispatch(addPushNotification(msg)); // ⚠️ 임시 사용: Redux에 추가 
    sendLocalNotification(msg); // 로컬 푸시 알림 전송
  };

  // 특정 ID의 푸시 알림 삭제
  const deleteNotification = (id: string) => {
    dispatch(removePushNotification(id));
  };

  // 모든 푸시 알림 초기화
  const clearNotifications = () => {
    dispatch(clearPushNotificationList());
  };

  return {
    triggerNotification,
    deleteNotification,
    clearNotifications,
  };
};