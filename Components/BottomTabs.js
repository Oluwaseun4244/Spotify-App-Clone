import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SignIn from "../Screens/SignIn";
import Home from "../Screens/Home";
import Album from "../Screens/Album";
import Profile from "../Screens/Profile";
import Dummy from "../Screens/Dummy";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const lightMode = useSelector((state) => state.lightModeState);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 30;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Album") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Dummy") {
            iconName = focused ? "compass" : "compass";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor:  "#1ED760",
        tabBarInactiveTintColor: lightMode ? "gray" : "#fff",
        tabBarLabelStyle: { fontSize: 18, fontWeight: "400" },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        headerShadowVisible: false,
        tabBarStyle:{backgroundColor: lightMode ? "#e1e1e1" : "#343434"}
        
      })}
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Dummy" component={Dummy} />
      <Tab.Screen name="Album" component={Album} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="Settings" component={OnBoarding} /> */}
    </Tab.Navigator>
  );
}
