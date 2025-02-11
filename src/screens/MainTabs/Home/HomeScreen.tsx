import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProps } from '../../../navigation/types';
import { configurePushNotification } from "../../../services/local/localPushNotification";
import WelcomeItem from "./ListItems/WelcomeItem";
import RenewedItem from "./ListItems/RenewdItem"; 

type HomeScreenProps = {
    navigation: StackNavigationProps<'MainTabs'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useEffect(() => {
    configurePushNotification();
  }, []);

  const listData = [
    { type: "welcome", id: "welcome" },
    { type: "renewed", id: "renewed" },
  ];

  const renderItem = ({ item }: { item: { type: string; id: string } }) => {
    if (item.type === "welcome") {
      return <WelcomeItem navigation={navigation} />;
    } 
    if (item.type === "renewed") {
      return <RenewedItem />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        style={styles.list}
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>알림이 없습니다.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  list: {
    flex: 1
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  }
});

export default HomeScreen;