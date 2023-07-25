import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Authorization from "../screens/Auth/Authorization/Authorization";
import Home from "../screens/main/Home/Home";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { userRefresh } from "../redux/auth/authOperations";

const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Authorization"
            component={Authorization}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
});

export default Main;
