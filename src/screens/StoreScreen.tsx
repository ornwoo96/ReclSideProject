import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProps } from '../navigation/types';

type StoreScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

const StoreScreen: React.FC<StoreScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>스토어 화면</Text>
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

export default StoreScreen;