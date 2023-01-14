import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import About from "./Screens/About";
import OnBoarding from "./Screens/OnBoarding";
import ChooseMode from "./Screens/ChooseMode";
import RegisterOrSignIn from "./Screens/RegisterOrSignIn";
import SignIn from "./Screens/SignIn";
import Register from "./Screens/Register";
import BottomTabs from "./Components/BottomTabs";
import Player from "./Screens/Player";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onBoarding" screenOptions={{}}>
          <Stack.Screen
            name="onBoarding"
            component={OnBoarding}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="Home2"
            component={BottomTabs}
            options={{ title: "Welcome", headerShown: false }}
          />

          <Stack.Screen
            name="ChooseMode"
            component={ChooseMode}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="RegOrSignIn"
            component={RegisterOrSignIn}
            options={{ title: "Welcome", headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Welcome", headerShown: false }}
          />
          <Stack.Screen
            name="Player"
            component={Player}
            options={{ title: "Welcome", headerShown: false }}
          />

          {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome", headerShown: false }}
        /> */}
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
