import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyAppText from "../Components/MyAppText";
import { useSelector } from "react-redux";

export default function Player({ navigation }) {
  const lightMode = useSelector((state) => state.lightModeState);
  const [playMode, setPlayMode] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        backgroundColor: lightMode ? "#fff" : "#1c1b1b",
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
                color: lightMode ? "#97938a" : "rgba(255, 255, 255, 0.5)",
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
      <View
        style={{
          height: 335,
          marginTop: 40,
          marginHorizontal: 20,
          borderRadius: 40,
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/images/cover.png")} />
      </View>

      <View
        style={{
          marginHorizontal: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 13,
        }}
      >
        <View>
          <MyAppText
            styleProp={{
              fontSize: 20,
              fontWeight: "600",
              color: lightMode ? "#000000" : "#fff",
            }}
          >
            <Text>Bad Guy</Text>
          </MyAppText>
          <MyAppText
            styleProp={{
              fontSize: 14,
              fontWeight: "14",
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Text>Billie Eilish</Text>
          </MyAppText>
        </View>
        <Ionicons
          name="heart"
          style={{
            color: lightMode ? "#FF0000" : "#8D8D8D",
            fontSize: 25,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 30,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MyAppText
          styleProp={{
            fontSize: 12,
            fontWeight: "500",
            color: lightMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Text>2:24</Text>
        </MyAppText>
        <MyAppText
          styleProp={{
            fontSize: 12,
            fontWeight: "500",
            color: lightMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Text>4:24</Text>
        </MyAppText>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 40,
          marginTop: 35,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="repeat-outline"
          style={{
            color: lightMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
            fontSize: 30,
          }}
        />
        <Ionicons
          name="play-skip-back-sharp"
          style={{
            color: lightMode ? "#2D2D2D" : "#EEEEEE",
            fontSize: 30,
          }}
        />

        <TouchableOpacity
          style={{
            height: 70,
            width: 70,
            backgroundColor: "#1ed760",
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setPlayMode(!playMode)}
        >
          {playMode ? (
            <View>
              <Ionicons
                name="pause-sharp"
                size={30}
                style={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            </View>
          ) : (
            <View>
              <Ionicons
                name="play-sharp"
                size={30}
                style={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            </View>
          )}
        </TouchableOpacity>
        <Ionicons
          name="play-skip-forward-sharp"
          style={{
            color: lightMode ? "#2D2D2D" : "#EEEEEE",
            fontSize: 30,
          }}
        />

        <Ionicons
          name="shuffle-sharp"
          style={{
            color: lightMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
            fontSize: 30,
          }}
        />
      </View>

      <Pressable onPress={() => setModalVisible(true)}>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Ionicons
            name="chevron-up-outline"
            style={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontSize: 30,
            }}
          />
          <MyAppText
            styleProp={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Text>Lyrics</Text>
          </MyAppText>
        </View>
      </Pressable>

      <LyricsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        lightMode={lightMode}
        playMode={playMode}
        setPlayMode={setPlayMode}
      />
    </View>
  );
}

const LyricsModal = ({
  modalVisible,
  setModalVisible,
  lightMode,
  playMode,
  setPlayMode,
}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    style={{ flex: 1 }}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
     
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 40,
            marginTop: 40,
          }}
        >
          <View
            style={{
              backgroundColor: "#393939",
              height: 35,
              width: 35,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons
                name="chevron-back-outline"
                style={{
                  color: "#97938a",
                  fontSize: 25,
                }}
              />
            </TouchableOpacity>
          </View>
          <MyAppText
            styleProp={{ fontWeight: "700", fontSize: 15, color: "#fff" }}
          >
            Bad Guy
          </MyAppText>
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
        <ImageBackground source={require("../assets/images/album-bg.png")}>
        <View style={{ marginHorizontal: 20, marginTop: 24 }}>
          <MyAppText
            styleProp={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14 }}
          >
            Verse 1
          </MyAppText>
          <MyAppText
            styleProp={{
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: "600",
              fontSize: 14,
              marginHorizontal: 30,
              lineHeight: 35,
              
            }}
          >
            White shirt now red, my bloody nose Sleepin', you're on your tippy
            toes Creepin' around like no one knows Think you're so criminal
            Bruises on both my knees for you Don't say thank you or please I do
            what I want when I'm wanting to
          </MyAppText>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
          >
            <Ionicons
              name="return-down-forward-outline"
              style={{
                color: "#1ED760",
                fontSize: 20,
              }}
            />

            <MyAppText
              styleProp={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "400",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              My soul? So cynical
            </MyAppText>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 24 }}>
          <MyAppText
            styleProp={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14 }}
          >
            Verse 2
          </MyAppText>
          <MyAppText
            styleProp={{
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: "600",
              fontSize: 14,
              marginHorizontal: 30,
              lineHeight: 35,
            }}
          >
            So you're a tough guy Like it really rough guy Just can't get enough
            guy Chest always so puffed guy I'm that bad type
          </MyAppText>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: lightMode ? "#fff" : "#1c1b1b",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 180,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 10,
            // backgroundColor: "teal"
          }}
        >
          <Image source={require("../assets/images/round.png")} />

          <View style={{ marginLeft: 10 }}>
            <MyAppText
              styleProp={{
                fontSize: 20,
                fontWeight: "600",
                color: lightMode ? "#000000" : "#fff",
              }}
            >
              Bad Guy
            </MyAppText>
            <MyAppText
              styleProp={{
                fontSize: 14,
                fontWeight: "14",
                color: lightMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)",
              }}
            >
              Billie Eilish
            </MyAppText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Ionicons
            name="repeat-outline"
            style={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontSize: 30,
            }}
          />
          <Ionicons
            name="play-skip-back-sharp"
            style={{
              color: lightMode ? "#2D2D2D" : "#fff",
              fontSize: 30,
            }}
          />

          <TouchableOpacity
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#1ed760",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setPlayMode(!playMode)}
          >
            {playMode ? (
              <View>
                <Ionicons
                  name="pause-sharp"
                  size={30}
                  style={{
                    color: "#fff",
                    fontSize: 40,
                  }}
                />
              </View>
            ) : (
              <View>
                <Ionicons
                  name="play-sharp"
                  size={30}
                  style={{
                    color: "#fff",
                    fontSize: 40,
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
          <Ionicons
            name="play-skip-forward-sharp"
            style={{
              color: lightMode ? "#2D2D2D" : "#fff",
              fontSize: 30,
            }}
          />

          <Ionicons
            name="shuffle-sharp"
            style={{
              color: lightMode
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
              fontSize: 30,
            }}
          />
        </View>
      </View>
    </View>
  </Modal>
);
