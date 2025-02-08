// src/navigation/types.ts
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 스택 네비게이션 타입
export type RootStackParamList = {
  MainTabs: undefined;
};

// 탭 네비게이션 타입
export type RootTabParamList = {
  Home: undefined; // HomeStackNavigator가 들어감
  Store: undefined;
  PickupHistory: undefined;
  MyMenu: undefined;
};

// 내비게이션 타입 (Stack / Tab 각각 정의)
export type StackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type TabNavigationProps<T extends keyof RootTabParamList> =
  BottomTabNavigationProp<RootTabParamList, T>;