import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/auth/authOperations";

import { useOrientation } from "../../../hooks/useOrientation";
import styles from "./LoginScreen.styles";

import { AuthBackground } from "../../../components/AuthBackground/AuthBackground";
import { Input } from "../../../components/Input/Input";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { StyledButton } from "../../../components/StyledButton/StyledButton";

const LoginScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  let orientation = useOrientation();

  const handleBtnPress = () => {
    dispatch(userLogin(userData));
  };

  return (
    <AuthBackground isKeyboardShown={isKeyboardShown}>
      <View
        style={{
          ...styles.contentThumb,
          marginBottom: isKeyboardShown ? 80 : 0,
          height: orientation === "landscape" ? "90%" : "60%",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keybordContainer}
        >
          <View style={styles.form}>
            <Text
              style={{
                ...styles.pageHeader,
                marginBottom: orientation === "landscape" ? 20 : 32,
              }}
            >
              Sign In
            </Text>
            <Input
              placeholder="Email"
              setIsKeyboardShown={setIsKeyboardShown}
              value={userData}
              setUserData={setUserData}
            />
            <PasswordInput
              style={{
                marginTop: 16,
              }}
              setIsKeyboardShown={setIsKeyboardShown}
              value={userData}
              setUserData={setUserData}
            />
            <StyledButton textContent={"Sign in"} onPress={handleBtnPress} />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            <Text style={styles.linkText}>Have no account? Sign up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </AuthBackground>
  );
};

export default LoginScreen;
