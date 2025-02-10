import { useDispatch } from "react-redux";
import {
  addPushNotification,

} from "../store/slices/pushNotificationListSlice";
import { sendLocalNotification } from "../services/local/localPushNotification";
import { showGlobalAlert } from "../store/slices/globalAlertSlice";

// 푸시 알림을 관리하는 커스텀 훅
export const usePushNotification = () => {
  const dispatch = useDispatch();

  // 새로운 푸시 알림 추가
  const triggerNotification = (msg: string) => {
    dispatch(addPushNotification(msg)); // ⚠️ 임시 사용: Redux에 추가 
    sendLocalNotification(msg); // 로컬 푸시 알림 전송
    dispatch(showGlobalAlert("수거된 이후 내 옷이 전달되었다는 가정하에 알림이 울립니다."));
  };

  return {
    triggerNotification,
  };
};