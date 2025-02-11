import React from "react"
import { Text, View, StyleSheet, TouchableOpacity, ViewStyle } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootTabParamList } from "./types"
import { Icon, IconTypes } from "../components/Icon.tsx"
import HomeScreen from "../screens/MainTabs/Home/HomeScreen.tsx"
import StoreScreen from "../screens/MainTabs/Store/StoreScreen.tsx"
import PickupHistoryScreen from "../screens/MainTabs/PickupHistory/PickupHistoryScreen.tsx"
import MyMenuScreen from "../screens/MainTabs/MyMenu/MyMenuScreen.tsx"
import { usePushNotification } from "../hooks/usePushNotification";
import { generateRandomNotificationMessage } from "../utills/randomNotificationMessage";
import colors from "../styles/colors.ts";
import { Shadow } from "react-native-shadow-2"

const Tab = createBottomTabNavigator<RootTabParamList>()

export interface ScreenItem {
  key: keyof RootTabParamList;
  name: String;
  component: React.ComponentType<any>;
  icon: IconTypes | null;
  tabBarItemStyle?: ViewStyle; 
  tabBarButton?: (props: any) => JSX.Element; 
}

// 탭 리스트 관리
const SCREENS: ScreenItem[] = [
  {
    key: "Home",
    name: "리클",
    component: HomeScreen,
    icon: "home",
  },
  {
    key: "Store",
    name: "스토어",
    component: StoreScreen,
    icon: "store",
    tabBarItemStyle: { marginRight: -5 }, // 중앙 버튼 때문에 위치 조정
  },
  {
    key: "center", // 클릭 불가능한 중앙 버튼 (탭바에 표시만)
    name: "리클",
    component: HomeScreen,
    icon: null,
    tabBarButton: (props) => <View {...props} pointerEvents="none" />,  // 클릭 막기
  },
  {
    key: "PickupHistory",
    name: "수거내역",
    component: PickupHistoryScreen,
    icon: "pickupHistory",
    tabBarItemStyle: { marginLeft: -5 }, // 중앙 버튼 때문에 위치 조정
  },
  {
    key: "MyMenu",
    name: "마이메뉴",
    component: MyMenuScreen,
    icon: "myMenu",
  },
]

// 중앙 수거 버튼 (탭과 독립적)
const CenterButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity
    style={styles.centerButton}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Shadow 
      distance={5} // 그림자 거리
      startColor="rgba(0,0,0,0.125)" 
      endColor="rgba(0,0,0,0)"
    >
      <View style={styles.centerTextContainer}>
      <Text style={styles.centerText}>수거</Text>
      </View>
    </Shadow>
  </TouchableOpacity>
)

const TabNavigator = () => {
  const { triggerNotification } = usePushNotification();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,  
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.label,
          tabBarActiveTintColor: styles.labelFocused.color, // 선택된 탭 색상
          tabBarInactiveTintColor: styles.label.color, // 선택되지 않은 탭 색상
        }}
      >
        {SCREENS.map(({ key, name, component, icon, tabBarItemStyle, tabBarButton }) => (
          <Tab.Screen
            key={key}
            name={key}
            component={component}
            options={{
              tabBarIcon: icon 
                ? ({ focused }) => (
                    <Icon 
                      icon={icon}
                      focused={focused} 
                      containerStyle={{ marginBottom: 10 }} 
                    />
                  )
              : () => null, // icon이 null이면 숨김
              tabBarLabel: ({ focused }) => (
                <Text style={[styles.label, focused && styles.labelFocused]}>
                  {name}
                </Text>
              ),
              tabBarItemStyle,
              tabBarButton
            }}
          />
        ))}
      </Tab.Navigator>

      {/* 중앙 버튼 추가 */}
      <CenterButton onPress={() => {triggerNotification(generateRandomNotificationMessage())}} />
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    paddingBottom: 10,
    paddingTop: 20,
  },
  label: {
    fontSize: 11,
    color: colors.mainGray,
  },
  labelFocused: {
    color: colors.primary,
  },
  centerButton: {
    position: "absolute",
    bottom: 45, // 🔥 탭바보다 살짝 위로 배치
    left: "50%",
    transform: [{ translateX: -30 }], // 🔥 정가운데 정렬
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  centerTextContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  centerText: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
})

export default TabNavigator