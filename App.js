import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Contents, Youtube, Quiz, QuizFinish, ElectDevAndCir,
  RadioAndAudFreq, RadioCom, SatTransAndReception, Television, } from "./screens";

export default function App() {
  const theme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) return null;

  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer theme={theme}>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Contents" component={Contents} />

        <Screen name="Youtube" component={Youtube} />

        <Screen name="Quiz" component={Quiz} />
        <Screen name="QuizFinish" component={QuizFinish} />

        <Screen name="ElectDevAndCir" component={ElectDevAndCir} />
        <Screen name="RadioCom" component={RadioCom} />
        <Screen name="RadioAndAudFreq" component={RadioAndAudFreq} />
        <Screen name="SatTransAndRecept" component={SatTransAndReception} />
        <Screen name="Television" component={Television} />
      </Navigator>
    </NavigationContainer>
  );
}
