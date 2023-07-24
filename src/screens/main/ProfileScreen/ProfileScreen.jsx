import { View, Text, ImageBackground, ScrollView } from "react-native";
import { useOrientation } from "../../../hooks/useOrientation";
import { indicateBgImage } from "../../../helpers/indicateBgImage/indicateBgImage";
import { ImagePickerElem } from "../../../components/ImagePicker/ImagePicker";
import { LogOutIcon } from "../../../components/LogOutIcon/LogOutIcon";
import styles from "./ProfileScreen.styles";

const Profile = () => {
  const bgImage = indicateBgImage();
  let orientation = useOrientation();

  const handleLogOut = () => {
    navigation.navigate("Authorization");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={bgImage}
        resizeMode="cover"
      >
        <ScrollView
          contentContainerStyle={{
            ...styles.contentContainer,
            flex: orientation === "landscape" ? 0 : 1,
          }}
        >
          <View
            style={{
              ...styles.contentThumb,
              height: orientation === "landscape" ? "90%" : "80%",
            }}
          >
            <ImagePickerElem />
            <LogOutIcon customStyle={styles.logOut} />
            <Text style={styles.pageHeader}>Username</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
