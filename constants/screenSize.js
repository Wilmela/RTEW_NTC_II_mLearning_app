import { Dimensions } from "react-native";

export default {
  small: Dimensions.get("window").width < 600,
  big: Dimensions.get("window").width > 600,
};
