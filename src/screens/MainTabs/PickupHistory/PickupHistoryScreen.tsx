import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProps } from '../../../navigation/types';

type PickupHistoryScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

const PickupHistoryScreen: React.FC<PickupHistoryScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>수거내역 화면</Text>
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

export default PickupHistoryScreen;