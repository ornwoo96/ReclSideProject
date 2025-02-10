import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProps } from '../../../navigation/types';

type MyMenuScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

const MyMenuScreen: React.FC<MyMenuScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>마이메뉴 화면</Text>
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

export default MyMenuScreen;