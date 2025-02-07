import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProps } from '../navigation/types';
import { usePushNotification } from "../hooks/usePushNotification";
import { configurePushNotification } from "../services/local/localPushNotification";

type HomeScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { triggerNotification } = usePushNotification();

  useEffect(() => {
    configurePushNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈 화면</Text>
      <Button
        title="푸시 알림 보내기"
        onPress={() => triggerNotification("안녕하세요!")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;