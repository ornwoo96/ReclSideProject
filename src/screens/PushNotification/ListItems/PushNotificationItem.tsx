import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { formatDate } from "../../../utills/dateFormatter"; 
import { PushNotificationModel } from "../../../models/types"; 

const PushNotificationItem: React.FC<PushNotificationModel> = ({ message, timestamp, image }) => {
  return (
    <View style={styles.notificationItem}>
      {/* 텍스트 내용 */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>포토 리뷰</Text>
        <Text style={styles.message} numberOfLines={2} ellipsizeMode="tail">
          {message}
        </Text>
        <Text style={styles.timestamp}>{"의류 수거 · " + formatDate(timestamp)}</Text> 
      </View>
      {/* 이미지 */}
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default PushNotificationItem;

const styles = StyleSheet.create({
  notificationItem: {
    minHeight: 60,
    maxHeight: 140,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
    maxWidth: "75%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    alignSelf: "center",
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#252525",
    marginBottom: 5,
  },
  message: {
    fontSize: 12,
    color: "#444",
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 10,
    color: "#888",
    marginTop: 4,
  },
});