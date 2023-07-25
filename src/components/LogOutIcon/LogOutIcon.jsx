import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/auth/authOperations";

export const LogOutIcon = ({ customStyle }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogout());
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
