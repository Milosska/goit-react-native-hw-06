import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  userData: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: "#E8E8E8",
  },
  username: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
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
