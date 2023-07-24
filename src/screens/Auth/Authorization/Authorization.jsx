import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../RegistrationScreen/RegistrationScreen";
import LoginScreen from "../LoginScreen/LoginScreen";

const Authorization = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default Authorization;
