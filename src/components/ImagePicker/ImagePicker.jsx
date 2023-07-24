import { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./ImagePicker.styles";

export const ImagePickerElem = ({ setUserData }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    if (image) {
      setImage(null);
      setUserData((prev) => ({ ...prev, image: null }));
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newImage = result.assets[0].uri;
      setImage(newImage);
      setUserData((prev) => ({ ...prev, image: newImage }));
    }
  };

  return (
    <View style={styles.photoContainer}>
      <View style={styles.imageThumb}>
        {image && <Image source={{ uri: image }} style={styles.imagePhoto} />}
        <TouchableOpacity
          style={styles.imageBtn}
          onPress={pickImage}
          activeOpacity={0.7}
        >
          {image ? (
            <AntDesign
              name="pluscircleo"
              size={30}
              color="#E8E8E8"
              style={{ transform: [{ rotate: "45deg" }] }}
            />
          ) : (
            <AntDesign name="pluscircleo" size={30} color="#FF6C00" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
