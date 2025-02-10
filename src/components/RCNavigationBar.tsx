import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native"
import colors from "../styles/colors"
import { Icon, IconTypes } from "./Icon"

export type RCNavigationBarItemType = {
  type: "icon" | "text"
  value: string | IconTypes // 텍스트 or 아이콘
  onPress?: () => void
}

interface RCNavigationBarProps {
  title: string  // 네비게이션 바 타이틀 (필수)
  leftItem?: RCNavigationBarItemType  // 왼쪽 버튼 (텍스트 or 아이콘)
  rightItem?: RCNavigationBarItemType  // 오른쪽 버튼 (텍스트 or 아이콘)
  backgroundColor?: string  // 배경색 (기본값: 흰색)
  shadow?: boolean  // 그림자 효과 추가 여부
}

const RCNavigationBar: React.FC<RCNavigationBarProps> = ({
  title,
  leftItem,
  rightItem,
  backgroundColor = colors.white,
  shadow = true
}) => {
  return (
    <SafeAreaView>
      <View style={styles.navBar}>
        {/* 왼쪽 아이템 */}
        <TouchableOpacity
          onPress={leftItem?.onPress}
          style={styles.leftItem}
          disabled={!leftItem?.onPress}
        >
          {leftItem && leftItem.type === "icon" ? (
            <Icon 
              icon={leftItem.value as IconTypes} 
              style={styles.icon} 
            />
          ) : (
            <Text style={styles.sideText}>{leftItem?.value}</Text>
          )}
        </TouchableOpacity>

        {/* 타이틀 */}
        <Text style={styles.title}>{title}</Text>

        {/* 오른쪽 아이템 */}
        <TouchableOpacity
          onPress={rightItem?.onPress}
          style={styles.rightItem}
          disabled={!rightItem?.onPress}
        >
          {rightItem && rightItem.type === "icon" ? (
            <Icon 
              icon={rightItem.value as IconTypes} 
              style={styles.icon} 
            />
          ) : (
            <Text style={styles.sideText}>{rightItem?.value}</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white
  },
  title: {
    fontSize: 18,
    fontWeight: "regular",
    color: colors.black,
    textAlign: "center",
    flex: 1,
  },
  leftItem: {
    width: 30,  
    height: 30,  
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5, 
  },
  rightItem: {
    width: 30,
    height: 30,  
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  sideText: {
    fontSize: 16,
    color: colors.black,
  },
  icon: {
    width: 24,
    height: 24,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
})

export default RCNavigationBar;