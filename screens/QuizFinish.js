import { View, Text, StyleSheet, TouchableHighlight, Image, Dimensions, } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import {BottomButton, FocusedStatusBar} from '../components'

const screenWidth = Dimensions.get("window").width;

const QuizFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.params;

  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
     
      <Image source={images.finalScore} resizeMode="contain" style={{ width: "100%", height: 250, }} />

      <View style={styles.container}>
      <Text style={{fontFamily:FONTS.light, fontSize:SIZES.small, color:COLORS.white}}>
        {score < 50 && ('This is a NO NO, try again..')}
        {score > 50 && score < 70 && ('Good job, you can do better.')}
        {score > 70 && score < 100 && ('Almost perfect, one more try.')}
        {score == 100 && ('Perfect, Now try another quiz.')}
      </Text>
        <Text style={{ ...styles.text, ...{ color: COLORS.white } }}>
          Your score is : {score}
        </Text>
        <Text style={styles.text}> You Missed : {missed} out of {questions} </Text>

      </View>
      <BottomButton title='Finish' onPress={()=>navigation.navigate('Home')}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop:SIZES.extraLarge,
    backgroundColor: COLORS.primary,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: screenWidth < 350 ? 16 : 20,
    marginTop: 20,
    color:COLORS.white,
  },
 
});

export default QuizFinish;
