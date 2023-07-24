import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    marginBottom: 24,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  commentThumb: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  commentText: {
    marginBottom: 8,
  },
  commentDate: {
    color: "#BDBDBD",
    fontSize: 10,
  },
});
