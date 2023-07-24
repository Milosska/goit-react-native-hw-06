import "react-native-gesture-handler";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Authorization from "./src/screens/Auth/Authorization/Authorization";
import Home from "./src/screens/main/Home/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  // For fonts instalation
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  // End of Fonts instalation

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
});
