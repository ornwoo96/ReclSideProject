import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.tsx';
import { RootStackParamList } from './types';
import PushNotificationScreen from '../screens/PushNotification/PushNotificationScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

// 탭 리스트 관리
const SCREENS: { name: keyof RootStackParamList; component: React.ComponentType<any> }[] = [
  {
    name: "MainTabs",
    component: TabNavigator,
  },
  {
    name: "PushNotification",
    component: PushNotificationScreen,
  }
]

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { SCREENS.map((screen) => (
        <Stack.Screen 
          key={screen.name}
          name={screen.name} 
          component={screen.component} 
        />
      ))}
    </Stack.Navigator>
  );
};