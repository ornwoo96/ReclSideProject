import React from "react";
import { Image, ImageStyle, StyleProp, View, ViewStyle } from "react-native";

export type IconTypes = keyof typeof iconRegistry;

type IconRegistryType = {
  active?: any;
  inactive?: any;
  default?: any;
};

interface IconProps {
  icon: IconTypes;
  focused?: boolean;
  style?: StyleProp<ImageStyle>; // 아이콘 스타일을 props로 받음
  containerStyle?: StyleProp<ViewStyle>; // 컨테이너 스타일도 props로 받음
}

export function Icon({ icon, focused, style, containerStyle }: IconProps) {
  const iconSource = focused !== undefined
    ? focused
      ? iconRegistry[icon]?.active
      : iconRegistry[icon]?.inactive
    : iconRegistry[icon]?.default; // focused가 없으면 default 사용

  return (
    <View style={containerStyle}>
      {iconSource && (
        <Image
          source={iconSource}
          style={[defaultStyles.icon, style]} // 기본 스타일 + 커스텀 스타일 적용 가능
          resizeMode="contain"
        />
      )}
    </View>
  );
}

// 아이콘 리소스 모음
const iconRegistry: Record<string, IconRegistryType> = {
  home: {
    active: require("../assets/icons/house.fill.png"),
    inactive: require("../assets/icons/house.png"),
  },
  store: {
    active: require("../assets/icons/storefront.fill.png"),
    inactive: require("../assets/icons/storefront.png"),
  },
  pickupHistory: {
    active: require("../assets/icons/book.pages.fill.png"),
    inactive: require("../assets/icons/book.pages.png"),
  },
  myMenu: {
    active: require("../assets/icons/person.fill.png"),
    inactive: require("../assets/icons/person.png"),
  },
  pushAlarm: { 
    active: require("../assets/icons/btn_activity_new.png"),
    inactive: require("../assets/icons/btn_activity.png"),
  },
  reclMainIcon: { 
    default: require("../assets/icons/recl.png"),
  },
  backIcon: { 
    default: require("../assets/icons/btn_back.png"),
  },
  circle: {
    default: require("../assets/icons/circle.png"),
  },
  close: {
    default: require("../assets/icons/close.png"),
  },
  geography: {
    default: require("../assets/icons/geography.png"),
  },
  wrong: {
    default: require("../assets/icons/global-warming.png")
  },
  correct: {
    default: require("../assets/icons/save-the-world.png")
  }
};

// 기본 스타일 (marginBottom 제거)
const defaultStyles = {
  icon: {
    width: 21,
    height: 21,
  } as ImageStyle,
};