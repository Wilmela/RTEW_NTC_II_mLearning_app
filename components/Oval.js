import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants";

const Oval = ({ title, onPress, width , bgColor, }) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: 50,
        backgroundColor: bgColor,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        ...SHADOWS.light,
        
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.bold,
          fontSize: SIZES.medium,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Oval;
