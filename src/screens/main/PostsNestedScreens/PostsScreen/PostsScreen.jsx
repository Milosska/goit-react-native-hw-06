import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useOrientation } from "../../../../hooks/useOrientation";

import { Feather } from "@expo/vector-icons";
import styles from "./PostsScreen.styles";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  let orientation = useOrientation();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) =>
        prevState.includes(route.params)
          ? prevState
          : [...prevState, route.params]
      );
    }
  }, [route.params]);

  const handleComments = (data) => {
    navigation.navigate("Комментарии", data);
  };

  const handleLocation = (data) => {
    if (!data.latitude || !data.longitude) {
      return;
    }

    navigation.navigate("Локация", data);
  };

  const handleLocationLength = (location) => {
    return location.length > 30 ? `${location.slice(0, 29)}...` : location;
  };

  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: orientation === "landscape" ? 10 : 32,
      }}
    >
      <View
        style={{
          ...styles.userData,
          marginBottom: orientation === "landscape" ? 10 : 32,
        }}
      >
        <View style={styles.imagePlaceholder} />
        <View>
          <Text style={styles.username}>User Name</Text>
          <Text style={styles.email}>email@mail.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => (
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
                onPress={() => handleComments(item.photo)}
                style={styles.postComments}
              >
                <Feather name="message-circle" size={24} color="#BDBDBD" />
                <Text style={styles.commentsLabel}>0</Text>
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
        )}
      />
    </View>
  );
};

export default PostsScreen;
