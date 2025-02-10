import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StackNavigationProps } from '../../navigation/types';
import RCNavigationBar from "../../components/RCNavigationBar";
import RCLineButton from "../../components/RCLineButton";
import EmptyNotificationItem from "./ListItems/EmptyNotificationItem";
import PushNotificationItem from "./ListItems/PushNotificationItem";
import { useNotificationList } from "../../hooks/usePushNotificationList";

type PushNotificationScreenProps = {
  navigation: StackNavigationProps<'PushNotification'>;
};

const PushNotificationScreen: React.FC<PushNotificationScreenProps> = ({ navigation }) => {
  // 현재 선택된 카테고리 상태 관리 (알림 전체, 의류 수거, 스토어)
  const [selectedCategory, setSelectedCategory] = useState<"전체" | "의류 수거" | "스토어">("전체");

  const { allNotifications, pickupNotifications, storeNotifications } = useNotificationList();

  // 선택된 카테고리에 맞게 필터링된 데이터 설정
  const filteredNotifications =
    selectedCategory === "전체"
      ? allNotifications
      : selectedCategory === "의류 수거"
      ? pickupNotifications
      : storeNotifications;
    
  return (
    <View style={styles.container}>
      <RCNavigationBar 
        title = "알림"
        leftItem={{
          type: "icon",
          value: "backIcon",
          onPress: () => navigation.goBack(),
        }}
        backgroundColor="white"
      />

      {/* 상단 카테고리 필터 버튼 */}
      <View style={styles.filterContainer}>
        {["전체", "의류 수거", "스토어"].map((category) => (
          <RCLineButton
            key={category}
            text={category}
            selected={selectedCategory === category}
            onPress={() => setSelectedCategory(category as "전체" | "의류 수거" | "스토어")}
          />
        ))}
      </View>
      
      {/* 알림 리스트뷰 */}
      <FlatList
        data={filteredNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PushNotificationItem {...item} />
        )}
        ListEmptyComponent={<EmptyNotificationItem />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    filterContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 7.5, 
      marginBottom: 10,
      marginLeft: 15,
      marginTop: 15,
    },
});
  

export default PushNotificationScreen;