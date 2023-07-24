import { View, Text, Image } from "react-native";
import avatarPlaceholder from "../../images/avatarPlaceholder.png";
import { transformDate } from "../../helpers/transformDate";
import styles from "./Comment.styles";

export const Comment = ({ item: { author, message, createdAt } }) => {
  const avatarImg = Image.resolveAssetSource(avatarPlaceholder).uri;
  const commentDate = transformDate(createdAt);

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: author === "Milosska" ? "row-reverse" : "row",
      }}
    >
      <Image
        style={{
          ...styles.avatar,
          marginLeft: author === "Milosska" ? 32 : 0,
          marginRight: author === "Milosska" ? 0 : 32,
        }}
        source={{ uri: avatarImg }}
      />
      <View style={styles.commentThumb}>
        <Text style={styles.commentText}>{message}</Text>
        <Text
          style={{
            ...styles.commentDate,
            textAlign: author === "Milosska" ? "left" : "right",
          }}
        >
          {commentDate}
        </Text>
      </View>
    </View>
  );
};
