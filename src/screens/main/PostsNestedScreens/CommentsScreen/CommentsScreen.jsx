import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/selectors";
import { uploadDataToDB, getAllCollection } from "../../../../firebase/helpers";

import { Comment } from "../../../../components/Comment/Comment";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./CommentsScreen.styles";

const CommentsScreen = ({ route }) => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const { id: userId, photoURL } = useSelector(selectUser);
  const { postPhotoURL, id } = route.params;

  useEffect(() => {
    const unsubscribe = getAllCollection(`posts/${id}/comments`, setComments);

    return () => {
      unsubscribe.then((res) => res()).catch((e) => console.error(e));
    };
  }, []);

  const onCommentType = (e) => {
    if (!currentComment) {
      setDisabled(false);
    }

    setCurrentComment(e);
  };

  const onSubmit = async (e) => {
    const formedComment = {
      userId,
      photoURL,
      message: currentComment,
      createdAt: new Date(),
    };

    await uploadDataToDB(`posts/${id}/comments`, formedComment);
    setDisabled(true);
    setCurrentComment(null);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.postPhoto} source={{ uri: postPhotoURL }} />
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Comment item={item} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={currentComment}
          style={styles.input}
          placeholder="Comment..."
          placeholderTextColor="#BDBDBD"
          onChangeText={onCommentType}
        />
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: disabled ? "#E8E8E8" : "#FF6C00",
          }}
          activeOpacity={0.7}
          onPress={onSubmit}
          disabled={disabled}
        >
          <Feather name="arrow-up" size={34} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
