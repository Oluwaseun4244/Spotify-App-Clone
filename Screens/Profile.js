import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyAppText from "../Components/MyAppText";

export default function Profile({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  return (
    <View
      style={{
        marginTop: 30,
        flex: 1,
        backgroundColor: lightMode ? "white" : "#1c1b1b",
      }}
    >
      <View
        style={{
          height: 349,
          backgroundColor: lightMode ? "#fff" : "#1c1b1b",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          shadowColor: "#5f5c5c",
          shadowOffset: {
            width: 0,
            height: 15,
          },
          shadowOpacity:  0.24,
          shadowRadius: 16.41,
          elevation: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 40,
            marginTop: 50,
          }}
        >
          <View
            style={{
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
                style={{
                  color: lightMode ? "#97938a" : "#FFFFFF",
                  fontSize: 25,
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
              style={{
                color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
                fontSize: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/images/duck.png")} />
          <MyAppText
            styleProp={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontWeight: "400",
              fontSize: 14,
              marginTop: 15,
            }}
          >
            oxeeeee@mail.ru
          </MyAppText>
          <MyAppText
            styleProp={{
              color: lightMode ? "#000" : "#fff",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Oxee
          </MyAppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 50,
          }}
        >
          <View>
            <MyAppText
              styleProp={{
                color: lightMode ? "#000000" : "#fff",
                fontWeight: "600",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              778
            </MyAppText>
            <MyAppText
              styleProp={{
                color: lightMode
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
                fontWeight: "400",
                fontSize: 11,
              }}
            >
              Folowers
            </MyAppText>
          </View>
          <View>
            <MyAppText
              styleProp={{
                color: lightMode ? "#000000" : "#fff",
                fontWeight: "600",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              778
            </MyAppText>
            <MyAppText
              styleProp={{
                color: lightMode
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
                fontWeight: "400",
                fontSize: 11,
              }}
            >
              Folowing
            </MyAppText>
          </View>
        </View>
      </View>
      <MyAppText
        styleProp={{
          color: lightMode ? "#000000" : "#fff",
          fontWeight: "600",
          fontSize: 16,
          marginHorizontal: 20,
          marginTop: 39,
        }}
      >
        Public Playlists
      </MyAppText>
      <View
        style={{
          flex: 1,
          // justifyContent: "space-between",
          // flexWrap: "wrap",
          marginTop: 5,
          marginHorizontal: 20,
        }}
      >
        <ScrollView
          style={{
            display: "flex",
          }}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <View
              key={i}
              style={{
                height: 160,
                width: 160,
                borderRadius: 40,
                backgroundColor: "#FFFFFF",
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                padding: 13,
                flexWrap: "wrap",
                justifyContent: "space-between",
                shadowColor: lightMode
                  ? "#5f5c5c"
                  : "rgba(255, 255, 255, 0.05)",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity:  0.20,
                  shadowRadius: 5.62,
                  elevation: 7
              }}
            >
              <Image
                style={{ width: "50%", height: 63 }}
                source={require("../assets/images/song1.png")}
              />
              <Image
                style={{ width: "50%", height: 63 }}
                source={require("../assets/images/song2.png")}
              />
              <Image
                style={{ width: "50%", height: 63 }}
                source={require("../assets/images/song3.png")}
              />
              <Image
                style={{ width: "50%", height: 63 }}
                source={require("../assets/images/song4.png")}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
