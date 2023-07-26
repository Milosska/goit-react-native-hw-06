import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
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
});
