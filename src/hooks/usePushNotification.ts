import { useDispatch, useSelector } from "react-redux";
import { sendNotification } from "../store/slices/pushNotificationSlice";
import { sendLocalNotification } from "../services/local/localPushNotification";
import { RootState } from "../store";

export const usePushNotification = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.pushNotificationReducer.message);

  const triggerNotification = (msg: string) => {
    dispatch(sendNotification(msg));
    sendLocalNotification(msg);
  };

  return { message, triggerNotification };
};