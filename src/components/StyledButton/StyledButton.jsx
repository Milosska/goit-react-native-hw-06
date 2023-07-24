import { TouchableOpacity, Text } from "react-native";
import styles from "./StyledButton.styles";

export const StyledButton = ({ textContent, onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        backgroundColor: disabled ? "#F6F6F6" : "#FF6C00",
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...styles.text, color: disabled ? "#BDBDBD" : "#ffffff" }}>
        {textContent}
      </Text>
    </TouchableOpacity>
  );
};
