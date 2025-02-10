import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const EmptyNotificationItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>아직 도착한 알림이 없어요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    height: SCREEN_HEIGHT - 250,
  },
  message: {
    fontSize: 15,
    color: colors.black,
    fontWeight: "900",
  },
});

export default EmptyNotificationItem;