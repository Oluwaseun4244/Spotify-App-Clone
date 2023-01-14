import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyAppText from "../Components/MyAppText";
import { useSelector } from "react-redux";

export default function Album({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  return (
    <View
      style={{
        marginTop: 30,
        flex: 1,
        backgroundColor: lightMode ? "#fff" : "#1c1b1b",
      }}
    >
      <View style={{ height: 248, position: "relative", width: "100%" }}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../assets/images/img3.png")}
        ></ImageBackground>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 30,
            position: "absolute",
            top: 60,
            width: "85%",
          }}
        >
          <View
            style={{
              backgroundColor: lightMode ? "#736a5c" : "#232222",
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
                size={30}
                style={{
                  color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                  fontSize: 32,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 35,
              width: 35,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ellipsis-vertical"
              size={30}
              style={{
                color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                fontSize: 32,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 80,
          marginTop: 10,
        }}
      >
        <MyAppText
          styleProp={{
            fontSize: 20,
            fontWeight: "600",
            color: lightMode ? "#000000" : "#fff",
          }}
        >
          <Text>Billie Eilish</Text>
        </MyAppText>
        <MyAppText
          styleProp={{
            fontSize: 14,
            fontWeight: "500",
            color: lightMode
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(255, 255, 255, 0.7)",
            marginTop: 5,
          }}
        >
          <Text>2 Album, 67 Single Music</Text>
        </MyAppText>
        <MyAppText
          styleProp={{
            fontSize: 12,
            fontWeight: "500",
            color: lightMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
            textAlign: "center",
            marginTop: 5,
            lineHeight: 18,
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </MyAppText>
      </View>
      <View style={{ marginTop: 26, marginHorizontal: 20 }}>
        <MyAppText
          styleProp={{
            fontSize: 20,
            fontWeight: "600",
            color: lightMode ? "#232323" : "#fff",
          }}
        >
          <Text>Albums</Text>
        </MyAppText>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {[
            require("../assets/images/album1.png"),
            require("../assets/images/album2.png"),
            require("../assets/images/album3.png"),
            require("../assets/images/album1.png"),
          ].map((item, i) => (
            <View key={i} style={{ marginTop: 25, marginRight: 20 }}>
              <Image source={item} />
              <MyAppText
                styleProp={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: lightMode ? "#000000" : "#fff",
                  marginTop: 5,
                }}
              >
                <Text>Don't Smile At Me</Text>
              </MyAppText>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: 30, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <MyAppText
            styleProp={{
              fontWeight: "500",
              fontSize: 20,
              color: lightMode ? "#232323" : "#fff",
            }}
          >
            <Text>Songs</Text>
          </MyAppText>
          <MyAppText
            styleProp={{
              fontWeight: "400",
              fontSize: 12,
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Text>See More</Text>
          </MyAppText>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 12, marginBottom: 20 }}
        >
          {[1, 2, 3, 4, 5].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate("Player")}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginVertical: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "#e9e9e9",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: 30,
                      marginRight: 10,
                    }}
                  >
                    <Ionicons
                      name="play"
                      style={{
                        color: lightMode ? "#232323" : "rgba(0, 0, 0, 0.5)",
                        fontSize: 22,
                      }}
                    />
                  </View>
                  <View
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <MyAppText
                      styleProp={{
                        color: lightMode ? "#232323" : "#fff",
                        fontWeight: "500",
                        fontSize: 12,
                      }}
                    >
                      <Text>Kavkaz Style</Text>
                    </MyAppText>
                    <MyAppText
                      styleProp={{
                        color: lightMode
                          ? "rgba(0, 0, 0, 0.5)"
                          : "rgba(255, 255, 255, 0.5)",
                        fontWeight: "500",
                        fontSize: 10,
                      }}
                    >
                      <Text>Kyang</Text>
                    </MyAppText>
                  </View>
                </View>
                <MyAppText
                  styleProp={{
                    color: lightMode
                      ? "rgba(0, 0, 0, 0.5)"
                      : "rgba(255, 255, 255, 0.5)",
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  <Text>2:34</Text>
                </MyAppText>
                <Ionicons
                  name="heart"
                  style={{
                    color: lightMode
                      ? "rgba(0, 0, 0, 0.5)"
                      : "rgba(255, 255, 255, 0.5)",
                    fontSize: 25,
                    marginRight: 17,
                  }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
