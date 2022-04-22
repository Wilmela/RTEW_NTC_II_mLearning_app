import { View, Text } from "react-native";
import { FONTS, images, SIZES } from "../../constants";
import { TELEVISION_DATA as DATA } from "../../data/learningData";
import { Nav, BottomButton, TopicItem, TopicText } from "../../components";
import { TVQuiz } from "../../data/QuizQuestions";

import { useNavigation } from "@react-navigation/native";

const Television = () => {
  const navigation = useNavigation();

  return (
     <>
      <Nav imgUrl={images.television} />

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: SIZES.extraLarge, }} >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
          Topics
        </Text>

        {DATA.map((item) => (
          <TopicItem key={item.id} onPress={() => navigation.navigate("Contents", { item })} >
            <TopicText fontSub={2} >
              {item.topic}
            </TopicText>
          </TopicItem>
        ))}
      </View>

      <BottomButton title="Take a Quiz" onPress={() => navigation.navigate("Quiz", { questions: TVQuiz.questions }) } />
    </>
  );
};
export default Television;
