import React, { useRef } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import { Shadow } from "react-native-shadow-2";

const renewedItems = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
];

const infiniteData = [...renewedItems, ...renewedItems];
const ITEM_WIDTH = 140; // 아이템 가로 너비 + 여백
const SCROLL_SPEED = 0.5; // 자동 스크롤 속도

const RenewedItem = () => {
    const flatListRefTop = useRef<FlatList>(null);
    const flatListRefBottom = useRef<FlatList>(null);

    /* 무한 카운셀링 최적화 실패.. 보류 */

    return (
        <View style={styles.container}>
            {/* 🏷️ 섹션 제목 */}
            <Text style={styles.secondTitle}>{"플러스 매입된 아이템은?"}</Text>
            <Text style={styles.sectionTitle}>{"최상급 세컨핸드 리뉴드"}</Text>

            {/* 🎨 리뉴드 아이템 리스트 */}
            <View style={styles.flatListContainer}>
                {/* 상단 리스트 (왼쪽으로 자동 스크롤) */}
                <FlatList
                    ref={flatListRefTop}
                    data={infiniteData}
                    horizontal
                    contentContainerStyle={{ paddingVertical: 15 }}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => (
                        <Shadow distance={10} startColor="rgba(0,0,0,0.04)">
                            <View style={styles.itemContainer} />
                        </Shadow>
                    )}
                />

                {/* 하단 리스트 (오른쪽으로 자동 스크롤) */}
                <FlatList
                    ref={flatListRefBottom}
                    data={infiniteData}
                    horizontal
                    contentContainerStyle={{ paddingVertical: 15 }}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    renderItem={({ item }) => (
                        <Shadow distance={10} startColor="rgba(0,0,0,0.04)">
                            <View style={styles.itemContainer} />
                        </Shadow>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 450,
        paddingVertical: 20,
    },
    secondTitle: {
        fontSize: 12,
        fontWeight: "400",
        color: colors.gray,
        marginBottom: 2.5,
        paddingLeft: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        paddingLeft: 15,
    },
    flatListContainer: {
        height: 350,
        alignItems: "center",
        justifyContent: "center",
    },
    itemContainer: {
        width: 125,
        height: 150,
        marginRight: 15,
        backgroundColor: "white",
        borderRadius: 10,
    },
});

export default RenewedItem;