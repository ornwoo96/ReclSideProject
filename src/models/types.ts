// 푸시 알림 아이템 타입 정의
export interface PushNotificationModel {
    id: string;  // UUID를 활용한 고유 ID
    message: string;
    timestamp: number;
    image: any;
    type: "의류 수거" | "스토어";
}