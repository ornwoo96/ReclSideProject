import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { StackNavigationProps } from '../../navigation/types';
import RCNavigationBar from "../../components/RCNavigationBar";
import RCLineButton from "../../components/RCLineButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; 
import EmptyNotificationItem from "./ListItems/EmptyNotificationItem";
import PushNotificationItem from "./ListItems/PushNotificationItem";

type PushNotificationScreenProps = {
  navigation: StackNavigationProps<'PushNotification'>;
};

const PushNotificationScreen: React.FC<PushNotificationScreenProps> = ({ navigation }) => {
  // 현재 선택된 카테고리 상태 관리 (알림 전체, 의류 수거, 스토어)
  const [selectedCategory, setSelectedCategory] = useState<"전체" | "의류 수거" | "스토어">("전체");

  // 푸시알림리스트아이템들 (훅 사용 X.)
  const notifications = useSelector((state: RootState) => state.pushNotificationListReducer.notifications);

  // 선택된 카테고리에 따라 필터링된 데이터를 계산
  const filteredNotifications = selectedCategory === "전체" 
    ? notifications 
    : notifications.filter(item => item.type === selectedCategory);
    
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
        <RCLineButton 
          text="전체"
          selected={selectedCategory === "전체"}
          onPress={() => setSelectedCategory("전체")} 
        />
        <RCLineButton 
          text="의류 수거"
          selected={selectedCategory === "의류 수거"}
          onPress={() => setSelectedCategory("의류 수거")} 
        />
        <RCLineButton 
          text="스토어"
          selected={selectedCategory === "스토어"}
          onPress={() => setSelectedCategory("스토어")} 
        />
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