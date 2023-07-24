import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useOrientation } from "../../../hooks/useOrientation";
import styles from "./RegistrationScreen.styles";
import { AuthBackground } from "../../../components/AuthBackground/AuthBackground";
import { ImagePickerElem } from "../../../components/ImagePicker/ImagePicker";
import { Input } from "../../../components/Input/Input";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { StyledButton } from "../../../components/StyledButton/StyledButton";

const initialUserData = {
  image: "",
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [userData, setUserData] = useState(initialUserData);
  let orientation = useOrientation();

  const handleBtnPress = () => {
    console.log(userData);
    navigation.navigate("Home");
  };

  return (
    <AuthBackground isKeyboardShown={isKeyboardShown}>
      <ScrollView
        contentContainerStyle={{
          ...styles.contentContainer,
          flex: orientation === "landscape" ? 0 : 1,
        }}
      >
        <View
          style={{
            ...styles.contentThumb,
            marginBottom: isKeyboardShown ? 100 : 0,
            height: orientation === "landscape" ? "90%" : "70%",
          }}
        >
          <ImagePickerElem setUserData={setUserData} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybordContainer}
          >
            <View style={styles.form}>
              <Text
                style={{
                  ...styles.pageHeader,
                  marginTop: orientation === "landscape" ? 112 : 92,
                }}
              >
                Регистрация
              </Text>
              <Input
                placeholder="Логин"
                setIsKeyboardShown={setIsKeyboardShown}
                value={userData}
                setUserData={setUserData}
              />
              <Input
                style={{ marginTop: 16 }}
                placeholder="Адрес электронной почты"
                setIsKeyboardShown={setIsKeyboardShown}
                value={userData}
                setUserData={setUserData}
              />
              <PasswordInput
                style={{ marginTop: 16 }}
                setIsKeyboardShown={setIsKeyboardShown}
                value={userData}
                setUserData={setUserData}
              />
              <StyledButton
                textContent={"Зарегистрироваться"}
                onPress={handleBtnPress}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </AuthBackground>
  );
};

export default RegistrationScreen;
