import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updatePushNotificationIsRead } from "../store/slices/pushNotificationListSlice";

// 푸시 알림 리스트를 관리하는 커스텀 훅
export const useNotificationList = () => {
  const dispatch = useDispatch();

  // Redux에서 알림 리스트 가져오기
  const allNotifications = useSelector((state: RootState) => state.pushNotificationListReducer.allNotifications);
  const pickupNotifications = useSelector((state: RootState) => state.pushNotificationListReducer.pickupNotifications);
  const storeNotifications = useSelector((state: RootState) => state.pushNotificationListReducer.storeNotifications);

  // 화면 진입 시 전체 알림 읽음 처리 (한 번만 실행)
  useEffect(() => {
    dispatch(updatePushNotificationIsRead());
  }, [dispatch]);

  return {
    allNotifications,
    pickupNotifications,
    storeNotifications,
  };
};