import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Icon } from "../../../../components/Icon";
import { formatTime } from "../../../../utills/dateFormatter";
import colors from "../../../../styles/colors";

interface QuizTimerProps {
    duration: number; // 초 단위의 남은 시간
    /* 타이머 마감 로직 작업 필요 */
}

const QuizTimer: React.FC<QuizTimerProps> = ({ duration }) => {
    const [remainingTime, setRemainingTime] = useState(duration);

    useEffect(() => {
        if (remainingTime <= 0) return;

        const timer = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [remainingTime]);

    return (
        <View style={styles.quizTimerContainer}>
            <Icon icon="geography" style={styles.quizIcon} />
            <Text style={styles.timerText}>
                {`${formatTime(remainingTime)} 뒤에 끝나요`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    quizTimerContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
        alignSelf: "center",
    },
    quizIcon: {
        width: 27.5,
        height: 27.5,
        marginRight: 5,
        marginBottom: 2.5,
    },
    timerText: {
        fontSize: 23,
        fontWeight: "900",
        fontFamily: Platform.OS === "ios" ? "Menlo" : "", 
        color: colors.quizTextBlue
    },
});

export default QuizTimer;