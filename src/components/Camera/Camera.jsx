import { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./Camera.styled";

export const CameraEl = ({ photo, setPhoto }) => {
  const [status, requestPermission] = Camera.useCameraPermissions();
  const camera = useRef(null);

  useEffect(() => {
    if (!status || !status.granted) {
      requestPermission();
    }
  }, []);

  const takePhoto = async () => {
    const snap = await camera.current.takePictureAsync();
    setPhoto(snap.uri);
  };

  const removePhoto = async () => {
    setPhoto(null);
  };

  return (
    <>
      <View style={styles.cameraThumb}>
        {photo ? (
          <ImageBackground
            style={styles.camera}
            source={{
              uri: `${photo}`,
            }}
          >
            <TouchableOpacity style={styles.cameraBnt} onPress={removePhoto}>
              <MaterialCommunityIcons
                name="camera-off"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <Camera style={styles.camera} ref={camera}>
            <TouchableOpacity style={styles.cameraBnt} onPress={takePhoto}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
        )}
      </View>
      <Text style={styles.cameraText}>
        {photo ? "Редактировать фото" : "Загрузите фото"}
      </Text>
    </>
  );
};
