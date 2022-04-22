import { TouchableOpacity, Text } from "react-native";
import { SIZES , FONTS} from "../constants";
const TopicItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f1f5f8",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.base - 4,
        paddingVertical: SIZES.base -2,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const TopicText = ({ fontSub, children }) => (
  <Text
    style={{
      marginVertical: SIZES.base - 4,
      fontFamily: FONTS.semiBold,
      fontSize: !fontSub ? SIZES.medium : SIZES.medium - fontSub,
    }}
  >
    {children}
  </Text>
);
export  {TopicItem, TopicText};
