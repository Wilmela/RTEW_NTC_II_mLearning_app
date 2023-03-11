import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { Circle, FocusedStatusBar } from "../components";
import { useKeepAwake } from "expo-keep-awake";
import { COLORS, FONTS, images } from "../constants";
import Constants from "expo-constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AudioPlayer = ({ route }) => {
  useKeepAwake();

  const navigation = useNavigation();
  const { audioLesson, title } = route.params || "";

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function load() {}
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audioLesson); // Load Sound
    setSound(sound);
    //Sound playing
    setIsPlaying(true);
    !isPlaying ? await sound.playAsync() : await sound.pauseAsync();

    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined; //Unloading sound
  }, [sound, audioLesson, title]);

  const gotoPlayList = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={styles.container}>
        <View style={{ width:'100%' }}>
          <Circle
            imgUrl={images.backButton}
            width={35}
            imgSize={25}
            position={"absolute"}
            top={15}
            left={20}
            bgColor={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ImageBackground
          style={styles.cover}
          source={require("../assets/download.png")}
        >
          <Text style={styles.title}>{title}</Text>
          {audioLesson ? (
            <View>
              <Ionicons
                style={styles.icons}
                name={!isPlaying ? "play" : "pause"}
                size={screenWidth > 350 ? 30 : 20}
                color="#fff"
                onPress={playSound}
              />
            </View>
          ) : (
            Alert.alert("Stop!", "Load up an audio file from the playlist", [
              { text: "okay", style: "destructive", onPress: gotoPlayList },
            ])
          )}
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingTop: Constants.statusBarHeight,
    position: "relative",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: screenWidth > 350 ? 20 : 19,
    marginTop: 80,
    color: "#fff",
    paddingHorizontal: screenWidth > 350 ? 5 : 0,
  },
  cover: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    aspectRatio: 1,
  },
  icons: {
    backgroundColor: "#777",
    padding: 20,
    borderRadius: 5,
    position: "relative",
    top: screenHeight > 600 ? 260 : 100,
  },
});
export default AudioPlayer;
