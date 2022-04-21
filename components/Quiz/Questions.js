import { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, } from "react-native";
import { COLORS, FONTS } from "../../constants";
import {FontAwesome} from '@expo/vector-icons'

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Questions = (props) => {
  const [quizState, setQuizState] = useState({
    selected: false,
    correct: false,
  });

  const chooseAnswer = (chosenAnswer) => {
    let worth = 20;
    if (chosenAnswer === props.correctAnswer) {
      setQuizState({
        selected: true,
        correct: true,
      });
      props.scoreUpdate(0);
    } else {
      setQuizState({ selected: true });
      props.scoreUpdate(worth);
    }
  };
  return (
    <View style={styles.container}>
      {!quizState.selected && (
        <View style={styles.quesAndAnswerContainer}>
          <View style={styles.questionCard}>
            <Text style={styles.questionText}>{props.question}</Text>
          </View>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            style={styles.answerBox}
            onPress={() => chooseAnswer("answer1")}
          >
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            style={styles.answerBox}
            onPress={() => chooseAnswer("answer2")}
          >
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            style={styles.answerBox}
            onPress={() => chooseAnswer("answer3")}
          >
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            style={styles.answerBox}
            onPress={() => chooseAnswer("answer4")}
          >
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>
        </View>
      )}

      {quizState.selected && quizState.correct && (
        <View style={styles.correctContainer}>
          <Text style={styles.questionText}>{props.question}</Text>
          <Text style={styles.answerText}>{props.answer1}</Text>
          <Text style={styles.answerText}>{props.answer2}</Text>
          <Text style={styles.answerText}>{props.answer3}</Text>
          <Text style={styles.answerText}>{props.answer4}</Text>
          <FontAwesome style={styles.icon} name='check' size={300} color={COLORS.white}/>
        </View>
      )}
      {quizState.selected && !quizState.correct && (
        <View style={styles.wrongContainer}>
          <Text style={styles.questionText}>{props.question}</Text>
          <Text style={styles.answerText}>{props.answer1}</Text>
          <Text style={styles.answerText}>{props.answer2}</Text>
          <Text style={styles.answerText}>{props.answer3}</Text>
          <Text style={styles.answerText}>{props.answer4}</Text>
          <FontAwesome style={styles.icon} name='times' size={300} color={COLORS.white}/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:COLORS.gray,
  },
  correctContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "green",
  },
  wrongContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "red",
  },
  questionText: {
    //flex: 2,
    padding: 15,
    fontSize: screenWidth < 350 ? 16 : 20,
    fontFamily: FONTS.bold,
    textAlign: "center",
    color:COLORS.white,
  },
  answerText: {
    //flex: 2,
    padding: 15,
    fontSize: screenWidth < 350 ? 16 : 20,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  quesAndAnswerContainer: {
    // elevation: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: screenHeight < 600 ? 0 : 10,
  },
  answerBox: {
    backgroundColor: COLORS.primary,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 5,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: screenHeight < 600 ? 5 : 10,
    width: "90%",
  },
  questionCard: {
    elevation: 4,
    borderColor: "#ccc",
    borderWidth: 0.1,
    borderRadius: 5,
    justifyContent: "center",
    paddingVertical: screenHeight < 600 ? 5 : 10,
    marginHorizontal: 10,
  },
  isWrong: {
    backgroundColor: "red",
  },
  icon:{
    position:'absolute',
    top: 60,
    right: 55
  }
});
export default Questions;
