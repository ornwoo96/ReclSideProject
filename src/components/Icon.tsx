import React from "react"
import { Image, ImageStyle, StyleProp, View, ViewStyle } from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps {
  icon: IconTypes
  focused?: boolean
  style?: StyleProp<ImageStyle> // 아이콘 스타일을 props로 받음
  containerStyle?: StyleProp<ViewStyle> // 컨테이너 스타일도 props로 받음
}

export function Icon({ icon, focused, style, containerStyle }: IconProps) {
  return (
    <View style={containerStyle}>
      <Image 
        source={focused ? iconRegistry[icon].active : iconRegistry[icon].inactive}
        style={[defaultStyles.icon, style]} // 기본 스타일 + 커스텀 스타일 적용 가능
        resizeMode="contain"
      />
    </View>
  )
}

// 아이콘 리소스 모음
const iconRegistry = {
  home: {
    active: require("../asset/icons/house.fill.png"),
    inactive: require("../asset/icons/house.png"),
  },
  store: {
    active: require("../asset/icons/storefront.fill.png"),
    inactive: require("../asset/icons/storefront.png"),
  },
  pickupHistory: {
    active: require("../asset/icons/book.pages.fill.png"),
    inactive: require("../asset/icons/book.pages.png"),
  },
  myMenu: {
    active: require("../asset/icons/person.fill.png"),
    inactive: require("../asset/icons/person.png"),
  },
  pushAlarm: { 
    active : require("../asset/icons/btn_activity_new.png"),
    inactive: require("../asset/icons/btn_activity.png"),
  },
}

// 기본 스타일 (marginBottom 제거)
const defaultStyles = {
  icon: {
    width: 21,
    height: 21,
  } as ImageStyle,
}