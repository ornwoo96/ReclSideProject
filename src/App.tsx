import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigator } from './navigation/AppNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          {/* 🚀 기본 탭 네비게이터 */}
          <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};
