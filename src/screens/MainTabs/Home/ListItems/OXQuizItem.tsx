import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { getRandomQuiz } from "../../../../utills/getRandomQuiz";
import { Icon } from "../../../../components/Icon";
import { Shadow } from "react-native-shadow-2";
import QuizTimer from "./QuizTimer";
import colors from "../../../../styles/colors";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from "react-native-reanimated";

interface OXQuizItemProps {
    onQuizEnd: (isCorrect: boolean) => void;
}

const OXQuizItem: React.FC<OXQuizItemProps> = ({ onQuizEnd }) => {
    const [quiz] = useState(getRandomQuiz());
    const [isCorrect, setIsCorrect] = useState(false);

    // 기존 뷰 (타이머, 퀴즈 내용, 버튼) 애니메이션
    const contentOpacity = useSharedValue(1); // 처음에는 1 (보이는 상태)
    const resultOpacity = useSharedValue(0); // 결과 뷰는 처음에 0 (숨김)

    // 그림자 애니메이션 (3초 후 나타남)
    const shadowOpacity = useSharedValue(0);
    useEffect(() => {
        shadowOpacity.value = withDelay(3000, withTiming(1, { duration: 1000 }));
    }, []);

    // 애니메이션 스타일 적용
    const animatedContentStyle = useAnimatedStyle(() => ({
        opacity: contentOpacity.value,
    }));

    const animatedResultStyle = useAnimatedStyle(() => ({
        opacity: resultOpacity.value,
    }));

    const animatedShadowStyle = useAnimatedStyle(() => ({
        opacity: shadowOpacity.value,
    }));

    const checkAnswer = (answer: "O" | "X") => {
        const correct = answer === quiz.correctAnswer;
        setIsCorrect(correct);

        // 기존 뷰 사라지기
        contentOpacity.value = withTiming(0, { duration: 500 });

        // 새로운 결과 뷰 등장
        setTimeout(() => {
            resultOpacity.value = withTiming(1, { duration: 500 });

            // 3초 뒤에 모든 뷰 사라지기
            setTimeout(() => {
                shadowOpacity.value = withTiming(0, { duration: 500 });
                onQuizEnd(correct); // 🔥 최종적으로 OXQuizItem이 사라지게 처리
            }, 3000);
        }, 500);
    };

    return (
        <View style={QuizContainerStyles.rootContainer}>
            <Animated.View style={animatedShadowStyle}>
                <Shadow>
                    <View style={QuizContainerStyles.quizContainer}>
                        
                        {/* 기존 퀴즈 뷰 */}
                        <Animated.View style={[animatedContentStyle, { position: "absolute", width: "100%" }]}>
                            <QuizTimer duration={86400} />
                            <View style={QuizTextStyles.quizTextContainer}>
                                <Text style={QuizTextStyles.quizText}>{quiz.question}</Text>
                                <Text style={QuizTextStyles.quizPointText}>{"정답을 맞추면 1000P 적립!"}</Text>
                            </View>
                            <View style={QuizButtonStyles.buttonContainer}>
                                <TouchableOpacity style={QuizButtonStyles.oButton} onPress={() => checkAnswer("O")}>
                                    <View style={QuizButtonStyles.button}>
                                        <Icon icon="circle" style={QuizButtonStyles.oIcon} />
                                        <Text style={QuizButtonStyles.oButtonText}>그렇다</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={QuizButtonStyles.xButton} onPress={() => checkAnswer("X")}>
                                    <View style={QuizButtonStyles.button}>
                                        <Icon icon="close" style={QuizButtonStyles.xIcon} />
                                        <Text style={QuizButtonStyles.xButtonText}>아니다</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>

                        {/* 결과 뷰 */}
                        <Animated.View style={[
                            animatedResultStyle, { 
                                position: "absolute",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center", 
                            }]}>
                            {isCorrect ? (
                                <View style={ResultStyles.resultContainer}>
                                    <Icon icon="correct" style={ResultStyles.resultIcon} />
                                    <Text style={ResultStyles.correctText}>정답입니다! 🎉</Text>
                                </View>
                            ) : (
                                <View style={ResultStyles.resultContainer}>
                                    <Icon icon="wrong" style={ResultStyles.resultIcon} />
                                    <Text style={ResultStyles.wrongText}>아쉽네요! 😢</Text>
                                </View>
                            )}
                        </Animated.View>

                    </View>
                </Shadow>
            </Animated.View>
        </View>
    );
};

export default OXQuizItem;

const SCREEN_WIDTH = Dimensions.get("window").width;

export const QuizContainerStyles = StyleSheet.create({
    rootContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    quizContainer: {
        height: 390,
        width: SCREEN_WIDTH - 30,
        backgroundColor: "white",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 10,
    },
});

export const QuizButtonStyles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
    },
    button: {
        height: (SCREEN_WIDTH - 140) / 2,
        width: (SCREEN_WIDTH - 140) / 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    oButton: {
        borderRadius: 20,
        backgroundColor: colors.lightBlue,
        padding: 10,
        marginHorizontal: 5,
        justifyContent: "center",
    },
    xButton: {
        backgroundColor: colors.lightPink,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        justifyContent: "center",
    },
    oIcon: {
        width: 40,
        height: 40,
    },
    xIcon: {
        marginTop: 6,
        width: 30,
        height: 30,
    },
    oButtonText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: "900",
        color: colors.quizTextBlue,
    },
    xButtonText: {
        marginTop: 15,
        fontSize: 30,
        fontWeight: "900",
        color: colors.quizTextPink,
    },
});

export const QuizTextStyles = StyleSheet.create({
    quizTextContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 20,
    },
    quizText: {
        fontSize: 23,
        fontWeight: "bold",
        color: colors.quizMainTextGray,
        textAlign: "left",
        marginTop: 15,
        marginBottom: 10,
    },
    quizPointText: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.quizGreen,
        marginBottom: 5,
    },
});

export const ResultStyles = StyleSheet.create({
    resultContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    correctText: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.quizTextBlue,
        marginTop: 10,
    },
    wrongText: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.quizTextPink,
        marginTop: 10,
    },
    resultIcon: {
        width: 100,
        height: 100,
    },
});