import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    justifyContent: "flex-end",
  },
  contentThumb: {
    position: "relative",
    flex: 0,
    marginBottom: 0,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
    padding: 0,
  },
  pageHeader: {
    alignSelf: "center",
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
  },
});
