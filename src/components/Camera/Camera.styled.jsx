import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  cameraThumb: {
    flex: 0,
    width: "100%",
    height: 240,
    overflow: "hidden",
    backgroundColor: "#E8E8E8",
    border: "1px solid #E8E8E8",
    borderRadius: 8,
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBnt: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },
  cameraText: {
    marginTop: 8,
    marginBottom: 32,
    alignSelf: "flex-start",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
});
