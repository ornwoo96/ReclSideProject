import notifee, { AndroidImportance } from '@notifee/react-native';
import { Platform } from 'react-native';

export const configurePushNotification = async () => {
  if (Platform.OS === 'android') {
    await notifee.createChannel({
      id: 'default-channel-id',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
  }

  if (Platform.OS === 'ios') {
    await notifee.requestPermission(); // iOS에서는 권한 요청 필요
  }
};

export const sendLocalNotification = async (message: string) => {
  await notifee.displayNotification({
    title: '알림',
    body: message,
    android: {
      channelId: 'default-channel-id',
      pressAction: {
        id: 'default',
      },
    },
  });
};