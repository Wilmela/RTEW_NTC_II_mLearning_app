import { View, Image, StyleSheet } from "react-native";

import FocusedStatusBar from "./FocusedStatusBar";
import Oval from "./Oval";
import Circle from "./Circle";

import { images, COLORS, SIZES, SHADOWS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import audio from "../data/audioData";

const Nav = ({ imgUrl }) => {
  const navigation = useNavigation();
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View>
        <Image
          source={imgUrl}
          resizeMode="cover"
          style={{ width: "100%", height: 380 }}
        />
        <Circle
          imgUrl={images.backButton}
          width={35}
          imgSize={25}
          position={"absolute"}
          top={-350}
          left={15}
          bgColor={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

const BottomButton = ({ onPress, title, i }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomWrapper}>
      <Oval
        onPress={onPress}
        title={title}
        width={120}
        bgColor={COLORS.primary}
      />

      <View style={styles.oval}>
        <MaterialIcons
          onPress={() => {
            navigation.navigate("AudioPlayer", {
              audioLesson: audio[i].source,
              title: audio[i].title,
            });
          }}
          name="play-circle-fill"
          size={50}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingVertical: SIZES.font,
  },
  oval: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.light,
  },
});
export { Nav, BottomButton };
