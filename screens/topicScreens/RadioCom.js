import { View, Text } from "react-native";
import { FONTS, images, SIZES } from "../../constants";
import { Nav, BottomButton, TopicItem} from "../../components";
import { RADIO_COMM_DATA as DATA } from "../../data/learningData";
import { RCMQuiz } from "../../data/QuizQuestions";

import { useNavigation } from "@react-navigation/native";

const RadioCom = () => {
  const navigation = useNavigation();

  return (
 <>
      <Nav imgUrl={images.radioTransmission} />

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: SIZES.extraLarge, }} >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
          Topics
        </Text>

        {DATA.map((item) => (
          <TopicItem key={item.id} onPress={() => navigation.navigate("Contents", { item })} >
            <Text style={{ marginVertical: SIZES.base, fontFamily: FONTS.semiBold, fontSize: SIZES.font, }} >
              {item.topic}
            </Text>
          </TopicItem>
        ))}
      </View>

      <BottomButton title="Take a Quiz" onPress={() => navigation.navigate("Quiz", { questions: RCMQuiz.questions }) } />
    </>
  );
};
export default RadioCom;
