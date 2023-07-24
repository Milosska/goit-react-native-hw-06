import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 8,
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputThumb: {
    position: "relative",
    width: "100%",
    marginTop: 16,
    marginBottom: 32,
  },
  locationIcon: {
    position: "absolute",
    top: 16,
    left: 8,
  },
});
