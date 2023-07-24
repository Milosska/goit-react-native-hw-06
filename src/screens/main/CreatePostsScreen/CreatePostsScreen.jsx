import { useState, useEffect } from "react";
import { ScrollView, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useOrientation } from "../../../hooks/useOrientation";

import * as Location from "expo-location";
import { fetchReverseGeocoding } from "../../../helpers/fetchGeocoding";

import { SimpleLineIcons } from "@expo/vector-icons";
import styles from "./CreatePostsScreen.styles";
import { StyledButton } from "../../../components/StyledButton/StyledButton";
import { CameraEl } from "../../../components/Camera/Camera";

const initialState = {
  title: "",
  location: "",
};

const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [data, setData] = useState(initialState);
  let orientation = useOrientation();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setCurrentLocation({ latitude, longitude });
    })();
  }, []);

  useEffect(() => {
    const handleGeocoding = async (data) => {
      const result = await fetchReverseGeocoding(data);
      setData((prevState) => ({
        ...prevState,
        location: { ...currentLocation, decoded: result },
      }));
    };

    if (currentLocation) {
      handleGeocoding(currentLocation);
    }
  }, [currentLocation]);

  const handleLocationChange = (e) => {
    setData((prev) => ({
      ...prev,
      location: { ...currentLocation, decoded: e },
    }));
  };

  const handleValidation = () => {
    if (!photo || !data.title || !data.location) {
      return false;
    }
    return true;
  };

  const handlePublish = async () => {
    const newPost = { ...data, photo: photo };

    if (!data.title.trim()) {
      return;
    }

    navigation.navigate("Публикации", newPost);
    setPhoto(null);
    setData(initialState);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        flex: orientation === "landscape" ? 0 : 1,
      }}
    >
      <CameraEl photo={photo} setPhoto={setPhoto} />
      <TextInput
        value={data.title}
        style={styles.input}
        placeholder="Название..."
        placeholderTextColor="#BDBDBD"
        onChangeText={(e) => setData((prev) => ({ ...prev, title: e }))}
      />
      <View style={styles.inputThumb}>
        <SimpleLineIcons
          name="location-pin"
          size={24}
          color="#E8E8E8"
          style={styles.locationIcon}
        />
        <TextInput
          value={data.location?.decoded}
          style={{ ...styles.input, paddingHorizontal: 36 }}
          placeholder="Местность..."
          placeholderTextColor="#BDBDBD"
          onChangeText={handleLocationChange}
        />
      </View>
      <StyledButton
        textContent="Опубликовать"
        disabled={handleValidation() ? false : true}
        onPress={handlePublish}
      />
    </ScrollView>
  );
};

export default CreatePostsScreen;
