import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useOrientation } from "../../hooks/useOrientation";

import { getCollectionLength } from "../../firebase/helpers";

import { Feather } from "@expo/vector-icons";
import styles from "./PostData.styles";

export const PostData = ({ item }) => {
  const [commentsLength, setCommentsLength] = useState(0);
  const navigation = useNavigation();
  let orientation = useOrientation();

  useEffect(() => {
    (async () => {
      await getCollectionLength(`posts/${item.id}/comments`, setCommentsLength);
    })();
  }, []);

  const handleComments = (data) => {
    navigation.navigate("Comments", data);
  };

  const handleLocation = (data) => {
    if (!data.latitude || !data.longitude) {
      return;
    }

    navigation.navigate("Location", data);
  };

  const handleLocationLength = (location) => {
    return location.length > 30 ? `${location.slice(0, 29)}...` : location;
  };

  const setCommentColor = () => (commentsLength > 0 ? "#FF6C00" : "#BDBDBD");

  return (
    <View style={styles.postContainer}>
      <Image
        style={{
          ...styles.postPhoto,
          height: orientation === "landscape" ? 300 : 240,
        }}
        source={{ uri: item.photo }}
      />
      <Text style={styles.postLabel}>{item.title}</Text>
      <View style={styles.postData}>
        <TouchableOpacity
          onPress={() =>
            handleComments({ postPhotoURL: item.photo, id: item.id })
          }
          style={styles.postComments}
        >
          <Feather
            name="message-circle"
            size={24}
            color={`${setCommentColor()}`}
          />
          <Text style={styles.commentsLabel}>{commentsLength}</Text>
        </TouchableOpacity>
        <View style={styles.postLocation}>
          <TouchableOpacity
            onPress={() => handleLocation(item.location)}
            style={styles.postComments}
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text style={styles.locationLabel}>
              {handleLocationLength(item.location.decoded)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
