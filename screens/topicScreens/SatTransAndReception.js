import { View, Text } from "react-native";
import { FONTS, images, SIZES } from "../../constants";
import { Nav, BottomButton, TopicItem, TopicText } from "../../components";
import { SAT_TRANS_RECEPT_DATA as DATA } from "../../data/learningData";
import { STRQuiz } from "../../data/QuizQuestions";

import { useNavigation } from "@react-navigation/native";

const SatTransAndReception = () => {
  const navigation = useNavigation();

  return (
     <>
      <Nav imgUrl={images.satelliteReception} />

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: SIZES.extraLarge, }} >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
          Topics
        </Text>

        {DATA.map((item) => (
          <TopicItem key={item.id} onPress={() => navigation.navigate("Contents", { item })} >
            <TopicText >
              {item.topic}
            </TopicText>
          </TopicItem>
        ))}
      </View>

      <BottomButton title="Take a Quiz" onPress={() => navigation.navigate("Quiz", { questions: STRQuiz.questions }) } />
    </>
  );
};
export default SatTransAndReception;
