import { View, Text, Image, TouchableOpacity } from "react-native";
import { SIZES } from "../constants";

const Circle = ({ imgUrl, width, imgSize, position, top, left, bgColor, onPress, }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ width: width, height: width, borderRadius: 50,
          overflow: "hidden", marginBottom: SIZES.small, position: position,
          top: top, left: left, backgroundColor: bgColor, justifyContent:'center', zIndex:10,
          alignItems:'center' }}
          onPress={onPress}
      >
        <Image source={imgUrl} resizeMode="cover" style={{
            width: imgSize, height: imgSize, justifyContent: "center",
            alignItems: "center", }} />
      </TouchableOpacity>
    </View>
  );
};

export default Circle;
