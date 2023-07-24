import { useState } from "react";

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

  const onCommentType = (e) => {
    if (!currentComment) {
      setDisabled(false);
    }

    setCurrentComment(e);
  };

  const onSubmit = (e) => {
    const formedComment = {
      author: "Milosska",
      message: currentComment,
      createdAt: new Date(),
    };

    setComments((prevState) => [...prevState, formedComment]);
    setDisabled(true);
    setCurrentComment(null);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.postPhoto} source={{ uri: route.params }} />
      <FlatList
        data={comments}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <Comment item={item} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={currentComment}
          style={styles.input}
          placeholder="Комментировать..."
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
