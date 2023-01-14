import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function MyAppText({ children, styleProp }) {
  const [loaded] = useFonts({
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={[styleProp, { fontFamily: "Poppins_Regular" }]}>{children}</Text>;
}
