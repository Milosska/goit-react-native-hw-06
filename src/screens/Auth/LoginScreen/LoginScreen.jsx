import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useOrientation } from "../../../hooks/useOrientation";
import styles from "./LoginScreen.styles";
import { AuthBackground } from "../../../components/AuthBackground/AuthBackground";
import { Input } from "../../../components/Input/Input";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { StyledButton } from "../../../components/StyledButton/StyledButton";

const LoginScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  let orientation = useOrientation();

  const handleBtnPress = () => {
    console.log(userData);
    navigation.navigate("Home");
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
              Войти
            </Text>
            <Input
              placeholder="Адрес электронной почты"
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
            <StyledButton textContent={"Войти"} onPress={handleBtnPress} />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            <Text style={styles.linkText}>
              Нет аккаунта? Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </AuthBackground>
  );
};

export default LoginScreen;
