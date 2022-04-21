import { useState, useEffect, useMemo } from "react";
import { View, FlatList, Text, TouchableHighlight, StyleSheet, Modal, Button,TouchableOpacity } from "react-native";
import { FONTS, COLORS } from "../constants";
 import Questions from "../components/Quiz/Questions";

const Quiz = ({ route, navigation }) => {

  const { questions } = route.params;

  const [isModal, setIsModal] = useState(false);
  const [quizState, setQuizState] = useState({
    questLoaded: false,
    totalScore: 100,
    completedQuiz: false,
  });

  useEffect(() => {
    let numOfQuestions = Array.from(questions).length;
    
    setQuizState({
      ...quizState,
      ...{
        questList: Array.from(questions),
        questLoaded: true,
        numberOfQuestions: numOfQuestions,
        incorrect: 0,
        questionAnswered: 0,
      },
    });
  }, [questions]);

  const updateScore = (penalty) => {
    let tempScore = quizState.totalScore;
    let missed = quizState.incorrect;
    let questionsTotal = quizState.numberOfQuestions;
    let questionsDone = quizState.questionAnswered;

    let newScore = tempScore - penalty;
    let totalAnwered = questionsDone + 1;
    let totalMissed = penalty ? missed + 1 : missed;

    setQuizState({
      ...quizState,
      totalScore: newScore,
      incorrect: totalMissed,
      questionAnswered: totalAnwered, //the problem is on the total question answered
    });

    if (totalAnwered === questionsTotal) {
      setQuizState({ ...quizState, completedQuiz: true });
    }
  };
  //console.log(`this incorrect ${quizState.incorrect}`)

  const finishQuiz = () => {
    navigation.navigate("QuizFinish", {
      score: quizState.totalScore,
      missed: quizState.incorrect,
      questions: quizState.numberOfQuestions,
    });
  };

  const renderQuestions = ({ item }) => {
    return (
      <Questions
        question={item.question}
        answer1={item.answer1}
        answer2={item.answer2}
        answer3={item.answer3}
        answer4={item.answer4}
        correctAnswer={item.correctAnswer}
        scoreUpdate={updateScore}
      />
    );
  };
  const memoList = useMemo(() => renderQuestions);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModal(true)}>
        <Text style={styles.text}>Are You Ready? Let's Go!</Text>
      </TouchableOpacity>

      <Modal visible={isModal} animationType="slide">
        <Button color={COLORS.primary} title="Quit" onPress={() => navigation.goBack()} />

        {quizState.questLoaded && (
          <FlatList
            keyExtractor={(item) => item.key}
            data={quizState.questList}
            renderItem={memoList}
          />
        )}
        {!quizState.completedQuiz && (
          <TouchableHighlight style={styles.disabled}>
            <Text>Answer all the questions </Text>
          </TouchableHighlight>
        )}
        {quizState.completedQuiz && (
          <TouchableHighlight style={styles.enabled} onPress={finishQuiz}>
            <Text>Finish</Text>
          </TouchableHighlight>
        )}
        {!quizState.questLoaded && <Text>LOADING </Text>}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    height: "10%",
  },
  enabled: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90ee90",
    height: "10%",
  },
  text: {
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    fontSize: 20,
  },
});
export default Quiz;
