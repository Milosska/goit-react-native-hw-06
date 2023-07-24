import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  photoContainer: {
    position: "absolute",
    zIndex: 10,
    top: "-10%",
    width: 132,
    height: 120,
  },
  imageThumb: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  imagePhoto: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  imageBtn: {
    position: "absolute",
    right: "-15%",
    bottom: "10%",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffffff",
  },
});
