import { View, Text } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { Nav, BottomButton, TopicItem, TopicText } from "../../components";
import { ELECT_DEVICES_CIR_DATA as DATA } from "../../data/learningData";
import { EDCQuiz } from "../../data/QuizQuestions";

import { useNavigation } from "@react-navigation/native";


const ElectDevAndCir = () => {
  const navigation = useNavigation();

  return (
    <>
      <Nav imgUrl={images.electronicDandC} />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.extraLarge,
        }}
      >
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.extraLarge }}>
          Topics
        </Text>

        {DATA.map((item) => (
          <TopicItem
            key={item.id}
            onPress={() => navigation.navigate("Contents", { item })}
          >
            <TopicText>{item.topic}</TopicText>
          </TopicItem>
        ))}
      </View>

      {/* <View style={{ flexDirection: "row", justifyContent: "flex-between" }}> */}
        <BottomButton
          title="Take a Quiz"
          onPress={() =>
            navigation.navigate("Quiz", { questions: EDCQuiz.questions })
          }
          i={0}
        />
       
      {/* </View> */}
    </>
  );
};
export default ElectDevAndCir;
