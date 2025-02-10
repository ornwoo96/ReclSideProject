// 푸시 알림 아이템 (유니온) 타입 정의
export type PushNotificationModel = PickupPushNotificationModel | StorePushNotificationModel;

// 의류 수거 푸시 알림 아이템 타입 정의
export interface PickupPushNotificationModel {
  id: string;  // UUID를 활용한 고유 ID
  message: string;
  timestamp: number;
  image: any;
}

// 스토어 푸시 알림 아이템 타입 정의
export interface StorePushNotificationModel {
  id: string;  // UUID를 활용한 고유 ID
  message: string;
  timestamp: number;
  image: any;
}
