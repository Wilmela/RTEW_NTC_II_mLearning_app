import { TouchableOpacity } from "react-native";
import { SIZES } from "../constants";
const TopicItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f1f5f8",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingVertical: SIZES.base,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default TopicItem;
