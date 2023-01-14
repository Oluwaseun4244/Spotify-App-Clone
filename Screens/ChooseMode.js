import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "../Components/Button";
import MyAppText from "../Components/MyAppText";
import { useSelector, useDispatch } from "react-redux";
import { lightModeAction } from "../Redux/actions/actions";

export default function ChooseMode({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/ChooseMode.png")}
      >
        <View
          style={{
            position: "absolute",
            bottom: 140,
            marginHorizontal: 46,
            // backgroundColor: "green",
            width: "80%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MyAppText
            styleProp={{
              fontWeight: "600",
              fontSize: 24,
              color: "#fff",
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <Text>Choose Mode</Text>
          </MyAppText>
          <View
            style={{
              height: 120,
              position: "relative",
              width: "80%",
              marginHorizontal: 30,
            }}
          >
            <View
              style={{
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                left: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => dispatch(lightModeAction("light"))}
              >
                {lightMode ? (
                  <Image
                    source={require("../assets/images/light-chosen.png")}
                    // style={{ marginBottom: 8 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/images/light_switch.png")}
                  />
                )}
              </TouchableOpacity>

              <MyAppText
                styleProp={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontWeight: "400",
                  fontSize: 15,
                  marginTop: 7,
                }}
              >
                Light
              </MyAppText>
            </View>
            <View
              style={{
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                right: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => dispatch(lightModeAction("dark"))}
              >
                {lightMode ? (
                  <Image source={require("../assets/images/dark_switch.png")} />
                ) : (
                  <Image source={require("../assets/images/dark-chosen.png")} />
                )}
              </TouchableOpacity>

              <MyAppText
                styleProp={{
                  color: "rgba(255, 255, 255, 0.5)",
                  fontWeight: "400",
                  fontSize: 15,
                  marginTop: 7,
                }}
              >
                Dark
              </MyAppText>
            </View>
          </View>
        </View>

        <Button
          bgColor="#1ed760"
          btnH={70}
          title="Continue"
          txtStyle={{
            color: "#fff",
            fontSize: 24,
            fontWeight: "500",
          }}
          onPressProp={() => navigation.navigate("RegOrSignIn")}
        />
      </ImageBackground>
    </View>
  );
}
