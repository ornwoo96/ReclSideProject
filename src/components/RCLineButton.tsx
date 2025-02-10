import React from "react"
import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from "react-native"
import colors from "../styles/colors"

interface RCLineButtonProps {
  text: string  // 버튼 텍스트 (필수)
  selected?: boolean // 선택 여부 (기본값: false)
  onPress?: () => void  // 버튼 클릭 핸들러
  textStyle?: StyleProp<TextStyle> // 텍스트 스타일 커스텀 가능
  buttonStyle?: StyleProp<ViewStyle> // 버튼 스타일 커스텀 가능
}

const RCLineButton: React.FC<RCLineButtonProps> = ({
  text,
  selected = false,
  onPress,
  textStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { borderColor: selected ? colors.primary : colors.gray }, 
        buttonStyle, 
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text 
        style={[
          styles.text, 
          { color: selected ? colors.primary : colors.gray }, 
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 37.5,
    borderWidth: 1,
    borderRadius: 18.75,  
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center", 
    alignSelf: "flex-start", 
  },
  text: {
    fontSize: 12,
    fontWeight: "light",
    color: colors.primary,
  },
})

export default RCLineButton