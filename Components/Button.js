import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MyAppText from "./MyAppText";

export default function Button({
  title,
  onPressProp,
  bgColor,
  btnH,
  txtStyle,
  btnRadius,
}) {
  return (
    <View style={styles.btn_containter}>
      <TouchableOpacity
        onPress={onPressProp}
        style={[
          styles.btn,
          {
            backgroundColor: bgColor ? bgColor : "orange",
            height: btnH ? btnH : 40,
            borderRadius: btnRadius ? btnRadius : 20,
          },
        ]}
      >
        <MyAppText>
          <Text style={txtStyle}>{title}</Text>
        </MyAppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn_containter: {
    width: "100%",
    padding: 20,
    position: "absolute",
    bottom: 20,
  },
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
