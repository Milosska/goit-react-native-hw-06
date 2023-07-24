import { useState } from "react";
import { View, TextInput } from "react-native";
import { useOrientation } from "../../hooks/useOrientation";
import styles from "./Input.styles";

export const Input = ({
  placeholder,
  style,
  secureTextEntry,
  setIsKeyboardShown,
  value,
  setUserData,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const DataName = placeholder === "Логин" ? "login" : "email";
  let orientation = useOrientation();

  return (
    <View style={style}>
      <TextInput
        value={value[DataName]}
        style={{
          ...styles.input,
          borderColor: isFocus ? "#FF6C00" : "#E8E8E8",
          padding: orientation === "landscape" ? 8 : 16,
        }}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setIsFocus(true);
          setIsKeyboardShown(true);
        }}
        onBlur={() => {
          setIsFocus(false);
          setIsKeyboardShown(false);
        }}
        onChangeText={(value) => {
          setUserData((prev) => ({
            ...prev,
            [DataName]: value,
          }));
        }}
      />
    </View>
  );
};
