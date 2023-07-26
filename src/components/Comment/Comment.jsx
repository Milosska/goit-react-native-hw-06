import { View, Text, Image } from "react-native";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

import avatarPlaceholder from "../../images/avatarPlaceholder.png";
import { transformDate } from "../../helpers/transformDate";
import styles from "./Comment.styles";

export const Comment = ({
  item: { userId, createdAt, id, message, photoURL },
}) => {
  const { id: currentUserId } = useSelector(selectUser);

  const avatarImg = photoURL
    ? photoURL
    : Image.resolveAssetSource(avatarPlaceholder).uri;

  const commentDate = transformDate(createdAt.toDate());

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: userId === currentUserId ? "row-reverse" : "row",
      }}
    >
      <Image
        style={{
          ...styles.avatar,
          marginLeft: userId === currentUserId ? 32 : 0,
          marginRight: userId === currentUserId ? 0 : 32,
        }}
        source={{ uri: avatarImg }}
      />
      <View style={styles.commentThumb}>
        <Text style={styles.commentText}>{message}</Text>
        <Text
          style={{
            ...styles.commentDate,
            textAlign: userId === currentUserId ? "left" : "right",
          }}
        >
          {commentDate}
        </Text>
      </View>
    </View>
  );
};
