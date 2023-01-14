import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MyAppText from "../Components/MyAppText";
import { useSelector } from "react-redux";

export default function RegisterOrSignIn({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  return (
    <View style={{ flex: 1, width: "100%", marginTop: 30 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={
          lightMode
            ? require("../assets/images/reg_or_signin_light.png")
            : require("../assets/images/reg_or_signin_dark.png")
        }
      >
        <View
          style={{
            position: "absolute",
            top: 320,
            marginHorizontal: 46,
            // backgroundColor: "green",
            width: "80%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MyAppText>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 24,
                color: lightMode ? "#232323" : "#fff",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              Enjoy Listening To Music
            </Text>
          </MyAppText>
          <View style={{ width: "95%" }}>
            <MyAppText>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  color: lightMode
                    ? "rgba(35, 35, 35, 0.5)"
                    : "rgba(255, 255, 255, 0.5)",
                  textAlign: "center",
                  // marginBottom: 30,
                }}
              >
                Spotify is a proprietary Swedish audio streaming and meda
                services provider
              </Text>
            </MyAppText>
          </View>
          <View style={{ flexDirection: "row", marginTop: 29 }}>
            <Button
              bgColor="#1ED760"
              title="Register"
              btnH={85}
              btnWidth={160}
              btnRadius={30}
              txtStyle={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "600",
              }}
              onPressProp={() => navigation.navigate("Register")}
            />
            <Button
              bgColor={lightMode ? "#fff" : "#1c1b1b"}
              title="Sign In"
              btnH={85}
              btnWidth={165}
              btnRadius={30}
              txtStyle={{
                color: lightMode ? "#232323" : "#fff",
                fontSize: 16,
                fontWeight: "600",
              }}
              onPressProp={() => navigation.navigate("SignIn")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const Button = ({
  onPressProp,
  title,
  bgColor,
  btnH,
  btnRadius,
  btnWidth,
  txtStyle,
}) => (
  <TouchableOpacity
    onPress={onPressProp}
    style={{
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: bgColor ? bgColor : "orange",
      height: btnH ? btnH : 40,
      borderRadius: btnRadius ? btnRadius : 20,
      width: btnWidth ? btnWidth : "100%",
      marginHorizontal: 8,
    }}
  >
    <MyAppText>
      <Text style={txtStyle}>{title}</Text>
    </MyAppText>
  </TouchableOpacity>
);
