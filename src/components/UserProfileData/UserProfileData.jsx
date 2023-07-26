import styles from "./UserProfileData.styles";
import { View, Text, Image } from "react-native";

import { useOrientation } from "../../hooks/useOrientation";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

export const UserProfileData = () => {
  const { email, nickname, photoURL } = useSelector(selectUser);
  let orientation = useOrientation();

  return (
    <View
      style={{
        ...styles.userData,
        marginBottom: orientation === "landscape" ? 10 : 32,
      }}
    >
      {photoURL ? (
        <Image style={styles.imagePlaceholder} source={{ uri: photoURL }} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <View>
        <Text style={styles.username}>{nickname}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};
