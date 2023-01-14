import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyAppText from "../Components/MyAppText";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  const [chosenTab, setChosenTab] = useState("News");

  // const [loaded] = useFonts({
  //     Eczar_Medium: require('../assets/fonts/Eczar-Medium.ttf'),
  //   });

  //   if (!loaded) {
  //     return null;
  //   }

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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 55,
          marginHorizontal: 30,
          // position: "relative",
        }}
      >
        <TouchableOpacity
          style={{
            // position: "absolute",
            // left: 20,
            // color: "rgba(0, 0, 0, 0.5)",
            height: 35,
            width: 35,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="search-outline"
            size={30}
            style={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontSize: 32,
            }}
          />
        </TouchableOpacity>

        <Image
          source={require("../assets/images/Spotify_logo_with_text.png")}
        />

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
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontSize: 32,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "relative",
        }}
      >
        <View
          style={{
            backgroundColor: "#1ed760",
            height: 140,
            borderRadius: 30,
            marginHorizontal: 20,
            padding: 20,
            marginTop: 26,
            // position: "relative",
          }}
        >
          <View style={{ width: 111 }}>
            <MyAppText>
              <Text style={{ color: "#fff", fontWeight: "400", fontSize: 10 }}>
                New Album
              </Text>
            </MyAppText>
            <MyAppText>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 20,
                  marginVertical: 6,
                }}
              >
                Where Are You
              </Text>
            </MyAppText>
            <MyAppText>
              <Text style={{ color: "#fff", fontWeight: "400", fontSize: 10 }}>
                Ollane, Miyagi & Andy Panda
              </Text>
            </MyAppText>
          </View>
        </View>
        <View style={{ position: "absolute", right: 50, top: 4 }}>
          <Image source={require("../assets/images/two-heads.png")} />
        </View>
      </View>
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["News", "Video", "Artists", "Podcast", "Podcast II"].map(
            (item, i) => (
              <View
                key={i}
                style={{
                  marginRight: 20,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => setChosenTab(item)}>
                  <MyAppText>
                    <Text
                      key={i}
                      style={{
                        color:
                          item == chosenTab && lightMode
                            ? "#232323"
                            : item !== chosenTab && lightMode
                            ? "rgba(0, 0, 0, 0.5)"
                            : item == chosenTab && !lightMode
                            ? "#fff"
                            : "rgba(255, 255, 255, 0.5)",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      {item}
                    </Text>
                  </MyAppText>
                </TouchableOpacity>
                {item == chosenTab ? (
                  <View
                    style={{
                      borderColor: "#1ed760",
                      borderWidth: 2.5,
                      width: 30,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                    }}
                  ></View>
                ) : (
                  <></>
                )}
              </View>
            )
          )}
        </ScrollView>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: 20, marginTop: 30 }}
        >
          {[
            require("../assets/images/img1.png"),
            require("../assets/images/img2.png"),
            require("../assets/images/img1.png"),
            require("../assets/images/img2.png"),
          ].map((item, i) => (
            <TouchableOpacity key={i}>
              <View style={{ marginRight: 28 }}>
                <Image source={item} />
                <View style={{ marginTop: 10 }}>
                  <MyAppText>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 18,
                        color: lightMode ? "#232323" : "#fff",
                      }}
                    >
                      Life Goes On
                    </Text>
                  </MyAppText>
                  <MyAppText>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 15,
                        color: lightMode
                          ? "rgba(0, 0, 0, 0.5)"
                          : "rgba(255, 255, 255, 0.5)",
                        marginTop: 5,
                      }}
                    >
                      Oliver Tree
                    </Text>
                  </MyAppText>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 35, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <MyAppText>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 20,
                color: lightMode ? "#232323" : "#fff",
              }}
            >
              Playlist
            </Text>
          </MyAppText>
          <MyAppText>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                color: lightMode
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
              }}
            >
              See More
            </Text>
          </MyAppText>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 12 }}
        >
          {[1, 2, 3, 4, 5].map((item, i) => (
            <View
              key={i}
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
                  <MyAppText>
                    <Text
                      style={{
                        color: lightMode ? "#232323" : "#fff",
                        fontWeight: "500",
                        fontSize: 12,
                      }}
                    >
                      Kavkaz Style
                    </Text>
                  </MyAppText>
                  <MyAppText>
                    <Text
                      style={{
                        color: lightMode
                          ? "rgba(0, 0, 0, 0.5)"
                          : "rgba(255, 255, 255, 0.5)",
                        fontWeight: "500",
                        fontSize: 10,
                      }}
                    >
                      Kyang
                    </Text>
                  </MyAppText>
                </View>
              </View>
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
                  2:34
                </Text>
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
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
