import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../../styles/colors"; 
import { Icon } from "../../../../components/Icon";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { StackNavigationProps } from "../../../../navigation/types";
import OXQuizItem from "./OXQuizItem";
import GuideItem from "./GuideItem"; 
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

interface HomeNavBarProps {
  onPressRight: () => void;
}

// 홈 네비게이션 바 컴포넌트
const HomeNavBar: React.FC<HomeNavBarProps> = ({ onPressRight }) => {
  const hasUnreadNotifications = useSelector(
    (state: RootState) => state.pushNotificationListReducer.hasUnreadNotifications
  );

  return (
    <View style={styles.navBar}>
      <Icon icon="reclMainIcon" style={styles.navLeftItem} />
      <TouchableOpacity onPress={onPressRight}>
        <Icon icon="pushAlarm" style={styles.navRightItem} focused={hasUnreadNotifications} />
      </TouchableOpacity>
    </View>
  );
};

type WelcomeItemProps = {
  navigation: StackNavigationProps<"MainTabs">;
};

const WelcomeItem: React.FC<WelcomeItemProps> = ({ navigation }) => {
  // 애니메이션 상태
  const spacingAnim = useSharedValue(0); // 🔥 높이 애니메이션
  const fadeAnim = useSharedValue(0); // 🔥 투명도 애니메이션

  // 애니메이션 트리거
  useEffect(() => {
    setTimeout(() => {
      spacingAnim.value = withTiming(420, { duration: 500 });
      fadeAnim.value = withTiming(1, { duration: 500 });
    }, 3000);
  }, []);

  // 애니메이션 스타일
  const animatedQuizViewStyle = useAnimatedStyle(() => ({
    height: spacingAnim.value, // 높이 애니메이션
    opacity: fadeAnim.value, // 투명도 애니메이션
  }));

  // 퀴즈 종료 핸들러
  const handleQuizEnd = (isCorrect: boolean) => {
    console.log(isCorrect ? "정답!" : "오답!");

    spacingAnim.value = withTiming(0, { duration: 500 });
    fadeAnim.value = withTiming(0, { duration: 500 });
  };

  return (
    <View style={styles.container}>
      {/* 네비게이션 바 */}
      <HomeNavBar onPressRight={() => navigation.navigate("PushNotification")} />

      {/* 애니메이션 퀴즈 뷰 */}
      <Animated.View style={[styles.quizView, animatedQuizViewStyle]}>
        <OXQuizItem onQuizEnd={handleQuizEnd} />
      </Animated.View>

      {/* 최상단 웰컴 뷰 */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          <Text style={styles.welcomeTextRegular}>쁘모님 반가워요!</Text>{"\n"}
          리클과 함께{"\n"}지구를 구해보세요!
        </Text>
      </View>

      {/* 하단 버튼 리스트 */}
      <GuideItem />
    </View>
  );
};

export default WelcomeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  navLeftItem: {
    width: 100, 
    height: 30,
    marginLeft: -20, 
  },
  navRightItem: {
    width: 30, 
    height: 30,
    marginRight: -10,
  },
  welcomeContainer: {
    height: 180,
    width: "100%",
    backgroundColor: colors.secondary, 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  welcomeTextRegular: {
    fontWeight: "400",
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "700",
    color: "black",
    textAlign: "left",
    lineHeight: 30,
  },
  quizView: {
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
});