import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  postContainer: {
    marginBottom: 32,
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  postLabel: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  postData: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postComments: {
    flex: 0,
    flexDirection: "row",
  },
  commentsLabel: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  postLocation: {
    flex: 0,
    flexDirection: "row",
  },
  locationLabel: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
