import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useOrientation } from "../../../../hooks/useOrientation";

import { getAllPosts } from "../../../../firebase/helpers";

import { Feather } from "@expo/vector-icons";
import { UserProfileData } from "../../../../components/UserProfileData/UserProfileData";
import styles from "./PostsScreen.styles";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  let orientation = useOrientation();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      await getAllPosts("posts", setPosts);
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

  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: orientation === "landscape" ? 10 : 32,
      }}
    >
      <UserProfileData />
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
