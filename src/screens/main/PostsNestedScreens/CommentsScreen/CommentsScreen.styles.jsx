import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  postPhoto: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    marginTop: "auto",
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    borderStyle: "solid",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 1,
  },
  btn: {
    position: "absolute",
    top: 8,
    right: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 100,
  },
});
