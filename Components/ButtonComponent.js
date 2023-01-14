import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MyAppText from "./MyAppText";

export default function ButtonComponent({
  title,
  onPressProp,
  bgColor,
  btnH,
  txtStyle,
  btnRadius,
  btnW,
}) {
  return (
    <TouchableOpacity
      onPress={onPressProp}
      style={[
        styles.btn,
        {
          backgroundColor: bgColor ? bgColor : "orange",
          height: btnH ? btnH : 40,
          borderRadius: btnRadius ? btnRadius : 20,
          width: btnW ? btnW : "100%",
        },
      ]}
    >
      <MyAppText>
        <Text style={txtStyle}>{title}</Text>
      </MyAppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "teal",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
