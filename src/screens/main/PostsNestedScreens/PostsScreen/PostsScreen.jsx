import { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useOrientation } from "../../../../hooks/useOrientation";

import { getAllCollection } from "../../../../firebase/helpers";

import { PostData } from "../../../../components/PostData/PostData";
import { UserProfileData } from "../../../../components/UserProfileData/UserProfileData";
import styles from "./PostsScreen.styles";

const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  let orientation = useOrientation();

  useEffect(() => {
    const unsubscribe = getAllCollection("posts", setPosts);

    return () => {
      unsubscribe.then((res) => res()).catch((e) => console.error(e));
    };
  }, []);

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
        renderItem={({ item }) => <PostData item={item} />}
      />
    </View>
  );
};

export default PostsScreen;
