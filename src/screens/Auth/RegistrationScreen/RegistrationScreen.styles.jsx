import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    // justifyContent: "flex-end",
  },
  contentContainer: {
    justifyContent: "flex-end",
  },
  keybordContainer: {
    position: "relative",
    zIndex: 1,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  contentThumb: {
    position: "relative",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  form: {
    flex: 0,
    width: "100%",
  },
  pageHeader: {
    alignSelf: "center",
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },
  linkText: {
    marginTop: 16,
    marginBottom: 45,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
