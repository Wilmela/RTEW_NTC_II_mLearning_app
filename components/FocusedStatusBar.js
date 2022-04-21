import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = ({ props }) => {
  const isFocused = useIsFocused();
  return isFocused && ( <StatusBar barStyle="light-content" backgroundColor='transparent' animated={true} translucent={true} {...props} /> ) 
};

export default FocusedStatusBar;
