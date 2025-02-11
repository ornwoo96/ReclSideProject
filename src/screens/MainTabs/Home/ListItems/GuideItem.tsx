import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import colors from "../../../../styles/colors";
import { Shadow } from "react-native-shadow-2";

export interface GuideItemType {
  id: number;
  iconText: string;
  title: string;
  backgroundColor: string;
}

const GUIDE_BUTTONS: GuideItemType[] = [
  { id: 1, iconText: "📘", title: "이용안내", backgroundColor: "rgb(232, 234, 255)" },
  { id: 2, iconText: "🧣", title: "스토어안내", backgroundColor: "rgb(254, 224, 226)" },
  { id: 3, iconText: "💸", title: "매입단가", backgroundColor: "rgb(255, 236, 210)" },
  { id: 4, iconText: "🗺️", title: "서비스지역", backgroundColor: "rgb(228, 249, 255)" },
  { id: 5, iconText: "🎉", title: "이벤트", backgroundColor: "rgb(254, 225, 231)" },
];

const SCREEN_WIDTH = Dimensions.get("window").width; // 화면 전체 너비
const BUTTON_COUNT = GUIDE_BUTTONS.length; // 버튼 개수
const PADDING_HORIZONTAL = 10 * 2; // 좌우 패딩 합
const MARGIN_HORIZONTAL = 10 * BUTTON_COUNT; // 버튼 사이 여백 총합
const BUTTON_SIZE = Math.floor((SCREEN_WIDTH - PADDING_HORIZONTAL - MARGIN_HORIZONTAL) / BUTTON_COUNT);

const GuideItem = () => {
  return (
    <View style={styles.guideContainer}>
      {GUIDE_BUTTONS.map((item) => (
        <View key={item.id} style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.guideButton, { backgroundColor: item.backgroundColor }]}
            onPress={() => console.log(`${item.title} 클릭됨`)}
          >
            <Text style={styles.buttonIconText}>{item.iconText}</Text>
          </TouchableOpacity>
          <Text style={styles.buttonText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default GuideItem;

const styles = StyleSheet.create({
  guideContainer: {
    backgroundColor: "white",
    height: BUTTON_SIZE + 60,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: "row",
  },
  guideButton: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonIconText: {
    fontSize: 20,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    color: colors.black,
  },
});