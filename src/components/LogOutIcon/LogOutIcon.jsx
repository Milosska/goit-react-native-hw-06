import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const LogOutIcon = ({ customStyle }) => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate("Authorization");
  };

  return (
    <Pressable onPress={handleLogOut} style={{ ...customStyle }}>
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD"
        // style={{ ...customStyle }}
      />
    </Pressable>
  );
};
