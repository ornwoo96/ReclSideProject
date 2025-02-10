import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../../../components/Icon"
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProps } from '../../../navigation/types';
import { configurePushNotification } from "../../../services/local/localPushNotification";
import colors from "../../../styles/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

type HomeScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

interface HomeNavBarProps {
  onPressRight: () => void;  // onPress를 부모에서 받도록 설정
}

// 홈 네비게이션 바 컴포넌트 (HomeScreen 내부에서만 사용)
const HomeNavBar: React.FC<HomeNavBarProps> = ({ onPressRight }) => {
  const hasUnreadNotifications = useSelector(
    (state: RootState) => state.pushNotificationListReducer.hasUnreadNotifications
  );

  return (
    <View style={styles.navBar}>
      <Icon 
        icon="reclMainIcon" 
        style={styles.navLeftItem}  
      />
      <TouchableOpacity onPress={onPressRight}>
        <Icon 
          icon="pushAlarm" 
          style={styles.navRightItem} 
          focused={hasUnreadNotifications} 
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useEffect(() => {
    configurePushNotification();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <HomeNavBar onPressRight={() => navigation.navigate("PushNotification")}/>

        <View style={styles.content}>
          <Text style={styles.text}>홈 화면</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  navBar: {
    height: 50, 
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.secondary, 
  },
  content: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  menuButton: {
    fontSize: 16,
    color: "white",
  },
  navLeftItem: {
    width: 100, 
    height: 30,
    marginLeft: -20, 
  },
  navRightItem: {
    width: 30, 
    height: 30,
    marginRight: -10
  },
});

export default HomeScreen;