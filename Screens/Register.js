import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonComponent from "../Components/ButtonComponent";
import MyAppText from "../Components/MyAppText";
import { useSelector } from "react-redux";

export default function Register({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: lightMode ? "#fff" : "#1c1b1b",
        marginTop: 30,
      }}
    >
      <View
        style={{
          //   flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 55,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 20,
            backgroundColor: lightMode ? "#f0efef" : "#232222",
            height: 35,
            width: 35,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              style={{ color: lightMode ? "black" : "#fff" }}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/Spotify_logo_with_text.png")}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 18,
          width: "100%",
          paddingHorizontal: 20,
          //   marginHorizontal: 20,
        }}
      >
        <MyAppText>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "600",
              color: lightMode ? "#232323" : "#fff",
            }}
          >
            Register
          </Text>
        </MyAppText>
        <MyAppText>
          <Text style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: lightMode
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
              }}
            >
              If you need any support
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#00FF38",
                //  paddingLeft:10
              }}
            >
              {" "}
              Click Here
            </Text>
          </Text>
        </MyAppText>
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            borderColor: "#B4B1B1",
            borderRadius: 20,
            width: "100%",
            marginTop: 38,
            paddingLeft: 28,
          }}
          placeholderTextColor={
            lightMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"
          }
          placeholder="Full Name"
        />
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            borderColor: "#B4B1B1",
            borderRadius: 20,
            width: "100%",
            marginTop: 10,
            paddingLeft: 28,
          }}
          placeholderTextColor={
            lightMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"
          }
          placeholder="Enter Email"
        />
        <TextInput
          style={{
            height: 60,
            borderWidth: 1,
            borderColor: "#B4B1B1",
            borderRadius: 20,
            width: "100%",
            marginTop: 10,
            paddingLeft: 28,
          }}
          placeholderTextColor={
            lightMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"
          }
          placeholder="Enter Username"
        />
        <View style={{ width: "100%" }}>
          <TextInput
            style={{
              height: 60,
              borderWidth: 1,
              borderColor: "#B4B1B1",
              borderRadius: 20,
              width: "100%",
              marginTop: 10,
              paddingLeft: 28,
            }}
            secureTextEntry={passwordVisibility}
            placeholderTextColor={
              lightMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"
            }
            placeholder="Password"
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 30,
              top: 25,
            }}
            onPress={() => setPasswordVisibility(!passwordVisibility)}
          >
            {passwordVisibility ? (
              <Ionicons
                name="eye-outline"
                size={24}
                style={{
                  color: "#B4B1B1",
                }}
              />
            ) : (
              <Ionicons
                name="eye-off-outline"
                size={24}
                style={{
                  color: "#B4B1B1",
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          marginTop: 18,
          // backgroundColor: "red"
        }}
      >
        <ButtonComponent
          btnH={80}
          bgColor="#1ED760"
          title="Create Account"
          txtStyle={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 18,
        }}
      >
        {lightMode ? (
          <Image source={require("../assets/images/line1.png")} />
        ) : (
          <Image source={require("../assets/images/line1Dark.png")} />
        )}
        <MyAppText>
          <Text
            style={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Or
          </Text>
        </MyAppText>
        {lightMode ? (
          <Image source={require("../assets/images/line2.png")} />
        ) : (
          <Image source={require("../assets/images/line2Dark.png")} />
        )}
      </View>
      <View
        style={{
          //   paddingHorizontal: 150,
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "space-between",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ marginRight: 25 }}
            source={require("../assets/images/googleLogo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          {lightMode ? (
            <Image
              style={{ marginLeft: 25 }}
              source={require(`../assets/images/appleLogo.png`)}
            />
          ) : (
            <Image
              style={{ marginLeft: 25 }}
              source={require(`../assets/images/appleLogoWhite.png`)}
            />
          )}
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: "center", marginTop: 27 }}>
        <MyAppText>
          <Text
            style={{
              color: lightMode ? "#232323" : "#fff",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            Do You Have An Account?
          </Text>
        </MyAppText>
        <MyAppText>
          <Text
            onPress={() => navigation.navigate("SignIn")}
            style={{ color: "#1ED760", fontWeight: "500", fontSize: 14 }}
          >
            {" "}
            Sign In
          </Text>
        </MyAppText>
      </Text>
    </View>
  );
}
