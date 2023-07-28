import { useState, useEffect } from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import { useOrientation } from "../../../hooks/useOrientation";

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import { getCollectionByQuery } from "../../../firebase/helpers";

import { indicateBgImage } from "../../../helpers/indicateBgImage/indicateBgImage";
import { ImagePickerElem } from "../../../components/ImagePicker/ImagePicker";
import { LogOutIcon } from "../../../components/LogOutIcon/LogOutIcon";
import { PostData } from "../../../components/PostData/PostData";
import styles from "./ProfileScreen.styles";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { displayName, id: currentUserId } = useSelector(selectUser);
  const bgImage = indicateBgImage();
  let orientation = useOrientation();

  useEffect(() => {
    const unsubscribe = getCollectionByQuery(
      "posts",
      currentUserId,
      setUserPosts
    );

    return () => {
      unsubscribe.then((res) => res()).catch((e) => console.error(e));
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={bgImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <View
            style={{
              ...styles.contentThumb,
              height: orientation === "landscape" ? "90%" : "80%",
            }}
          >
            <ImagePickerElem />
            <LogOutIcon customStyle={styles.logOut} />
            <Text style={styles.pageHeader}>{displayName}</Text>
            <FlatList
              style={styles.postList}
              data={userPosts}
              keyExtractor={(_, index) => index}
              renderItem={({ item }) => <PostData item={item} />}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
