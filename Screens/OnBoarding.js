import { View, Text, ImageBackground } from "react-native";
import React from "react";
import Button from "../Components/Button";
import ButtonComponent from "../Components/ButtonComponent";
import MyAppText from "../Components/MyAppText";

export default function OnBoarding({ navigation }) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/get_started_1.png")}
      >
        <View
          style={{ position: "absolute", bottom: 200, marginHorizontal: 46 }}
        >
          <MyAppText
            styleProp={{
              fontWeight: "600",
              fontSize: 20,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Text>Enjoy Listening To Music</Text>
          </MyAppText>
          <MyAppText styleProp={{
                fontWeight: "500",
                fontSize: 15,
                color: "rgba(255, 255, 255, 0.5)",
                textAlign: "center",
                marginTop: 25,
                lineHeight: 22,
              }} >
            <Text
            
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </MyAppText>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            padding: 20,
          }}
        >
          <ButtonComponent
            onPressProp={() => navigation.navigate("ChooseMode")}
            bgColor="#1ed760"
            btnH={70}
            txtStyle={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "500",
            }}
            title="Get Started"
          />
        </View>
        {/* <Button
          onPressProp={()=>navigation.navigate("ChooseMode")}
          bgColor="#1ed760"
          btnH={70}
          title="Get Started"
          txtStyle={{
            color: "#fff",
            fontSize: 24,
            fontWeight: "500",
          }}
        /> */}
      </ImageBackground>
    </View>
  );
}
